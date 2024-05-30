import React from "react";
import cardImg from "../img/no-image-plug-en.png";
import { useNavigate } from "react-router-dom";

function CourseItem({ cardName, itemID, cardDescr }) {
  const router = useNavigate();
  return (
    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12  mb-3">
      <div className="card h-100">
        <img src={cardImg} className="card-img-top" alt="descr" />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{cardName}</h5>
          <p className="card-text">{cardDescr}</p>
          <button
            className="btn btn-primary"
            onClick={() => router(`/song-list/${itemID}`)}
          >
            Choose this course
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseItem;
