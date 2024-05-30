import React from "react";
import { useParams } from "react-router-dom";
import GameWindow from "../../components/GameWindow/GameWindow";

function GamePage(props) {
  const params = useParams();
  return (
    <div className="container">
      <h1>Игровая Страница </h1>
      <h4>id песни: {params.id}</h4>
      <GameWindow />
    </div>
  );
}

export default GamePage;
