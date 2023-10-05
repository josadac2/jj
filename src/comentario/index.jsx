import './index.scss' ;
import Cabecalho2 from '../cabecalho2';
import Rodape from '../rodape';



export function Comentario () {

return (
    <div className="mae-comentario">
       <Cabecalho2/>
       <div className="container-comentario">

          <div className='subcontainer-bordas'>
               
               <div className='img-input'>
                   <div>
                      <img src="../assets/image/aspirador.png" alt="" />
                   </div>

                   <div className='input-comentario'>
                      <img className='panda-comentario' src="../assets/image/panda.png" alt="" />
                      <input type="text" placeholder='FAÇA SEU COMENTÁRIO SOBRE O PRODUTO' />
                   </div>
               </div>

               <div>
                 <textarea className='textarea' name="textarea" id="" cols="55" rows="16" placeholder='ESCREVA ALGO.....'></textarea>
               </div>

          </div>
           
           <button>ENVIAR COMENTÁRIO</button>
           <Rodape/>
       </div>
    </div>
)

}