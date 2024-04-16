import { MyContainer } from "../../../shared/components/MyContainer/MyContainer";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";

import { IoArrowBack } from "react-icons/io5";

interface IButtonVoltar {
  className?: string;
}

export const ButtonVoltar: React.FC<IButtonVoltar> = ({ className }) => {
  return (
    <Link
      to='/menu'
      className={`p-5 bg-vermelho-primario border-solid border-4 border-white absolute  aspect-square rounded-full   text-white ${className}`}
    >
      <CgClose />
    </Link>
  );
};
