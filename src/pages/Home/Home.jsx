import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import styles from "./Home.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Home() {
  const { products } = useContext(ProductContext);

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.homeBanner}>
        <h1>Der Onlineshop für anspruchsvolle Wandbilder</h1>
        <h2>Wandbilder als Leinwand oder kaschiert auf Alu-Dibond</h2>
        <p>
          Jetzt Lieblingsmotiv auswählen und in Groß als Wandbild drucken lassen! Ob klassische Leinwand oder elegantes
          Alu-Dibond - bei uns finden Sie für jedes Motiv das richtige Wandbild. Alle Wandbilder werden inklusive
          vormontierter Aufhängung geliefert. Selbstverständlich können Sie auch ihr eigenes Motiv drucken lassen. Dazu
          verwenden Sie das Kontaktformular oder schreiben Sie uns eine E-Mail. Fügen Sie ihr Bild mit bei.
        </p>
      </div>
      <div className={styles.productWrapper}>
        {products.map((product) => (
          <ProductCard key={product.itemNumber} product={product} />
        ))}
      </div>
    </div>
  );
}
