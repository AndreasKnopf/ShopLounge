import React, { createContext, useState, useEffect } from "react";

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(() => {
    const savedFavourites = localStorage.getItem("favourites");
    return savedFavourites ? JSON.parse(savedFavourites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addFavourite = (product) => {
    if (!favourites.find((fav) => fav.itemNumber === product.itemNumber)) {
      setFavourites([...favourites, product]);
    }
  };

  const removeFavourite = (itemNumber) => {
    setFavourites(favourites.filter((fav) => fav.itemNumber !== itemNumber));
  };

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};
