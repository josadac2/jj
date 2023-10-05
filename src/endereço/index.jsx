import './index.scss' ;
import Cabecalho2 from '../cabecalho2';
import Rodape from '../rodape';


export function Endereco() {


return (
    <div className="mae-endereco">
         <Cabecalho2/>
         <h1>ENDEREÇO</h1>

        <div className="container-endereco">
           
            <div className='container-separa'>


        <div className='label-endereco'>
            <label htmlFor="">CEP:</label>
            <label htmlFor="">ENDEREÇO:</label>
            <label htmlFor="">COMPLEMENTO:</label>
            <label htmlFor="">CIDADE:</label>
        </div>

  <div className='input-endereco'>
     <input type="text" />
     <input type="text" />
     <input type="text" />
     <input type="text" />
  </div>

              
            </div>

            <div className='container-separa'>

                        <div className='label-endereco'>
                                <label htmlFor="">NÚMERO:</label>
                                <label htmlFor="">BAIRRO:</label>
                                <label htmlFor="">ESTADO:</label>
                        </div>

                <div className='input-endereco'>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </div>

            </div>







        </div>

        <button className='botao-endereco'>CONFIRMAR</button>
        <Rodape/>
    </div>
)


}