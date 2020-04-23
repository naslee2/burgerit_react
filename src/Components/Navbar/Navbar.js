import React from 'react';
import styles from '../Navbar/Navbar.module.css'
import { Link, animateScroll as scroll } from "react-scroll";

// scrollToTop = () => {
//     scroll.scrollToTop();
//   };

const navbar = (props) => (
    <header className={styles.Navbar}>
        <nav>
            <ul className={styles.NavbarList}>
                <li className={styles.NavbarBurgerIt}><a href="intro"><Link activeClass="active" to="intro" spy={true} smooth={true} offset={0} duration={500}>Burger-It</Link></a></li>
                <li><a href="about"><Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>Our Work</Link></a></li>
                <li><a href="menu"><Link activeClass="active" to="menu" spy={true} smooth={true} offset={0} duration={500}>Menu</Link></a></li>
                <li><a href="contact"><Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact
                </Link></a></li>
            </ul>
        </nav>
    </header>
);

export default navbar;