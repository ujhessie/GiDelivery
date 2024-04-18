import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {
  CartPage,
  MenuPage,
  ProdutoPage,
  HomePage,
  CheckoutPage,
} from "../pages";
// import { HiBattery100 } from "react-icons/hi2";

export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path='/' element={<HomePage />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/produto/:id' element={<ProdutoPage />} />
        <Route path='/carrinho' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage/>} />
      </Routes>
    </Router>
  );
};
