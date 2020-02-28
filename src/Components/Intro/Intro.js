import React from 'react';
import styles from '../Intro/Intro.module.css'

const intro = (props) => (
    <div className={styles.Intro}>
        <p>Burger-It</p>
        <p>Deliciousness Redefined</p>
        <button>View Menu</button>
    </div>
);

export default intro;