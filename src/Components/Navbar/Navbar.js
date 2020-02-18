import React from 'react';
import styles from '../Navbar/Navbar.module.css'

const navbar = (props) => (
    <header className={styles.Navbar}>
        <nav>
            <ul className={styles.NavbarList}>
                <li><a href="#test">Burger-It</a></li>
                <li><a href="#test">Our Work</a></li>
                <li><a href="#test">Menu</a></li>
                <li><a href="#test">Contact</a></li>
            </ul>
        </nav>
    </header>
);

export default navbar;