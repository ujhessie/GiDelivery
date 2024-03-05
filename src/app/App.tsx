import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "../pages/HomePage/HomePage";
// import MenuPage from "../pages/MenuPage/MenuPage";
// import CartPage from "../pages/CartPage/CartPage";

// importação de contextos

import { CarrinhoProvider } from "./shared/contexts/CarrinhoContext";
import { MyRoutes } from "./routes";
import { ProdutosProvider } from "./shared/contexts/ProdutosContext";

function App() {
  return (
    <>
      <ProdutosProvider>
        <CarrinhoProvider>
        <MyRoutes />
        </CarrinhoProvider>
      </ProdutosProvider>
    </>
  );
}

export default App;
