import React, { Component } from 'react';


class Timer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isSession:true,
            timerSecond:0
             
        }
    }
    
    render() {
        return (
            <section>

                <section className="timer-cont">
                    <h4>{this.state.isSession?"Session":"Break"}</h4>
                    <span className="timer-ses">{this.props.timerMinute}</span>
                    <span className="timer-ses">:</span>
                    <span className="timer-ses">{this.state.timerSecond===0 
                    ? "00" 
                    :this.state.timerSecond<10
                    ?"0"+this.state.timerSecond
                    :this.state.timerSecond}</span>

                </section>
                
            </section>
        )
    }
}

export default Timer;
