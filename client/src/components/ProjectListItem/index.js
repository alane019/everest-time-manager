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

const useStyles = makeStyles((theme) => ({}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function ProjectListItem(props) {
  const classes = useStyles();

  const handleProjectOnClick = useContext(ProjectContext);

  return (
    <Grid container spacing={2}>
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

              <h1 onClick={() => handleProjectOnClick()}>Sports</h1>

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
