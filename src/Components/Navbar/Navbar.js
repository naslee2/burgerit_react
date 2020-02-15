import React from 'react';
import styles from '../Navbar/Navbar.module.css'

const navbar = (props) => (
    <header>
        <nav>
            <ul>
                <li><a>Burger-It</a></li>
                <li><a>Our Work</a></li>
                <li><a>Menu</a></li>
                <li><a>Contact</a></li>
            </ul>
        </nav>
    </header>
);

export default navbar;