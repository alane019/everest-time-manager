import React, { useState } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Chart from "../Chart";
import Calendar from "../Calendar";
import Nav from "./Nav";
import "./index.css";

export default function Main() {
  const style = {
    content: {
      height: "100vh",
      background: "none",
      padding: "0",
      width: "100%",
    },
    container: {
      margin: "0px",
      width: "100%",
    },
  };
  return (
    <HashRouter>
      <div>
        <Nav />
        <div style={style.content} className="content">
          <Route path="/Home" component={Home} />
          <Route path="/Chart" component={Chart} />
          <Route path="/Calendar" component={Calendar} />
        </div>
      </div>
    </HashRouter>
  );
}
