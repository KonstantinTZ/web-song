import {YinPitchDetector} from "./Yin.js"

export class Detector {

    #yin;
    #treshold = 0.8;

    constructor(sampleRate, bufferSize) {
        this.#yin = new YinPitchDetector(sampleRate, bufferSize);        
    }

    GetPitch(samples, func) {
        if (!this.#yin) throw "No yin initialized!"        
        const pitchResult = this.#yin.getPitch(samples);
        if (pitchResult.probability > this.#treshold )
        {
       // console.log(`pitch in detector: ${pitchResult.pitch} || probability: ${pitchResult.probability}`);
            func(pitchResult);
        }
        //return pitchResult;
    }
    
}

// there is also realization with worker, but i'll make it later. 


        // Initialize the detector inside the worker
        // audioWorker.postMessage({
        //         action: 'init',
        //         sampleRate: sampleRate,
        //         _bufferSize: _bufferSize
        //     });

        


    // audioWorker.onmessage = function(e) {
    //     const pitchResult = e.data;
    //     dotnetHelper.invokeMethodAsync('ReceivePitch', pitchResult);
    // }