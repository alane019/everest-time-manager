import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import StopIcon from "@material-ui/icons/Stop";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Box from "@material-ui/core/Box";
import HomeContext from "../../utils/HomeContext";
import TimeCounter from "../TimeCounter";
const Timer = (props) => {
  const { handleStartAction, handleEndAction, isActive } = useContext(
    HomeContext
  );

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
          className="start"
        >
          {isActive ? (
            <StopIcon
              onClick={() => {
                handleEndAction(props.projectId, props.taskId);
              }}
            />
          ) : (
            <PlayArrowIcon
              onClick={() => {
                handleStartAction(props.projectId, props.taskId);
              }}
            />
          )}
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
              <TimeCounter startTime={props.startTime} />
            </div>
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
