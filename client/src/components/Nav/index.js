import React from "react";
import Main from "../Main";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <ul className="header">
        <li>
          <NavLink to="/Home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Chart">Charts</NavLink>
        </li>
        <li>
          <NavLink to="/Calendar">Calendar</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
