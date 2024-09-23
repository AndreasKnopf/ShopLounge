import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header>
      <nav>
        <div className={styles.navbarLeft}>
          <Link to="/">
            <i className="fa-brands fa-shopify"></i>Shop Lounge
          </Link>
        </div>
        <div className={styles.navbarCenter}>
          <input type="text" className={styles.searchInput} placeholder="Suche..." />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className={styles.navbarRight}>
          <div className={styles.loginItem}>
            <Link to="/login">
              <i className="fa-solid fa-user"></i>
              <span>Anmelden</span>
            </Link>
          </div>
          <i className="fa-solid fa-heart"></i>
          <div className={styles.cartItem}>
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping">
                {totalItems > 0 && <span className={styles.cartCount}>( {totalItems} )</span>}
              </i>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}