import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "@material-ui/core";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const useStyles = makeStyles((theme) => ({
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: "5px",
    paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

export default function AddForm(props) {
  const [inputText, setInputText] = useState("");
  const classes = useStyles();
  console.log(inputText);

  return (
    <AppBar position="static" style={{ borderRadius: "15px" }}>
      <Toolbar>
        <InputBase
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Create Task ..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />

        <ListItemSecondaryAction>
          <IconButton style={{ color: "white" }}>
            <AddIcon
              onClick={() => {
                if (inputText === "") {
                  return;
                }
                props.addTask(props.projectId, inputText);
                setInputText("");
              }}
            />
          </IconButton>
        </ListItemSecondaryAction>
      </Toolbar>
    </AppBar>
  );
}
