import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div id="shakerBox">{props.children}</div>;
}

export default Wrapper;
