import React, { useContext } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Grid from "@material-ui/core/Grid";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ProjectContext from "../../utils/ProjectContext";
import IconButton from "@material-ui/core/IconButton";
import ViewListIcon from "@material-ui/icons/ViewList";
import EditProjectCard from "../EditProjectCard";
import ConfirmDeleting from "../ConfirmDeleting";

export default function ProjectListItem(props) {
  const handleProjectOnClick = useContext(ProjectContext);

  return (
    <Grid container spacing={2} key={props.projectId}>
      <Grid item xs={12}>
        <div>
          <List
            style={{
              borderRadius: "15px",
              background: `linear-gradient(to right, white  , #b6e7ea)`,
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
                onClick={() =>
                  handleProjectOnClick(props.projectId, props.name)
                }
              >
                {props.name}
              </h2>

              <ListItemSecondaryAction>
                <IconButton
                  style={{ margin: "0px 3px"}}
                  onClick={() => handleProjectOnClick(props.projectId)}
                >
                  <ViewListIcon />
                </IconButton>
                <IconButton style={{ margin: "0px 3px"}}>
                  <EditProjectCard
                    saveProjectName={props.saveProjectName}
                    name={props.name}
                    projectId={props.projectId}
                  />
                </IconButton>
                <IconButton style={{ margin: "0px 3px"}}>
                  <ConfirmDeleting
                    name={props.name}
                    deleteItem={props.deleteProject}
                  />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </div>
      </Grid>
    </Grid>
  );
}
