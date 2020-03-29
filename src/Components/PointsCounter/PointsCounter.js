import React from 'react';
import styles from './PointsCounter.module.scss'

const PointsCounter = ({points}) => {
    return (
        <div className={styles.PointsCounter}>
            <span className={styles.label}>SCORE</span>
            <span className={styles.score}>{points}</span>
        </div>
    );
}

export default PointsCounter;
