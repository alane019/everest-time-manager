import React, { useState } from "react";
import DropUpContainer from "../DropUpContainer";
import ActiveTask from "../ActiveTask";
function Home() {
  const [activeTaskStatus, setActiveStatus] = useState(true);
  const displayHome = (active) => {
    if (active) {
      return (
        <div>
          <ActiveTask />
          <DropUpContainer height="83vh" />
        </div>
      );
    } else {
      return (
        <div>
          <h1>History list</h1>
          <DropUpContainer height="94vh" />
        </div>
      );
    }
  };
  return displayHome(activeTaskStatus);
}

export default Home;
