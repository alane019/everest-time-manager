import React, { useEffect, useState } from "react";
import DropUpContainer from "../DropUpContainer";
import ActiveTask from "../ActiveTask";
import HomeContext from "../../utils/HomeContext";
import API from "../../utils/API";
import moment from "moment";

function Home() {
  const [activeTaskData, setActiveTaskData] = useState({
    _id: null,
    startTime: null,
    task: { name: "", _id: null, project: null },
  });

  //initial state of the container if there is no active tasks
  const [containerStyle, setContainerStyle] = useState({
    footer: { height: "30px" },
    footerbuttondown: { visibility: "hidden" },
    footerbuttonup: { visibility: "visible" },
    footercont: { opacity: "0", visibility: "hidden" },
    goBackIconHeight: "88vh",
  });

  //checks on load weather there is an active item in local storage or not
  useEffect(() => {
    if (localStorage.getItem("activeAction")) {
      API.getAction({
        activeAction: localStorage.getItem("activeAction"),
      }).then((res) => {
        setActiveTaskData(res.data);
      });
    }
    return;
  }, []);

  const displayHome = () => {
    if (activeTaskData._id !== null) {
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
        </div>
      );
    } else {
      return (
        <>
          <h1>History list</h1>
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
  };
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
        API.updateUser({ activeAction: res.data._id }).then((res) => {
          console.log(res.data);
        });
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
          API.updateUser({ activeAction: null }).then((res) =>
            console.log(res.data)
          );
          localStorage.removeItem("activeAction");
          setActiveTaskData({
            _id: null,
            startTime: null,
            task: { name: "", _id: null, project: null },
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
    if (activeTaskData._id !== null) {
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

  return displayHome();
}

export default Home;
