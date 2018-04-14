import React from "react";
import "./Title.css";

const Title = props => (
<div className="navbar">
<h1 className="title">{props.children}</h1> 
<h2 className="score>">{props.children}</h2>
</div>
);
export default Title;
