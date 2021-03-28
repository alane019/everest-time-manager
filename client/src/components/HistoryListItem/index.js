import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Grid from "@material-ui/core/Grid";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ThreeDotMenuDisabled from "../ThreeDotMenuDisabled";
import ProjectContext from "../../utils/ProjectContext";

const useStyles = makeStyles((theme) => ({}));


const HistoryListItem = ({ 
  

}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} style={{ background: "#c9d1c8de"  }}>
      <Grid item xs={12}>
        <div>
          <List>
            <ListItem>
             <div> History List Item </div> 

                      <ListItemSecondaryAction >
                        <ThreeDotMenuDisabled/>
                      </ListItemSecondaryAction>
            </ListItem>
          </List>
        </div>
      </Grid>
    </Grid>
  );
}

export default  HistoryListItem;