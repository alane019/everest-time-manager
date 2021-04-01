import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Grid from "@material-ui/core/Grid";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ThreeDotMenu from "../ThreeDotMenu";
import StartStop from "../StartStop";
import Box from "@material-ui/core/Box";
import HomeContext from "../../utils/HomeContext";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles(() => ({}));

export default function TaskListItem(props) {
  const classes = useStyles();
  const { activeTaskData } = useContext(HomeContext);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div className={classes.demo}>
          <List
            style={{
              background: `linear-gradient(to right, ${props.color}  , #b6e7ea)`,
              borderRadius: "15px",
            }}
          >
            <ListItem>
              <h3 style={{ color: "black" }}>{props.name}</h3>
              <ListItemSecondaryAction>
                <Box display="flex" flexDirection="row">
                  <Box style={{ color: "black" }}>
                    <IconButton>
                      <StartStop
                        taskId={props.taskId}
                        projectId={props.projectId}
                      />
                    </IconButton>
                  </Box>
                  <Box>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => props.deleteProject}>
                      <DeleteIcon />
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
