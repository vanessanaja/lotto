import React, { Component } from "react";
import "./Lottery.css";

class Lottery extends Component{
  static defaultProps = {
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
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          Balls go here
        </div>
      </section>
    );
  }
}

export default Lottery;