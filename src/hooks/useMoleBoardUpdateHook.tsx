import { useEffect, useState } from "react";
import { getNewMoleBoardState } from "../utils/boardConfig";

export function useMoleBoardUpdateHook(gameState: boolean, initialConfig: boolean[][]) {

    const [boardConfiguration, setBoardConfiguration] = useState<boolean[][]>(initialConfig);
    const [moleTimeout, setMoleTimeout] = useState(0);

    useEffect(() => {
        if(gameState) {
            setTimeout(()=> {
                const newConfig = getNewMoleBoardState();
                setBoardConfiguration(newConfig);
                setMoleTimeout(moleTimeout + 1);
            }, 700);
        } else {
            setBoardConfiguration(initialConfig);
        }
    }, [gameState, moleTimeout, boardConfiguration, initialConfig]);

    return boardConfiguration;

}