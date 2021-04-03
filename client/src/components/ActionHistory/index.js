import API from "../../utils/API";
import "./style.css";
import React, { useState, useEffect } from "react";
import ActionHistoryList from "../ActionHistoryList";
import HistoryIcon from "../../assets/OutlineHistoryBlack24dp.png";
const moment = require('moment');

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
     {
      actionData.sort((a, b) => b.startTime - a.startTime).reverse()
      .map((action) => (
        <ActionHistoryList
          key={action._id}
          taskName={action.task.name}
          projectName={action.project.name}
          projectColor={action.project.color}
          startTime={moment(action.startTime).format("dddd, MMMM DD YYYY, h:mm a")}
          endTime={moment(action.endTime).format("dddd, MMMM DD YYYY, h:mm a")}
          duration={(moment.utc(action.duration*1000).format('HH:mm:ss'))}
        />
      ))}
    </div>
  );
}

export default ActionHistory;
