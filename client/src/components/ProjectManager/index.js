import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import ProjectListItem from "../ProjectListItem";
import AddProjectForm from "../AddProjectForm";
function ProjectManager(props) {
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
  function handleSubmit(inputText) {
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
  const saveProjectName = (val, projectId) => {
    console.log("Edited Value -> ", val);
    API.updateProject({ name: val }, projectId)
      .then(() => {
        getProjects();
        console.log("saved");
      })
      .catch((e) => console.log(e));
  };
  //
  return (
    <div className="container-fluid">
      <h3 style={{ textAlign: "center", padding: "10px", color: "white" }}>
        All Projects
      </h3>
      <div
        style={{
          overflow: "auto",
          paddingLeft: "0px",
          height: "60vh",
        }}
      >
        {projects.map((project) => (
          <ProjectListItem
            saveProjectName={saveProjectName}
            deleteProject={() => deleteProject(project._id)}
            key={project._id}
            projectId={project._id}
            name={project.name}
            color={project.color}
          />
        ))}
      </div>
      <AddProjectForm addProject={handleSubmit} projectId={props.projectId} />
    </div>
  );
}

export default ProjectManager;
