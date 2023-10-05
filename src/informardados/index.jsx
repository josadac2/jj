import './index.scss' ;
import Cabecalho2 from '../cabecalho2';
import Rodape from '../rodape';


export default function Informardados() {



    return (
        <div className="informarmae">
             <Cabecalho2/>

             <div className='informacaocontainer'>
                    <div className='informacoesinicio'>
                        <h1>Informe os Dados do seu <br /> Cartão de Crédito ou Débito</h1>
                        <img className='formss' src="../assets/image/maste.png" alt="" />
                        <img className='formss' src="../assets/image/visa.png" alt="" />
                        <img className='formss' src="../assets/image/hipe.png" alt="" />
                        <img className='formss' src="../assets/image/elo.png " alt="" />
                        <img className='formss' src="../assets/image/american.png" alt="" />
                    </div>


                    <div className='infoinput'>
                         <div>
                            <input className='infonumero' type="text" name="" id="" placeholder='Número do Cartão' />
                            <img className='infocartao' src="../assets/image/cartao.png" alt="" />
                         </div>

                         <div className='infoduplo'>
                            <input className='infodata' type="text" placeholder='Data de Validade' />
                            <input className='infocvv' type="text" placeholder='CVV'/>
                         </div>

                         <div>
                            <input className='infonumero' type="text" placeholder='Nome' />
                         </div>

                         <div>
                            <input className='infonumero' type="text" placeholder='Sobrenome ' />
                         </div>
                    </div>

                  
                      <div className='infolabel'>

                        <h2>Escolha Sua Forma De Pagamento </h2>

                            <div className='infoinputlabel'>
                               <input  type="radio" />
                               <label className='h4'>Crédito</label>
                            </div>

                            <div className='infoinputlabel'>
                               <input type="radio" />
                               <label className='h4'>Débito</label>
                            </div>
                      </div>

                      <button className='infoazul'>Finalizar Compra</button>

             </div>

             <Rodape/>
        </div>
    )
}