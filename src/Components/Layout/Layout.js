import React from 'react';
import Aux from '../Aux/Aux';
import styles from './Layout.module.css';

const layout = (props) => (
    <Aux>
        
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;