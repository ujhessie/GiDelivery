import { Link } from 'react-router-dom';

export const NavHeaderDesktop = () => (
    <nav className='hidden md:flex gap-4 my-transition'>
      <Link to='/'>Página inicial</Link>
      <Link to='/menu'>Cardápio</Link>
      <Link to='/contatos'>Contatos</Link>
    </nav>
  );