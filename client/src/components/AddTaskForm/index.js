import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

export default function AddForm(props) {
  const [inputText, setInputText] = useState("");
  const [inputPlaceholder, setInputPlaceholder] = useState("Create Task ...");

  return (
    <AppBar
      position="static"
      style={{
        borderRadius: "15px",
        marginTop: "7px",
        border: "3px solid rgba(255,255,255, 0.3)",
        background:
          "linear-gradient(to right, rgba(40, 57, 101, 0.9) 0%, rgb(104, 166, 202) 100%)",
      }}
    >
      <Toolbar>
        <InputBase
          autoComplete
          onChange={(e) => setInputText(e.target.value)}
          placeholder={inputPlaceholder}
          inputProps={{ "aria-label": "search" }}
          style={{ color: "white" }}
          onKeyPress
        />

        <ListItemSecondaryAction>
          <IconButton
            onClick={(e) => {
              setInputPlaceholder("Add Task to Project ...");
              props.addTask(props.projectId, inputText);
            }}
          >
            <AddIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </Toolbar>
    </AppBar>
  );
}
