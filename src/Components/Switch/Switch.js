import React, { useContext } from 'react';
import styles from './Switch.module.scss';
import Context from '../../Context';

const Switch = ({ label = "", onClickHandler = undefined }) => {
    const context = useContext(Context);

    return (
        <span className={styles.SwitchContainer}>
            <label className={styles.switch}>
                <input type="checkbox" onClick={onClickHandler ? onClickHandler : context.changeIsBonusMode} />
                <span className={styles.slider}></span>
            </label>
            <span className={styles.label}>Bonus Mode</span>
        </span>
    );
}


export default Switch;
