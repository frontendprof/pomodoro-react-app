import React from 'react';
import '../App.css';
import BreakInterval from "./BreakInterval";
import SessionLength from './SessionLength';
import Timer from "./Timer";

class App extends React.Component{

  constructor(){
    super();

    this.state={
      breakLength:5,
      sessionLength:25,
      timerMinute:25,
      timerSecond:0
    }
  }
  render(){
    return (
    <div className="main">
      <h2>Pomodoro Clock</h2>
      <BreakInterval  breakInterval={this.state.breakLength}/>
      <SessionLength sessionLength={this.state.sessionLength} />
      <Timer timerMinute={this.state.timerMinute} timerSecond={this.state.timerSecond}/>
    </div>
  );

  }
  
}

export default App;
