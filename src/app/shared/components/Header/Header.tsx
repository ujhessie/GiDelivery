import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { IconCart } from "./components/IconCart";

export const Header = () => {
  return (
    <>
      <header className="h-20  flex items-center justify-center w-auto  shadow-sm">
        <div className="px-2 flex justify-between  w-full max-w-screen-md mx-auto">
          <Link
            to={"/"}
            className="logo font-bold size-8 mb-0 w-auto flex items-center  gap-1"
          >
            <div className="bg-vermelho-0 w-12 h-12 flex justify-center items-center rounded-lg">
              <p className="text-white text-3x1">GID</p>
            </div>
            <p className="text-fonteText-0 text-3xl">GIDELIVERY</p>
          </Link>

          <nav className="flex gap-4 items-center justify-between">
            <IconCart rota="/carrinho" />
            <ButtonLink>MENU</ButtonLink>
          </nav>
        </div>
      </header>
      <div className=" bg-vermelho-0 max-w-screen-md mx-auto w-full flex justify-center items-center px-2">
        <p className="text-center font-medium text-white text-sm p-2">Projeto em desenvolvimento</p>
      </div>
    </>
  );
};
