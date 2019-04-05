import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img className="pointer" alt={props.name} src={props.image} onClick={() => props.selectedFriend(props.id)}/>
      </div>
    </div>
  );
}

export default FriendCard;
