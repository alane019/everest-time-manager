import React from "react";
import ProjectManager from "../ProjectManager";

import "./style.css";
const style = {
  h2: {
    textAlign: "center",
  },
  footer: {
    height: "89vh",
  },
};

function shrink() {
  if ((document.getElementById("footer").style.height = "89vh")) {
    document.getElementById("footer").style.height = "30px";
    document.getElementById("footerbuttondown").style.visibility = "hidden";
    document.getElementById("footerbuttonup").style.visibility = "visible";
    document.getElementById("footercont").style.opacity = "0";
    document.getElementById("footercont").style.visibility = "hidden";
  }
}

function expand() {
  if ((document.getElementById("footer").style.height = "30px")) {
    document.getElementById("footer").style.height = "89vh";
    document.getElementById("footerbuttondown").style.visibility = "visible";
    document.getElementById("footerbuttonup").style.visibility = "hidden";
    document.getElementById("footercont").style.opacity = "1";
    document.getElementById("footercont").style.visibility = "visible";
  }
}
export default function Input(props) {
  return (
    <div id="footer" style={style.footer}>
      <div id="footerbuttondown" onClick={() => shrink()}>
        &#9660;
      </div>
      <div id="footerbuttonup" onClick={() => expand()}>
        &#9650;
      </div>

      <div id="footercont">
        <ProjectManager />
      </div>
    </div>
  );
}
