import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <h3>Contact Us</h3>
          <p>
            <i className="fa-solid fa-paper-plane"></i>
            <Link to="mailto:info@example.de">info@shop-lounge.de</Link>
          </p>
          <p>
            <i className="fa-solid fa-phone"></i>+49 1234 56789
          </p>
          <p>
            <i className="fa-solid fa-location-dot"></i>
            Zum Testweg 10 | 70123 Musterhausen
          </p>
        </div>
        <div className={styles.footerContent}>
          <h3>Quick Links</h3>
          <Link to="" className={styles.impressum}>
            Datenschutz
          </Link>
          <Link to="" className={styles.impressum}>
            Impressum
          </Link>
        </div>
        <div className={styles.footerContent}>
          <h3>Follow Us</h3>
          <ul>
            <li>
              <Link to="https://www.facebook.com/" target="_blank">
                <i className="fa-brands fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com" target="_blank">
                <i className="fa-brands fa-x-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            </li>
            <li>
              <Link to="https://www.youtube.com/" target="_blank">
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>
          &copy; 2024 SHOP LOUNGE
          <br />
        </p>
      </div>
    </footer>
  );
}
