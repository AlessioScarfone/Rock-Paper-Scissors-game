import { useState, useCallback } from "react"
// import { RPSMove } from '../Constants';

export default function useRPSGame(beatMap) {

    const [playerMove, setPlayerMove] = useState();
    const [CPUmove, setCPUMove] = useState();

    const selectCPUMove = useCallback(() => {
        const keys = Array.from(beatMap.keys());
        const elementCount = keys.length;
        let random = Math.floor(Math.random() * elementCount);
        const cpuMove = keys[random];
        setCPUMove(cpuMove);
        return cpuMove;
    }, [beatMap])

    const reset = useCallback(() => {
        setCPUMove("");
        setPlayerMove("")
    }, []);

    const getResult = useCallback(
        () => {
            console.log("get Result:", playerMove, CPUmove);
            console.log("PLAYER BEAT MAP:", beatMap.get(playerMove));
            console.log("CPU BEAT MAP:", beatMap.get(CPUmove));
            if (!playerMove || !CPUmove)
                throw new Error("Set move before");
            else {
                let res = 0;
                if (beatMap.get(CPUmove) === playerMove)
                    res = -1
                if (beatMap.get(playerMove) === CPUmove)
                    res = 1;
                return res;
            }
        },
        [CPUmove, playerMove, beatMap],
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
