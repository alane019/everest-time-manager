import React, { useState, useLayoutEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import ProjectListItem from "../ProjectListItem";
import AddProjectForm from "../AddProjectForm";
function ProjectManager(props) {
  const [projects, setProjects] = useState([]);
  const [projectNumber, setProjectNumber] = useState(0);
  const [status, setStatus] = useState("");

  useLayoutEffect(() => {
    getProjects();
  }, []);

  function deleteProject(id) {
    API.updateProject({ disable: true }, id)
      .then((res) => {
        getProjects();
      })
      .catch((error) => {
        setStatus("no-data");
        console.log(error);
      });
  }
  function generateColorByIndex(i) {
    const colorList = [
      '#cc5de8', // Grape 5
      '#845ef7', // Violet 5
      '#5c7cfa', // Indigo 5
      '#339af0', // Blue 5
      '#22b8cf', // Cyan 5
      '#20c997', // Teal 5
      '#51cf66', // Green 5
      '#94d82d', // Lime 5
      '#fcc419', // Yellow 5
      '#ff922b', // Orange 5
      '#ff6b6b', // Red 5
      '#f06595', // Pink 5
    ];
    return colorList[i];
  }
  // form submit handler
  function handleSubmit(inputText) {
    if (inputText.length === 0) {
      return;
    }
    const newProjectData = {
      color: generateColorByIndex(projectNumber + 1),
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
        setProjectNumber(res.data.length);
        setProjects(res.data);
        setStatus("projects");
      })
      .catch((error) => {
        setStatus("no-data");
        console.log(error);
      });
  }
  const saveProjectName = (val, projectId) => {
    API.updateProject({ name: val }, projectId)
      .then(() => {
        getProjects();
      })
      .catch((e) => console.log(e));
  };
  //
  function displayProjects() {
    if (status === "projects") {
      return projects.map((project) =>
        !project.disable ? (
          <ProjectListItem
            saveProjectName={saveProjectName}
            deleteProject={() => deleteProject(project._id)}
            key={project._id}
            projectId={project._id}
            name={project.name}
            color={project.color}
          />
        ) : (
          <></>
        )
      );
    } else if (status === "no-data") {
      return (
        <div style={{ textAlign: "center", color: "white", marginTop: "20vh" }}>
          <em>
            <h3>
              {" "}
              Nice Job! You are in the <strong>Projects Manager</strong>.
            </h3>
            <h3>
              <strong style={{ color: "tomato" }}>Create a project</strong>{" "}
              bellow; then,{" "}
              <strong style={{ color: "tomato" }}>push on it</strong>!
            </h3>
          </em>
        </div>
      );
    }
  }
  return (
    <div className="container-fluid">
      <h3 style={{ textAlign: "center", padding: "10px", color: "white" }}>
        All Projects
      </h3>
      <div
        id="project-list-container"
        style={{
          paddingLeft: "0px",
          height: "65vh",
          overflow: "auto",
        }}
      >
        {displayProjects()}
      </div>
      <AddProjectForm addProject={handleSubmit} projectId={props.projectId} />
    </div>
  );
}

export default ProjectManager;
