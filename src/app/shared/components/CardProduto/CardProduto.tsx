import { useProdutos } from "../../contexts/ProdutosContext";

import { IoMdAdd } from "react-icons/io";
import { IProduto, useCarrinho } from "../../contexts/CarrinhoContext";
import { Link } from "react-router-dom";

interface ICardProduto {
  id: number;
}

const CardProduto: React.FC<ICardProduto> = ({ id }) => {
  const produtos = useProdutos();
  const produto = produtos.find((produto) => produto.id === id);
  const { adicionarItem, carrinho, total } = useCarrinho();

  const novoItem: IProduto = {
    id: produto?.id || 0,
    nome: produto?.nome || "",
    preco: produto?.valor || 0,
    quantidade: 1,
    imgUrl:produto?.imgUrl || ""
  };

  const handleClick = () => {
    adicionarItem(novoItem);
  };

  if (!produto) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <Link to={`/produto/${produto.id}`} className="cardProduto ">
      <div className="contentCard flex p-4 shadow-md rounded-lg gap-4">
        <div className="divImg aspect-square w-36 rounded-xl overflow-hidden">
          <img
            className="object-cover h-full w-full"
            src={produto.imgUrl}
            alt={produto.nome}
          />
        </div>
        <div className="divInfo w-full flex flex-col justify-between gap-1 ">
          <div className="divNome">
            <p className="nomeProduto text-fonteText-0 font-semibold text-lg">
              {produto.nome}
            </p>
          </div>
          <div className="bottom flex justify-between items-end">
            <div>
              <p className="valor text-fonteText-0 font-semibold opacity-90">
                <span className="text-vermelho-0 text-sm">R$</span>{" "}
                {produto.valor}
              </p>
            </div>
            <div>
              <button
                // onClick={handleClick}
                className="bg-vermelho-0 p-2 rounded-full aspect-square text-white  text-2xl"
              >
                <IoMdAdd />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardProduto;
