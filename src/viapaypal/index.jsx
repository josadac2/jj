import './index.scss' ;
import Cabecalho2 from '../cabecalho2';
import Rodape from '../rodape';


export default function Viapaypal () {

return  (

<div className='paypalmae'>
<Cabecalho2/>

<div className="paypalcontainer">

     <div className='paypalinicio'>
         <div><img className='infopay' src="../assets/image/paypal.png" alt="" /></div>

         <div className='paypalcarro'>
            <img className='carropaypal' src="../assets/image/carropaypal.png" alt="" />
            <p>R$ 7.390,08</p>
         </div>

         
     </div>

        <div className='linepaypal'>
        </div>

     <h1>PAGUE COM PAYPAL</h1>

     <div>
        <input type="text" placeholder='Email'/>
        <img className='paypalcorreio' src="../assets/image/correiopaypal.png" alt="" />
     </div>

     <div>
        <input className='paypalsenha' type="password" placeholder='Senha' />
     </div>



     <button className='paypallogin'>Log in</button>


</div>

<Rodape/>
</div>

)


}