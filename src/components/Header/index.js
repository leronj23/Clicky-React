import React from "react";
import './style.css';

function Header(props) {
  return (
    <div className="sticky-top shadow">
      <div className="container-fluid bg-info">
        <div className="row height100">
          <div className="col-3 text-center align-middle my-auto">
            <div className="navHeader"><strong>Clicky Game</strong></div>
          </div>
          <div className="col-6 text-center align-middle my-auto">
            <div className="status">{props.status}</div>
          </div>
          <div className="col-3 text-right my-auto pr-5">
            <div className="scoreTopScore"><strong>Score: <span>{props.score}</span>  | <span>Top Score: <span>{props.topScore}</span></span></strong></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
