import React, { useState, useEffect, useContext } from "react";
import HomeContext from "../../utils/HomeContext";
const TimeCounter = ({ startTime }) => {
  const { isActive } = useContext(HomeContext);

  const displayTimeCounter = (startTime) => {
    //display the time functionality using startTime initial value
    return <div className="time">11:11</div>;
  };
  return isActive ? (
    displayTimeCounter(startTime)
  ) : (
    <div className="time">Start</div>
  );
};

export default TimeCounter;
