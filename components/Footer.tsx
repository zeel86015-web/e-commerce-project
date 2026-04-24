import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brand}>
          <h2 className={styles.logo}>Joota <span className="text-gradient">Chappal</span></h2>
          <p className={styles.tagline}>Premium footwear for the modern era.</p>
        </div>
        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <h3>Shop</h3>
            <a href="#">Sneakers</a>
            <a href="#">Boots</a>
            <a href="#">Sandals</a>
          </div>
          <div className={styles.linkGroup}>
            <h3>Company</h3>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Joota Chappal. All rights reserved.</p>
      </div>
    </footer>
  );
}
