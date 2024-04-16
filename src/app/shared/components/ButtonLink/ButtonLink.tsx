import { Link } from "react-router-dom";

interface IButtonLinkProps {
  children: React.ReactNode;
  rota?: string;
  variacao?: "primario" | "secudario" | "terciario";
  tamanho?: "pequeno" | "medio" | "grande";
  icon?: React.ReactNode;
  className?: string;
}

export const ButtonLink: React.FC<IButtonLinkProps> = ({
  children,
  rota = "#",
  variacao = "primario",
  tamanho = "medio",
  icon,
  className,
}) => {
  let tiposVariacao: string =
    "border-vermelho-primario bg-vermelho-primario text-white";

  if (variacao == "secudario") {
    tiposVariacao =
      "bg-cinza-cinza-primario border-cinza-cinza-primario text-preto-primario";
  }

  if (variacao == "terciario") {
    tiposVariacao = "border-vermelho-primario bg-white text-vermelho-primario";
  }

  let tamanhosVariacoes: string = "py-[6px] px-[14px] font-medium ";

  if (tamanho == "pequeno") {
    tamanhosVariacoes = "py-[4px] px-[10px] font-medium ";
  }
  if (tamanho == "medio") {
    tamanhosVariacoes = "py-[8px] px-[28px] font-medium ";
  }

  if (tamanho == "grande") {
    tamanhosVariacoes = "py-[16px] px-[40px] font-bold custom-p ";
  }

  return (
    <Link
      to={rota}
      className={`shadow-md inline-flex rounded-full border-2 border-solid items-center gap-2 ${tamanhosVariacoes} ${tiposVariacao} ${className}`}
    >
      <p className='inline-block w-full text-center'>{children}</p>
      {icon ? <div className='text-xl'>{icon}</div> : null}
    </Link>
  );
};
