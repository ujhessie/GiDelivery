import { Link } from "react-router-dom";
import { useState } from "react";

//componentes internos
import {
  LogoHeader,
  BotaoLogin,
  BotaoCarrinho,
  NavHeaderDesktop,
  BotaoMenu,
  NavHeaderMobile,
} from "./components";

export const Header: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuAtivo = ""
  const menuDesativado = ""

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className='flex sticky top-0 z-50 bg-white items-center h-[70px] gap-4 w-full justify-center px-[10px] md:px-[30px] lg:px-[70px] shadow-sm my-transition'>
      <div className='content h-[70px] flex justify-between w-full max-w-screen-lg items-center my-transition'>
        <LogoHeader />
        <NavHeaderDesktop />
        <div className='flex gap-4 items-center my-transition'>
          <BotaoCarrinho />
          <BotaoLogin />
          <BotaoMenu isOpen={toggleMenu} onClick={handleToggleMenu} />
        </div>
      </div>
      {/* <NavHeaderMobile onCloseMenu={() => setToggleMenu(false)} /> */}
      {toggleMenu && (
        
          <NavHeaderMobile onCloseMenu={() => setToggleMenu(false)} />
        
      )}
    </header>
  );
};
