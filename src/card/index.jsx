
import './index.scss'


 
export default function Card (props) {

return (
    <div className='containeer'>

        <div className='card'>
           <div className='check'>
            <input type="checkbox" />
           </div>

           <div>
             <img className='demo' src="../assets/image/aspirador.png" alt="" />
           </div>
        </div>
 
 <div className='lini'>

 </div>

        <div className='ps'>
           <p>Aspirador shark</p>
           <p>R$51.000,00</p>
        </div>
        
    </div>
)
}

