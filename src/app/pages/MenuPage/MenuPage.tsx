import { useProdutos } from "../../shared/contexts/ProdutosContext";
// import { useCarrinho } from "../../shared/contexts/CarrinhoContext";

import { MyContainer } from "../../shared/components/MyContainer/MyContainer";
import { Categorias } from "./components/Categorias";
import { CardProduto } from "../../shared/components/CardProduto/CardProduto";
import { Header } from "../../shared/components/Header/Header";
import Footer from "../../shared/components/Footer/Footer";
import { CardsAnuncios } from "../../shared/components/CardsAnuncios/CardsAnuncios";

export const MenuPage = () => {
  const produtos = useProdutos();
  // const { carrinho, total } = useCarrinho();

  // const SecAnuncios = () => (

  // )

  return (
    <>
      <Header />
      <MyContainer>

        <div className='mt-[20px]'>
          <CardsAnuncios />
        </div>

        <section className='py-[50px]'>
          <h2 className='custom-h2 text-center'>Nossos produtos</h2>
          <Categorias />
          <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-1'>
            {produtos.map((produto) => (
              <CardProduto key={produto.id} id={produto.id} />
            ))}
          </div>
        </section>

        <section>
          <Footer />
        </section>

      </MyContainer>
    </>
  );
};
