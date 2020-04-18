import { useState, useCallback } from "react"

import { BeatMapBonus } from '../Constants';

export default function useRPSGame() {

    const [playerMove, setPlayerMove] = useState();
    const [CPUmove, setCPUMove] = useState();

    const selectCPUMove = useCallback(() => {
        const keys = Array.from(BeatMapBonus.keys());
        const elementCount = keys.length;
        let random = Math.floor(Math.random() * elementCount);
        const cpuMove = keys[random];
        setCPUMove(cpuMove);
        return cpuMove;
    }, [])

    const reset = useCallback(() => {
        setCPUMove("");
        setPlayerMove("")
    }, []);

    const getResult = useCallback(
        () => {
            console.log("get Result:", playerMove, CPUmove);
            console.log("PLAYER BEAT MAP:", BeatMapBonus.get(playerMove));
            console.log("CPU BEAT MAP:", BeatMapBonus.get(CPUmove));
            if (!playerMove || !CPUmove)
                throw new Error("Set move before");
            else {
                let res = 0;
                if (BeatMapBonus.get(CPUmove).includes(playerMove))
                    res = -1
                if (BeatMapBonus.get(playerMove).includes(CPUmove))
                    res = 1;
                return res;
            }
        },
        [CPUmove, playerMove],
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
