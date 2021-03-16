import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ProjectManager from "./components/ProjectManager";

//Uncomment the line below be load the App.js. Authentication needs to be set up to use this, or App.js can be modified.
ReactDOM.render(<App />, document.getElementById("root"));

//Uncomment the line below to load the 'project manager' component directly. This will bypass App.js, and load the project to-do list.
//ReactDOM.render(<ProjectManager />, document.getElementById("root"));
