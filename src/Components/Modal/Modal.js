import React from 'react';
import styles from './Modal.module.scss'

const Modal = ({onCloseHandler}) => {
    return (
        <div className={styles.Modal}>
            <div className={styles.modalHeader}>
                <h2 className={styles.title}>RULES</h2>
                <img src='../../../public-assets/images/icon-close.svg' alt="close-icon" className={[styles.closeIcon,styles.desktop].join(' ')} onClick={onCloseHandler}></img>
            </div>

            <img src='../../../public-assets/images/image-rules.svg' alt="rules" className={styles.rulesImg}></img>

            <img src='../../../public-assets/images/icon-close.svg' alt="close-icon" className={[styles.closeIcon,styles.mobile].join(' ')} onClick={onCloseHandler}></img>
        </div>
    );
}

export default Modal;
