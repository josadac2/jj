import './index.scss' ;
import Cabecalho2 from '../cabecalho2';
import Rodape from '../rodape';


export default function Pagamento () {



    return (
        <div className="maepagamento">
           <Cabecalho2/>

           <div className="agrupapagamento">
              <img className='cadeado' src="../assets/image/cadeado-azul.png" alt="" />
              <h1>Escolha como você quer pagar </h1>
              <h2>Sua forma de pagamento está criptografada <br /> e você pode mudá-lá quando quiser   </h2>
           </div>

           <div className="agrupaform">
              <div className='containerpagamento'>
                  <div className='subcontainerpagamento'>
                    <h3>Cartão de Crédito ou Débito</h3>
                    <img src="../assets/image/maste.png" alt="" className="forms" />
                    <img src="../assets/image/visa.png" alt="" className="forms" />
                    <img src="../assets/image/hipe.png" alt="" className="forms" />
                    <img src="../assets/image/elo.png" alt="" className="forms" />
                    <img src="../assets/image/american.png" alt="" className="forms" />
                  </div>

                  <img src="../assets/image/seta.png" alt="" className="seta" />
              </div>

                    <div className='containerpagamento'>
                        <div>
                            <h3>Via Paypal</h3>
                            <img className='paypal' src="../assets/image/paypal.png" alt="" />
                        </div>
                        <img src="../assets/image/seta.png" alt="" className="seta" />
                    </div>

              <div className='containerpagamento'>
                            <div>
                                <h3>Via Pix</h3>
                                <img className='pix' src="../assets/image/pix.png" alt="" />
                            </div>
                            <img  src="../assets/image/seta.png" alt="" className="seta" />
              </div>

           </div>

           <Rodape/>

        </div>
    )
}