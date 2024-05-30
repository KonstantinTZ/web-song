import { observer } from "mobx-react-lite";
import { React, useRef, useEffect } from "react";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import { Renderer } from "./GameWindow/Renderer";
import { Processor } from "./GameWindow/Processor";
import { Grid } from "./GameWindow/Grid";
import State from "./GameWindow/States";

const Canvas = observer((props) => {
  const canvasRef = useRef();
  useEffect(() => {
    // canvasState.setCanvas(canvasRef.current);
    // toolState.setTool(new Brush(canvasRef.current));
    var renderer = new Renderer(canvasRef.current);
    renderer.updateAnimation();
    // var processor = new Processor(renderer);
    // processor.start(State.LISTENING);
    // let grid = new Grid(canvasRef.current, 40, 69);
  }, []);
  return (
    <div
      className="canvas"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        style={{ border: "1px solid black" }}
      ></canvas>
    </div>
  );
});

export default Canvas;
