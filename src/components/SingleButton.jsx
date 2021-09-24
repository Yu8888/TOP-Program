import React from "react";
import { NavLink } from "react-router-dom";
import "../style.css";
export default function SingleButton({ buttonText, routeLink }) {
  return (
    <NavLink className="button" to={`/${routeLink}`}>
      {buttonText}
    </NavLink>
  );
}
