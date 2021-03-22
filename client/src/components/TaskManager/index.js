import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import API from "../../utils/API";
import TaskListItem from "../TaskListItem";
import ProjectContext from "../../utils/ProjectContext";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function TaskManager(props) {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");
  const handleGoBack = useContext(ProjectContext);
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

  //
  return (
    <div className="container-fluid">
      <ArrowBackIcon
        onClick={() => handleGoBack()}
        style={{
          position: "absolute",
          bottom: "88vh",
          color: "#042046",
        }}
      />

      <ul style={style.ul}>
        <TaskListItem items={items} />
      </ul>
      <form style={style.form} onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="new-task">Add a new TASK to your list.</label>
        <input
          id="new-task"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
        <button className="">Add TASK {items.length + 1}</button>
      </form>
    </div>
  );
}

export default TaskManager;
