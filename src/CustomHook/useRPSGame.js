import { useState } from "react"
import { RPSMove } from './Constants';

const useRPSGame = () => {

    const [move, setMove]= useState(undefined);

    const selectRandomMove = () => {
        //TODO: implement
    }

    const getResult = () => {
        //TODO: implement
    }

    return {
        setMove, 
        selectRandomMove,
        getResult
      }


}