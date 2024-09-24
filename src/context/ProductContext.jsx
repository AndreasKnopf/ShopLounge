import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { products } = await import("../data/productData.js");
        setProducts(products);
        // console.log({ products });
      } catch (error) {
        console.error("Fehler beim Laden der Produkte", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <p>Produkte werden geladen...</p>
      </div>
    );
  }
  return (
    <ProductContext.Provider value={{ products, setProducts, filteredProducts, setFilteredProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
