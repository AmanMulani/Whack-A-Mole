import React from 'react'
import { TimerProps } from './types';

const Timer: React.FC<TimerProps> = ({minutes, seconds}) => {
    return (
        <div>
        { minutes === 0 && seconds === 0
            ? <h1>00:00</h1>
            : <h1> {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
        </div>
    )
}

export default Timer;