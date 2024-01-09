import "./menuPage.scss";
import Header from "../../components/Header/Header";
import TimesTop from "../../components/TimesTop/TimesTop";
import { IoFastFoodSharp } from "react-icons/io5";


import CardProduto from "../../components/CardProduto/CardProduto";

import { useProdutos } from "../../contexts/ProdutosContext";

function MenuPage() {
  const { produtos } = useProdutos();

  const Categoria = () => {
    return (
      <div className="categoria">
        <div className="icon">
          <IoFastFoodSharp className="icon" />
        </div>
        <span className="texto">Todos</span>
      </div>
    );
  };
  // TODO: Transforomar categorias em input radios para poder deixar selecionado

  return (
    <main>
      <div className="container">
        <div className="content">
          <TimesTop />
          <Header />
          <main id="mainMenuPage">
            {/* Nav categorias */}
            <div className="categorias">
              <Categoria />
              <Categoria />
              <Categoria />
              <Categoria />
            </div>
            {/* Nav categorias */}

            <div className="containerProdutos">
              <div className="produtos">
                {produtos.map((produto) => (
                  <CardProduto key={produto.id} id={produto.id} />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </main>
  );
}

export default MenuPage;

// TODO: Continuar a editar este arquivo
