import React from "react";

function Chart() {
  var imageName = require("./Graph.jpg");
  return (
    <h1>
      <img aria-label="Chart" alt="Chart" src={imageName} />
    </h1>
  );
}

export default Chart;
