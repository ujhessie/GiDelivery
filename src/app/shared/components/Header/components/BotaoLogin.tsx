import { Link } from "react-router-dom";

export const BotaoLogin = () => (
  <div className='hidden md:flex my-transition'>
    <Link
      to='/login'
      className='content p-3 bg-vermelho-primario relative h-[40px] rounded-full text-white font-bold flex px-8 items-center'
    >
      <span>Login</span>
    </Link>
  </div>
);
