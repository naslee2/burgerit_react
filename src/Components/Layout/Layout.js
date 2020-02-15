import React from 'react';
import Aux from '../Aux/Aux';
import styles from './Layout.module.css';
import Navbar from '../Navbar/Navbar'

const layout = (props) => (
    <Aux>
        <Navbar/>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;