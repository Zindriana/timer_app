import { useRef, useState } from "react";
import mm_vaniljsas from './audio/mm_vanlijsas.ogg';
function Timer(){

    const [time, setTime] = useState(0);
    const intervalRef = useRef(0);
    const [beepNumber, setBeepNumber] = useState(0);

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
            if (newTime % beepNumber === 0){
                const audio = new Audio(mm_vaniljsas);
                audio.play();
            }
            return newTime;
        });
    }

    function handleBeepChange(event: React.ChangeEvent<HTMLInputElement>){
        if(Number(event.target.value)>0){
            setBeepNumber(Number(event.target.value));
        }
        
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
        <input type='number' className="beepNumber" onChange={handleBeepChange}></input>
    </>
    )
}

export default Timer;