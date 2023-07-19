
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../src/pages/user/HomePage.js';
import CartPage from '../src/pages/user/CartPage.js';
import Checkout from '../src/pages/user/Checkout.js';
import Laptop from '../src/pages/user/Laptop.js';
import Products from '../src/pages/user/Products.js';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/laptop' element={<Laptop />}></Route>
        <Route path='/products' element={<Products />}></Route>
      </Routes>
    <Footer />
    </>
    
  );
}

export default App;
