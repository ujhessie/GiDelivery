import "./cartPage.scss";

import Header from "../../components/Header/Header";
import TimesTop from "../../components/TimesTop/TimesTop";

const CartPage = () => {

    const CardProdutoCarrinho = () => {
        return (
          
            <div className="cardProdutoCarrinho">
              <div className="divImg">
                <img src="https://img.freepik.com/fotos-gratis/mao-em-luvas-de-hamburguer-segurando-o-hamburguer-de-carne-no-fundo-preto_140725-303.jpg?w=740&t=st=1704475733~exp=1704476333~hmac=370cf826f106dd82f840595b72ba4b4e9c14a82a8c56f83bedf4e0b2344547a9" alt="" />      
              </div>
              <div className="divInformacoes">
                <p className="nomeProduto">Nome do Produto (3x)</p>
                <p className="valorProduto">R$ 20, 00 (unid.) </p>
                
                <div className="divQuantidadeProduto">
                  <p className="removerProduto">Remover</p>
                  <button>-</button>
                  <input value={12} type="number" />
                  <button>+</button>
                </div>
              </div>
            </div>
        )
    }

  return (
    <div className="container">
      <div className="content">
        <TimesTop />
        <Header />
        <main id="mainCart">
          <h2>Seu carrinho de compras</h2>
          <div className="listaProdutos">
            <CardProdutoCarrinho />
            <CardProdutoCarrinho />
            <CardProdutoCarrinho />
            <CardProdutoCarrinho />
          </div>
        </main>
      </div>
    </div>
  );
};

export default CartPage;
