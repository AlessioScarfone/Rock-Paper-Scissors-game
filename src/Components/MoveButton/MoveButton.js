import React from 'react';
import styles from './MoveButton.module.scss';

const MoveButton = ({ img, customClass = [], type = "none", onClickHandler = () => { console.log("default handler") } }) => {
    return (
        <div className={[styles.MoveButton, ...customClass].join(' ')} data-type={type}>
            <button className={styles.btn} onClick={onClickHandler}>
                <div className={styles.img}>
                    {img ? <img className={styles.btnImg} src={img} alt="move"></img> : null}
                </div>
            </button>
        </div>
    );
}

export default MoveButton;
