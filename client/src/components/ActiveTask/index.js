import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Grid from "@material-ui/core/Grid";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Timer from "../Timer";

const useStyles = makeStyles(() => ({}));

export default function ActiveTask(props) {
  const classes = useStyles();
  return (
    <Grid
      key={props.key}
      container
      spacing={2}
      style={{ background: "#c9d1c8de" }}
    >
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
                <Timer />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </div>
      </Grid>
    </Grid>
  );
}
