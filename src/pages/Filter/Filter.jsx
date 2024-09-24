import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Filter.module.css";

export default function Filter() {
  const { filteredProducts } = useContext(ProductContext);

  return (
    <div className={styles.filterWrapper}>
      <h2>gefundene Artikel:</h2>
      {filteredProducts.length > 0 ? (
        <div className={styles.productWrapper}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.itemNumber} product={product} />
          ))}
        </div>
      ) : (
        <h2>Keine Produkte gefunden.</h2>
      )}
    </div>
  );
}
