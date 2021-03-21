import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ThreeDotMenu from "../ThreeDotMenu";
import TextButton from "../TextButton";

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
              />
              <TextButton title="Sport" />
              <ListItemSecondaryAction>
                <ThreeDotMenu />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </div>
      </Grid>
    </Grid>
  );
}
