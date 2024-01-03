import { Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">

      <nav>
        <Link className="item-nav" to="/">Home</Link>
        <Link className="item-nav" to="/menu">Cardápio</Link>
      </nav>

      <Link className="logo">LOGO</Link>
        
      <Link className="cart" to="/cart"><IoCart className="icon" /> <span>12</span></Link>

    </header>
  );
};

export default Header;
