import { AudioProcessor } from "./AudioProcessor.js";
import { Renderer } from "./Renderer.js";
import { PitchDetectionResult } from "./PitchDetectionResult.js";
import { Processor } from "./Processor.js";
import State from "./States.js";

const canvas = document.getElementById("canvas");
var renderer = new Renderer(canvas);

//var audioProcessor = new AudioProcessor((pitch) => renderer.addPitch(pitch));


var processor = new Processor(renderer);

let button = document.getElementById("btn");

if (!button) throw ("No button!");

button.onclick = async () => {
    await processor.start(State.LISTENING);
    // await audioProcessor.startListen();
    // setInterval(() => renderer.updateAnimation(), 100);
};



