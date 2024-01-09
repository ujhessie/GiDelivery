/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useCarrinho } from '../../contexts/CarrinhoContext';
import './modalProduto.scss';
import { IoClose } from 'react-icons/io5';

const ModalProduto = ({ produto, onClose, onAdicionarCarrinho }) => {
  const { adicionarItem } = useCarrinho();
  const [quantidade, setQuantidade] = useState(1);
  

  const handleAdicionarCarrinho = () => {
    adicionarItem({ ...produto, quantidade });
    onClose(); // Fecha o modal após adicionar ao carrinho
  };

  const handleIncrementarQuantidade = () => {
    setQuantidade(quantidade + 1);
  };

  const handleDecrementarQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const subtotal = (quantidade * produto.preco).toFixed(2);

  return (
    <div className="modal"  >
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          <IoClose className="icon" />
        </span>
        <div className="divImg">
          <img src={produto.imagemURL} alt="" />
        </div>
        <h3>{produto.nome}</h3>
        <p className="descricao">{produto.descricao}</p>
        <div className="valor">
          <p>Valor unitário: </p>
          <p>R$ {produto.preco.toFixed(2)}</p>
        </div>
        <div className="botaoEQuantidade">
          <div>
            <button onClick={handleDecrementarQuantidade}>-</button>
            <span>{quantidade}</span>
            <button onClick={handleIncrementarQuantidade}>+</button>
          </div>
          <p>Subtotal: R$ {subtotal}</p>
          <button onClick={handleAdicionarCarrinho}>Adicionar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalProduto;
