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
      height: "50vh",
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
