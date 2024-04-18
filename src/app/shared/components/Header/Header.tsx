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

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className='flex flex-col sticky top-0 z-50 bg-white items-center  w-full justify-center px-[10px] md:px-[30px] lg:px-[70px] shadow-sm my-transition'>
      <div className='content min-h-[70px] flex justify-between w-full max-w-screen-lg items-center my-transition'>
        <LogoHeader />
        <NavHeaderDesktop />
        <div className='flex gap-4 items-center my-transition'>
          <BotaoCarrinho />
          <BotaoLogin />
          <BotaoMenu isOpen={toggleMenu} onClick={handleToggleMenu} />
        </div>
      </div>

      {toggleMenu && (
        <NavHeaderMobile onCloseMenu={() => setToggleMenu(false)} />
      )}
    </header>
  );
};
