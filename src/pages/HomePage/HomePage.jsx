import React from "react";
import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div className="container">
      <h1>Для сего нужен проект WebSong ?</h1>
      <p>Мы помогаем начинающим вокалистам ...</p>
      <p>
        Вы можете подробнее ознакомится со всеми программами на{" "}
        <Link to="/course-list">странице с курсами</Link>
      </p>
    </div>
  );
}

export default HomePage;
