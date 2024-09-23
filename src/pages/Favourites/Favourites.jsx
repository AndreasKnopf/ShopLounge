import React, { useContext } from "react";
import { FavouritesContext } from "../../context/FavouritesContext";
import styles from "./Favourites.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Favourites() {
  const { favourites } = useContext(FavouritesContext);

  if (favourites.length === 0) {
    return (
      <div className={styles.favouritesPage}>
        <h2>Keine Favoriten ausgewählt.</h2>
      </div>
    );
  }

  return (
    <div className={styles.favouritesPage}>
      <h2>Deine Favoriten</h2>
      <div className={styles.productWrapper}>
        {favourites.map((product) => (
          <ProductCard key={product.itemNumber} product={product} />
        ))}
      </div>
    </div>
  );
}
