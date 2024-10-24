import { useRef, useState } from "react";
import mm_vaniljsas from './audio/mm_vanlijsas.ogg';
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

        setTime(prevTime => {
            const newTime = prevTime+1;
            if (newTime % 10 === 0){
                const audio = new Audio(mm_vaniljsas);
                audio.play();
            }
            return newTime;
        });
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