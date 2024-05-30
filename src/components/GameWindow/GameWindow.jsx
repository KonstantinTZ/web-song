import React, { useRef, useEffect } from "react";

function GameWindow(props) {
  const canvasRef = useRef(null);
  const draw = (context) => {
    //Our first draw
    context.fillStyle = "grey";
    context.fillRect(10, 10, 100, 100);
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    draw(context);
  }, []);

  return (
    <div className="d-flex flex-column">
      <canvas
        ref={canvasRef}
        id="canvas"
        width={800}
        height={600}
        style={{ border: "1px solid #000000" }}
      />
      <button id="btn" className="btn btn-primary mt-2">
        Listen
      </button>
    </div>
  );
}

export default GameWindow;
