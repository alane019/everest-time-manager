
import API from "../../utils/API";
import "./style.css";
import React, { useState, useEffect } from "react";
import ActionHistoryList from '../ActionHistoryList';
import HistoryIcon from "../../assets/OutlineHistoryBlack24dp.png"

function ActionHistory(props) {

const [actionData, setActions] = useState([]);

useEffect(() => {
  getAllActions();
}, []);

      function getAllActions() {
        API.getAllActions()
          .then((res) => {
            setActions(res.data);
            console.log("res.data: .......")
            console.log(res.data)
          })
          .catch((error) => console.log(error));
      }
                  // taskNames: apiData.task.name,
                  // projectColors: apiData.project.color,
                  // projectNames: apiData.project.color,
                  // startTimes: apiData.startTime,
                  // endTimes: apiData.endTime,

      /* http://localhost:3000/api/actions/
      6063b8a6af9b1954bc37eccf/projects/tasks/null	*/


      return (
       <div className="card" >
          
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
    
/*
{
    "_id" : ObjectId("6063d8400d9c996d605f65eb"),
    "startTime" : ISODate("2021-03-31T02:02:40.436Z"),
    "user" : ObjectId("6063b8a6af9b1954bc37eccf"),
    "project" : ObjectId("6063d8020d9c996d605f65e7"),
    "task" : ObjectId("6063d8110d9c996d605f65e9"),
    "__v" : 0,
    "duration" : 16,
    "endTime" : ISODate("2021-03-31T02:02:57.341Z")
}

*/



}

export default ActionHistory;