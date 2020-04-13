import React from 'react';
import styles from './Header.module.scss'
import PointsCounter from '../PointsCounter/PointsCounter';
import logo from "../../assets/images/logo.svg";

const Header = ({points = 0}) => {
    return (
        <div className={styles.Header}>
            <img src={logo} alt="logo" className={styles.logo}></img>
            <PointsCounter points={points}></PointsCounter>
        </div>
    );
}

export default Header;
