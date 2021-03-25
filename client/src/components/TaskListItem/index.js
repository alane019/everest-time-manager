import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Grid from "@material-ui/core/Grid";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ThreeDotMenu from "../ThreeDotMenu";
import Timer from "../Timer";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() => ({}));

export default function TaskListItem(props) {
  const classes = useStyles();
  return (
    <Grid container spacing={2} style={{ background: "#c9d1c8de" }}>
      <Grid item xs={12}>
        <div className={classes.demo}>
          <List>
            <ListItem>
              <FiberManualRecordIcon
                style={{
                  fontSize: "40px",
                  color: "brown",
                }}
              />
              <h1>{props.name}</h1>
              <ListItemSecondaryAction>
                <Box display="flex" flexDirection="row">
                  <Box>
                    <Timer taskId={props.taskId} projectId={props.projectId} />
                  </Box>
                  <Box>
                    <ThreeDotMenu />
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
