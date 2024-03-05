import "./asideHome.scss";
import FooterAside from "./FooterAside";


const AsideHome = () => {
  return (
    <aside id="aside_home">
      <div className="container">
        <div className="content">
          <h2>GI DELIVERY</h2>
          <p>Sistema de delivery simples mas eficiente.</p>
          <div className="div_botoes">
            <a href="#">Adquirir sistema</a>
            <a href="#">Ver código fonte</a>
            <a href="#">Tirar dúvidas</a>
          </div>
        </div>
        <FooterAside/>
      </div>
    </aside>
  );
};

export default AsideHome;
