import { AudioProcessor } from "./AudioProcessor.js";
import { Renderer } from "./Renderer.js";
import { pitchToMidiNote } from "./PitchDetectionResult.js";
import { getNoteByValue } from "./Notes.js";

import State from "./States.js";


export class Processor {
    // components
    #renderer;
    #audioProcessor;
    #testFreq = 20;

    // data
    #melody
    #currentNote; // currentNoteOfMelody;
    #tempo

    constructor(renderer) {
        if (!renderer) throw "No renderer!"; // || renderer != instanceof(Renderer))
            //if (!renderer instanceof(Renderer))
        this.#renderer = renderer;
        // ToDo: get pitch here and transform it
        this.#audioProcessor = new AudioProcessor((pitch) => this.#onPitchReady(pitch));
    }

    async start(state) {
        if (state == State.LISTENING) {

            // loadMelody generally
            // take tempo
            // pass the melody to the renderer 

            await this.#audioProcessor.startListen();
            setInterval(() => this.#renderer.updateAnimation(), 100);
        }
    }

    #listeningRoutine()
    {
        // increase time

        // melody should have 

    }

    #onPitchReady(pitch)
    {
        if (!pitch) throw "received no pitch!";

        if (pitch.pitch == -1 || !pitch.pitched) return;

        let midiPitch = pitchToMidiNote(pitch.pitch);
        //let midiPitch = pitchToMidiNote(this.#testFreq);

        // console.log(`note: ${getNoteByValue(midiPitch.note)} frequency: ${pitch.pitch} midiNote: ${midiPitch.note} midiCents: ${midiPitch.cents}`);
        
        //this.#testFreq++;

        this.#renderer.addNote(
            { 
                midiNote: midiPitch.note,
                midiCents:midiPitch.cents,
                pitch: pitch.pitch});
        // comparison with current note;

    }
}