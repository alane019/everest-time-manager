import React from "react";
import Main from "../Main";

function ProjectListItem(props) {
  return (
    <div>
      {props.items.map((item) => (
        <li className="projectManagerLi" key={item.id}>
          {item.text}
        </li>
      ))}
    </div>
  );
}

export default ProjectListItem;
