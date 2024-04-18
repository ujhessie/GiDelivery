import { useCarrinho } from "../../../shared/contexts/CarrinhoContext";

import { MdDeleteForever } from "react-icons/md";

import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

interface ICardProdutoCarrinho {
  id: number;
}

export const CardProdutoCarrinho: React.FC<ICardProdutoCarrinho> = ({ id }) => {
  const { carrinho, adicionarItem, removerItem, atualizarQuantidade } =
    useCarrinho();
  const produto = carrinho.find((item) => item.id === id);

  if (!produto) {
    return null; // Se o produto não estiver no carrinho, não renderiza nada
  }

  const handleRemoverItem = () => {
    removerItem(id);
  };

  const handleIncrementarQuantidade = () => {
    adicionarItem({ ...produto, quantidade: 1 });
  };

  const handleDecrementarQuantidade = () => {
    if (produto.quantidade > 1) {
      atualizarQuantidade(id, produto.quantidade - 1);
    } else {
      handleRemoverItem();
    }
  };

  return (
    <div className='cardProdutoCarrinho'>
      <div className='content flex  gap-2 p-4 shadow-md rounded-xl'>
        <div className='divImg relative aspect-4/3 w-48 overflow-hidden rounded-xl flex '>
          <img
            className='object-center object-cover  h-full w-full'
            src={produto.imgUrl}
            alt=''
          />
          <div
            onClick={handleRemoverItem}
            className='bg-white text-vermelho-0 text-2xl aspect-square p-2 absolute left-0 top-0 flex justify-center items-center rounded-br-2xl '
          >
            <MdDeleteForever />
          </div>
        </div>
        <div className='info w-full flex flex-col justify-between'>
          <h3 className='nomeProduto text-fonteText-0 font-semibold text-lg'>
            {produto.nome}
          </h3>
          <div className='flex justify-between gap-2 items-center'>
            <p className='text-fonteText-0 px-4 py-2 border-2'>
              <span className='text-vermelho-0 text-sm'>R$</span>{" "}
              {produto?.preco}
            </p>
            <div className='Botoes flex gap-4  px-4 py-1 border-2  border-vermelho-0 border-solid rounded-full'>
              <button
                className='text-vermelho-0'
                onClick={handleDecrementarQuantidade}
              >
                <IoMdRemove />
              </button>
              <p className='text-fonteText-0 font-medium'>
                {produto.quantidade}
              </p>
              <button
                className='text-vermelho-0'
                onClick={handleIncrementarQuantidade}
              >
                <IoMdAdd />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
