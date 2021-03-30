import React, { useEffect, useState, useLayoutEffect } from "react";
import DropUpContainer from "../DropUpContainer";
import ActiveTask from "../ActiveTask";
import HomeContext from "../../utils/HomeContext";
import API from "../../utils/API";
import moment from "moment";

function Home(props) {
  const activeTaskData = props.activeTaskData;
  const setActiveTaskData = props.updateActiveTaskData;

  //initial state of the container if there is no active tasks
  const [containerStyle, setContainerStyle] = useState({
    footer: { height: "30px" },
    footerbuttondown: { visibility: "hidden" },
    footerbuttonup: { visibility: "visible" },
    footercont: { opacity: "0", visibility: "hidden" },
    goBackIconHeight: "88vh",
  });

  //checks on load weather there is an active item in local storage or not

  const handleActiveTaskStatus = async (projectId, taskId, status) => {
    if (status === "start") {
      await handleStartAction(projectId, taskId);
    }
    if (status === "end") {
      await handleEndAction(projectId, taskId);
    }
  };
  const handleStartAction = (activeProjectId, activeTaskId) => {
    API.addAction({
      projectId: activeProjectId,
      taskId: activeTaskId,
      startTime: moment(),
    })
      .then((res) => {
        setActiveTaskData(res.data);
        API.updateUser({ activeAction: res.data._id }).catch((e) =>
          console.log(e)
        );
        localStorage.setItem("activeAction", activeTaskId);

        setContainerStyle({
          footer: { height: "83vh" },
          footerbuttondown: { visibility: "visible" },
          footerbuttonup: { visibility: "hidden" },
          footercont: { opacity: "1", visibility: "visible" },
          goBackIconHeight: "77vh",
        });
      })
      .catch((e) => console.log(e));
  };

  const handleEndAction = (projectId, taskId) => {
    API.getAction({ activeAction: activeTaskData._id }).then((res) => {
      let now = moment();
      //calculates the duration in seconds of the action
      let duration = Math.floor(now.diff(moment(res.data.startTime)) / 1000);
      API.endAction({
        projectId: projectId,
        taskId: taskId,
        _id: activeTaskData._id,
        duration: duration,
        endTime: now,
      })
        .then((res) => {
          API.updateUser({ activeAction: null }).catch((e) => console.log(e));
          localStorage.removeItem("activeAction");
          setActiveTaskData({
            _id: "",
            startTime: "",
            task: { name: "", _id: "" },
            project: { color: "" },
          });
          setContainerStyle({
            footer: { height: "94vh" },
            footerbuttondown: { visibility: "visible" },
            footerbuttonup: { visibility: "hidden" },
            footercont: { opacity: "1", visibility: "visible" },
            goBackIconHeight: "88vh",
          });
        })
        .catch((e) => console.log(e));
    });
  };

  const expand = () => {
    if (activeTaskData._id) {
      setContainerStyle({
        footer: { height: "83vh" },
        footerbuttondown: { visibility: "visible" },
        footerbuttonup: { visibility: "hidden" },
        footercont: { opacity: "1", visibility: "visible" },
        goBackIconHeight: "77vh",
      });
    } else {
      setContainerStyle({
        footer: { height: "94vh" },
        footerbuttondown: { visibility: "visible" },
        footerbuttonup: { visibility: "hidden" },
        footercont: { opacity: "1", visibility: "visible" },
        goBackIconHeight: "88vh",
      });
    }
  };
  const shrink = () => {
    setContainerStyle({
      footer: { height: "30px" },
      footerbuttondown: { visibility: "hidden" },
      footerbuttonup: { visibility: "visible" },
      footercont: { opacity: "0", visibility: "hidden" },
    });
  };
  const displayActiveTask = () => {
    if (activeTaskData._id) {
      return (
        <div component={"span"}>
          <HomeContext.Provider
            value={{
              handleActiveTaskStatus: handleActiveTaskStatus,
              activeTaskData: activeTaskData,
            }}
          >
            <ActiveTask />
          </HomeContext.Provider>
        </div>
      );
    }
  };

  return (
    <>
      {displayActiveTask()}
      <h1>History List</h1>
      <HomeContext.Provider
        value={{
          handleActiveTaskStatus: handleActiveTaskStatus,
          containerStyle: containerStyle,
          activeTaskData: activeTaskData,
        }}
      >
        <DropUpContainer
          shrink={shrink}
          expand={expand}
          containerStyle={containerStyle}
        />
      </HomeContext.Provider>
    </>
  );
}

export default Home;
