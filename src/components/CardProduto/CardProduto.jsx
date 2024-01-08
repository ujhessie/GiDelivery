/* eslint-disable react/prop-types */
import "./cardProduto.scss";

import { useProdutos } from "../../contexts/ProdutosContext";
import { useCarrinho } from '../../contexts/CarrinhoContext';

const CardProduto = ({ id }) => {
  const { produtos } = useProdutos();
  const { adicionarItem } = useCarrinho();

  // Encontrar o produto com o ID correspondente
  const produto = produtos.find((produto) => produto.id === id);

  if (!produto) {
    // Lógica para lidar com o produto não encontrado, se necessário
    return <div>Produto não encontrado.</div>;
  }
  const handleAdicionarAoCarrinho = () => {
    adicionarItem(produto); // Adiciona o produto ao carrinho
    console.log("Item adicionado ao carrinho:", produto);
  };

  return (
    <div className="cardProduto">
      {/* Restante do seu código para renderizar o card do produto */}
      <div className="divImg">
        <img src={produto.imagemURL} alt={produto.nome} />
      </div>
      <div className="divInfoProduto">
        <p className="nomeProduto">{produto.nome}</p>
        <p className="descricaoProduto">{produto.descricao}</p>
        <div className="divValorAndBotao">
          <span className="valor">R$ {produto.preco.toFixed(2)}</span>
          <button onClick={handleAdicionarAoCarrinho}>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduto;
