import React from "react";
import { NavLink } from "react-router-dom";

function NavigationPanel(props) {
  return (
    <div className="container">
      <ul className="nav nav-tabs pt-2">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Домой
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/course-list">
            Выбор курса
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/game/99">
            Free Ride
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavigationPanel;
