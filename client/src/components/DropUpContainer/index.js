import React, { useState } from "react";
import ProjectManager from "../ProjectManager";
import TaskManager from "../TaskManager";
import ProjectContext from "../../utils/ProjectContext";
import "./style.css";

export default function DropUpContainer(props) {
  const [componentState, setComponentState] = useState("projects");
  const [projectId, setProjectId] = useState("");

  const handleProjectOnClick = (projectId) => {
    setComponentState("tasks");
    setProjectId(projectId);
  };
  const handleGoBack = () => {
    setComponentState("projects");
  };
  const displayState = (containerState) => {
    switch (containerState) {
      case "projects":
        return (
          <ProjectContext.Provider value={handleProjectOnClick}>
            <ProjectManager />
          </ProjectContext.Provider>
        );

      case "tasks":
        return (
          <ProjectContext.Provider value={handleGoBack}>
            <TaskManager projectId={projectId} />;
          </ProjectContext.Provider>
        );
    }
  };

  return (
    <div id="footer" style={props.containerStyle.footer}>
      <div
        id="footerbuttondown"
        style={props.containerStyle.footerbuttondown}
        onClick={() => props.shrink()}
      >
        &#9660;
      </div>
      <div
        id="footerbuttonup"
        style={props.containerStyle.footerbuttonup}
        onClick={() => props.expand()}
      >
        &#9650;
      </div>
      <div id="footercont" style={props.containerStyle.footercont}>
        {displayState(componentState)}
      </div>
    </div>
  );
}
