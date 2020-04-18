import React, { useContext } from 'react';
import styles from './Modal.module.scss'
import close from '../../assets/images/icon-close.svg';
import rules_basic from '../../assets/images/image-rules.svg';
import rules_bonus from '../../assets/images/image-rules-bonus.svg';
import Context from '../../Context';


const Modal = ({ onCloseHandler }) => {
    const  { isBonusMode } = useContext(Context);
    return (
        <>
            <div className={styles.modalBackdrop}></div>
            <div className={styles.Modal}>

                <div className={styles.modalHeader}>
                    <h2 className={styles.title}>RULES</h2>
                    <img src={close} alt="close" className={[styles.closeIcon, styles.desktop].join(' ')} onClick={onCloseHandler}></img>
                </div>

                <img src={isBonusMode ? rules_bonus : rules_basic} alt="rules" className={styles.rulesImg}></img>

                <img src={close} alt="close" className={[styles.closeIcon, styles.mobile].join(' ')} onClick={onCloseHandler}></img>
            </div>
        </>
    );
}

export default Modal;
