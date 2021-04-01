import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

export default function AddProjectForm(props) {
  const [inputText, setInputText] = useState("");
  const [inputPlaceholder, setInputPlaceholder] = useState(
    "Create Project ..."
  );

  return (
    <AppBar position="static" style={{ borderRadius: "15px" }}>
      <Toolbar>
        <InputBase
          onChange={(e) => setInputText(e.target.value)}
          placeholder={inputPlaceholder}
          inputProps={{ "aria-label": "search" }}
          style={{ color: "white" }}
        />

        <ListItemSecondaryAction>
          <IconButton
            style={{ color: "white" }}
            onClick={(e) => {
              setInputPlaceholder("Create Project ...");
              props.addProject(inputText);
            }}
          >
            <AddIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </Toolbar>
    </AppBar>
  );
}
