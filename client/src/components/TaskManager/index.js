import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import TaskListItem from "../TaskListItem";
import ProjectContext from "../../utils/ProjectContext";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import HomeContext from "../../utils/HomeContext";

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
        console.log(res.data);
        setTasks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const addTask = (projectId, name, color) => {
    API.addTask({ projectId, name, color })
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

      <ul style={style.ul}>
        {tasks.map((task) => (
          <TaskListItem
            key={task._id}
            taskId={task._id}
            projectId={props.projectId}
            name={task.name}
          />
        ))}
      </ul>
      <form style={style.form} onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="new-task">Add a new TASK to your list.</label>
        <input
          id="new-task"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
        <button
          className=""
          onClick={() => addTask(props.projectId, inputText, "gray")}
        >
          Add TASK {items.length + 1}
        </button>
      </form>
    </div>
  );
}

export default TaskManager;
