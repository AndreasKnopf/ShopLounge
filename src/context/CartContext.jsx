import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.itemNumber === product.itemNumber);

      if (itemExists) {
        return prevItems.map((item) =>
          item.itemNumber === product.itemNumber ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.itemNumber === product.itemNumber);

      if (itemExists && itemExists.quantity > 1) {
        return prevItems.map((item) =>
          item.itemNumber === product.itemNumber ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevItems.filter((item) => item.itemNumber !== product.itemNumber);
      }
    });
  };

  const removeProduct = (product) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.itemNumber !== product.itemNumber));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};
