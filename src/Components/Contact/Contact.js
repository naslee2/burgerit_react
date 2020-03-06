import React from 'react';
import styles from '../Contact/Contact.module.css'

const contact = (props) => (
    <div className={styles.Contact}>
        <div className={styles.ContactInfo}>
            <p>Free Today? How about tomorrow?</p>
            <p>We'll be here, 24/7</p>
            <p>123 Fake Street, Springfield USA</p>
            <p>234-555-8008</p>
        </div>
    </div>
);

export default contact;