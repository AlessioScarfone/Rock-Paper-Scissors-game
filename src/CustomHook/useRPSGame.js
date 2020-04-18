import { useState, useCallback, useContext } from "react"

import Context from '../Context';
import { BeatMapOriginal,BeatMapBonus } from '../Constants';



export default function useRPSGame() {
    const  { isBonusMode } = useContext(Context);

    const [playerMove, setPlayerMove] = useState();
    const [CPUmove, setCPUMove] = useState();

    const selectCPUMove = useCallback(() => {
        const keys = isBonusMode ? Array.from(BeatMapBonus.keys()) :  Array.from(BeatMapOriginal.keys());
        const elementCount = keys.length;
        let random = Math.floor(Math.random() * elementCount);
        const cpuMove = keys[random];
        setCPUMove(cpuMove);
        return cpuMove;
    }, [isBonusMode])

    const reset = useCallback(() => {
        setCPUMove("");
        setPlayerMove("")
    }, []);

    const getResult = useCallback(
        () => {
            const beatMap = isBonusMode ? BeatMapBonus : BeatMapOriginal;
            console.log("get Result:", playerMove, CPUmove);
            console.log("PLAYER BEAT MAP:", beatMap.get(playerMove));
            console.log("CPU BEAT MAP:", beatMap.get(CPUmove));
            if (!playerMove || !CPUmove)
                throw new Error("Set move before");
            else {
                let res = 0;
                if (beatMap.get(CPUmove).includes(playerMove))
                    res = -1
                if (beatMap.get(playerMove).includes(CPUmove))
                    res = 1;
                return res;
            }
        },
        [CPUmove, playerMove, isBonusMode],
    );


    return [
        playerMove,
        setPlayerMove,
        CPUmove,
        selectCPUMove,
        getResult,
        reset
    ];
}
