import React from 'react';
import Aux from '../Aux/Aux';
// import styles from './Layout.module.css';
import Navbar from '../Navbar/Navbar'
import MainIndex from '../MainIndex/MainIndex'

const layout = (props) => (
    <Aux>
        <Navbar/>
        <MainIndex/>
    </Aux>
);

export default layout;