import { Header } from "../../shared/components/Header/Header";
import { useParams } from "react-router-dom";
import { useProdutos } from "../../shared/contexts/ProdutosContext";
import { useState } from "react";
import { IProduto, useCarrinho } from "../../shared/contexts/CarrinhoContext";
import { MyContainer } from "../../shared/components/MyContainer/MyContainer";
import { ButtonLink } from "../../shared/components/ButtonLink/ButtonLink";

import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { ButtonVoltar } from "./components/ButtonVoltar";
import App from "./../../App";

export const ProdutoPage = () => {
  const { id } = useParams();
  const produtos = useProdutos();
  const productId = Number(id); // Converter o id para número
  const produto = produtos.find((produto) => produto.id === productId);

  if (!produto) {
    return <div>Produto não encontrado</div>; // Tratamento para produto não encontrado
  }

  const { adicionarItem, carrinho, total } = useCarrinho();

  const [quantidade, setQuantidade] = useState(1);
  const handleAumentarQuantdade = () => {
    setQuantidade((prevQuantidade) => prevQuantidade + 1);
  };
  const handleDiminuirQuantidade = () => {
    setQuantidade((prevQuantidade) =>
      prevQuantidade > 1 ? prevQuantidade - 1 : 1
    );
  };

  const novoItem: IProduto = {
    id: produto.id,
    nome: produto.nome,
    preco: produto.valor,
    quantidade: quantidade,
    imgUrl: produto.imgUrl,
  };

  const handleClick = () => {
    adicionarItem(novoItem);
    setQuantidade(1);
  };

  const DivImg = () => {
    return (
      <div className='divImg rounded-xl p-0 overflow-hidden h-[100%] aspect-[4/3]  w-full block  mb-4'>
        <img src={produto.imgUrl} className='object-cover h-full  w-full m-0' />
      </div>
    );
  };

  const Informacoes = () => {
    return (
      <div className='text-preto-primario text-center md:text-start'>
        <h3 className=' font-bold  text-2xl md:text-4xl mb-2'>
          {produto.nome}
        </h3>
        <p className='custom-p mb-4'>{produto.descricao}</p>
      </div>
    );
  };

  const Valor = () => {
    return (
      <div className='flex gap-2 items-center justify-center md:justify-start mb-2 custom-p  opacity-90'>
        <p className='  '>
          <span className=''>R$ {produto.valor.toFixed(2)}</span>
        </p>
        <p>
          (<span className=' '>R$ </span>
          {(produto.valor * quantidade).toFixed(2)})
        </p>
      </div>
    );
  };

  const BotoesQuantidades = () => {
    return (
      <div className='Botoes flex gap-4  px-4 py-2 border-2 border-vermelho-primario border-solid rounded-full '>
        <button
          className='text-preto-primario'
          onClick={handleDiminuirQuantidade}
        >
          <IoMdRemove />
        </button>
        <p
          className='font-medium text-preto-primario'
        >
          {quantidade}
        </p>
        <button
          className='text-preto-primario'
          onClick={handleAumentarQuantdade}
        >
          <IoMdAdd />
        </button>
      </div>
    );
  };

  const BotaoAdicionar = () => {
    return (
      <div className='botaoAdicionar' onClick={handleClick}>
        <ButtonLink className='bg-vermelho-primario border-2 border-vermelho-primario border-solid py-3 px-4  rounded-full text-white w-full md:auto'>
          Adicionar a sacola
        </ButtonLink>
      </div>
    );
  };

  return (
    <>
      <Header />

      <MyContainer className='mt-[20px]'>
        <div className='rounded-xl overflow-hidden p-4 shadow-xl grid md:grid-cols-2 gap-4'>
          <DivImg />
          <div className='bottom'>
            <Informacoes />
            <Valor />
            <div className='flex  justify-between md:justify-start gap-4'>
              <BotoesQuantidades />
              <BotaoAdicionar />
            </div>
          </div>
        </div>
      </MyContainer>
    </>
  );
};
