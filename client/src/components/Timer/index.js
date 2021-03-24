import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import StopIcon from "@material-ui/icons/Stop";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Box from "@material-ui/core/Box";
import HomeContext from "../../utils/HomeContext";
const Timer = () => {
  const [isActive, setIsActive] = useState(false);

  const { handleActiveStatus } = useContext(HomeContext);

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
          onClick={() => {
            setIsActive(!isActive);
            handleActiveStatus(!isActive);
          }}
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
            <div className="time">Stop</div>
          ) : (
            <span style={{ fontSize: "16px" }}>Start</span>
          )}
        </Box>
      </Box>
      <div className="buttons"></div>
    </div>
  );
};

export default Timer;
