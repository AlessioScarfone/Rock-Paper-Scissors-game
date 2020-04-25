import React, { useState } from 'react';
import styles from './App.module.scss';
import Header from './Components/Header/Header';
import Button from './Components/Button/Button';
import Switch from './Components/Switch/Switch';
import Modal from './Components/Modal/Modal';

import Context from './Context';
import useRPSGame from './CustomHook/useRPSGame';
import MoveSelection from './Components/MoveSelection/MoveSelection';
import Match from './Components/Match/Match';

function App() {

  const [showRulesModal, setShowRulesModal] = useState(false);
  const [showMatch, setShowMatch] = useState(false);
  const [isBonusMode, setIsBonusMode] = useState(false); //state pass with context
  const [points, setPoints] = useState(0);
  const [playerMove, setPlayerMove, CPUmove, selectCPUMove, getResult, reset] = useRPSGame();

  const changeIsBonusMode = () => { setIsBonusMode(!isBonusMode) }

  const toggleModalHandler = () => {
    setShowRulesModal(!showRulesModal);
  }

  const onMoveClick = (type) => () => {
    setPlayerMove(type);
    console.log("Player choose:", type);
    setShowMatch(true);
  }

  const playAgainHandler = () => {
    reset();
    setShowMatch(false);
  }

  return (
    <Context.Provider value={{ 'isBonusMode': isBonusMode, 'changeIsBonusMode': changeIsBonusMode }}>
      <div className={styles.App}>
        <Header points={points}></Header>
        {!showMatch ?
          <MoveSelection onMoveClick={onMoveClick} /> :
          <Match playerMove={playerMove} CPUMove={CPUmove} selectCPUMove={selectCPUMove} setPoints={setPoints} getResult={getResult} playAgainHandler={playAgainHandler} />
        }
        <div className={styles.rulesBtnContainer}>
          {!showMatch ?<Switch></Switch> : <div></div> }
          <Button text="Rules" customCss={[styles.rulesBtn]} onClickHandler={toggleModalHandler}></Button>
        </div>
        {showRulesModal ? <Modal open={showRulesModal} onCloseHandler={toggleModalHandler}></Modal> : null}
      </div>
    </Context.Provider>
  );
}

export default App;
