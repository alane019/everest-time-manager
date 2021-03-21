import React from "react";
import Login from "./components/LogIn";
import DropUpContainer from "./components/DropUpContainer";
import ProjectManager from "./components/ProjectManager";
import TaskManager from "./components/TaskManager";
import ProjectListItem from "./components/ProjectListItem";
import Main from "./components/Main";
function App() {
  // if (localStorage.getItem("token")) {
  //   return <Main></Main>;
  // }
  return <Login />;
}

export default App;
