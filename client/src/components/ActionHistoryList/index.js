import React from "react";
import HistoryIcon from "../../assets/OutlineHistoryBlack24dp.png";
import "./style.css";
const ActionHistoryList = (props) => {
  console.log("props, before return statement: " + props);
  return (
    <div className="card" key={props.projectId}>
      <div className="card-body">
        <img className="history-icon" src={HistoryIcon} alt="hist-icon"></img>
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
        <p className="card-text duration"> Duration: {props.duration} </p>
      </div>
    </div>
  );
};

export default ActionHistoryList;
