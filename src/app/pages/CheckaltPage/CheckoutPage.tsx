import { MyContainer } from "../../shared/components/MyContainer/MyContainer";
import { Header } from "../../shared/components/Header/Header";

export const CheckoutPage = () => {
  const FormCliente = () => {
    <form className='dadosCliente'>
      <p>DAdos do cliente</p>
    </form>;
  };

  return (
    <div>
      <Header />
      <MyContainer className=''>
        <h2 className='custom-h2'>Seus dados</h2>
        <div className='conteudo bg-branco '>
          <div className='contentCheckout'>
            <div className='background'></div>
            <FormCliente />
            <form className='dadosEntrega'>Dados de entrega</form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};
