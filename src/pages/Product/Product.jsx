import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import { FavouritesContext } from "../../context/FavouritesContext";
import { CartContext } from "../../context/CartContext";
import styles from "./Product.module.css";

export default function Product() {
  const { itemNumber } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { favourites, addFavourite, removeFavourite } = useContext(FavouritesContext);
  const product = products.find((product) => product.itemNumber === parseInt(itemNumber));
  const navigate = useNavigate();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState("");

  if (!product) {
    return <p>Produkt nicht gefunden!</p>;
  }

  const handleImageClick = (image) => {
    setFullscreenImage(image);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setFullscreenImage("");
    setIsFullscreen(false);
  };

  const isFavourite = favourites.some((fav) => fav.itemNumber === product.itemNumber);

  const toggleFavourite = () => {
    if (isFavourite) {
      removeFavourite(product.itemNumber);
    } else {
      addFavourite(product);
    }
  };

  return (
    <div className={styles.productDetail}>
      <div className={styles.imageWrapper}>
        <img src={product.image1} alt={product.productName} onClick={() => handleImageClick(product.image1)} />
        <img src={product.image2} alt={product.productName} onClick={() => handleImageClick(product.image2)} />
      </div>
      <div className={styles.productInfo}>
        <button className={styles.returnButton} onClick={() => navigate(-1)}>
          <i className="fa-solid fa-angles-left"></i>
          zurück
        </button>
        <h1>{product.productName}</h1>
        <p>ArtikelNr.: {product.itemNumber}</p>
        <p>Typ: {product.type}</p>
        <p>Format: {product.size}</p>
        <p className={styles.price}>Preis: {product.price} €</p>
        <p>{product.description}</p>
        <i
          className={`fa-heart ${isFavourite ? "fa-solid" : "fa-regular"} ${styles.favouritesIcon}`}
          onClick={toggleFavourite}
          style={{ color: isFavourite ? "var(--color-orange)" : "var(--hg-grau)" }}
        ></i>
        <button onClick={() => addToCart(product)}>Zum Warenkorb hinzufügen</button>
      </div>

      {isFullscreen && (
        <div className={styles.fullscreen} onClick={closeFullscreen}>
          <div className={styles.fullscreenContent}>
            <span className={styles.close} onClick={closeFullscreen}>
              x
            </span>
            <img src={fullscreenImage} alt="Vollbild" className={styles.fullscreenImage} />
          </div>
        </div>
      )}
    </div>
  );
}
