import { Header } from "../../shared/components/Header/Header";
import { CardPromocao } from "./components/CardPromocao";
import { Categoria } from "./components/Categoria";
import CardProduto from "../../shared/components/CardProduto/CardProduto";
import { useProdutos } from "../../shared/contexts/ProdutosContext";
import { useCarrinho } from "../../shared/contexts/CarrinhoContext";
import { CardContatos } from "../../shared/components/CardContatos/CardContatos";

export const MenuPage = () => {
  const produtos = useProdutos();
  const { carrinho, total } = useCarrinho();

  return (
    <>
      <Header />
      <section className="flex  flex-col items-center">
        <div className="content max-w-screen-md w-full px-2">
          <p className="text-center mt-8 text-vermelho-0 font-semibold">
            Aproveite
          </p>
          <h2 className="text-center font-bold text-fonteText-0 text-3xl md:text-4xl mb-4">
            Promoções disponíveis
          </h2>
          <div className="promocoes flex gap-2  overflow-x-auto p-1  mb-8">
            <CardPromocao />
            <CardPromocao />
            <CardPromocao />
          </div>
          <p className="text-center mt-8 text-vermelho-0 font-semibold">Menu</p>
          <h2 className="text-center font-bold text-fonteText-0 text-3xl md:text-4xl mb-2">
            Nosso cardápio
          </h2>
          <div className="promocoes flex gap-1  overflow-x-auto  mb-8">
            <Categoria />
            <Categoria />
            <Categoria />
            <Categoria />
          </div>
          <div className="hambugueres mb-16">
            <h3>Hamburguer</h3>
            <div className="produtos grid md:grid-cols-2 gap-x-4 gap-y-1">
              {produtos.map((produto) => (
                <CardProduto key={produto.id} id={produto.id} />
              ))}
            </div>
          </div>

          <CardContatos/>
        </div>
      </section>
    </>
  );
};
