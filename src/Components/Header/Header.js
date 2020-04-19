import React, {useContext} from 'react';
import styles from './Header.module.scss'
import PointsCounter from '../PointsCounter/PointsCounter';
import logo from "../../assets/images/logo.svg";
import logoBonus from "../../assets/images/logo-bonus.svg";
import Context from '../../Context';

const Header = ({points = 0}) => {
    const { isBonusMode } = useContext(Context);

    return (
        <div className={styles.Header}>
            <img src={isBonusMode ? logoBonus : logo} alt="logo" className={styles.logo}></img>
            <PointsCounter points={points}></PointsCounter>
        </div>
    );
}

export default Header;
