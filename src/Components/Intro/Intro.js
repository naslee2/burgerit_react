import React from 'react';
import styles from '../Intro/Intro.module.css'

const intro = (props) => (
    <div id="intro" className={styles.Intro}>
        <div className={styles.Center}>
            <p className={styles.CenterTitle}>Burger-It</p>
            <h2 className={styles.CenterMotto}>Deliciousness Redefined</h2>
            <button className={styles.Button}>View Menu</button>
        </div>
    </div>
);

export default intro;