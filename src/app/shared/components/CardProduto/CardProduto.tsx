import { useProdutos } from "../../contexts/ProdutosContext";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

import { Link } from "react-router-dom";

import { MdAdd } from "react-icons/md";

interface ICardProduto {
  id: number;
}

export const CardProduto: React.FC<ICardProduto> = ({ id }) => {
  const produtos = useProdutos();
  const produto = produtos.find((produto) => produto.id === id);

  if (!produto) {
    return <div>Produto não encontrado.</div>;
  }

  // Componentes
  const DivImg_nomeProduto = () => (
    <div>
      <div className='rounded-xl aspect-square mb-2 overflow-hidden'>
        <img
          className='object-cover h-full w-full'
          src={produto.imgUrl}
          alt={produto.nome}
        />
      </div>
      <p className=' text custom-p  leading-6 clamp-text mb-2 font-bold mt-2 opacity-80'>
        {produto.nome}
      </p>
    </div>
  );

  const DivInfo = () => (
    <div className=' flex justify-between items-end'>
      <p className='font-bold text-preto-pimario opacity-80'>
        <span className='text-vermelho-primario text-sm opacity-100'>R$</span>{" "}
        {produto.valor}
      </p>
      <button className='bg-vermelho-primario aspect-square opacity-80 hover:opacity-100 my-transition flex justify-center items-center h-[40px] text-white rounded-full text-xl'>
        <MdAdd className='absolute' />
      </button>
    </div>
  );

  useEffect(() => {
    ScrollReveal().reveal(".my-element", {
      delay: 500,
      distance: "50px",
      origin: "bottom",
      easing: "ease-in-out",
      reset: true
    });
  }, []);

  return (
    <div className='card p-4 shadow-md hover:shadow-xl my-transition my-element  rounded-xl text-preto-pimario hover:scale-105 bg-white relative h-[200p] w-full block hover:z-10 '>
      <Link
        to={`/produto/${produto.id}`}
        className='content h-full flex flex-col justify-between w-full'
      >
        <DivImg_nomeProduto />

        <DivInfo />
      </Link>
    </div>
  );
};
