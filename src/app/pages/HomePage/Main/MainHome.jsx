import "./mainHome.scss";

import { Link } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { FaRegClock } from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import { IoCart } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const MainHome = () => {
  const Horarios = () => {
    return (
      <div className="horarios">
        <div className="content_horarios">
          <FaRegClock className="icon" />
          <p>16:00 - 23:00</p>
        </div>
      </div>
    );
  };

  return (
    <main id="main_home">
      <Header />
      <div className="content">
        <Horarios />
        <h1>O melhor <span>sabor</span> você encontra <span>aqui</span>!</h1>
        <p className="subtitulo">Plataforma nova de pedidos! Novidades nos combos tambem! Faça seu pedido com 5% de desconto em todos os produtos.</p>
        <div className="botoes">
          <Link to="/menu" className="botao b1"><BiFoodMenu className="icon" /><p>Ver cardápio</p></Link>
          <Link to="/cart" className="botao b2"><IoCart className="icon" /><p>Ver carrinho</p></Link>
        </div>
        <p className="desenvolvedor">
          Projetado e desenvolvido por <a href="#"><FaGithub className="icon"/>Ujhessie</a>
        </p>
      </div>
      <div className="footers">
        <div className="footer_sec"></div>
        <Footer />
      </div>
    </main>
  );
};

export default MainHome;
