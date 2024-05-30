import { Detector } from "./Detector.js";

export class AudioProcessor {

    #audioStream;
    #audioContext;
    #sourceNode;
    #sampleRate;
    #bufferSize = 2048;
    #processorNode;
    #detector;
    #initialized = false;
    #onPitchDetected;

    constructor(onPitchDetected) {
        this.#onPitchDetected = onPitchDetected;

        //_detector = new Detector(sampleRate, this.bufferSize);
    }

    #initializeAudio = async function () {
        if (!this.#audioContext) {
            var AudioContextFunc = window.AudioContext || window.webkit_AudioContext;
            this.#audioContext = new AudioContextFunc();
            console.log("#MyLog || _audioContext initialized");
        } else {
            console.log("#MyLog || _audioContext already initialized");
        }

        this.#audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        this.#sourceNode = this.#audioContext.createMediaStreamSource(this.#audioStream);
        this.#sampleRate = this.#audioContext.sampleRate;

        console.log(`_audioContextState :  ${this.#audioContext.state}`);  // Should be true
        if (this.#audioContext.state === 'suspended') {
            this.#audioContext.resume();
        }

        this.#initialized = true;

        return {
            sampleRate: this.#sampleRate
        };
    };

    async startListen() {
        if (!this.#initialized) {
            await this.#initializeAudio();
            await this.#initializeAudioCapture();
            await this.#setupProcessing();
        }
        await this.#resumeAudioListening();
    }

    #initializeAudioCapture = async function () {
        try {
            await this.#audioContext.resume(); // Ensure the audio context is resumed
            this.#audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.#sourceNode = this.#audioContext.createMediaStreamSource(this.#audioStream);
            this.#sampleRate = this.#audioContext.sampleRate;

            const track = this.#audioStream.getTracks()[0];
            console.log(track.enabled);  // Should be true

            return {
                sampleRate: this.#sampleRate
            };
        } catch (e) {
            console.error("Error:", e);
            return 0;
        }
    };

    #setupProcessing = function () {
        this.#processorNode = this.#audioContext.createScriptProcessor(this.#bufferSize, 1, 1);

        if (this.#audioContext.state === 'suspended') {
            this.#audioContext.resume();
        }
        this.#sampleRate = this.#audioContext.sampleRate;

        this.#detector = new Detector(this.#sampleRate, this.#bufferSize);
    };

    #resumeAudioListening = function () {
        if (this.#processorNode && this.#sourceNode) {
            this.#sourceNode.connect(this.#processorNode);
            this.#processorNode.connect(this.#audioContext.destination);
            console.log("#MyLog || Audio processing resumed");

            this.#processorNode.onaudioprocess = (event) => {
                let inputData = event.inputBuffer.getChannelData(0);

                if (!this.#detector) {
                    throw ("Detector not set!");
                }

                this.#detector.GetPitch(inputData, this.#onPitchDetected);
            }
        };
    }


    #stopAudioCapture = function () {
        if (this.#processorNode) {
            this.#processorNode.onaudioprocess = null; // Remove the processing event listener
            this.#processorNode.disconnect(); // Disconnect the processor node
            console.log("#MyLog || Processor node disconnected and event listener removed");
        }

        if (this.#sourceNode) {
            this.#sourceNode.disconnect(); // Disconnect the source node
            console.log("#MyLog || Source node disconnected");
        }

        if (this.#audioStream) {
            const tracks = this.#audioStream.getTracks();
            tracks.forEach(track => track.stop()); // Stop all tracks in the audio stream
            console.log("#MyLog || Audio stream tracks stopped");
        }
    };

    #pauseAudioListening = function () {
        if (this.#processorNode) {
            this.#processorNode.onaudioprocess = null; // Remove the processing event listener
            this.#processorNode.disconnect(); // Disconnect the processor node
            console.log("#MyLog || AudioCapturing Paused || Processor node disconnected and event listener removed");
        }

        if (this.#sourceNode) {
            this.#sourceNode.disconnect(); // Disconnect the source node
            console.log("#MyLog ||  AudioCapturing Paused || Source node disconnected");
        }
        // We don't stop the tracks; we just pause the processing.
    }
}