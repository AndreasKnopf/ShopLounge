import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import styles from "./Checkout.module.css";

const Checkout = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className={styles.checkoutWrapper}>
      <h2>Bestellung abgeschlossen</h2>
      <p>
        Vielen Dank, {loggedInUser?.firstName} {loggedInUser?.lastName} für den Kauf bei SHOP LOUNGE.
      </p>
      <p>Ihre Bestellung wird verarbeitet und in den nächsten Tagen zugestellt.</p>
    </div>
  );
};

export default Checkout;
