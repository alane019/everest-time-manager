import React from "react";

const HomeContext = React.createContext({
  containerStyle: null,
  activeTaskId: null,
  activeTaskData: null,
  handleActiveTaskStatus: null,
});

export default HomeContext;
