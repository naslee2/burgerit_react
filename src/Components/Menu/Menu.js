import React from 'react';
import styles from '../Menu/Menu.module.css'

const menu = (props) =>(
    <div className={styles.Menu}>
        <p>Burger-It</p>
        <p>New to Burger-It? We recommend our original, Burger-It, made from 100% Kobe Beef and smothered with our in-house onion jam</p>
        <p>Nutrition: 4500 kcal</p>
        <p>Daily Sodium Intake: 500%</p>
    </div>
);

export default menu;