import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import TaskListItem from "../TaskListItem";
import ProjectContext from "../../utils/ProjectContext";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import HomeContext from "../../utils/HomeContext";
import AddTaskForm from "../AddTaskForm";

function TaskManager(props) {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");
  const handleGoBack = useContext(ProjectContext);
  const [tasks, setTasks] = useState([]);
  const { containerStyle } = useContext(HomeContext);
  useEffect(() => getTasks(props.projectId), [props.projectId]);

  const style = {
    form: {},
    ul: {
      overflow: "auto",
      paddingLeft: "0px",
      height: "55vh",
    },
    h3: {
      textAlign: "center",
    },
  };
  function deleteTask(taskId, projectId) {
    API.deleteTask(taskId)
      .then(() => {
        getTasks(projectId);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
          color: "#042046",
        }}
      />
      <h3 style={{ textAlign: "center", padding: "10px", color: "black" }}>
        Project Task
      </h3>
      <ul style={style.ul}>
        {tasks.map((task) => (
          <TaskListItem
            deleteTask={() => deleteTask(task._id, props.projectId)}
            key={task._id}
            taskId={task._id}
            color={task.project.color}
            projectId={props.projectId}
            name={task.name}
          />
        ))}
      </ul>
      <AddTaskForm addTask={addTask} projectId={props.projectId} />
    </div>
  );
}

export default TaskManager;
