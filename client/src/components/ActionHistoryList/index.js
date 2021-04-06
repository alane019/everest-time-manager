import React from "react";
import HistoryIcon from "../../assets/OutlineHistoryBlack24dp.png";
import "./style.css";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import EditTaskCard from "../EditTaskCard";
import ConfirmDeleting from "../ConfirmDeleting";

const ActionHistoryList = (props) => {
  return (
    <div className="card" key={props.projectId}>
      <div className="card-body">
        <img className="history-icon" src={HistoryIcon}></img>
        <h3 className="card-title task-name">Task: {props.taskName}</h3>
        {/* <h5 className="card-title task-name">Task: {props.taskName}</h5> */}
        <div
          className="project-tag"
          style={{ backgroundColor: props.projectColor, color: "white" }}
        >
          <h6 className="card-subtitle mb-2 text-muted">
            {" "}
            Project: {props.projectName}
          </h6>
        </div>
        <p className="card-text start-time"> Start: {props.startTime} </p>
        <p className="card-text end-time"> End: {props.endTime} </p>
        <p className="card-text duration">
          {" "}
          Duration: {props.duration} &nbsp;
          <span style={{ color: "gray" }}>(hr:min:sec) </span>{" "}
        </p>
        <Box>
          <IconButton style={{ margin: "0px 3px"}}>
                    <ConfirmDeleting
                      name={props.name}
                      deleteItem={props.deleteAction}
                    />
          </IconButton>
        </Box>
      </div>
      
    </div>
  );
};

export default ActionHistoryList;
