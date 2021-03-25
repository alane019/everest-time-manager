import React, { useState, useEffect, useContext } from "react";
import HomeContext from "../../utils/HomeContext";
const TimeCounter = (props) => {
  const { isActive } = useContext(HomeContext);

  const displayTimeCounter = () => {
    //display the time functionality using startTime state
    return <div className="time">11:11</div>;
  };
  return isActive ? displayTimeCounter() : <div className="time">Start</div>;
};

export default TimeCounter;
