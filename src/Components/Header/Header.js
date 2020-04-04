import React from 'react';
import styles from './Header.module.scss'
import PointsCounter from '../PointsCounter/PointsCounter';
import logo from "../../assets/images/logo.svg";

const Header = () => {
    return (
        <div className={styles.Header}>
            <img src={logo} alt="logo" className={styles.logo}></img>
            <PointsCounter points="12"></PointsCounter>
        </div>
    );
}

export default Header;
