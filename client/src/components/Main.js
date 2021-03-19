import React, { useState } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import ProjectManager from "./ProjectManager";
import Chart from "../Chart";
import Calendar from "../Calendar";
import "./index.css";

 
export default function Main() {
    const [container] = useState("container");
    return (
      <HashRouter>
          
        <div className={container} id="container">
          <h1>Productivity App</h1>
            <ul className="header">
              <li><NavLink to="/ProjectManager">Home</NavLink></li>
              <li><NavLink to="/Chart">Charts</NavLink></li>
              <li><NavLink to="/Calendar">Calendar</NavLink></li>
            </ul>
          <div className="content">
            <Route path="/ProjectManager" component={ProjectManager}/>
            <Route path="/Chart" component={Chart}/>
            <Route path="/Calendar" component={Calendar}/>
          </div>
        </div>
      </HashRouter>
    );
  }
