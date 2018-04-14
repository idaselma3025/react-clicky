import React from "react";
import "./ImagesCard.css";

const ImagesCard = props => (
<div className = "card" onClick={()=>props.clickFriend(props.id)}>
  <div className="img-container">
      <img alt={props.name} src={props.image} id={props.id} key ={props.key} />
</div>
</div>

);

export default ImagesCard;
