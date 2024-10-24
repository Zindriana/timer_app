import { useRef, useState } from "react";
function Timer(){

    const [time, setTime] = useState(0);
    const intervalRef = useRef(0);

    function startTimer(){
        if(intervalRef.current === 0){
            intervalRef.current = setInterval(increaseTimeCounterByOne, 1000);
        }
    }

    function stopTimer(){
        clearInterval(intervalRef.current);
        intervalRef.current = 0;
    }
    
    function increaseTimeCounterByOne(){
        setTime(prevTime => prevTime+1);
    }

    return(
    <>
        <p>Tid: {time} sekunder</p>
        <button className="timer_btn" onClick={startTimer}>
            Start timer
        </button>
        <button className="stop_btn" onClick={stopTimer}>
            Stop timer
        </button>
    </>
    )
}

export default Timer;