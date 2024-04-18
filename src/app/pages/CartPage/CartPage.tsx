import React from "react";
import { Header } from "../../shared/components/Header/Header";
import { CardProdutoCarrinho } from "./components/CardProdutoCarrinho";
import { useCarrinho } from "../../shared/contexts/CarrinhoContext";
import { ButtonLink } from "../../shared/components/ButtonLink/ButtonLink";
import { MyContainer } from "./../../shared/components/MyContainer/MyContainer";

export const CartPage = () => {
  const { carrinho, total } = useCarrinho();

  // Função para montar a mensagem do WhatsApp com os produtos do carrinho
  const montarMensagemWhatsApp = () => {
    const produtosTexto = carrinho.map(
      (item) => `${item.nome} - R$ ${item.preco.toFixed(2)}`
    );
    const mensagem = `Olá! Gostaria de finalizar minha compra com os seguintes itens: ${produtosTexto.join(
      ", "
    )}. Total: R$ ${total.toFixed(2)}.`;
    return encodeURIComponent(mensagem);
  };

  // Número de telefone do WhatsApp
  const numeroTelefoneWhatsApp = "98988740103";

  // Montar o link do WhatsApp com o número de telefone e a mensagem
  const linkWhatsApp = `https://wa.me/${numeroTelefoneWhatsApp}?text=${montarMensagemWhatsApp()}`;

  // ### Componentes internos
  const DivBotoes = () => (
    <div className='div-botoes  flex  gap-4 justify-between'>
      <ButtonLink className='w-full' rota='/menu' variacao='secudario'>
        Voltar
      </ButtonLink>
      <ButtonLink abrirEmNovaAba={true} className=' w-full' rota={linkWhatsApp}>
        Continuar
      </ButtonLink>
    </div>
  );

  return (
    <>
      <Header />
      <MyContainer className='mt-[20px]'>
        <div className='md:grid gap-8 md:grid-cols-3'>
          <div className='md:col-span-2 '>
            <h2 className='custom-h2 text-center mb-[20px]'>
              Sua sacola
            </h2>
            <div className='produtos grid '>
              {carrinho.map((item) => (
                <CardProdutoCarrinho key={item.id} id={item.id} />
              ))}
            </div>
          </div>
          <aside className='bg col-span-1 bg-white  sticky  h-auto bottom-0 md:bottom-full  rounded-md p-4 shadow-md'>
            <div className='bg-branco hidden md:block aspect-[4/3] rounded-md mb-4'></div>
            <p className='custom-p text-center font-medium mb-2'>
              Total: R$ {total.toFixed(2)}
            </p>
            <DivBotoes />
          </aside>
        </div>
      </MyContainer>
    </>
  );
};
