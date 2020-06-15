import React from 'react'

function BreakInterval(props) {
    return (

        <section>

            <h4>Break Length</h4>

            <section className="int-cont">
            <button>Down</button>
            <p className="int-len">{props.breakInterval}</p>
            <button>Up</button>
            
            </section>

        </section>
        
    )
}

export default BreakInterval;
