import React from 'react';
import styles from '../Intro/Intro.module.css'

const intro = (props) => (
    <div className={styles.Intro}>
        <div className={styles.Center}>
            <p className={styles.CenterTitle}>Burger-It</p>
            <p className={styles.CenterMotto}>Deliciousness Redefined</p>
            <button>View Menu</button>
        </div>
    </div>
);

export default intro;