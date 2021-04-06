import API from "../../utils/API";
import "./style.css";
import React, { useState, useEffect } from "react";
import ActionHistoryList from "../ActionHistoryList";
const moment = require("moment");

function ActionHistory(props) {
  const [actionData, setActions] = useState([]);
  const [status, setStatus] = useState("");
  useEffect(() => {
    getAllActions();
  }, []);

  function getAllActions() {
    API.getAllActions()
      .then((res) => {
        console.log(res.data)
        setStatus("actions");
        setActions(res.data);
      })

      .catch((error) => {
        setStatus("no-data");
        console.log(error);
      });
  }
  function getActionAmount() {
    if (actionData.length) {
      return actionData.length;
    }
    return 0;
  }
  function displayHistory() {
    if (status === "actions") {
      return actionData
        .sort((a, b) => b.startTime - a.startTime)
        .reverse()
        .map((action) => (
          <ActionHistoryList
            key={action._id}
            taskName={action.task.name}
            projectName={action.project.name}
            projectColor={action.project.color}
            startTime={moment(action.startTime).format(
              "dddd, MMMM DD YYYY, h:mm a"
            )}
            endTime={moment(action.endTime).format(
              "dddd, MMMM DD YYYY, h:mm a"
            )}
            duration={moment.utc(action.duration * 1000).format("HH:mm:ss")}
            deleteAction={() => deleteAction(action.project._id, action.task._id, action._id)}
          />
        ));
    } else if (status === "no-data") {
      return (
        <div style={{ marginTop: "30vh" }}>
          <h3 style={{ textAlign: "center", color: "#042046" }}>
            <em>
              Start recording your time by pushing on the{" "}
              <strong style={{ color: "tomato" }}>Up Icon</strong> on the bottom
              of the screen
            </em>
          </h3>
        </div>
      );
    }
  }

  
  function deleteAction(projectId, taskId, actionId) {
    API.deleteAction(projectId, taskId, actionId)
      .then((res) => {
       getAllActions();
       // getAllActions(projectId);
        console.log(res.data);
      })
      .catch((error) => {
        console.log("Error: ")
        console.log(error);
      });
  }
  

  return (
    <div
      id="history-list-container"
      className="card-container"
      style={{ marginTop: props.containerStyle.historyListHeight }}
    >
      <h3 style={{ textAlign: "center", color: "#042046" }}>
        <i>
          <strong>
            Total of{" "}
            <span style={{ fontSize: "100%", color: "darkGreen" }}>
              {getActionAmount()}
            </span>{" "}
            actions tracked.
          </strong>
        </i>
      </h3>
      {displayHistory()}
    </div>
  );
}

export default ActionHistory;
