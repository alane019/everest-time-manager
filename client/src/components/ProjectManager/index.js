import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import ProjectListItem from "../ProjectListItem";

function ProjectManager(props) {
  const [items] = useState([]);
  const [inputText, setInputText] = useState("");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  const style = {
    form: {},
    ul: {
      overflow: "auto",
    },
    h3: {
      textAlign: "center",
    },
  };

  function deleteProject(id) {
    API.deleteProject(id)
      .then((res) => {
        getProjects();
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
        getProjects();
      })
      .catch((error) => console.log(error));
  }
  function getProjects() {
    API.getProjects()
      .then((res) => {
        setProjects(res.data);
      })
      .catch((error) => console.log(error));
  }

  //
  return (
    <div className="container-fluid">
      <div style={style.ul} className="projectManagerUl">
        {projects.map((project) => (
          <ProjectListItem
            deleteProject={deleteProject}
            key={project._id}
            projectId={project._id}
            name={project.name}
            color={project.color}
          />
        ))}
      </div>
      <form style={style.form} onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="new-project">Add a new project to your list.</label>
        <input
          id="new-project"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
        <button className="">Add Project</button>
      </form>
    </div>
  );
}

export default ProjectManager;
