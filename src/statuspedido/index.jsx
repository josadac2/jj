import './index.scss' ;
import Cabecalho2 from '../cabecalho2';
import Rodape from '../rodape';


export default function Status () {



    return (
        <div className='statusmae'>
            <Cabecalho2/>

            <div className='statuscontainer'>
                <h1>Status do Pedido</h1>
            </div>

            <div className='statuspedido'>
                 <div className='statusagrupa'>
                    <img className='statusazul' src="../assets/image/carroazul.png" alt="" />
                    <img className='statusazul' src="../assets/image/cardazul.png" alt="" />
                    <img className='statusazul' src="../assets/image/caminhaoazul.png" alt="" />
                    <img className='statusazul' src="../assets/image/presenteazul.png" alt="" />
                 </div>
            </div>

            <div className="statusverificado">
                <div className='statusverde'>
                  <img className='statussinal' src="../assets/image/verificado.png" alt="" />
                  <img className='statussinal' src="../assets/image/verificado.png" alt="" />
                </div>

                <div className='statuscinza'>
                    <img className='statusboia' src="../assets/image/boia.png" alt="" />
                    <img className='statusboia' src="../assets/image/boia.png" alt="" />
                </div>

            </div>

            <div className='statusinfo'>
                    <h3>pedido <br /> realizado</h3>
                    <h3>pagamento <br /> confirmado</h3>
                    <h3>pedido <br /> enviado</h3>
                    <h3>pedido <br /> entregue</h3>
                </div>

                <Rodape/>
        </div>
    )
}