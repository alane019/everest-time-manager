import React, { useContext, useEffect, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Grid from "@material-ui/core/Grid";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Timer from "../Timer";
import HomeContext from "../../utils/HomeContext";
import API from "../../utils/API";

export default function ActiveTask(props) {
  const { activeTaskData } = useContext(HomeContext);

  return (
    <Grid
      key={props.key}
      container
      spacing={2}
      style={{
        background: "#c9d1c8de",
        padding: "0px",
        position: "absolute",
        top: "7vh",
        left: "0px",
      }}
    >
      <Grid item xs={12}>
        <List>
          <ListItem>
            <FiberManualRecordIcon
              style={{
                fontSize: "40px",
                color: activeTaskData.project.color,
              }}
            />
            <h3>{activeTaskData.task.name}</h3>
            <ListItemSecondaryAction>
              <Timer />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
