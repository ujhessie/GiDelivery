import { Link } from "react-router-dom";

interface IButtonLinkProps {
  children: React.ReactNode;
  rota?: string;
}

export const ButtonLink: React.FC<IButtonLinkProps> = ({
  children,
  rota = "",
}) => {
  return (
    <Link
      to={rota}
      className="py-2 px-4  bg-vermelho-0 rounded-full text-white font-medium inline-flex "
    >
      <p className="inline-block">{children}</p>
    </Link>
  );
};
