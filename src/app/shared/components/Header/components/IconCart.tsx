import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useCarrinho } from "../../../contexts/CarrinhoContext";

import { Link } from "react-router-dom";

interface IIconCart {
  rota: string,
}

export const IconCart: React.FC<IIconCart> = ({rota}) => {
  const { carrinho, calcularQuantidadeTotal } = useCarrinho();
  const quantidadeTotalNoCarrinho = calcularQuantidadeTotal(carrinho);
  return (
    <Link to={rota} className="relative">
      <div>
        <HiOutlineShoppingBag
          className="text-fonteText-0"
          style={{ fontSize: "2rem" }}
        />
      </div>
      <div className="absolute bg-vermelho-0 p-3 overflow-hidden aspect-square flex items-center justify-center rounded-full right-[-30%] top-[-30%]" >
        <p className="absolute text-white  text-[12px] ">{quantidadeTotalNoCarrinho}</p>
      </div>
    </Link>
  );
};
