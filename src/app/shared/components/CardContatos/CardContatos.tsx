import { GrInstagram } from "react-icons/gr";


export const CardContatos = () => {
  return (
    <div className="CardConatos p-8  shadow-xl rounded-3xl bg-red-100/25">
      <div className="content flex flex-col md:flex-row gap-4">
        <div className="info">
          <p className="text-center mt-8 text-vermelho-0 font-semibold md:text-start">
            Contatos
          </p>
          <h2 className="text-center font-bold text-fonteText-0 text-3xl md:text-4xl mb-4 md:text-start">
            Alguma dúvida? Entre em contato conosco.
          </h2>
          <p className="text-fonteText-0 text-center md:text-start mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt sit
            dolores unde.
          </p>
          <div className="redessociais flex justify-center gap-2 mb-4 md:justify-start">
            <div className="redesocial flex items-center justify-center aspect-square h-12 rounded-full text-white p-2 bg-vermelho-0"><GrInstagram /></div>
            <div className="redesocial flex items-center justify-center aspect-square h-12 rounded-full text-white p-2 bg-vermelho-0"><GrInstagram /></div>
            <div className="redesocial flex items-center justify-center aspect-square h-12 rounded-full text-white p-2 bg-vermelho-0"><GrInstagram /></div>
            <div className="redesocial flex items-center justify-center aspect-square h-12 rounded-full text-white p-2 bg-vermelho-0"><GrInstagram /></div>
          </div>
        </div>
        <div className="locate bg-red-200 h-[300px] w-full md:min-h-full rounded-3xl"></div>
      </div>
    </div>
  );
};
