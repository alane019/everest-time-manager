import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Grid from "@material-ui/core/Grid";
import StartStop from "../StartStop";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import EditTaskCard from "../EditTaskCard";
import ConfirmDeleting from "../ConfirmDeleting";

const useStyles = makeStyles(() => ({}));

export default function TaskListItem(props) {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div className={classes.demo}>
          <List
            style={{
              background: `linear-gradient(to right, ${props.color}  , white)`,
              borderRadius: "15px",
            }}
          >
            <ListItem>
              <h3 style={{ color: "black" }}>{props.name}</h3>
              <ListItemSecondaryAction>
                <Box display="flex" flexDirection="row">
                  <Box style={{ color: "black"}}>
                    <IconButton  style={{ margin: "0px 3px"}}>
                      <StartStop
                        taskId={props.taskId}
                        projectId={props.projectId}
                      />
                    </IconButton>
                  </Box>
                  <Box>
                    <IconButton  style={{ margin: "0px 3px"}}>
                      <EditTaskCard
                        saveTaskName={props.saveTaskName}
                        taskId={props.taskId}
                        projectId={props.projectId}
                        name={props.name}
                      />
                    </IconButton>
                    <IconButton  style={{ margin: "0px 3px"}}>
                      <ConfirmDeleting
                        name={props.name}
                        deleteItem={props.deleteTask}
                      />
                    </IconButton>
                  </Box>
                </Box>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </div>
      </Grid>
    </Grid>
  );
}
