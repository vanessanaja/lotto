import React, { Component } from "react";
import "./Lottery.css";

class Lottery extends Component{
  static default props = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40
  }
  constructor(props){
    super(props);
    this.state = {nums: []}
  }
  render(){
    return (
      <section className="Lottery"></section>
    );
  }
}

export default Lottery;