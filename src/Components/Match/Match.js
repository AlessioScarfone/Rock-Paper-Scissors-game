import React, { useEffect } from 'react';
import styles from './Match.module.scss';
import { RPSMove } from '../../Constants';
import MoveButton from '../MoveButton/MoveButton';

import rock from '../../assets/images/icon-rock.svg';
import scissors from '../../assets/images/icon-scissors.svg';
import paper from '../../assets/images/icon-paper.svg';

const Match = ({ playerMove, CPUMove, selectCPUMove }) => {

    useEffect(() => {
        setTimeout(() => {
            if (playerMove) {
                let cpuMove = selectCPUMove();
                console.log("CPU choose:", cpuMove);
            }
        }, 1000);
        return () => { };
    }, [selectCPUMove, playerMove]);

    return (
        <div className={styles.Match}>
            <div>
                {playerMove === RPSMove.paper ? <MoveButton img={paper} moveType={RPSMove.paper} onClick={() => null}></MoveButton> : null}
                {playerMove === RPSMove.scissors ? <MoveButton img={scissors} moveType={RPSMove.scissors} onClick={() => null}></MoveButton> : null}
                {playerMove === RPSMove.rock ? <MoveButton img={rock} moveType={RPSMove.rock} onClick={() => null}></MoveButton> : null}
            </div>

            <div>
                {!CPUMove ? <div className={styles.emptyMove}></div>: null}
                {CPUMove === RPSMove.paper ? <MoveButton img={paper} moveType={RPSMove.paper} onClick={() => null}></MoveButton> : null}
                {CPUMove === RPSMove.scissors ? <MoveButton img={scissors} moveType={RPSMove.scissors} onClick={() => null}></MoveButton> : null}
                {CPUMove === RPSMove.rock ? <MoveButton img={rock} moveType={RPSMove.rock} onClick={() => null}></MoveButton> : null}
            </div>
        </div>
    );
}

export default Match;
