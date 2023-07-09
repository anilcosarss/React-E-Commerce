import { createContext, useState } from "react";

export const FavoritesContext = createContext();
const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    console.log(favorites)

    const favoritesToggle = (product) => {
       if( favorites.includes(product)){
        setFavorites(favorites.filter((item) => item !== product))
       } else {
        setFavorites([...favorites,product])
       }
    }
    return <FavoritesContext.Provider value={{favorites, favoritesToggle }}>{children}</FavoritesContext.Provider>;
};

export default FavoritesProvider;