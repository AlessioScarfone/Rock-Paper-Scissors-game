import React from 'react';
import styles from './App.module.scss';
import Header from './Components/Header/Header';
import Button from './Components/Button/Button';

function App() {
  return (
    <div className={styles.App}>
      <Header></Header>
      <div className={styles.rulesBtnContainer}>
        <Button text="Rules" className={styles.rulesBtn} customCss={[styles.rulesBtn]}></Button>
      </div>
    </div>
  );
}

export default App;
