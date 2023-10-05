import './index.scss' ;
import Card from '../card';
import Rodape from '../rodape';
import Cabecalho2 from '../cabecalho2';

export default function Pedido () {



    return (
        <div className='mae-pedidos'>
            <Cabecalho2/>
          <div className="containerPedido">
              <h1>MEUS PEDIDOS</h1>

              <div className='agrupa-card'>
                  <Card/>
                  <Card/>
                  <Card/>
              </div>
          </div>

          <div className='subtotal'>
               <div className='sub2'>
                  <h3>SUB-TOTAL: R$ 7.390,00</h3>
                  <button>COMPRAR</button>
               </div>
          </div>

          
        </div>
    )
}