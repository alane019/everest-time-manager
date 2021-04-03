import React, { useContext } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Grid from "@material-ui/core/Grid";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ThreeDotMenu from "../ThreeDotMenu";
import ProjectContext from "../../utils/ProjectContext";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import ViewListIcon from "@material-ui/icons/ViewList";
import EditIcon from "@material-ui/icons/Edit";
import EditProjectCard from "../EditProjectCard";

export default function ProjectListItem(props) {
  const handleProjectOnClick = useContext(ProjectContext);

  return (
    <Grid container spacing={2} key={props.projectId}>
      <Grid item xs={12}>
        <div>
          <List
            style={{
              borderRadius: "15px",
              background: `linear-gradient(to right, ${props.color}  , #b6e7ea)`,
            }}
          >
            <ListItem>
              <FiberManualRecordIcon
                style={{
                  fontSize: "40px",
                  color: props.color,
                }}
              />
              <h2
                style={{ color: "black" }}
                onClick={() => handleProjectOnClick(props.projectId)}
              >
                {props.name}
              </h2>

              <ListItemSecondaryAction>
                <IconButton
                  onClick={() => handleProjectOnClick(props.projectId)}
                >
                  <ViewListIcon />
                </IconButton>
                <IconButton>
                  <EditProjectCard
                    saveProjectName={props.saveProjectName}
                    name={props.name}
                    projectId={props.projectId}
                  />
                </IconButton>
                <IconButton onClick={() => props.deleteProject()}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </div>
      </Grid>
    </Grid>
  );
}
