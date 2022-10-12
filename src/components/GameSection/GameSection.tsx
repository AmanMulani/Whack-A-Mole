import Timer from "../Timer/Timer";
import { WithStyle } from "../../utils/WithStyle";
import { Board } from "../Board/Board";
import * as Styled from "./GameSection.styles";
import React, { useContext, useEffect, useState } from "react";
import { initialConfig } from "../../utils/boardConfig";
import { ScoreContext } from "./ScoreContext";
import { useCountdownHook } from "../../hooks/useCountdownHook";
import { useMoleBoardUpdateHook } from "../../hooks/useMoleBoardUpdateHook";



const Component: React.FC = () => {

    const [gameState, setGameState] = useState(false);
    
    //Custom Hooks
    const {seconds, minutes} = useCountdownHook(gameState, setGameState);
    const boardConfiguration = useMoleBoardUpdateHook(gameState, initialConfig);

    const {score, updateScore} = useContext(ScoreContext);

    useEffect(() => {
        if(!gameState) {
            updateScore('reset');
        }
    }, [gameState, updateScore]);

    const handleReset = () => {
        setGameState(!gameState);
    }

    return (
        <div>
            <Styled.GameHeader>
                <Timer seconds={seconds} minutes={minutes} isActive={gameState}/>
                <h2>Score: {score}</h2>
            </Styled.GameHeader>
            <Styled.GameSectionItem>
                <Board boardSize={3} boardConfiguration={boardConfiguration}/>
            </Styled.GameSectionItem>
            <Styled.GameSectionItem>
                <Styled.Button onClick={handleReset}>
                    {gameState ? "Stop" : "Start"}
                </Styled.Button>
            </Styled.GameSectionItem>
        </div>
    );
}

export const GameSection: React.FC & WithStyle = Object.assign(Component, {Style: Styled.GameHeader});