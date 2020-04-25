import React, { useContext } from 'react';
import styles from './Switch.module.scss';
import Context from '../../Context';

const Switch = ({ label = "Bonus Mode", onClickHandler = undefined }) => {
    const context = useContext(Context);

    return (
        <span className={styles.SwitchContainer}>
            <label className={styles.switch}>
                <input defaultChecked={context.isBonusMode} type="checkbox" onClick={onClickHandler ? onClickHandler : context.changeIsBonusMode} />
                <span className={styles.slider}></span>
            </label>
            <span className={styles.label}>{label}</span>
        </span>
    );
}


export default Switch;
