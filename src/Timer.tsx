// import { useRef, useState } from "react";
// import mm_vaniljsas from './audio/mm_vanlijsas.ogg';
// //import you_can_rest_now from './audio/you_can_rest_now.mp3';
// function Timer(){

//     // const [totalTime, setTotalTime] = useState(0);
//     // const [restTime, setRestTime] = useState(0);
//     const intervalTimerRef = useRef(0);
//     //const intervalRestTimerRef = useRef(0);
//     const [beepNumber, setBeepNumber] = useState(0);
//     // const [longRestNumber, setLongRestNumber] = useState(0);
//     // const [shortRestTime, setShortRestTime] = useState(0);

//     function startTimer(){
//         if(intervalTimerRef.current === 0){
//             intervalTimerRef.current = setInterval(increaseTimeCounterByOne, 1000);
//         }
//     }

//     // function startRestTimer(){
//     //     if(intervalRestTimerRef.current === 0){
//     //         intervalRestTimerRef.current = setInterval(increaseRestCounterByOne, 1000);
//     //     }
//     // }

//     function pauseTimer(){
//         clearInterval(intervalTimerRef.current);
//         intervalTimerRef.current = 0;
//     }

//     function stopTimer(){
//         clearInterval(intervalTimerRef.current);
//         intervalTimerRef.current = 0;
//         setTotalTime(0);
//     }
    
//     function increaseTimeCounterByOne(){

//         setTotalTime(prevTime => {
//             const newTime = prevTime+1;
//             // if (newTime % restNumber === 0){
//             //     const audio = new Audio(you_can_rest_now);
//             //     audio.play();
//             //     clearInterval(intervalRef.current);
//             //     intervalRef.current = 0;
//             //     return newTime;
//             // }
//             if (newTime % beepNumber === 0){
//                 const audio = new Audio(mm_vaniljsas);
//                 audio.play();
//             }
//             return newTime;
//         });
//     }

//     function increaseRestCounterByOne(){
        
//     }

//     function handleBeepChange(event: React.ChangeEvent<HTMLInputElement>){
//         if(Number(event.target.value)>0){
//             setBeepNumber(Number(event.target.value));
//         } 
//     }

//     function handleLongRestChange(event: React.ChangeEvent<HTMLInputElement>){
//         if(Number(event.target.value)>0){
//             setLongRestNumber(Number(event.target.value));
//         } 
//     }

//     function handleShortRestChange(event: React.ChangeEvent<HTMLInputElement>){
//         if(Number(event.target.value)>0){
//             setLongRestNumber(Number(event.target.value));
//         } 
//     }

//     return(
//     <>
//         <p>Tid: {time} sekunder</p>
//         <section>
//             <br/>
//             <span>Intervallet för beep-ljud</span>
//             <input type='number' className="beepNumber" onChange={handleBeepChange}></input>
//             <span>Hur många set rundan ska vara</span>
//             <input type='number' className="longRestNumber" onChange={handleLongRestChange}></input>
//             <span>Hur lång setvilan ska vara</span>
//             <input type='number' className="shortRestNumber" onChange={handleShortRestChange}></input>
//             <button className="timer_btn" onClick={startTimer}>
//                 Start timer
//             </button>
//         </section>
//         <section>
//             <button className="paus_btn" onClick={pauseTimer}>
//                 Pausa timer 
//             </button>
//         </section>
//         <section>
//             <button className="stop_btn" onClick={stopTimer}>
//                 Stoppa och nollställa timer
//             </button>
//         </section>
//     </>
//     )
// }

// export default Timer;