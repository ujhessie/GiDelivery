import { Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { useCarrinho
 } from "../../contexts/CarrinhoContext";

import "./header.scss";

const Header = () => {
  const { carrinho, calcularQuantidadeTotal } = useCarrinho();

  const quantidadeTotalNoCarrinho = calcularQuantidadeTotal(carrinho);

  return (
    <header className="header">
      <nav>
        <Link className="item-nav" to="/">Home</Link>
        <Link className="item-nav" to="/menu">Cardápio</Link>
      </nav>

      <Link className="logo">LOGO</Link>
        
      <Link className="cart" to="/cart">
        <IoCart className="icon" />
        <span>{quantidadeTotalNoCarrinho}</span>
      </Link>
    </header>
  );
};

export default Header;
