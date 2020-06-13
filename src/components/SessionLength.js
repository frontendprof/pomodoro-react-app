import React from 'react'

function SessionLength(props) {
    return (
        <div>
            <section>
                <button>Down</button>
                <p>{props.sessionLength}</p>
                <button>Up</button>
            </section>
            
        </div>
    )
}

export default SessionLength;
