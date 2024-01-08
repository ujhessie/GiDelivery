/* eslint-disable react/prop-types */
// ProdutosContext.js
import { createContext, useState, useContext } from "react";

// Array simulado de produtos
const produtosSimulados = [
  {
    id: 1,
    nome: "Produto 1",
    preco: 10.99,
    categoria: "hamburguer",
    imagemURL:
      "https://img.freepik.com/fotos-gratis/mao-em-luvas-de-hamburguer-segurando-o-hamburguer-de-carne-no-fundo-preto_140725-303.jpg?w=740&t=st=1704475733~exp=1704476333~hmac=370cf826f106dd82f840595b72ba4b4e9c14a82a8c56f83bedf4e0b2344547a9",
    descricao: "Esta é uma descrição breve deste produto.",
  },
  {
    id: 2,
    nome: "Produto 2",
    preco: 10.99,
    categoria: "hamburguer",
    imagemURL:
      "https://img.freepik.com/fotos-gratis/mao-em-luvas-de-hamburguer-segurando-o-hamburguer-de-carne-no-fundo-preto_140725-303.jpg?w=740&t=st=1704475733~exp=1704476333~hmac=370cf826f106dd82f840595b72ba4b4e9c14a82a8c56f83bedf4e0b2344547a9",
    descricao: "Esta é uma descrição breve deste produto.",
  },
  {
    id: 3,
    nome: "Produto 3",
    preco: 10.99,
    categoria: "hamburguer",
    imagemURL:
      "https://img.freepik.com/fotos-gratis/mao-em-luvas-de-hamburguer-segurando-o-hamburguer-de-carne-no-fundo-preto_140725-303.jpg?w=740&t=st=1704475733~exp=1704476333~hmac=370cf826f106dd82f840595b72ba4b4e9c14a82a8c56f83bedf4e0b2344547a9",
    descricao: "Esta é uma descrição breve deste produto.",
  },
  {
    id: 4,
    nome: "Produto 4",
    preco: 10.99,
    categoria: "hamburguer",
    imagemURL:
      "https://img.freepik.com/fotos-gratis/mao-em-luvas-de-hamburguer-segurando-o-hamburguer-de-carne-no-fundo-preto_140725-303.jpg?w=740&t=st=1704475733~exp=1704476333~hmac=370cf826f106dd82f840595b72ba4b4e9c14a82a8c56f83bedf4e0b2344547a9",
    descricao: "Esta é uma descrição breve deste produto.",
  },

  // Adicione mais objetos de produto conforme necessário
];

// Criando o contexto de produtos
export const ProdutosContext = createContext();

// Componente Provedor de Produtos
export const ProdutosProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [produtos, setProdutos] = useState(produtosSimulados);

  return (
    <ProdutosContext.Provider value={{ produtos }}>
      {children}
    </ProdutosContext.Provider>
  );
};

// Hook personalizado para consumir o contexto de produtos
export const useProdutos = () => {
  const context = useContext(ProdutosContext);
  if (!context) {
    throw new Error("useProdutos deve ser usado dentro de um ProdutosProvider");
  }
  return context;
};
