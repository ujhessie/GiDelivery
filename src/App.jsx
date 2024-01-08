import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MenuPage from "./pages/MenuPage/MenuPage";
import CartPage from "./pages/CartPage/CartPage";

// importação de contextos
import { ProdutosProvider } from "./contexts/ProdutosContext";
import { CarrinhoProvider } from "./contexts/CarrinhoContext";

function App() {
  return (
    <ProdutosProvider>
      <CarrinhoProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<MenuPage />} />
          </Routes>
        </Router>
      </CarrinhoProvider>
    </ProdutosProvider>
  );
}

export default App;
