import './index.scss';

export default function Cabecalho () {

return (
<div className="mae">
    <div className="container">
        <nav className='cabecalho'>
            <img className='logo' src="./assets/image/pool-max-logo.png" alt="" />
            <input className='encontre'  type="text" placeholder='ENCONTRE SEU PRODUTO' />
            <img className='lupa' src="./assets/image/lupa.png" alt="" />

            <div className='carrinho'>
                <img className='azulcarro' src="./assets/image/carrinho.png" alt="" />
                <p>(0) ITEMS</p>
            </div>

            <div>
                <img className='panda' src="./assets/image/panda.png" alt="" />
            </div>
        </nav>


        <div className='agrupa-categorias'>
           <div className='fundo'>
               PISCINAS
           </div>

                <div className='fundo'>
                    SAUNAS
                </div>

                        <div className='fundo'>
                          ILUMINAÇÃO
                        </div>

            <div className='fundo'>
               PISOS E REVESTIMENTOS
            </div>
        </div>
    </div>
</div>

)



}