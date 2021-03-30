import React, { useContext, useState, useEffect } from "react";
import "./style.css";
import StopIcon from "@material-ui/icons/Stop";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Box from "@material-ui/core/Box";
import HomeContext from "../../utils/HomeContext";
import moment from "moment";
const Timer = (props) => {
  const { handleActiveTaskStatus, activeTaskData } = useContext(HomeContext);

  const [now, setNow] = useState(moment());
  var start = moment(activeTaskData.startTime);

  var timeCounter = setInterval(function () {
    setNow(moment());
  }, 1000);

  let rawDifference = now.diff(start) / 1000 / 60;
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
          {activeTaskData.task._id ? (
            <StopIcon
              onClick={() => {
                clearInterval(timeCounter);
                handleActiveTaskStatus(props.projectId, props.taskId, "end");
              }}
            />
          ) : (
            <PlayArrowIcon
              onClick={() => {
                clearInterval(timeCounter);
                handleActiveTaskStatus(props.projectId, props.taskId, "start");
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
          <div className="time">
            {Math.floor(rawDifference)}:
            {Math.floor(((rawDifference % 1) * 6000) / 100)}
          </div>
        </Box>
      </Box>
      <div className="buttons"></div>
    </div>
  );
};

export default Timer;
