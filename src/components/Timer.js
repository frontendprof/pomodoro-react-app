import React, { Component } from 'react';


class Timer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isSession:true,
            timerMinute:0,
            timerSecond:0
             
        }
    }
    
    render() {
        return (
            <section>

                <section>
                    <h4>{this.state.isSession?"Session":"Break"}</h4>
                    <span>{this.props.timerMinute}</span>
                    <span>:</span>
                    <span>{this.props.timerSecond}</span>

                </section>
                
            </section>
        )
    }
}

export default Timer;
