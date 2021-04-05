import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import ProjectListItem from "../ProjectListItem";
import AddProjectForm from "../AddProjectForm";
function ProjectManager(props) {
  const [projects, setProjects] = useState([]);
  const [projectNumber, setProjectNumber] = useState(0);

  useEffect(() => {
    getProjects();
  }, []);

  function deleteProject(id) {
    API.updateProject({ disable: true }, id)
      .then((res) => {
        getProjects();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function generateColorByIndex(i) {
    const colorList = [
      "chocolate",
      "indianRed",
      "plum",
      "cornflowerBlue",
      "chocolate",
      "indianRed",
      "plum",
      "cornflowerBlue",
      "chocolate",
      "indianRed",
      "plum",
      "cornflowerBlue",
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
      })
      .catch((error) => console.log(error));
  }
  const saveProjectName = (val, projectId) => {
    API.updateProject({ name: val }, projectId)
      .then(() => {
        getProjects();
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
        id="project-list-container" 
        style={{
          paddingLeft: "0px",
          height: "65vh",
          overflow: "auto"
        }}
      >
        {projects.map((project) =>
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
        )}
      </div>
      <AddProjectForm addProject={handleSubmit} projectId={props.projectId} />
    </div>
  );
}

export default ProjectManager;
