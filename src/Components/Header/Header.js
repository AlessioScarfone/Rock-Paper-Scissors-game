import React from 'react';
import styles from './Header.module.scss'
import PointsCounter from '../PointsCounter/PointsCounter';

const Header = () => {
    return (
        <div className={styles.Header}>
            <img src='../../../public-assets/images/logo.svg' alt="logo" className={styles.logo}></img>
            <PointsCounter points="12"></PointsCounter>
        </div>
    );
}

export default Header;
