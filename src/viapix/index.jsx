import './index.scss';
import Cabecalho2 from '../cabecalho2';
import Rodape from '../rodape';



export default function Viapix () {



    return ( 
        <div className='pixmae'>
            <Cabecalho2/>

<div className="pixcontainer">
 
            <div className="grupopix1">
                <div className='pixazul'>
                    <h1>7.390,00 BRL</h1>
                </div>

                <h4>Por favor , use o PIX para pagar 7.390,00</h4>
            </div>
            
        
        <div className='grupopix2'>
            <h4>Por favor , abra o seu  aplicativo de pagamento e escaneie <br /> o código QR abaixo para pagar</h4>
            <img className='qrpix' src="../assets/image/qrpix.png" alt="" />
            <h4>Copie o código Pix abaixo e cole em seu app de pagamento <br /> para  finalizar a compra</h4>
            <button>Copiar Código PIX</button>
        </div>


</div>
<Rodape/>
        </div>
    )
}