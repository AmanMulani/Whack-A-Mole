import { useEffect, useState } from "react";

export function useCountdownHook(gameState: boolean, setGameState: Function) {

    const initialMinute = 2;
    const initialSeconds = 0;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    
    useEffect(() => {
        if(gameState === false) {
            reset();
            return;
        }
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval);
                    setGameState(false);
                    reset();
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
        };
    }, [gameState, minutes, seconds, setGameState]);

    const reset = () => {
        setMinutes(initialMinute);
        setSeconds(initialSeconds);
    }

    return {
        seconds,
        minutes,
    };
}