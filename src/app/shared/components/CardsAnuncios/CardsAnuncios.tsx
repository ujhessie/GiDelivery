import { ButtonLink } from "../../../shared/components/ButtonLink/ButtonLink";

export const CardsAnuncios = () => {
  const Card = () => {
    return (
      <div className='card bg-branco aspect-video h-[150px] md:h-[200px] lg:h-[250px] rounded-md snap-center flex justify-between flex-col p-2'>
        <h5>Titulo do card</h5>
        <div className='text-end'>
          <ButtonLink tamanho='pequeno'>Botão</ButtonLink>
        </div>
      </div>
    );
  };

  return (
    <div className='flex gap-2 overflow-x-scroll'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
