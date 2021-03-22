import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ThreeDotMenu from "../ThreeDotMenu";
import TextButton from "../TextButton";
import ProjectContext from "../../utils/ProjectContext";
import Timer from "../Timer";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

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
              <h1>Swimming</h1>
              <ListItemSecondaryAction>
                <Box display="flex" flexDirection="row">
                  <Box>
                    <Timer />
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
