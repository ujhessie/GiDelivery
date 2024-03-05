import { ButtonLink } from "../../shared/components/ButtonLink/ButtonLink";
import { Header } from "../../shared/components/Header/Header";

import { FaRegClock } from "react-icons/fa";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <section className="py-16 px-2 flex items-center justify-center">
        <div className="w-full max-w-screen-md">
          <div className="times flex gap-1 items-center mx-auto justify-center ">
            <div className="mb-4 text-vermelho-0 font-medium flex gap-2 items-center px-4 py-2 bg-orange-200 rounded-full">
              <FaRegClock />
              <p className="inline-block">18:00 - 23:00</p>
            </div>
          </div>
          <h1 className="text-center text-4xl md:text-5xl font-semibold  text-fonteText-0 mb-4  uppercase">
            Um sistemas <span className="text-vermelho-0">Simples</span> e{" "}
            <span className="text-vermelho-0">Eficiente</span> para seu negócio.
          </h1>
          <div className="flex justify-center">
            <ButtonLink rota="/menu">Ver Cardápio</ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
};
