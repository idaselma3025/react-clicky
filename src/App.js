import React, { Component } from 'react';
import ImagesCard from "./components/ImagesCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";
import './App.css';


class App extends Component{
  state = {
    images,
    clicked: [],
    score:0
  };

clickFriend = id => {
  let clicked = this.state.clicked;
  if(clicked.includes(id)){
    this.setState({clicked:[],score:0});
    return;
  }
  else{
    clicked.push(id);
      this.setState({images,clicked, score:clicked.length});
  }
  if(clicked.length===12){
    this.setState({clicked:[], score:0});
    return;
  }
  const images = this.state.images
  .map(a=>[Math.random(),a])
  .sort((a,b)=>a[0]-b[0])
  .map(a=> a[1]);
  this.setState({images});
};



render(){
  return(
  <Wrapper>

  <h1 className="title">
  Some Day It Will Be Spring
  </h1>
  <h2 className="score">Score: {this.state.score}</h2>
  {this.state.images.map(image =>(
    <ImagesCard
    clickFriend={this.clickFriend}
    moveFriend={this.moveFriend}
    id={image.id}
    key={image.id}
    name={image.name}
    image={image.image}
    occupation={image.occupation}
    location={image.location}
    />
  ))}
  </Wrapper>

);
}
}
export default App;
