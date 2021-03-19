import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import API from "../../utils/API";
import ProjectListItem from "../ProjectListItem";

function ProjectManager(props) {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (inputText.length === 0) {
      return;
    }
    const newItem = {
      text:
        inputText +
        " . . .   (" +
        new Intl.DateTimeFormat("en-US", {
          dateStyle: "short",
          timeStyle: "short",
        }).format() +
        ")",
      id: Date.now(),
    };
    setItems([...items, newItem]);
    setInputText("");
  }

  return (
    <div className="container-fluid">
      <h3>Manage Projects</h3>
      <ul className="projectManagerUl">
        <ProjectListItem items={items} />
      </ul>
      <form onSubmit={(e) => handleSubmit(e)}>
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
