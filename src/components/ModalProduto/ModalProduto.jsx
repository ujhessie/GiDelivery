// ModalProduto.js

import { useCarrinho } from "../../contexts/CarrinhoContext";

const ModalProduto = ({ produto, onClose, onAdicionarCarrinho }) => {
  const { adicionarItem } = useCarrinho();

  const handleAdicionarCarrinho = () => {
    adicionarItem(produto);
    onAdicionarCarrinho(); // Fecha o modal após adicionar ao carrinho
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{produto.nome}</h2>
        <p>{produto.descricao}</p>
        <p>Preço: R$ {produto.preco.toFixed(2)}</p>
        <button onClick={handleAdicionarCarrinho}>Adicionar ao Carrinho</button>
      </div>
    </div>
  );
};

export default ModalProduto;
