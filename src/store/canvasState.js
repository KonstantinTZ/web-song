import { makeAutoObservable } from "mobx";

class CanvasState {
    canvas = null
    constructor() {
        makeAutoObservable(this)
    }

    setCanvas(canvas) {
        this.tool = canvas
    }
}

export default new CanvasState();