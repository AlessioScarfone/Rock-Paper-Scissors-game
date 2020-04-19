import React from 'react';
import styles from './MoveButton.module.scss';

const MoveButton = ({ img, customClass = [], moveType = "none", onClick = () => { console.log("default handler") }, ...props }) => {
    return (
        <div className={[styles.MoveButton, ...customClass].join(' ')} data-type={moveType}>
            <button className={styles.btn} onClick={onClick}>
                <span className={styles.img}>
                    {img ? <img className={styles.btnImg} src={img} alt="move"></img> : null}
                </span>
            </button>
        </div>
    );
}

export default MoveButton;
