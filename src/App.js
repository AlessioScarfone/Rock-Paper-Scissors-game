import React, { useState } from 'react';
import styles from './App.module.scss';
import Header from './Components/Header/Header';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal';
import MoveButton from './Components/MoveButton/MoveButton';

import rock from './assets/images/icon-rock.svg';
import scissors from './assets/images/icon-scissors.svg';
import paper from './assets/images/icon-paper.svg';

function App() {

  const [showRulesModal, setShowRulesModal] = useState(false);

  const openModalHandler = () => {
    setShowRulesModal(!showRulesModal);
  }

  const closeModalHandler = () => {
    setShowRulesModal(false);
  }

  const rockType = 'rock';
  const scissorsType = 'scissors';
  const paperType = 'paper';

  return (
    <div className={styles.App}>
      <Header></Header>
      <div className={styles.gameSectionBasic}>
        <MoveButton img={scissors} type={scissorsType} customClass={[styles.scissors]}></MoveButton>
        <MoveButton img={paper} type={paperType} customClass={[styles.paper]}></MoveButton>
        <MoveButton img={rock} type={rockType} customClass={[styles.rock]}></MoveButton>
      </div>
      <div className={styles.rulesBtnContainer}>
        <Button text="Rules" className={styles.rulesBtn} customCss={[styles.rulesBtn]} onClickHandler={openModalHandler}></Button>
      </div>
      {showRulesModal ? <Modal open={showRulesModal} onCloseHandler={closeModalHandler}></Modal> : null}
    </div>
  );
}

export default App;
