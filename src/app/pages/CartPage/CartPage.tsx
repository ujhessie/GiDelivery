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

  return (
    <>
      <Header />
      <MyContainer className='mt-[20px]'>
        <div className='divflex grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2 gap-4  '>
            <h2 className='custom-h2 text-center mb-[20px]'>
              Aqui estão seus itens
            </h2>
            <div className='produtos grid lg:grid-cols-2'>
              {carrinho.map((item) => (
                <CardProdutoCarrinho key={item.id} id={item.id} />
              ))}
            </div>
          </div>
          <aside className='bg col-span-1 rounded-md p-4 shadow-md'>
            <div className='bg-branco aspect-[4/3] rounded-md mb-4'></div>
            <p className='custom-p text-center font-medium mb-2'>
              Total: R$ {total.toFixed(2)}
            </p>
            <div className='div-botoes  flex flex-col gap-4 md:flex-row md:justify-between'>
              <ButtonLink className='inline-block' rota='/menu' variacao='secudario'>Voltar</ButtonLink>
              <ButtonLink abrirEmNovaAba={true}  className='inline-block' rota={linkWhatsApp}>Finalizar compra</ButtonLink>
            </div>
          </aside>
        </div>
      </MyContainer>
      {/* <section className='flex flex-col items-center'>
        <div className='content max-w-screen-md w-full px-2'>
          <p className='text-center mt-8 text-vermelho-0 font-semibold'>
            Aproveite
          </p>
          <h2 className='text-center font-bold text-fonteText-0 text-3xl md:text-4xl mb-4'>
            Aqui estão seus itens
          </h2>
          <div className='divProdutos grid grid-cols-1 md:grid-cols-2 gap-4 mb-60'>
            {carrinho.map((item) => (
              <CardProdutoCarrinho key={item.id} id={item.id} />
            ))}
          </div>

          <div className='div-bottom fixed bg-white  bottom-0 w-full left-0 flex justify-center'>
            <div className='content max-w-screen-md pt-4 shadow-md rounded-xl w-full px-2'>
              <div className='valores flex justify-center gap-4 items-center mb-2 md:justify-end text-fonteText-0'>
                <p className='dashed line-through text-sm'>R$ 20,00 </p>
                <p>
                  <span className='text-vermelho-0 text-sm font-semibold'>
                    R$
                  </span>{" "}
                  {total.toFixed(2)}
                </p>
              </div>
              <div className='div-botoes flex flex-col md:flex-row md:justify-end gap-2 mb-4'>
                <ButtonLink variacao='secudario'>Voltar</ButtonLink>
                <ButtonLink rota={linkWhatsApp}>Finalizar compra</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};
