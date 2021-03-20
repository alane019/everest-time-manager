import React from "react";
import Main from "../Main";

function TaskListItem(props) {
  
   const displayTasks = () => {
     // display a list item
   }
  
  return (
   
   <div>
    {/* {props.items.map((item) => (
        <li className="TaskLi" key={item.id}>
          {item.text}
        </li>
      ))}  * */}
  <ul>
      <li className="taskLi" onclick="displayTasks" key="1"> Task: Jogging  </li>
  </ul>

    </div>
  );
}

export default TaskListItem;

/*


{
    "_id": {
        "$oid": "605567b9fe5c330296777431"
    },
  "userId": "Adam Lane",    
  "name": "Jogging",
  "startTime":{"$date":"2021-03-18T05:29:18.457Z"},"__v":0},
  "createdAt":{"$date":"2021-03-18T05:28:43.209Z"},
  "username":"Adam Lane","email":"alane019@gmail.com"
}

*/