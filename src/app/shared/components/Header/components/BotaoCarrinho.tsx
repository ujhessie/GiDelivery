import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useCarrinho } from "../../../contexts/CarrinhoContext";

export const BotaoCarrinho = () => {
  const { carrinho, calcularQuantidadeTotal } = useCarrinho(); // Obter o carrinho e a função para calcular o total de itens

  // Calcular o total de itens no carrinho
  const totalItens = calcularQuantidadeTotal(carrinho);

  return (
    <div className='botao-carrinho my-transition text-preto-primario hover:scale-110'>
      <Link
        to='/carrinho'
        className='flex justify-center items-center relative p-4 rounded-md '
      >
        <HiOutlineShoppingBag className='botao-carrinho-icon text-2xl md:text-3xl lg:text-4xl absolute ' />
        <div className='p-2 bg-vermelho-primario rounded-full aspect-square flex text-[10px] text-white font-medium absolute  items-center justify-center top-0 right-0'>
          <p className='absolute'>{totalItens}</p>
        </div>
      </Link>
    </div>
  );
};
