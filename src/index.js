import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductsProvider from './contexts/ProductsContex';
import ThemeProvider from './contexts/ThemeContext';
import FavoritesProvider from './contexts/FavoritesContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FavoritesProvider>
      <ThemeProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </ThemeProvider>
    </FavoritesProvider>
  </React.StrictMode>
);

