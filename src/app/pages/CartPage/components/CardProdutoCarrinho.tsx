import { useCarrinho } from "../../../shared/contexts/CarrinhoContext";

import { MdDeleteForever } from "react-icons/md";

import { IoMdAdd, IoMdRemove } from "react-icons/io";

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

  // ####### Componentes internos
  const DivImg = () => (
    <div className='divImg relative aspect-video h-full bg-branco  overflow-hidden rounded-xl '>
      <img
        className=' absolute w-full h-full object-cover block '
        src={produto.imgUrl}
        alt=''
      />
      <div
        onClick={handleRemoverItem}
        className='bg-white text-vermelho-0 text-2xl aspect-square p-2 absolute left-[0] top-[0] flex justify-center items-center rounded-full text-vermelho-primario '
      >
        <MdDeleteForever />
      </div>
    </div>
  );

  const DivBotoes = () => (
    <div className='Botoes custom-p text-preto-primario flex gap-4  px-4 py-1 border-2  border-preto-primario border-solid rounded-full'>
      <button className='' onClick={handleDecrementarQuantidade}>
        <IoMdRemove />
      </button>
      <p className=' '>{produto.quantidade}</p>
      <button className='' onClick={handleIncrementarQuantidade}>
        <IoMdAdd />
      </button>
    </div>
  );

  return (
    <div className=' flex   w-full  gap-2 p-4 shadow-md rounded-xl text-preto-primario'>
      <DivImg />

      <div className='info w-full gap-4 justify-between  flex flex-col '>
        <h3 className='custom-p font-bold clamp-text'>{produto.nome}</h3>

        <div className='flex   justify-between gap-2 items-center'>
          <p className='custom-p font-medium block'>R$ {produto?.preco}</p>
          <DivBotoes />
        </div>
      </div>
    </div>
  );
};
