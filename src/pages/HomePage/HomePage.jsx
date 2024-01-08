import Header from "../../components/Header/Header";



import { FaClock } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";

import { Link } from "react-router-dom";

import "./homePage.scss";

function HomePage() {
  const Pagamentos = () => {
    return (
      <ul className="pagamentos">
        <li>
          <span>
            <FaPix className="icon" />
            Pix
          </span>
        </li>

        <li>
          <span>
            <FaCreditCard className="icon" />
            Cartões
          </span>
        </li>

        <li>
          <span>
            <FaMoneyBillWave className="icon" />
            Dinheiro
          </span>
        </li>
      </ul>
    );
  };

  const Times = () => {
    return (
      <div className="times">
        <span>
          <FaClock className="icon" /> 17:00h - 23:00h
        </span>
      </div>
    );
  };

  const FooterHomePage = () => {
    return (
      <div className="div-footer-home">
        <span>
          <ImLocation className="icon" />
          São Luís - MA
        </span>
        <span>
          <FaPhoneAlt className="icon" /> (00) 9 9231-0000
        </span>
      </div>
    );
  };

  const BotaoPrincipal = () => {
    return (
      <div className="div-button">
        <div className="back"></div>
        <Link className="button_home" to="/menu">
          Ver Cardápio
        </Link>
      </div>
    );
  };

  return (
    <div className="div-home">
      {/* Aside */}
      <aside>
        <div className="container-aside">
          <div className="content-aside">
            <div>
              <h1>Sabor que chega até você! Peça já.</h1>
              <p>
                Sabores frescos, entrega ágil - Sua satisfação, nossa
                prioridade!
              </p>
            </div>
            <p>Feito por Ujhessie</p>
          </div>
        </div>
      </aside>
      {/* Aside */}

      <main id="main-home">
        <div className="container">
          <div className="content">
            <div className="header"><Header/></div>
            <div className="conteudo">
              <Times/>
              <h2>Lanches do tamanho da sua fome! Veja nosso cardápio.</h2>
              <div className="botao_opcoes"><BotaoPrincipal/><span>+ 60 opções</span></div>
              <p className="texto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates eum, voluptatibus ipsum rerum omnis similique ratione molestias.</p>
              <Pagamentos/>
            </div>
            <div className="footer"><FooterHomePage/></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
