import React from 'react';
import styles from '../Menu/Menu.module.css'

const menu = (props) =>(
    <div className={styles.Menu}>
        <div  className={styles.Menu2}>
            <p className={styles.Menu2Logo}>Burger-It</p>
            <p className={styles.Menu2Recommendation}>New to Burger-It? We recommend our original, Burger-It, made from 100% Kobe Beef and smothered with our in-house onion jam</p>
            <p className={styles.Menu2Nutrition1}>Nutrition: 4500 kcal</p>
            <p className={styles.Menu2Nutrition2}>Daily Sodium Intake: 500%</p>
        </div>
    </div>
);

export default menu;