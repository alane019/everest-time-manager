import React, { useContext } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Grid from "@material-ui/core/Grid";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Timer from "../Timer";
import HomeContext from "../../utils/HomeContext";

export default function ActiveTask(props) {
  const { activeTaskData } = useContext(HomeContext);

  return (
    <Grid
      key={props.key}
      container
      spacing={2}
      style={{
        background: "#ffffff",
        padding: "0px",
        position: "absolute",
        top: "8vh",
        left: "0px",
        zIndex: "2",
        height: "8vh",
        boxShadow: "gray 0px 0px 2px 2px",
      }}
    >
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> refs/remotes/origin/main
      <Grid
        id="active-task"
        item
        xs={12}
        style={{ margin: "0ps", padding: "0px" }}
      >
        <List style={{ margin: "0ps", padding: "0px" }}>
          <ListItem>
<<<<<<< HEAD
=======
      <Grid id="active-task" item xs={12}>
        <List style={{paddingTop: "0px"}}>
          <ListItem style={{paddingTop: "0px"}}>
>>>>>>> upstream/main
=======
>>>>>>> refs/remotes/origin/main
            <FiberManualRecordIcon
              style={{
                fontSize: "40px",
                color: activeTaskData.project.color,
              }}
            />
            <h3>{activeTaskData.task.name}</h3>
            <ListItemSecondaryAction
              className="active-timer-div"
              style={{ margin: "0ps", padding: "0px" }}
            >
              <Timer
                style={{ margin: "0ps", padding: "0px" }}
                className="active-timer"
                style={{
                  boxShadow: "#80808029 0px 0px 3px 2px;",
                  margin: "0px",
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
