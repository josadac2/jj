import './index.scss';
import Cabecalho2 from '../cabecalho2';
import Rodape from '../rodape';


export function Grafico2() {

return (
<div className="mae-grafico">
   <Cabecalho2/>
<h1>GRÁFICO MENSAL</h1>

<div className="container-centroo">

   <div className="container-graficoo">
       
       <div className="subgrafico">
          <div className="coresgraficoA"></div>
          <div className="coresgraficoB"></div>
          <div className="coresgraficoC"></div>
          <div className="coresgraficoD"></div>
          <div className="coresgraficoE"></div>
          <div className="coresgraficoF"></div>
          <div className="coresgraficoG"></div>
          <div className="coresgraficoH"></div>
          <div className="coresgraficoI"></div>
          <div className="coresgraficoJ"></div>
          
       </div>

       <div className='grafico-pp'>
         <p>Aquecimento</p>
         <p>Bordas</p>
         <p>Limpezas</p>
         <p>Cascatas</p>
         <p>Dispositivos</p>
         <p>Purificador</p>
         <p>Filtro/Bombas</p>
         <p>Iluminação</p>
         <p>Revestimento</p>
         <p>Aspiradores</p>
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