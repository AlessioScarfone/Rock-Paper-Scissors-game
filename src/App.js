import React, { useState } from 'react';
import styles from './App.module.scss';
import Header from './Components/Header/Header';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal';

function App() {

  const [showRulesModal, setShowRulesModal] = useState(false);

  const openModalHandler = () => {
    setShowRulesModal(!showRulesModal);
  }

  const closeModalHandler = () => {
    setShowRulesModal(false);
  }

  return (
    <div className={styles.App}>
      <Header></Header>
      <div className={styles.rulesBtnContainer}>
        <Button text="Rules" className={styles.rulesBtn} customCss={[styles.rulesBtn]} onClickHandler={openModalHandler}></Button>
      </div>
      {showRulesModal ? <Modal open={showRulesModal} onCloseHandler={closeModalHandler}></Modal> : null}
    </div>
  );
}

export default App;
