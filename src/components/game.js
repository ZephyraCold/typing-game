import React from 'react'
import './style.css'
import useCustomHook from './customHook'


function Game() {

    const {
        text, 
        handleChange, 
        isTimeRunning, 
        textBoxRef, 
        timeReamining, 
        startClock, 
        wordNum
    } = useCustomHook()

    return(
        <div>
            <h1>How fast can you type?</h1>
            <textarea
                value={text}
                onChange={handleChange}
                disabled={!isTimeRunning}
                ref={textBoxRef}
            />
            <h4>Time remaining: {timeReamining}</h4>
            <button 
            onClick={startClock}
            disabled={isTimeRunning}
            >Start</button>
            <h1>Word count: {wordNum} </h1>
            
        </div>
    )
}

export default Game