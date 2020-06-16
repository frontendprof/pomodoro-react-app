import React from 'react'

function SessionLength(props) {


    function increaseSession(){
        if(props.sessionLength===60){
            return;
        }
        props.increaseSession();
    }


    function decreaseSession(){
        if(props.sessionLength===1){
            return;
        }
        props.decreaseSession();
    }





    return (
        <div>

            <section>
                <h4>Session Length</h4>
                
                <section className="int-cont">
                <button onClick={decreaseSession}>Down</button>
                <p className="int-len">{props.sessionLength}</p>
                <button onClick={increaseSession}>Up</button>
                </section>

            </section>
            
            
        </div>
    )
}

export default SessionLength;
