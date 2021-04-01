import React, { useContext, useState } from "react";
import StopIcon from "@material-ui/icons/Stop";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Box from "@material-ui/core/Box";
import HomeContext from "../../utils/HomeContext";
import moment from "moment";
const StartStop = (props) => {
  const { handleActiveTaskStatus, activeTaskData } = useContext(HomeContext);
  return (
    <>
      {activeTaskData.task._id === props.taskId ? (
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
    </>
  );
};

export default StartStop;
