import { createContext, useState, useContext, useEffect, ReactNode } from "react";

export interface IProduto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  imgUrl: string;
}

interface ICarrinhoContextType {
  carrinho: IProduto[];
  adicionarItem: (novoItem: IProduto) => void;
  removerItem: (id: number) => void;
  atualizarQuantidade: (id: number, novaQuantidade: number) => void;
  calcularQuantidadeTotal: (carrinho: IProduto[]) => number;
  total: number;
}

interface ICarrinhoProvider {
  children: ReactNode;
}

export const CarrinhoContext = createContext<ICarrinhoContextType | undefined>(
  undefined
);

export const CarrinhoProvider: React.FC<ICarrinhoProvider> = ({ children }) => {
  const [carrinho, setCarrinho] = useState<IProduto[]>(() => {
    const savedCarrinho = localStorage.getItem("carrinho");
    return savedCarrinho ? JSON.parse(savedCarrinho) : [];
  });
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    calcularTotal();
  }, [carrinho]);

  const calcularTotal = () => {
    const totalCalculado = carrinho.reduce(
      (acc, produto) => acc + produto.preco * produto.quantidade,
      0
    );
    setTotal(totalCalculado);
  };

  const adicionarItem = (novoItem: IProduto) => {
    const itemExistente = carrinho.find((item) => item.id === novoItem.id);

    if (itemExistente) {
      const novoCarrinho = carrinho.map((item) =>
        item.id === novoItem.id
          ? { ...item, quantidade: item.quantidade + novoItem.quantidade }
          : item
      );
      setCarrinho(novoCarrinho);
    } else {
      setCarrinho([...carrinho, { ...novoItem, quantidade: novoItem.quantidade }]);
    }
  };

  const removerItem = (id: number) => {
    const novoCarrinho = carrinho.filter((item) => item.id !== id);
    setCarrinho(novoCarrinho);
  };

  const atualizarQuantidade = (id: number, novaQuantidade: number) => {
    if (novaQuantidade <= 0) {
      const novoCarrinho = carrinho.filter((item) => item.id !== id);
      setCarrinho(novoCarrinho);
    } else {
      const novoCarrinho = carrinho.map((item) =>
        item.id === id ? { ...item, quantidade: novaQuantidade } : item
      );
      setCarrinho(novoCarrinho);
    }
  };

  const calcularQuantidadeTotal = (carrinho: IProduto[]) => {
    return carrinho.reduce((total, produto) => total + produto.quantidade, 0);
  };

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarItem,
        removerItem,
        atualizarQuantidade,
        calcularQuantidadeTotal,
        total,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error("useCarrinho deve ser usado dentro de um CarrinhoProvider");
  }
  return context;
};
