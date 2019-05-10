import React, { Component } from 'react';
import './Lottery.css';
import Ball from './Ball'

class Lottery extends Component{
  static defaultProps = {
    title: 'Lotto',
    maxBalls: 6,
    maxNum: 40
  }
  constructor(props){
    super(props);
    this.state = {nums: Array.from({length: this.props.maxBalls})}
  }
  generate(){
    //create random numbers between 1 and maxNum
    Math.floor(Math.random)
  }
  handleClick(){
     
  }
  render(){
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => <Ball num={n}/>)}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}

export default Lottery;