import React from "react";

function Chart() {
  var imageName = require("./Graph.jpg");
  return (
    <div>
      <img aria-label="Chart" alt="Chart" src={imageName} />
    </div>
  );
}

export default Chart;
