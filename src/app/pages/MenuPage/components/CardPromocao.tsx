import { ButtonLink } from "../../../shared/components/ButtonLink/ButtonLink";

export const CardPromocao = () => {
  return (
    <div className="cardPromocao relative bg-laranjaFraco-0 p-4  aspect-[4/3] rounded-2xl flex-shrink-0 shadow-md">
      <div className="content w-52 h-full overflow-hidden flex justify-center flex-col  flex-shrink">
        <p className="font-bold  mb-4 w-5/6 text-fonteText-0 text-lg">
          Combo refri + hamburguer: R$ 20,00
        </p>
        <div>
          <ButtonLink>Ver mais</ButtonLink>
        </div>
      </div>
    </div>
  );
};

//  A ideia é ter apenas uma imagem com uma chamada no card. Caso não houver imagem será dicionado dessa forma padrão.