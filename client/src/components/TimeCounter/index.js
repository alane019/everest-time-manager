import React, { useState, useEffect, useContext } from "react";
import HomeContext from "../../utils/HomeContext";
import moment from "moment";
const TimeCounter = ({ startTime }) => {
  const { isActive } = useContext(HomeContext);
  const [now, setNow] = useState(moment());
  let start = moment(startTime);
  useEffect(() => {
    setNow(moment());
  }, [now]);
  let rawDifference = now.diff(start) / 1000 / 60;
  return isActive ? (
    <div className="time">
      {Math.floor(rawDifference)}:
      {Math.floor(((rawDifference % 1) * 6000) / 100)}
    </div>
  ) : (
    <div className="time">Start</div>
  );
};

export default TimeCounter;
