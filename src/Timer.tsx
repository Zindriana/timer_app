import { useRef, useState } from "react";
import mm_vaniljsas from './audio/mm_vanlijsas.ogg';
import you_can_rest_now from './audio/you_can_rest_now.mp3';
function Timer(){

    const [time, setTime] = useState(0);
    const intervalRef = useRef(0);
    const [beepNumber, setBeepNumber] = useState(0);
    const [restNumber, setRestNumber] = useState(0);

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
            if (newTime % restNumber === 0){
                const audio = new Audio(you_can_rest_now);
                audio.play();
                clearInterval(intervalRef.current);
                intervalRef.current = 0;
                return newTime;
            }
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

    function handleRestChange(event: React.ChangeEvent<HTMLInputElement>){
        if(Number(event.target.value)>0){
            setRestNumber(Number(event.target.value));
        } 
    }

    return(
    <>
        <p>Tid: {time} sekunder</p>
        <section>
        <button className="timer_btn" onClick={startTimer}>
            Start timer
        </button>
        <br/>
        <span>Intervallet för beep-ljud</span>
        <input type='number' className="beepNumber" onChange={handleBeepChange}></input>
        <span>Hur långt setet ska vara</span>
        <input type='number' className="restNumber" onChange={handleRestChange}></input>
        </section>
        <section>
        <button className="stop_btn" onClick={stopTimer}>
            Stop timer
        </button>
        
        </section>
    </>
    )
}

export default Timer;