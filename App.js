import React, { Component } from 'react';
import './App.css';
import Ball from './Ball';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Ball num={17} />
      </div>
    );
  }
}

export default App;