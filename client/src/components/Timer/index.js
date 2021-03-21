import React, { useState, useEffect } from "react";
import "./style.css";
import StopIcon from "@material-ui/icons/Stop";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";
const Timer = () => {
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  // function stopTimer() {
  //   setIsActive(false);
  //   setCounter(0);
  //   setSecond("00");
  //   setMinute("00");
  // }

  return (
    <div className="container-fluid">
      <Box display="flex" flexDirection="row">
        <Box
          style={{
            paddingRight: "0px",
            borderRadius: "15px 0px 0px 15px",
            background: "#c9d1c8de",
          }}
          p={1}
          onClick={() => setIsActive(!isActive)}
          className="start"
        >
          {isActive ? <StopIcon /> : <PlayArrowIcon />}
        </Box>
        <Box
          p={1}
          style={{
            paddingLeft: "0px",
            paddingTop: "7px",
            borderRadius: "0px 15px 15px 0px",
            background: "#c9d1c8de",
          }}
        >
          {isActive ? (
            <div className="time">
              <span className="minute">{minute}</span>
              <span>:</span>
              <span className="second">{second}</span>
            </div>
          ) : (
            <span style={{ fontSize: "16px" }}>start</span>
          )}
        </Box>
      </Box>
      <div className="buttons"></div>
    </div>
  );
};

export default Timer;
