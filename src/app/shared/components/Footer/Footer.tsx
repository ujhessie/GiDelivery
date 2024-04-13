import { FaMapMarkerAlt, FaTiktok } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className='py-4 flex  text-preto-primario justify-between '>
        <Address />
        <Logo />
        <SocialIcons />
      </div>
      <CR />
    </footer>
  );
};

const Logo = () => (
  <div className=' -z-40 hidden md:flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity cursor-pointer'>
    <Link
      to='/'
      className='logo p-5 relative rounded-sm bg-vermelho-primario text-white font-bold flex justify-center items-center aspect-square'
    >
      <p className='absolute'>GI</p>
    </Link>
    <p className='text-preto-primario font-semibold text-xl'>Delivery</p>
  </div>
);

const Address = () => (
  <div className='flex gap-2 -z-40 items-center text-xl opacity-80 hover:opacity-100 transition-opacity cursor-pointer'>
    <FaMapMarkerAlt className='2xl' />
    <p className='font-medium'>São Luís - Ma</p>
  </div>
);

const SocialIcons = () => {
  var classes =
    "cursor-pointer opacity-80 -z-40 hover:opacity-100 transition-all duration-200 ease-in-out hover:text-vermelho-primario";
  return (
    <div className='flex gap-4 items-center text-3xl'>
      <LuInstagram className={classes} />
      <FaTiktok className={classes} />
      <IoLogoWhatsapp className={classes} />
    </div>
  );
};

const CR = () => {
  return (
    <div className=''>
      <p className=' p-2 text-preto-primario opacity-70 text-center -z-40'>
        {/* Projetado e desenvolvido por <a href='#'>ujhessie</a> */}
      </p>
    </div>
  );
};

export default Footer;
