import "./menuPage.scss"
import Header from "../../components/Header/Header";
import TimesTop from "../../components/TimesTop/TimesTop";
import { IoFastFoodSharp } from "react-icons/io5";

function MenuPage() {

  const Categoria = () => {
    return (
      <div className="categoria">
        <div className="icon"><IoFastFoodSharp className="icon" /></div>
        <span className="texto">Todos</span>
      </div>
    )
  }
  // TODO: Transforomar categorias em input radios para poder deixar selecionado

  const CardProduto = () => {
    return (
      <div className="cardProduto">
        <div className="divImg">
          <img src="https://img.freepik.com/fotos-gratis/mao-em-luvas-de-hamburguer-segurando-o-hamburguer-de-carne-no-fundo-preto_140725-303.jpg?w=740&t=st=1704394918~exp=1704395518~hmac=14d10c8939a84f457e4e7f074dc38b3d8ae254fb00e41c3930169b4517d669c3" alt="" />
        </div>
        <div className="divInfoProduto">
          <p className="nomeProduto">Nome do Produto</p>
          <p className="descricaoProduto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor perferendis error</p>
          <div className="divValorAndBotao">
            <span className="valor">R$ 20,00</span>
            <button>Comprar</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main>
      <div className="container">
        <div className="content">
          <TimesTop/>
          <Header/>
          <main id="mainMenuPage">
            <div className="categorias">
              <Categoria/>
              <Categoria/>
              <Categoria/>
              <Categoria/>
            </div>
            
            <div className="containerProdutos">
              <div className="produtos">
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
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