import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import ListGroupContainer from "../ListGroupContainer"; 

function ActionHistory() {
  const [actionData, setActionData] = useState({});
  const projectNames = [null];
  const taskNames = [null];
  const startTimes = [null];
  const durations = [null];
  const endTimes = [null];

  useEffect(() => {
    // API call
    API.getAllActions()
     .then(res => {
       res.data.forEach(action => {
        console.log("action.task.name: ")
         console.log(action.task.name)
         console.log("------------------ ")
        taskNames.push(action.task.name);
        setActionData({
          actionData:{
            taskNames: action.task.name
          }
       })
        
       })
   

   
    })
  }, [])  


      return (
        <div className="App">
          <div className="App-header">
            <h2> Action History </h2>
          </div>

        <ListGroupContainer/>
      </div>  
      );
    

    }; 

    export default ActionHistory; 