import React from 'react'

function SessionLength(props) {
    return (
        <div>

            <section>
                <h4>Session Length</h4>
                
                <section className="int-cont">
                <button>Down</button>
                <p className="int-len">{props.sessionLength}</p>
                <button>Up</button>
                </section>

            </section>
            
            
        </div>
    )
}

export default SessionLength;
