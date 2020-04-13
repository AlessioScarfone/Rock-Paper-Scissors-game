import React from 'react';
import styles from './MoveSelection.module.scss'
import MoveButton from '../MoveButton/MoveButton';
import { RPSMove } from '../../Constants';
import rock from '../../assets/images/icon-rock.svg';
import scissors from '../../assets/images/icon-scissors.svg';
import paper from '../../assets/images/icon-paper.svg';

const MoveSelection = ({ onMoveClick, type = 'basic' }) => {
    return (
        <>
            {type === "basic" ?
                <div className={styles.MoveSectionBasic}>
                    <MoveButton img={scissors} moveType={RPSMove.scissors} customClass={[styles.scissors]} onClick={onMoveClick(RPSMove.scissors)}></MoveButton>
                    <MoveButton img={paper} moveType={RPSMove.paper} customClass={[styles.paper]} onClick={onMoveClick(RPSMove.paper)}></MoveButton>
                    <MoveButton img={rock} moveType={RPSMove.rock} customClass={[styles.rock]} onClick={onMoveClick(RPSMove.rock)}></MoveButton>
                </div> :
                <p>SPECIAL WIP</p>}
        </>
    )
};


export default MoveSelection;
