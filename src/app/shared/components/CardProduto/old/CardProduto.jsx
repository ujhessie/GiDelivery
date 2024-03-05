/* eslint-disable react/prop-types */
import "./cardProduto.scss";

import { useProdutos } from "../../contexts/ProdutosContext";
import  { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import ModalProduto from "../ModalProduto/ModalProduto";

const CardProduto = ({ id }) => {
  const { produtos } = useProdutos();
  // const { adicionarItem } = useCarrinho();

  
  const [showModal, setShowModal] = useState(false);

  
  const handleToggleModal = () => {
    setShowModal(!showModal); // Alterna entre exibir e esconder o modal
  };

  // Encontrar o produto com o ID correspondente
  const produto = produtos.find((produto) => produto.id === id);

  if (!produto) {
    // Lógica para lidar com o produto não encontrado, se necessário
    return <div>Produto não encontrado.</div>;
  }
 

 

  return (
    <div className="cardProduto" >
      {/* Restante do seu código para renderizar o card do produto */}
      <div className="divImg" onClick={handleToggleModal}> 
        <img src={produto.imagemURL} alt={produto.nome} />
      </div>
      <div className="divInfoProduto">
        <p className="nomeProduto" onClick={handleToggleModal}>{produto.nome}</p>
        <p className="descricaoProduto" onClick={handleToggleModal}>{produto.descricao}</p>
        <div className="divValorAndBotao">
          <span className="valor">R$ {produto.preco.toFixed(2)}</span>
          <button onClick={handleToggleModal}>
            <IoMdAdd className="icon" />
          </button>
        </div>
      </div>
      {showModal && (
        <ModalProduto
          produto={produto}
          onClose={handleToggleModal}
          onAdicionarCarrinho={handleToggleModal}
        />
      )}
    </div>
  );
};

export default CardProduto;
