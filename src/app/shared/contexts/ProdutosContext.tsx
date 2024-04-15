import { createContext, useState, Context, useContext, useMemo } from "react";

export interface IprodutosSimulados {
  id: number;
  nome: string;
  valor: number;
  categoria:
    | "hamburguer"
    | "sanduiche"
    | "bebida"
    | "combo"
    | "churrasco"
    | "cachorro-quente"
    | "pizza"
    | "outros"
    | "sopa"
    | "sobremesa";
  imgUrl: string;
  descricao: string;
}

interface IProdutosProviderProps {
  children: React.ReactNode;
}

const produtosSimulados: IprodutosSimulados[] = [
  {
    id: 1,
    nome: "Hambúrguer Tradicional (Teste de tamanho de frase)",
    valor: 9.99,
    categoria: "hamburguer",
    imgUrl:
      "https://img.freepik.com/fotos-gratis/mao-em-luvas-de-hamburguer-segurando-o-hamburguer-de-carne-no-fundo-preto_140725-303.jpg?w=740&t=st=1704475733~exp=1704476333~hmac=370cf826f106dd82f840595b72ba4b4e9c14a82a8c56f83bedf4e0b2344547a9",
    descricao:
      "Hambúrguer clássico com carne, alface, queijo, tomate e molho especial.",
  },
  {
    id: 2,
    nome: "Churrasco",
    valor: 15.49,
    categoria: "churrasco",
    imgUrl:
      "https://img.freepik.com/fotos-gratis/fotografia-cinematografica-de-bife-grelhado_1409-5680.jpg?w=740&t=st=1704806341~exp=1704806941~hmac=68db9e457629788f989d88ffffdeda69a40a373d90094eab8ef28f1a16698316",
    descricao:
      "Prato de churrasco com carne, linguiça, frango e acompanhamentos.",
  },
  {
    id: 3,
    nome: "Cachorro-Quente",
    valor: 6.99,
    categoria: "cachorro-quente",
    imgUrl:
      "https://img.freepik.com/fotos-gratis/cachorro-quente_144627-19567.jpg?w=740&t=st=1704806469~exp=1704807069~hmac=e340e559729c2a235a5fada93d0d6661795ee82e8f7bf06c87ecace2e8b00aa8",
    descricao:
      "Tradicional cachorro-quente com salsicha, molhos e condimentos.",
  },
  {
    id: 4,
    nome: "Pizza Margherita",
    valor: 18.99,
    categoria: "pizza",
    imgUrl:
      "https://img.freepik.com/fotos-gratis/pizza-com-ingredientes-misturados-e-queijo-por-cima_114579-3438.jpg?w=740&t=st=1704806578~exp=1704807178~hmac=04974bab83004584e770a42bcbddab1ac8877eef18683d5fd9c563bd4b0f1012",
    descricao:
      "Pizza margherita com molho de tomate, queijo mozzarella, tomate e manjericão.",
  },
  {
    id: 5,
    nome: "Sanduíche de Frango Grelhado",
    valor: 12.99,
    categoria: "sanduiche",
    imgUrl:
      "https://img.freepik.com/fotos-gratis/grelhado-e-sanduiche-com-bacon-ovo-frito-tomate-e-alface-servido-em-tabua-de-madeira_1150-42571.jpg?w=740&t=st=1704806636~exp=1704807236~hmac=253c036b125ec7c1b973be3e5880de52f8101883346c3a6065a8db9a1b0067a2",
    descricao:
      "Sanduíche de frango grelhado com alface, queijo e molho especial.",
  },
  {
    id: 6,
    nome: "Taco Mexicano",
    valor: 8.99,
    categoria: "outros",
    imgUrl:
      "https://img.freepik.com/fotos-gratis/angulo-alto-do-conceito-de-comida-mexicana_23-2148629376.jpg?w=740&t=st=1704806664~exp=1704807264~hmac=45b0448778d2efaba451c2940613f267e413403bf5ccc522e58003a91b6f8817",
    descricao: "Taco mexicano com carne, alface, queijo e molhos.",
  },
  {
    id: 7,
    nome: "Salada Caesar",
    valor: 11.49,
    categoria: "outros",
    imgUrl:
      "https://img.freepik.com/fotos-gratis/salada-mista-preparada-com-molho-de-legumes-e-verduras_141793-812.jpg?w=740&t=st=1704806694~exp=1704807294~hmac=d23f3e3f4a8c45b8848cdcc0b079cb5ac43a6724f5dd80817e7e8e8c54d9cafd",
    descricao: "Salada caesar com alface, frango grelhado, croutons e molho.",
  },
  {
    id: 8,
    nome: "Sushi Variado",
    valor: 20.99,
    categoria: "outros",
    imgUrl:
      "https://img.freepik.com/fotos-gratis/sushi-conjunto-rolos-quentes-abacate-california-e-salmao-rola_141793-1279.jpg?w=740&t=st=1704806713~exp=1704807313~hmac=8b557fba9df668aa23e19a685c833510f771195e9179b88d1f38775e08f0dfcf",
    descricao:
      "Prato de sushi variado com diferentes tipos de rolinhos e sashimi.",
  },
  {
    id: 9,
    nome: "Tiramisu",
    valor: 7.99,
    categoria: "sobremesa",
    imgUrl:
      "https://img.freepik.com/fotos-gratis/delicioso-tiramisu-com-poeira-de-cacau-e-folhas-de-hortela_2829-15240.jpg?size=626&ext=jpg",
    descricao:
      "Clássica sobremesa italiana com camadas de biscoito, queijo mascarpone, café e cacau em pó.",
  },
  {
    id: 10,
    nome: "Sopa de Legumes",
    valor: 5.49,
    categoria: "sopa",
    imgUrl:
      "https://img.freepik.com/fotos-gratis/sopa-de-legumes-saudavel-com-ervas-frescas_144627-3225.jpg?size=626&ext=jpg",
    descricao:
      "Sopa reconfortante preparada com uma variedade de legumes frescos e ervas.",
  },
  {
    id: 11,
    nome: "Tacos de Peixe",
    valor: 14.99,
    categoria: "outros",
    imgUrl:
      "https://img.freepik.com/fotos-gratis/tacos-de-peixe-com-coentro-e-cebola-roxa_140725-2870.jpg?size=626&ext=jpg",
    descricao:
      "Tacos mexicanos recheados com peixe grelhado, coentro, cebola roxa e molhos.",
  },
  // Adicione mais objetos de produto conforme necessário

  // Adicione mais objetos de produto conforme necessário
];

// Criando o contexto de produtos
// Contexto de produtos
export const ProdutosContext: Context<IprodutosSimulados[]> = createContext<
  IprodutosSimulados[]
>([]);

// Provedor de produtos
export const ProdutosProvider: React.FC<IProdutosProviderProps> = ({
  children,
}) => {
  const produtos = useMemo(() => produtosSimulados, []); // Evita recálculos desnecessários

  return (
    <ProdutosContext.Provider value={produtos}>
      {children}
    </ProdutosContext.Provider>
  );
};

// Hook personalizado para consumir o contexto de produtos
export const useProdutos = (): IprodutosSimulados[] => {
  const context = useContext(ProdutosContext);

  if (!context) {
    throw new Error("useProdutos deve ser usado dentro de um ProdutosProvider");
  }

  return context;
};
