import React from "react";

function Calendar() {
  var imageName = require("./Cal.jpg");
  return (
    <h1>
      <img aria-label="Calendar" alt="Calendar" src={imageName} />
    </h1>
  );
}

export default Calendar;
