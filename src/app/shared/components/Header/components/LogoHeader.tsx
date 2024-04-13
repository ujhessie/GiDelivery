import { Link } from 'react-router-dom';

export const LogoHeader = () => (
    <Link
      to='/'
      className='logo p-5  relative rounded-sm opacity-80 hover:opacity-100 transition-all duration-200 ease-in-out bg-vermelho-primario text-white font-bold flex justify-center items-center aspect-square my-transition'
    >
      <p className='absolute'>GI</p>
    </Link>
  );