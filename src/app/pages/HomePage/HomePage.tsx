import { Header } from "../../shared/components/Header/Header";
import { MyContainer } from "../../shared/components/MyContainer/MyContainer";
import { ButtonLink } from "./../../shared/components/ButtonLink/ButtonLink";

import { BiFoodMenu } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import { BemVindo } from "./components";
import { CardsAnuncios } from "../../shared/components/CardsAnuncios/CardsAnuncios";
import Footer from "../../shared/components/Footer/Footer";

export const HomePage = () => {
  return (
    <>
      <Header />
      <MyContainer>
        <section className='py-[100px]'>
          <BemVindo />
          <h1 className='custom-h1 text-center uppercase text-preto-primario mb-4'>
            onde a praticidade <br />
            encontra o sabor!
          </h1>
          <p className='mb-4 text-preto-primario custom-p text-center lg:max-w-[70%] mx-auto'>
            Simplificamos o processo de pedidos online para proporcionar uma
            experiência rápida e conveniente aos nossos clientes. Explore nosso
            cardápio diversificado e faça seus pedidos de forma fácil e rápida,
            esteja onde estiver.
          </p>
          <div className='flex flex-col-reverse md:flex-row gap-2 justify-center'>
            <ButtonLink tamanho='grande' variacao='terciario'>
              Finalizar compra
            </ButtonLink>
            <ButtonLink tamanho='grande' rota='/menu'>
              Ver menu
            </ButtonLink>
          </div>
        </section>

        <section className='mb-[50px]'>
          <CardsAnuncios />
        </section>

        <Footer />
      </MyContainer>
    </>
  );
};
