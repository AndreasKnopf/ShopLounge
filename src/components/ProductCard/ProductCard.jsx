import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const [currentImage, setCurrentImage] = useState(product.image1);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setCurrentImage(product.image2);
  };

  const handleMouseLeave = () => {
    setCurrentImage(product.image1);
  };

  const handleClick = () => {
    navigate(`/product/${product.itemNumber}`);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.imageBox} onClick={handleClick}>
        <img
          src={currentImage}
          alt={product.productName}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className={styles.title}>
        <h2>{product.productName}</h2>
      </div>
      <p>ArtikelNr.: {product.itemNumber}</p>
      <p>
        Produkt: {product.type} | Format: {product.size}
      </p>
      <p>Preis: {product.price} €</p>
      <button onClick={() => addToCart(product)}>Zum Warenkorb hinzufügen</button>
    </div>
  );
}
