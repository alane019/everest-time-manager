import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

import Grid from "@material-ui/core/Grid";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ThreeDotMenu from "../ThreeDotMenu";

const useStyles = makeStyles((theme) => ({}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function InteractiveList() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.demo}>
            <List dense={dense}>
              <ListItem>
                <FiberManualRecordIcon
                  style={{
                    fontSize: "40px",
                    color: "brown",
                  }}
                ></FiberManualRecordIcon>

                <ListItemText
                  primary="Sport"
                  secondary={secondary ? "Secondary text" : null}
                />
                <ListItemSecondaryAction>
                  <ThreeDotMenu />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
