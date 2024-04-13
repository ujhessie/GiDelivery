import React, { useState } from "react";
// import { IoClose, IoMdAdd, IoMdRemove } from "react-icons/io5";
import { IprodutosSimulados } from "../../../contexts/ProdutosContext";

import { useCarrinho } from "../../../contexts/CarrinhoContext";

interface IModalProdutoProps {
  produto: IprodutosSimulados;
  onClose: () => void;
  onAdicionarCarrinho: () => void;
}

const ModalProduto: React.FC<IModalProdutoProps> = ({
  produto,
  onClose,
  onAdicionarCarrinho,
}) => {
  const { adicionarItem } = useCarrinho();
  const [quantidade, setQuantidade] = useState(1);

  const handleAdicionarCarrinho = () => {
    adicionarItem({ ...produto, quantidade });
    onClose();
  };

  const handleIncrementarQuantidade = () => {
    setQuantidade(quantidade + 1);
  };

  const handleDecrementarQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const subtotal = (quantidade * produto.valor).toFixed(2);

  return (
    <div className="modal">
      <div className="modal-content">
        {/* Restante do seu código para renderizar o modal do produto */}
      </div>
    </div>
  );
};

export default ModalProduto;
