import timer_logo from './assets/timer_logo.png'
import { useNavigate } from 'react-router-dom';

function Logo(){
    const navigate = useNavigate();

    function handleClick() {
        navigate('/timer');
    }

    return(
    <h1>
        Welcome to the Timer
        <button onClick={handleClick}className='logo_btn'>
            <img src={timer_logo} className="timer_logo" alt="timer_logo" />
        </button>
    </h1>
    )
}

export default Logo