import React from "react";
import "./style.css";

function WrapperImages(props) {
  return <div id="shakerBox" className="wrapper center">{props.children}</div>;
}

export default WrapperImages;
