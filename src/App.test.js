import { render, screen ,fireEvent  } from '@testing-library/react';
import Header from './components/Header';
import ThemeProvider from './contexts/ThemeContext';
import FavoritesProvider from './contexts/FavoritesContext';
import CartProvider from './contexts/CartContext';
import { BrowserRouter } from 'react-router-dom';
import Favorites from './pages/Favorites';

test('checking navbar', () => {

  render(
    <BrowserRouter>
      <FavoritesProvider>
        <ThemeProvider>
          <CartProvider>
            <Header />
          </CartProvider>
        </ThemeProvider>
      </FavoritesProvider>
    </BrowserRouter>

  );

  const navButtons = screen.getByText(/favorites/i, /basket/i);
  expect(navButtons).toBeInTheDocument();
  expect(navButtons).toHaveClass("hidden")

});


test('dark mode test', () => {
  render(
    <BrowserRouter>
      <FavoritesProvider>
        <ThemeProvider>
          <CartProvider>
            <Header />
          </CartProvider>
        </ThemeProvider>
      </FavoritesProvider>
    </BrowserRouter>
  );

  expect(document.documentElement.classList.contains('dark')).toBeFalsy();

  const darkModeButton = screen.getByRole('button', { name: /Dark Mode/i });
  fireEvent.click(darkModeButton);

  expect(document.documentElement.classList.contains('dark')).toBeTruthy();
});

test('favorites page navigation', () => {
  render(
    <BrowserRouter>
    <FavoritesProvider>
      <ThemeProvider>
        <CartProvider>
          <Header />
          <Favorites/>
        </CartProvider>
      </ThemeProvider>
    </FavoritesProvider>
  </BrowserRouter>
  );

  const favoritesLink = screen.getByRole('link', { name: /Favorites/i });
  fireEvent.click(favoritesLink);

  expect(screen.getByText(/you haven't added any products to your favorites yet!/i)).toBeInTheDocument();
});


