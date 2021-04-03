import API from "../../utils/API";
import "./style.css";
import React, { useState, useEffect } from "react";
import ActionHistoryList from "../ActionHistoryList";

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

  return (
    <div className="card-container">
      {actionData.map((action) => (
        <ActionHistoryList
          key={action._id}
          taskName={action.task.name}
          projectName={action.project.name}
          projectColor={action.project.color}
          startTime={action.startTime}
          endTime={action.endTime}
          duration={action.duration}
        />
      ))}
    </div>
  );
}

export default ActionHistory;
