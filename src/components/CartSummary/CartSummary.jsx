import React from "react";
import styles from "./CartSummary.module.css";

export default function CartSummary({ totalItems, totalPrice }) {
  return (
    <div className={styles.cartSummary}>
      <h2>Zusammenfassung:</h2>
      <p>Gesamtanzahl der Produkte: {totalItems}</p>
      <p>
        Gesamtpreis: <strong>{totalPrice} €</strong>
      </p>
      <button className={styles.checkoutButton}>Kauf abschließen</button>
    </div>
  );
}
