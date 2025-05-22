import styles from "./Footer.module.css"


const Footer = () => {
    
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.name}>
                    Banmano
                </div>
                <div className={styles.contactUs}>
                <div className={styles.contactInfo}>
                    <h3>Contact Us</h3>
                    <p>Email: info@banmano.com</p>
                    <p>Phone: +1 234 567 890</p>
                    <p>Address: 123 Banmano Street, City, Country</p>
                </div>
                <div className={styles.socialLinks}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
                <div className={styles.copywrite}>
                <p>&copy; {new Date().getFullYear()} Banmano. All rights reserved.</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;