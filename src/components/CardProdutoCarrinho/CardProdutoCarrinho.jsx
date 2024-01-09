/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import './cardProdutoCarrinho.scss';
import { useCarrinho } from '../../contexts/CarrinhoContext';

const CardProdutoCarrinho = ({ produto }) => {
  const { removerItem, atualizarQuantidade, calcularTotal } = useCarrinho();
  const [quantidade, setQuantidade] = useState(produto.quantidade);

  useEffect(() => {
    setQuantidade(produto.quantidade);
  }, [produto]);

  const handleRemoverItem = () => {
    removerItem(produto.id);
    calcularTotal();
  };

  const handleDiminuirQuantidade = () => {
    const novaQuantidade = quantidade - 1;
    if (novaQuantidade >= 0) {
      setQuantidade(novaQuantidade);
      atualizarQuantidade(produto.id, novaQuantidade);
      calcularTotal();
    }
  };

  const handleAumentarQuantidade = () => {
    const novaQuantidade = quantidade + 1;
    setQuantidade(novaQuantidade);
    atualizarQuantidade(produto.id, novaQuantidade);
    calcularTotal();
  };


  return (
    <div className="cardProdutoCarrinho">
      <div className="divImg">
        <img src={produto.imagemURL} alt={produto.nome} />
      </div>
      <div className="divInformacoes">
        <p className="nomeProduto">{produto.nome}</p>
        <p className="valorProduto">R$ {produto.preco.toFixed(2)} (unid.) </p>

        <div className="divQuantidadeProduto">
          <p className="removerProduto" onClick={handleRemoverItem}>
            Remover
          </p>
          <div>
            <button onClick={handleDiminuirQuantidade}>-</button>
            <span>{quantidade}</span>
            <button onClick={handleAumentarQuantidade}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProdutoCarrinho;
