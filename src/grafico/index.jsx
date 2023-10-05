import './index.scss';
import Cabecalho2 from '../cabecalho2';
import Rodape from '../rodape';

export function Grafico () {


return (
    
<div className="mae-grafico">
   <Cabecalho2/>
<h1>GRÁFICO ANUAL</h1>

<div className="container-centro">

   <div className="container-grafico">
       
       <div className="subgrafico">
          <div className="coresgrafico"></div>
          <div className="coresgrafico2"></div>
          <div className="coresgrafico3"></div>
          <div className="coresgrafico4"></div>
          <div className="coresgrafico5"></div>
          <div className="coresgrafico6"></div>
          <div className="coresgrafico7"></div>
          <div className="coresgrafico8"></div>
          <div className="coresgrafico9"></div>
          <div className="coresgrafico10"></div>
          <div className="coresgrafico11"></div>
          <div className="coresgrafico12"></div>
       </div>

       <div className='grafico-p'>
         <p>Janeiro</p>
         <p>Fevereiro</p>
         <p>Março</p>
         <p>Abril</p>
         <p>Maio</p>
         <p>Junho</p>
         <p>Julho</p>
         <p>Agosto</p>
         <p>Setembro</p>
         <p>Outubro</p>
         <p>Novembro</p>
         <p>Dezembro</p>
       </div>

   </div>

<div className='container-vendas'>

   <div className='grafico-row'>
       <div className='grafico-vermelho'></div>
       <p>VENDAS BAIXAS</p>
   </div>


            <div className='grafico-row'>
               <div className="grafico-verdinho"></div>
               <p>VENDAS MÉDIAS</p>
            </div>


    <div className='grafico-row'>
        <div className="grafico-verde"></div>
        <p>VENDAS ALTAS</p>
    </div>

</div>



</div>
<Rodape/>
</div>

) 




}