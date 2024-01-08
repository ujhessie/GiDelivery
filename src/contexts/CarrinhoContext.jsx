/* eslint-disable react/prop-types */
// CarrinhoContext.js
import { createContext, useState, useContext } from "react";

// Criando o contexto do carrinho
export const CarrinhoContext = createContext();

// Componente Provedor do Carrinho
export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  // Função para adicionar um item ao carrinho
  const adicionarItem = (novoItem) => {
    setCarrinho([...carrinho, novoItem]);
  };

  // Função para remover um item do carrinho com base no ID
  const removerItem = (id) => {
    const novoCarrinho = carrinho.filter((item) => item.id !== id);
    setCarrinho(novoCarrinho);
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarItem, removerItem }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

// Hook personalizado para consumir o contexto do carrinho
export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error("useCarrinho deve ser usado dentro de um CarrinhoProvider");
  }
  return context;
};


