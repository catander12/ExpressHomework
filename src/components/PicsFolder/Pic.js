import React from "react";
import "./FriendCard.css";

const Pic = props => (
  <div className="card" onClick={() =>props.removePic(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      
       <h3>
          <strong>Name:</strong> {props.name}
        </h3>
        <h4>
          <strong>What I do! </strong> {props.job}
       </h4>
     
    </div>
  </div>
);

export default Pic;
