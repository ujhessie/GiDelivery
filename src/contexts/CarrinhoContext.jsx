/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";


export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [total, setTotal] = useState(0);

  const calcularTotal = () => {
    const totalCalculado = carrinho.reduce((acc, produto) => {
      return acc + produto.preco * produto.quantidade;
    }, 0);
    setTotal(totalCalculado);
  }

  useEffect(() => {
    calcularTotal();
  }, [carrinho]); // Executa o cálculo do total sempre que o carrinho é modificado


  const adicionarItem = (novoItem) => {
    const itemExistente = carrinho.find((item) => item.id === novoItem.id);
  
    if (itemExistente) {
      const novoCarrinho = carrinho.map((item) =>
        item.id === novoItem.id
          ? { ...item, quantidade: item.quantidade + novoItem.quantidade } // Adiciona a nova quantidade à existente
          : item
      );
      setCarrinho(novoCarrinho);
    } else {
      setCarrinho([...carrinho, { ...novoItem, quantidade: novoItem.quantidade }]);
    }
  
    calcularTotal();
  };
  

  const removerItem = (id) => {
    const novoCarrinho = carrinho.filter((item) => item.id !== id);
    setCarrinho(novoCarrinho);
    calcularTotal();  
  };

  const atualizarQuantidade = (id, novaQuantidade) => {
    if (novaQuantidade <= 0) {
      const novoCarrinho = carrinho.filter((item) => item.id !== id);
      setCarrinho(novoCarrinho);
    } else {
      const novoCarrinho = carrinho.map((item) =>
        item.id === id ? { ...item, quantidade: novaQuantidade } : item
      );
      setCarrinho(novoCarrinho);
    }
    calcularTotal(); 
  };

   const calcularQuantidadeTotal = (carrinho) => {
    return carrinho.reduce((total, produto) => total + produto.quantidade, 0);
    
  };

  return (
    <CarrinhoContext.Provider
    value={{ carrinho, adicionarItem, removerItem, atualizarQuantidade, calcularQuantidadeTotal, total }}
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
