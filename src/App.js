import React, { useState, useEffect, useCallback } from 'react';
import styles from './App.module.scss';
import Header from './Components/Header/Header';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal';

import { BeatMapOriginal } from './Constants';
import useRPSGame from './CustomHook/useRPSGame';
import MoveSelection from './Components/MoveSelection/MoveSelection';
import Match from './Components/Match/Match';

function App() {

  const [showRulesModal, setShowRulesModal] = useState(false);
  const [showMatch, setShowMatch] = useState(false);
  const [points, setPoints] = useState(0);
  const [playerMove, setPlayerMove, CPUmove, selectCPUMove, getResult] = useRPSGame(BeatMapOriginal);

  const toggleModalHandler = () => {
    setShowRulesModal(!showRulesModal);
  }

  const onMoveClick = (type) => () => {
    setPlayerMove(type);
    console.log("Player choose:", type);
    // let cpuMove = selectCPUMove();
    // console.log("CPU choose:", cpuMove);
    setShowMatch(true);
  }

  // useEffect(() => {
  //   if (playerMove && CPUmove)
  //     setShowMatch(true);
  //   return () => { };
  // }, [playerMove, CPUmove]);

  // useEffect(() => {
  //   if (playerMove && CPUmove) {
  //     let result = memoizedGetResult();
  //     console.log(result);
  //     setPoints(p => p + result);
  //   }
  //   return () => {
  //   };
  // }, [playerMove, CPUmove, memoizedGetResult]);

  return (
    <div className={styles.App}>
      <Header points={points}></Header>
      {!showMatch ?
        <MoveSelection onMoveClick={onMoveClick} /> : 
        <Match playerMove={playerMove} CPUMove={CPUmove} selectCPUMove={selectCPUMove}/>
      }
      <div className={styles.rulesBtnContainer}>
        <Button text="Rules" className={styles.rulesBtn} customCss={[styles.rulesBtn]} onClickHandler={toggleModalHandler}></Button>
      </div>
      {showRulesModal ? <Modal open={showRulesModal} onCloseHandler={toggleModalHandler}></Modal> : null}
    </div>
  );
}

export default App;
