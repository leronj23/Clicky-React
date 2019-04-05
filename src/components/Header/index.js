import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="sticky-top shadow-sm">
      <div className="container-fluid bg-info">
        <div className="row height100">
          <div className="col-4 text-center align-middle my-auto">
            <h2><strong>Clicky Game</strong></h2>
          </div>
          <div className="col-4 text-center align-middle my-auto">
            <h3>Click an image to begin!</h3>
          </div>
          <div className="col-4 text-right my-auto pr-5">
            <h3>Score: <span>{props.score}</span>  | <span>Top Score: <span>{props.topScore}</span></span></h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
