import React from "react";
import Canvas from "../Canvas";

function GameWindow(props) {
  return (
    <div className="d-flex flex-column">
      <div className="btn-group mb-3">
        <button type="button" className="btn btn-danger">
          Слушать
        </button>
        <button type="button" className="btn btn-warning">
          Петь
        </button>
        <button type="button" className="btn btn-success">
          Повторить фрагмент
        </button>
      </div>
      <Canvas />
    </div>
  );
}

export default GameWindow;
