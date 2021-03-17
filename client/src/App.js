import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import NoMatch from "./pages/NoMatch";
import Main from "./pages/Main";
import Nav from "./components/Nav";
import ProjectManager from "./components/ProjectManager";

function App() {
  return <LogIn />;
}

export default App;
