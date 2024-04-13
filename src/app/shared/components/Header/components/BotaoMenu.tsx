import { CgMenuGridO, CgClose } from "react-icons/cg"; // Importe o ícone "X"

interface BotaoMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

// Atualize o componente do botão de menu para receber uma prop isOpen e alternar entre os ícones
export const BotaoMenu: React.FC<BotaoMenuProps> = ({ isOpen, onClick }) => (
  <div className='md:hidden my-transition' onClick={onClick}>
    <div className='content relative flex justify-center items-center p-5 bg-branco text-vermelho-primario rounded-md  text-2xl hover:bg-vermelho-primario hover:text-white my-transition cursor-pointer'>
      {isOpen ? (
        <CgClose className='absolute' />
      ) : (
        <CgMenuGridO className='absolute' />
      )}
    </div>
  </div>
);
