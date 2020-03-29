import React from 'react';
import styles from './Button.module.scss'

const Button = ({ text, onClickHandler, customCss }) => {
    return (
        <button className={[styles.Button, ...customCss].join(' ')} onClick={onClickHandler}>
            {text}
        </button>
    );
}


Button.defaultProps = {
    onClickHandler: () => { console.log("Default click handler") },
    customCss: []
}

export default Button;
