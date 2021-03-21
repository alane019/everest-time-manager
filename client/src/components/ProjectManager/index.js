import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import API from "../../utils/API";
import ProjectListItem from "../ProjectListItem";

function ProjectManager(props) {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");

  const style = {
    form: {},
    ul: {
      overflow: "auto",
    },
    h3: {
      textAlign: "center",
    },
  };

  // form submit handler
  function handleSubmit(e) {
    e.preventDefault();
    if (inputText.length === 0) {
      return;
    }
    const newProjectData = {
      color: "green",
      name: inputText,
    };
    API.addProject(newProjectData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }
  function displayProjects() {
    API.getProjects()
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }

  //
  return (
    <div className="container-fluid">
      <ul style={style.ul} className="projectManagerUl">
        <ProjectListItem items={items} />
      </ul>
      <form style={style.form} onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="new-project">Add a new project to your list.</label>
        <input
          id="new-project"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
        <button className="">Add Project {items.length + 1}</button>
      </form>
    </div>
  );
}

export default ProjectManager;
