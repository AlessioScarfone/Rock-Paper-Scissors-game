import React, { useContext } from 'react';
import styles from './MoveSelection.module.scss'
import MoveButton from '../MoveButton/MoveButton';
import { RPSMove } from '../../Constants';
import rock from '../../assets/images/icon-rock.svg';
import scissors from '../../assets/images/icon-scissors.svg';
import paper from '../../assets/images/icon-paper.svg';
import spock from '../../assets/images/icon-spock.svg';
import lizard from '../../assets/images/icon-lizard.svg';
import Context from '../../Context';

const MoveSelection = ({ onMoveClick }) => {

    const { isBonusMode } = useContext(Context);

    return (
        <div className={isBonusMode ? styles.MoveSection + " " + styles.MoveSectionBonus : styles.MoveSection}>
            <MoveButton img={scissors} moveType={RPSMove.scissors} customClass={isBonusMode ? [styles.scissors, styles.bonus] : [styles.scissors]} onClick={onMoveClick(RPSMove.scissors)}></MoveButton>
            <MoveButton img={paper} moveType={RPSMove.paper} customClass={isBonusMode ? [styles.paper, styles.bonus] : [styles.paper]} onClick={onMoveClick(RPSMove.paper)}></MoveButton>
            <MoveButton img={rock} moveType={RPSMove.rock} customClass={isBonusMode ? [styles.rock, styles.bonus] : [styles.rock]} onClick={onMoveClick(RPSMove.rock)}></MoveButton>
            {isBonusMode ? <MoveButton img={spock} moveType={RPSMove.spock} customClass={[styles.spock]} onClick={onMoveClick(RPSMove.spock)}></MoveButton> : null}
            {isBonusMode ? <MoveButton img={lizard} moveType={RPSMove.lizard} customClass={[styles.lizard]} onClick={onMoveClick(RPSMove.lizard)}></MoveButton> : null}
        </div>
    )
};


export default MoveSelection;
