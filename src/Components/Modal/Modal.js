import React from 'react';
import styles from './Modal.module.scss'
import close from '../../assets/images/icon-close.svg';
import rules_basic from '../../assets/images/image-rules.svg';

const Modal = ({ onCloseHandler }) => {
    return (
        <>
            <div className={styles.modalBackdrop}></div>
            <div className={styles.Modal}>

                <div className={styles.modalHeader}>
                    <h2 className={styles.title}>RULES</h2>
                    <img src={close} alt="close" className={[styles.closeIcon, styles.desktop].join(' ')} onClick={onCloseHandler}></img>
                </div>

                <img src={rules_basic} alt="rules" className={styles.rulesImg}></img>

                <img src={close} alt="close" className={[styles.closeIcon, styles.mobile].join(' ')} onClick={onCloseHandler}></img>
            </div>
        </>
    );
}

export default Modal;
