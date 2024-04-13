import React from "react";
import { Link } from "react-router-dom";

interface NavHeaderMobileProps {
  onCloseMenu: () => void;
  className?: string;
}

interface NavLinkProps {
  rota: string;
  children: React.ReactNode;
}

export const NavHeaderMobile: React.FC<NavHeaderMobileProps> = ({
  onCloseMenu,
}) => {
  const LinkNav = ({ rota, children }: NavLinkProps) => (
    <Link
      to={rota}
      className='p-4 shadow-sm hover:shadow-md my-transition block w-full text-center'
      onClick={onCloseMenu}
    >
      {children}
    </Link>
  );

  return (
    
      <nav className='fixed top-[70px] right-0 bg-white min-h-full w-[100%]  z-50 flex flex-col px-[10px] md:px-[30px] my-transition transform translateX(0%)'>
        <div className='links flex gap-4 flex-col items-end my-transition'>
          <LinkNav rota='/' children='Página inicial' />
          <LinkNav rota='/menu' children='Cardápio' />
          <LinkNav rota='/contatos' children='Contatos' />
        </div>
      </nav>

  );
};
