import React from 'react';
import styles from '../About/About.module.css'

const about = (props) => (
    <div className={styles.About}>
        <div className={styles.AboutInfo}>
            <p>We follow a single concept, providing fresh ingredients for fresh burgers. Starting with local wheat freshly sourced on a daily basis.</p>
        </div>
    </div>
);

export default about;