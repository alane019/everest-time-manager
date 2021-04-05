import API from "../../utils/API";
import "./style.css";
import React, { useState, useEffect } from "react";
import ActionHistoryList from "../ActionHistoryList";
const moment = require("moment");

function ActionHistory(props) {
  const [actionData, setActions] = useState([]);
  useEffect(() => {
    getAllActions();
  }, []);

  function getAllActions() {
    API.getAllActions()
      .then((res) => {
        setActions(res.data);
      })

      .catch((error) => console.log(error));
  }
  function getActionAmount() {
    if (actionData.length) {
      return actionData.length;
    }
    return 0;
  }
  function displayHistory() {
    if (actionData) {
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
          />
        ));
    } else {
      return (
        <div style={{ marginTop: "38vh" }}>
          <h1 style={{ textAlign: "center" }}>
            Hi, there is no data to display.
          </h1>
          <h1 style={{ textAlign: "center" }}>
            To Start recording your time, crete a new Project by pushing on the
            Bar icon bellow
          </h1>
        </div>
      );
    }
  }
  return (
    <div
      id="history-list-container"
      className="card-container"
      style={{ marginTop: props.containerStyle.historyListHeight }}
    >
      <h3 style={{ textAlign: "center" }}>
        <i>
          <strong>
            Total of{" "}
            <span style={{ fontSize: "100%", color: "tomato" }}>
              {getActionAmount()}
            </span>{" "}
            actions made
          </strong>
        </i>
      </h3>
      {displayHistory()}
    </div>
  );
}

export default ActionHistory;
