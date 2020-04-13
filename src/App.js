import React, { useState, useEffect, useCallback } from 'react';
import styles from './App.module.scss';
import Header from './Components/Header/Header';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal';
import MoveButton from './Components/MoveButton/MoveButton';

import rock from './assets/images/icon-rock.svg';
import scissors from './assets/images/icon-scissors.svg';
import paper from './assets/images/icon-paper.svg';
import { RPSMove, BeatMapOriginal } from './Constants';
import useRPSGame from './CustomHook/useRPSGame';

function App() {

  const [showRulesModal, setShowRulesModal] = useState(false);
  const [points, setPoints] = useState(0);
  const [playerMove, setPlayerMove, CPUmove, getCPUMove, getResult] = useRPSGame(BeatMapOriginal);

  const toggleModalHandler = () => {
    setShowRulesModal(!showRulesModal);
  }

  const onMoveClick = (type) => () => {
    setPlayerMove(type);
    console.log("Player choose:", type);
    let cpuMove = getCPUMove();
    console.log("CPU choose:", cpuMove);
  }

  const memoizedGetResult = useCallback(() => { 
    return getResult(); 
  }, [getResult]);

  useEffect(() => {
    if (playerMove && CPUmove) {
      let result = memoizedGetResult();
      console.log(result);
      setPoints(p => p + result);
    }
    return () => {
    };
  }, [playerMove, CPUmove, memoizedGetResult]);

  return (
    <div className={styles.App}>
      <Header points={points}></Header>
      <div className={styles.gameSectionBasic}>
        <MoveButton img={scissors} moveType={RPSMove.scissors} customClass={[styles.scissors]} onClick={onMoveClick(RPSMove.scissors)}></MoveButton>
        <MoveButton img={paper} moveType={RPSMove.paper} customClass={[styles.paper]} onClick={onMoveClick(RPSMove.paper)}></MoveButton>
        <MoveButton img={rock} moveType={RPSMove.rock} customClass={[styles.rock]} onClick={onMoveClick(RPSMove.rock)}></MoveButton>
      </div>
      <div className={styles.rulesBtnContainer}>
        <Button text="Rules" className={styles.rulesBtn} customCss={[styles.rulesBtn]} onClickHandler={toggleModalHandler}></Button>
      </div>
      {showRulesModal ? <Modal open={showRulesModal} onCloseHandler={toggleModalHandler}></Modal> : null}
    </div>
  );
}

export default App;
