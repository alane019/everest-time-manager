import React, { useState } from "react";
import DropUpContainer from "../DropUpContainer";
import ActiveTask from "../ActiveTask";
import HomeContext from "../../utils/HomeContext";
import API from "../../utils/API";
import moment, { duration } from "moment";
import DeviceGpsOff from "material-ui/svg-icons/device/gps-off";

function Home() {
  const [activeTaskStatus, setActiveStatus] = useState(false);
  const [activeTaskId, setActiveTaskId] = useState("");
  const [actions, setActions] = useState({});
  const [timeCount, setTimeCount] = useState("");
  const [containerStyle, setContainerStyle] = useState({
    footer: { height: "30px" },
    footerbuttondown: { visibility: "hidden" },
    footerbuttonup: { visibility: "visible" },
    footercont: { opacity: "0", visibility: "hidden" },
    goBackIconHeight: "88vh",
  });

  const expand = () => {
    if (activeTaskStatus) {
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

  const handleStartAction = (projectId, taskId, name) => {
    API.addAction({
      projectId: projectId,
      taskId: taskId,
      name: name,
      startTime: moment(),
    })
      .then((res) => {
        console.log(res.data);
        setActiveTaskId(res.data._id);
        setActiveStatus(true);
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
    API.getAction(activeTaskId).then((res) => {
      let now = moment();
      //calculates the duration in seconds of the action
      let duration = Math.floor(now.diff(moment(res.data.startTime)) / 1000);
      API.endAction({
        projectId: projectId,
        taskId: taskId,
        _id: activeTaskId,
        duration: duration,
        endTime: now,
      })
        .then((res) => {
          console.log(res.data.startTime);
          setActiveStatus(false);
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

  const displayHome = (active) => {
    if (active) {
      return (
        <div component={"span"}>
          <HomeContext.Provider
            value={{
              handleStartAction: handleStartAction,
              handleEndAction: handleEndAction,
              isActive: activeTaskStatus,
              activeTaskId: activeTaskId,
            }}
          >
            <ActiveTask />
          </HomeContext.Provider>
          <HomeContext.Provider
            value={{
              handleStartAction: handleStartAction,
              handleEndAction: handleEndAction,
              containerStyle: containerStyle,
              isActive: activeTaskStatus,
            }}
          >
            <DropUpContainer
              shrink={shrink}
              expand={expand}
              containerStyle={containerStyle}
            />
          </HomeContext.Provider>
        </div>
      );
    } else {
      return (
        <>
          <h1>History list</h1>
          <HomeContext.Provider
            value={{
              handleStartAction: handleStartAction,
              handleEndAction: handleEndAction,
              containerStyle: containerStyle,
              isActive: activeTaskStatus,
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
  };
  return displayHome(activeTaskStatus);
}

export default Home;
