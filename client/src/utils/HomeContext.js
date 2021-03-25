import React from "react";

const HomeContext = React.createContext({
  handleStartAction: null,
  handleEndAction: null,
  containerStyle: null,
  isActive: null,
  activeTaskId: null,
});

export default HomeContext;
