import { createContext, useState } from "react";

export const FavoritesContext = createContext();
const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorites = (product) => {
        setFavorites([...favorites, product]);
      };

    const favoritesToggle = (product) => {
        const findProduct = favorites.find((item) => item.id === product.id);

       if(findProduct){
        setFavorites(favorites.filter((item) => item.id !== product.id))
       } else {
        setFavorites([...favorites,product])
       }
    }
    return <FavoritesContext.Provider value={{favorites,addFavorites, favoritesToggle }}>{children}</FavoritesContext.Provider>;
};

export default FavoritesProvider;