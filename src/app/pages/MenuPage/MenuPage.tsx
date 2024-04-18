import { useProdutos } from "../../shared/contexts/ProdutosContext";
import { MyContainer } from "../../shared/components/MyContainer/MyContainer";
import { Categorias } from "./components/Categorias";
import { CardProduto } from "../../shared/components/CardProduto/CardProduto";
import { Header } from "../../shared/components/Header/Header";
import Footer from "../../shared/components/Footer/Footer";
import { CardsAnuncios } from "../../shared/components/CardsAnuncios/CardsAnuncios";
import { AvisosTop } from '../../shared/components/AvisosTop/AvisosTop';

export const MenuPage = () => {
  const produtos = useProdutos();

  return (
    <>
      <Header />
      <AvisosTop/>
     
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
