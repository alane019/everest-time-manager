import { set } from "mongoose";
import React, { useState, useContext } from "react";
import ProjectManager from "../ProjectManager";
import TaskManager from "../TaskManager";
import ProjectContext from "../../utils/ProjectContext";
import API from "../../utils/API";
import "./style.css";

export default function DropUpContainer(props) {
  const [componentState, setComponentState] = useState({ name: "projects" });
  const [tasks, setTasks] = useState([]);

  const handleProjectOnClick = (projectId) => {
    setComponentState({
      name: "tasks",
      projectId: projectId,
    });
  };
  const handleGoBack = () => {
    setComponentState({ name: "projects" });
  };
  const [footer, setFooter] = useState({
    height: "30px",
  });
  const [footerbuttondown, setFooterbuttondown] = useState({
    visibility: "hidden",
  });
  const [footerbuttonup, setFooterbuttonup] = useState({
    visibility: "visible",
  });
  const [footercont, setFootercont] = useState({
    opacity: "0",
    visibility: "hidden",
  });

  const style = {
    footer: footer,
    footerbuttondown: footerbuttondown,
    footerbuttonup: footerbuttonup,
    footercont: footercont,
  };

  const shrink = () => {
    setFooter({
      height: "30px",
    });
    setFooterbuttondown({
      visibility: "hidden",
    });
    setFooterbuttonup({
      visibility: "visible",
    });
    setFootercont({
      opacity: "0",
      visibility: "hidden",
    });
  };
  const expand = () => {
    setFooter({
      height: "94vh",
    });
    setFooterbuttondown({
      visibility: "visible",
    });
    setFooterbuttonup({
      visibility: "hidden",
    });
    setFootercont({
      opacity: "1",
      visibility: "visible",
    });
  };
  const getTasks = (projectId) => {
    API.getTasksByProject(projectId)
      .then((res) => {
        console.log(res.data);
        setTasks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const displayTasksByProject = (projectId) => {
    tasks.map((task) => (
      <ProjectContext.Provider value={handleProjectOnClick}>
        <ProjectManager key={task._id} name={task.name} />;
      </ProjectContext.Provider>
    ));
  };
  const displayState = (containerState) => {
    switch (containerState.name) {
      case "projects":
        return (
          <ProjectContext.Provider value={handleProjectOnClick}>
            <ProjectManager />;
          </ProjectContext.Provider>
        );

      case "tasks":
        return (
          <ProjectContext.Provider value={handleGoBack}>
            <TaskManager />;
          </ProjectContext.Provider>
        );
    }
  };

  return (
    <div id="footer" style={style.footer}>
      <div
        id="footerbuttondown"
        style={style.footerbuttondown}
        onClick={() => shrink()}
      >
        &#9660;
      </div>
      <div
        id="footerbuttonup"
        style={style.footerbuttonup}
        onClick={() => expand()}
      >
        &#9650;
      </div>
      <div id="footercont" style={style.footercont}>
        {displayState(componentState)}
      </div>
    </div>
  );
}
