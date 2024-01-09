/* eslint-disable react/prop-types */
// ProdutosContext.js
import { createContext, useState, useContext } from "react";

// Array simulado de produtos
const produtosSimulados = [
  {
    id: 1,
    nome: "Hambúrguer Tradicional",
    preco: 9.99,
    categoria: "hamburguer",
    imagemURL:
      "https://img.freepik.com/fotos-gratis/mao-em-luvas-de-hamburguer-segurando-o-hamburguer-de-carne-no-fundo-preto_140725-303.jpg?w=740&t=st=1704475733~exp=1704476333~hmac=370cf826f106dd82f840595b72ba4b4e9c14a82a8c56f83bedf4e0b2344547a9",
    descricao:
      "Hambúrguer clássico com carne, alface, queijo, tomate e molho especial.",
  },
  {
    id: 2,
    nome: "Churrasco",
    preco: 15.49,
    categoria: "churrasco",
    imagemURL:
      "https://img.freepik.com/fotos-gratis/fotografia-cinematografica-de-bife-grelhado_1409-5680.jpg?w=740&t=st=1704806341~exp=1704806941~hmac=68db9e457629788f989d88ffffdeda69a40a373d90094eab8ef28f1a16698316",
    descricao:
      "Prato de churrasco com carne, linguiça, frango e acompanhamentos.",
  },
  {
    id: 3,
    nome: "Cachorro-Quente",
    preco: 6.99,
    categoria: "lanche",
    imagemURL:
      "https://img.freepik.com/fotos-gratis/cachorro-quente_144627-19567.jpg?w=740&t=st=1704806469~exp=1704807069~hmac=e340e559729c2a235a5fada93d0d6661795ee82e8f7bf06c87ecace2e8b00aa8",
    descricao:
      "Tradicional cachorro-quente com salsicha, molhos e condimentos.",
  },
  {
    id: 4,
    nome: "Pizza Margherita",
    preco: 18.99,
    categoria: "pizza",
    imagemURL:
      "https://img.freepik.com/fotos-gratis/pizza-com-ingredientes-misturados-e-queijo-por-cima_114579-3438.jpg?w=740&t=st=1704806578~exp=1704807178~hmac=04974bab83004584e770a42bcbddab1ac8877eef18683d5fd9c563bd4b0f1012",
    descricao:
      "Pizza margherita com molho de tomate, queijo mozzarella, tomate e manjericão.",
  },
  {
    id: 5,
    nome: "Sanduíche de Frango Grelhado",
    preco: 12.99,
    categoria: "sanduíche",
    imagemURL:
      "https://img.freepik.com/fotos-gratis/grelhado-e-sanduiche-com-bacon-ovo-frito-tomate-e-alface-servido-em-tabua-de-madeira_1150-42571.jpg?w=740&t=st=1704806636~exp=1704807236~hmac=253c036b125ec7c1b973be3e5880de52f8101883346c3a6065a8db9a1b0067a2",
    descricao:
      "Sanduíche de frango grelhado com alface, queijo e molho especial.",
  },
  {
    id: 6,
    nome: "Taco Mexicano",
    preco: 8.99,
    categoria: "mexicano",
    imagemURL:
      "https://img.freepik.com/fotos-gratis/angulo-alto-do-conceito-de-comida-mexicana_23-2148629376.jpg?w=740&t=st=1704806664~exp=1704807264~hmac=45b0448778d2efaba451c2940613f267e413403bf5ccc522e58003a91b6f8817",
    descricao: "Taco mexicano com carne, alface, queijo e molhos.",
  },
  {
    id: 7,
    nome: "Salada Caesar",
    preco: 11.49,
    categoria: "salada",
    imagemURL:
      "https://img.freepik.com/fotos-gratis/salada-mista-preparada-com-molho-de-legumes-e-verduras_141793-812.jpg?w=740&t=st=1704806694~exp=1704807294~hmac=d23f3e3f4a8c45b8848cdcc0b079cb5ac43a6724f5dd80817e7e8e8c54d9cafd",
    descricao: "Salada caesar com alface, frango grelhado, croutons e molho.",
  },
  {
    id: 8,
    nome: "Sushi Variado",
    preco: 20.99,
    categoria: "japonesa",
    imagemURL:
      "https://img.freepik.com/fotos-gratis/sushi-conjunto-rolos-quentes-abacate-california-e-salmao-rola_141793-1279.jpg?w=740&t=st=1704806713~exp=1704807313~hmac=8b557fba9df668aa23e19a685c833510f771195e9179b88d1f38775e08f0dfcf",
    descricao:
      "Prato de sushi variado com diferentes tipos de rolinhos e sashimi.",
  },
  {
    id: 9,
    nome: "Massa Carbonara",
    preco: 14.99,
    categoria: "italiana",
    imagemURL:
      "https://img.freepik.com/fotos-gratis/massa-italiana-autentica_24972-2334.jpg?w=740&t=st=1704806736~exp=1704807336~hmac=676bd4e306d3c85e75cf1af898723727c28463b6478c0667f83ec73e320fd870",
    descricao: "Massa carbonara com ovos, queijo, bacon e temperos.",
  },
  {
    id: 10,
    nome: "Torta de Frango",
    preco: 16.49,
    categoria: "lanche",
    imagemURL:
      "https://img.freepik.com/fotos-gratis/torta-de-abobora-comida-fotografia-receita-ideia_53876-47150.jpg?w=740&t=st=1704806762~exp=1704807362~hmac=f446404a8e42e42041a564fd7877a3b74389177009b2f2f2cc99c261a1949239",
    descricao: "Torta de frango assada com legumes e temperos.",
  },
  {
    id: 11,
    nome: "Sopa de Legumes",
    preco: 8.99,
    categoria: "sopa",
    imagemURL:
      "https://img.freepik.com/fotos-gratis/sopa-de-tomate-com-verde-em-cima-da-mesa_140725-2447.jpg?w=740&t=st=1704806782~exp=1704807382~hmac=8313798fcea535ebba2fe4ce11c2668da1fdd29dcb3d92733f5cea3e74ce4526",
    descricao: "Sopa de legumes vegetariana com variedade de vegetais frescos.",
  },
  {
    id: 12,
    nome: "Wrap de Vegetais",
    preco: 9.49,
    categoria: "sanduíche",
    imagemURL:
      "https://img.freepik.com/fotos-gratis/tortilha-deliciosa_144627-12069.jpg?w=740&t=st=1704806801~exp=1704807401~hmac=029e98610dbf81160adf3fb9a5358a63901f1b1706885acec8947d7469dc40d2",
    descricao: "Wrap de vegetais frescos e molho especial.",
  },
  {
    id: 13,
    nome: "Panquecas",
    preco: 10.99,
    categoria: "café-da-manhã",
    imagemURL:
      "https://img.freepik.com/fotos-gratis/crepes-em-chapa-branca-com-queijo-cottage-berrie-jam-vista-lateral_141793-3535.jpg?w=740&t=st=1704806819~exp=1704807419~hmac=a199d3528d1538e6c647dbcfb065dd5a977d68734a7cdd62577b4ee7be95231a",
    descricao: "Panquecas caseiras com mel, frutas e manteiga.",
  },
  {
    id: 14,
    nome: "Salada de Frutas",
    preco: 7.99,
    categoria: "sobremesa",
    imagemURL:
      "https://img.freepik.com/fotos-gratis/salada-de-frutas-coloridas-na-tigela_23-2148196331.jpg?w=740&t=st=1704806845~exp=1704807445~hmac=efa03949a22593f74f12e21347c37573791bf677edf89fe2e40677037dfdce4f",
    descricao: "Salada de frutas frescas variadas.",
  },
  {
    id: 15,
    nome: "Bolo de Chocolate",
    preco: 12.99,
    categoria: "sobremesa",
    imagemURL:
      "https://img.freepik.com/fotos-gratis/bolo-de-morango-na-mesa-de-madeira_176474-2525.jpg?w=740&t=st=1704806884~exp=1704807484~hmac=cd257d667693ec314ce17b12b3fe2281df7f7d243bbe3c043697a570200919bc",
    descricao: "Bolo de chocolate com cobertura e raspas de chocolate.",
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
