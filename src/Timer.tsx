import { useRef, useState } from "react";
import you_can_rest_now from './audio/you_can_rest_now.mp3';
import new_set from './audio/new_set.mp3';
import rest_between_set from './audio/rest_between_set.mp3';

//TODO fix bugs in function increaseSetTimerByOne()
// both sounds are going on at the same time
// Revenants voiceline is in a unending loop
// The round timer is not in sync with the total timer
function Timer(){

    let amountOfSetsFinished : number = 0; // Amount of sets that the user has done
    const intervalTotalTimerRef = useRef(0); // checking if the timer is active or not
    const intervalRoundTimeRef = useRef(1);
    const [totalTime, setTotalTime] = useState(0); // time that the user sees
    const [roundTime, setRoundTime] = useState(0); // timer for the active set
    const [howLongRoundTime, setHowLongRoundTime] = useState(0); // how long time in seconds each set is 
    const [shortRestTime, setShortRestTime] = useState(0); // how long time in seconds each rest is
    const [amountOfSetsToFinish, setAmountOfSetsToFinish] = useState(0); // how many sets the user is going to do

    function startTimer(){
        if(intervalTotalTimerRef.current === 0){
            intervalTotalTimerRef.current = setInterval(increaseTimeCounterByOne, 1000);
            setInterval(increaseSetTimerByOne, 1000);
        }
    }

    function pauseTimer(){
            clearInterval(intervalTotalTimerRef.current);
            intervalTotalTimerRef.current = 0;
    }

    function stopTimer(){
        clearInterval(intervalTotalTimerRef.current);
        intervalTotalTimerRef.current = 0;
        setTotalTime(0);
    }
    
    function increaseTimeCounterByOne(){
        if(amountOfSetsFinished !== amountOfSetsToFinish){
            setTotalTime(prevTime => {
                const newTime = prevTime+1;
                return newTime;
            });
        }
    }

    function increaseSetTimerByOne(){

            if(amountOfSetsFinished !== amountOfSetsToFinish){
                if(intervalRoundTimeRef.current === 1){
                    setRoundTime(prevTime => {
                        let newTime = prevTime+1;
                        if (newTime % howLongRoundTime){
                            const audio = new Audio(rest_between_set);
                            audio.play();
                            newTime = 0;
                            intervalRoundTimeRef.current = 0;
                            amountOfSetsFinished++
                        }
                        return newTime;
                    })
                } else {
                    setRoundTime(prevTime => {
                        let newTime = prevTime+1;
                        if(newTime % shortRestTime === 0){
                            const audio = new Audio(new_set);
                            audio.play();
                            newTime = 0;
                            intervalRoundTimeRef.current = 1;
                        }
                        return newTime;
                    })
                }
            } else {
                const audio = new Audio(you_can_rest_now);
                audio.play();
                clearInterval(intervalTotalTimerRef.current);
                clearInterval(intervalRoundTimeRef.current);
                intervalTotalTimerRef.current = 0;
                intervalRoundTimeRef.current = 1;
            }
    }


    function handleChange(event: React.ChangeEvent<HTMLInputElement>, setterFunction: (value: number) => void){
        if(Number(event.target.value)>0){
            setterFunction(Number(event.target.value));
        } 
    }

    return(
    <>
        <p>Total Tid: {totalTime} sekunder</p>
        <p>Set- och vilotid {roundTime}</p>
        <section>
            <br/>
            <span>Hur långt varje set ska vara</span>
            <input type='number' className="beepNumber" onChange={(event) => handleChange(event, setHowLongRoundTime)}></input>
            <span>Hur många set rundan ska vara</span>
            <input type='number' className="longRestNumber" onChange={(event) => handleChange(event, setAmountOfSetsToFinish)}></input>
            <span>Hur lång setvilan ska vara</span>
            <input type='number' className="shortRestNumber" onChange={(event) => handleChange(event, setShortRestTime)}></input>
            <button className="timer_btn" onClick={startTimer}>
                Start timer
            </button>
        </section>
        <section>
            <button className="paus_btn" onClick={pauseTimer}>
                Pausa timer 
            </button>
        </section>
        <section>
            <button className="stop_btn" onClick={stopTimer}>
                Stoppa och nollställa timer
            </button>
        </section>
    </>
    )
}

export default Timer;