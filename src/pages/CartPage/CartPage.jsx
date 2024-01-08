import "./cartPage.scss";

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
            <a href="#" className="continuarCompra" >
              Continuar comprando
            </a>
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
