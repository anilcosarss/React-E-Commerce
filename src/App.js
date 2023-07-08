import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Favorites from './pages/Favorites';
import Basket from './pages/Basket';
import ProductDetails from './pages/ProductDetails';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/basket' element={<Basket />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
