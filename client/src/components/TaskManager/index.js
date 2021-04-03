import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import TaskListItem from "../TaskListItem";
import ProjectContext from "../../utils/ProjectContext";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import HomeContext from "../../utils/HomeContext";
import AddTaskForm from "../AddTaskForm";

function TaskManager(props) {
  const handleGoBack = useContext(ProjectContext);
  const [tasks, setTasks] = useState([]);
  const { containerStyle } = useContext(HomeContext);
  useEffect(() => getTasks(props.projectId), [props.projectId]);

  const style = {
    form: {},
    ul: {
      overflow: "auto",
      paddingLeft: "0px",
      height: "62vh",
    },
    h3: {
      textAlign: "center",
    },
  };
  function deleteTask(taskId, projectId) {
    API.updateTask({ disable: true }, taskId)
      .then((res) => {
        getTasks(projectId);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const saveTaskName = (val, projectId, taskId) => {
    API.updateTask({ name: val }, taskId)
      .then(() => {
        getTasks(projectId);
      })
      .catch((e) => console.log(e));
  };

  const getTasks = (projectId) => {
    API.getTasksByProject(projectId)
      .then((res) => {
        setTasks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const addTask = (projectId, name) => {
    if (name.length === 0) {
      return;
    }
    API.addTask({ projectId, name })
      .then(getTasks(projectId))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container-fluid">
      <ArrowBackIcon
        onClick={() => handleGoBack()}
        style={{
          position: "absolute",
          bottom: containerStyle.goBackIconHeight,
          color: "white",
        }}
      />
      <h3 style={{ textAlign: "center", padding: "10px", color: "white" }}>
        Project Tasks
      </h3>
      <div style={style.ul}>
        {tasks.map((task) =>
          !task.disable ? (
            <TaskListItem
              saveTaskName={saveTaskName}
              deleteTask={() => deleteTask(task._id, props.projectId)}
              key={task._id}
              taskId={task._id}
              color={task.project.color}
              projectId={props.projectId}
              name={task.name}
            />
          ) : (
            <></>
          )
        )}
      </div>
      <AddTaskForm addTask={addTask} projectId={props.projectId} />
    </div>
  );
}

export default TaskManager;
