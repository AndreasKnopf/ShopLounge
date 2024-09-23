import React from "react";
import image404 from "../../assets/images/404-fehler.jpg";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>Die Seite konnte nicht gefunden werden!</h1>
      <div>
        <img src={image404} alt="404-Fehler" />
      </div>
    </div>
  );
}
