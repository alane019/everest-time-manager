import React, { useEffect, useState } from "react";
import DropUpContainer from "../DropUpContainer";
import ActiveTask from "../ActiveTask";
import HomeContext from "../../utils/HomeContext";
import API from "../../utils/API";
import moment from "moment";
import ActionHistory from "../ActionHistory";

function Home() {
  const [activeTaskId, setActiveTaskId] = useState(false);
  const [activeTaskData, setActiveTaskData] = useState({
    _id: null,
    startTime: null,
    task: { name: "", _id: null, project: null },
  });

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
        return handleStartAction(res.data.task.project, res.data.task._id);
      });
    }
    return;
  }, []);

  //on change should make a new api request
  // useEffect(() => {
  //   if (!activeTaskData._id && activeTaskData.task._id) {
  //     return handleStartAction(
  //       activeTaskData.task.project,
  //       activeTaskData.task._id
  //     );
  //   }
  //   if (false) {
  //     return handleEndAction(
  //       activeTaskData.task.project,
  //       activeTaskData.task._id
  //     );
  //   }
  // }, [activeTaskData]);

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

  const handleActiveTaskStatus = async (projectId, taskId, status) => {
    if (status === "start") {
      await handleStartAction(projectId, taskId);
      await API.updateUser({ activeAction: activeTaskId })
        .then((res) => console.log(res.data))
        .catch((e) => console.log(e));
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
        API.updateUser({ activeAction: res.data._id }).then((res) =>
          console.log(res.data)
        );
        setActiveTaskData(res.data);
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
    API.getAction({ activeAction: localStorage.getItem("activeAction") }).then(
      (res) => {
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
      }
    );
  };



  const displayHome = (activeTaskId) => {

    
    if (activeTaskData._id) {
      return (
        <div component={"span"}>
          <HomeContext.Provider
            value={{
              handleActiveTaskStatus: handleActiveTaskStatus,
              activeTaskId: activeTaskId,
              activeTaskData: activeTaskData,
            }}
          >
            <ActiveTask />
          </HomeContext.Provider>
          <HomeContext.Provider
            value={{
              handleActiveTaskStatus: handleActiveTaskStatus,
              containerStyle: containerStyle,
              activeTaskId: activeTaskId,
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
          <ActionHistory/>

          <HomeContext.Provider
            value={{
              handleActiveTaskStatus: handleActiveTaskStatus,
              containerStyle: containerStyle,
              activeTaskId: activeTaskId,
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
  return displayHome(activeTaskId);
}

export default Home;
