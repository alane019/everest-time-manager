import React, { useContext, useState } from "react";
import StopIcon from "@material-ui/icons/Stop";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Box from "@material-ui/core/Box";
import HomeContext from "../../utils/HomeContext";
import moment from "moment";
const StartStop = (props) => {
  const { handleActiveTaskStatus, activeTaskData } = useContext(HomeContext);
  return (
    <div className="container-fluid">
      <Box display="flex" flexDirection="row">
        <Box
          style={{
            borderRadius: "15px",
            background: "#c9d1c8de",
          }}
          p={1}
          className="start"
        >
          {activeTaskData._id ? (
            <StopIcon
              onClick={() => {
                handleActiveTaskStatus(props.projectId, props.taskId, "end");
              }}
            />
          ) : (
            <PlayArrowIcon
              onClick={() => {
                handleActiveTaskStatus(props.projectId, props.taskId, "start");
              }}
            />
          )}
        </Box>
      </Box>
      <div className="buttons"></div>
    </div>
  );
};

export default StartStop;
