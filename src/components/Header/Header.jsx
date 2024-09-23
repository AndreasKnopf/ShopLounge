import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const { cartItems } = useContext(CartContext);
  const { loggedInUser, logoutUser } = useContext(UserContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <nav>
        <div className={styles.navbarLeft}>
          <Link to="/">
            <i className="fa-regular fa-image"></i>Shop Lounge
          </Link>
        </div>
        <div className={styles.navbarCenter}>
          <input type="text" className={styles.searchInput} placeholder="Suche..." />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className={styles.navbarRight}>
          <div className={styles.loginItem}>
            {loggedInUser ? (
              <div className={styles.userMenu} onClick={toggleDropdown}>
                <i className="fa-solid fa-user"></i>
                <span>Hallo, {loggedInUser.firstName}</span>
                {isDropdownOpen && (
                  <div className={styles.dropdownMenu}>
                    <button onClick={logoutUser}>Abmelden</button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login">
                <i className="fa-solid fa-user"></i>
                <span>Anmelden</span>
              </Link>
            )}
          </div>
          <Link to="/favourites">
            <i className="fa-solid fa-heart"></i>
          </Link>
          <div className={styles.cartItem}>
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping">
                {totalItems > 0 ? (
                  <span className={styles.cartCountLight}>({totalItems})</span>
                ) : (
                  <span className={styles.cartCountDark}>({totalItems})</span>
                )}
              </i>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
