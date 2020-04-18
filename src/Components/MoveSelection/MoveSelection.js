import React from 'react';
import styles from './MoveSelection.module.scss'
import MoveButton from '../MoveButton/MoveButton';
import { RPSMove } from '../../Constants';
import rock from '../../assets/images/icon-rock.svg';
import scissors from '../../assets/images/icon-scissors.svg';
import paper from '../../assets/images/icon-paper.svg';
import spock from '../../assets/images/icon-spock.svg';
import lizard from '../../assets/images/icon-lizard.svg';

const MoveSelection = ({ onMoveClick, type = 'basic' }) => {
    return (
        <>
            {type === "bonus" ?
                <div className={styles.MoveSectionBasic}>
                    <MoveButton img={scissors} moveType={RPSMove.scissors} customClass={[styles.scissors]} onClick={onMoveClick(RPSMove.scissors)}></MoveButton>
                    <MoveButton img={paper} moveType={RPSMove.paper} customClass={[styles.paper]} onClick={onMoveClick(RPSMove.paper)}></MoveButton>
                    <MoveButton img={rock} moveType={RPSMove.rock} customClass={[styles.rock]} onClick={onMoveClick(RPSMove.rock)}></MoveButton>
                    <MoveButton img={spock} moveType={RPSMove.spock} customClass={[styles.spock]} onClick={onMoveClick(RPSMove.spock)}></MoveButton>
                    <MoveButton img={lizard} moveType={RPSMove.lizard} customClass={[styles.lizard]} onClick={onMoveClick(RPSMove.lizard)}></MoveButton>
                </div> :
                <div className={styles.MoveSectionBonus}>
                    <MoveButton img={scissors} moveType={RPSMove.scissors} customClass={[styles.scissors]} onClick={onMoveClick(RPSMove.scissors)}></MoveButton>
                    <MoveButton img={paper} moveType={RPSMove.paper} customClass={[styles.paper]} onClick={onMoveClick(RPSMove.paper)}></MoveButton>
                    <MoveButton img={rock} moveType={RPSMove.rock} customClass={[styles.rock]} onClick={onMoveClick(RPSMove.rock)}></MoveButton>
                </div>}
        </>
    )
};


export default MoveSelection;
