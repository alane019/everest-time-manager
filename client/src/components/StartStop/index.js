import React, { useContext } from "react";
import StopIcon from "@material-ui/icons/Stop";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import HomeContext from "../../utils/HomeContext";

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
