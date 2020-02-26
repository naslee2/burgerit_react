import React from 'react';
import styles from '../MainIndex/MainIndex.module.css'
import Intro from '../Intro/Intro'
import About from '../About/About'
import Menu from '../Menu/Menu'
import Contact from '../Contact/Contact'

const mainindex = (props) => (
    <main className={styles.Main}>
        <Intro/>
        <About/>
        <Menu/>
        <Contact/>
    </main>
);

export default mainindex;