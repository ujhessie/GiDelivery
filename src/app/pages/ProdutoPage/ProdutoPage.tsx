import { Header } from "../../shared/components/Header/Header";
import { useParams } from "react-router-dom";
import { useProdutos } from "../../shared/contexts/ProdutosContext";
import { useState } from "react";
import { IProduto, useCarrinho } from "../../shared/contexts/CarrinhoContext";
import { Link, useNavigate } from "react-router-dom";

import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

export const ProdutoPage = () => {
  const { id } = useParams();
  const produtos = useProdutos();
  const productId = Number(id); // Converter o id para número
  const produto = produtos.find((produto) => produto.id === productId);

  const { adicionarItem, carrinho, total } = useCarrinho();

  const [quantidade, setQuantidade] = useState(1);
  const handleAumentarQuantdade = () => {
    setQuantidade((prevQuantidade) => prevQuantidade + 1);
  };
  const handleDominuirQuantidade = () => {
    setQuantidade((prevQuantidade) =>
      prevQuantidade > 1 ? prevQuantidade - 1 : 1
    );
  };

  const novoItem: IProduto = {
    id: produto?.id || 0,
    nome: produto?.nome || "",
    preco: produto?.valor || 0,
    quantidade: quantidade,
    imgUrl: produto?.imgUrl || "",
  };

  const handleClick = () => {
    adicionarItem(novoItem);
    setQuantidade(1);
  };

  const navigate = useNavigate();
  const handleVoltarRota = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />

      <div className="flex items-center px-4 pt-2 justify-center ">
        <div
          onClick={handleVoltarRota}
          className="max-w-screen-md w-full flex justify-center gap-4 shadow-md p-5 rounded-lg items-center"
        >
          <div className="text-fonteText-0">
            <IoArrowBack />
          </div>
          <p className="text-fonteText-0 text-md">Continuar no cardápio</p>
        </div>
      </div>

      <section className="flex  flex-col items-center px-4">
        <div className="content max-w-screen-md w-full ">
          <div className="rounded-xl overflow-hidden p-4  shadow-xl">
            <div className="divImg rounded-xl overflow-hidden aspect-video mb-4">
              <img src={produto?.imgUrl} alt="" />
            </div>

            <h2 className="text-center font-bold text-fonteText-0 text-2xl md:text-4xl mb-2">
              {produto?.nome}
            </h2>

            <p className="text-center text-fonteText-0 mb-4">
              {produto?.descricao}
            </p>

            <div className="divBottom flex flex-col md:flex-row justify-between">
              <div className=" flex flex-row-reverse md:flex-row   mb-4 justify-between items-end">
                <p className="text-fonteText-0 px-4 py-2 border-2">
                  <span className="text-vermelho-0 text-sm">R$</span> {produto?.valor}
                </p>

                <div className="Botoes flex gap-4  px-4 py-2 border-2 border-vermelho-0 border-solid rounded-full">
                  <button className="text-vermelho-0" onClick={handleDominuirQuantidade}>
                    <IoMdRemove />
                  </button>

                  <p className="text-fonteText-0 font-medium">{quantidade}</p>

                  <button className="text-vermelho-0" onClick={handleAumentarQuantdade}>
                    <IoMdAdd />
                  </button>
                </div>
              </div>

              <div className="botaoAdicionar">
                <button
                  onClick={handleClick}
                  className="bg-vermelho-0 border-2 border-vermelho-0 border-solid py-3 px-4  rounded-full text-white w-full md:auto"
                >
                  Adicionar a sacola
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
