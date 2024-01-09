import "./cartPage.scss";
import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import TimesTop from "../../components/TimesTop/TimesTop";
import CardProdutoCarrinho from "../../components/CardProdutoCarrinho/CardProdutoCarrinho";
import { useCarrinho } from '../../contexts/CarrinhoContext';

const CartPage = () => {
  const { carrinho, total   } = useCarrinho();


  return (
    <div className="container">
      <div className="content">
        <TimesTop />
        <Header />
        <main id="mainCart">
          <h2>Seu carrinho de compras</h2>
          <div className="listaProdutos">
            {carrinho.map((produto) => (
              <CardProdutoCarrinho key={produto.id} produto={produto} />
            ))}
          </div>
        </main>
        <div className="botoesETotal">
          <p className="total">Total: R$ {total.toFixed(2)} </p>
          <div className="divBotoes">
            <Link to={"/menu"} className="continuarCompra" >
              Continuar comprando
            </ Link>
            <a href="#" className="finalizarCompra" >
              Finalizar compra
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
