import { Header } from "../../shared/components/Header/Header";
import { CardProdutoCarrinho } from "./components/CardProdutoCarrinho";
import { useCarrinho } from "../../shared/contexts/CarrinhoContext";

export const CartPage = () => {
  const { carrinho, total } = useCarrinho();

  return (
    <>
      <Header />
      <section className="flex flex-col items-center">
        <div className="content max-w-screen-md w-full px-2">
          <p className="text-center mt-8 text-vermelho-0 font-semibold">
            Aproveite
          </p>
          <h2 className="text-center font-bold text-fonteText-0 text-3xl md:text-4xl mb-4">
            Aqui estão seus itens
          </h2>
          <div className="divProdutos grid grid-cols-1 md:grid-cols-2 gap-4">
            {carrinho.map((item) => (
                <CardProdutoCarrinho key={item.id} id={item.id}  />    
            ))}
          
          </div>
          <div>

          </div>
          <p>R$ {total.toFixed(2)}</p>
        </div>
      </section>
    </>
  );
};
