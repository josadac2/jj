import './index.scss' ;



export function Login () {


return (
    <div className='mae-login'>
        <div className="container-login">
            <nav>
                <div>
                <img className='img-logo' src="../assets/image/logo.png" alt="" />
                </div>
                    <div className='adm-login'>
                        <img src="../assets/image/admconfig.png" alt="" />
                        <h3 >ADMINISTRADOR</h3>
                    </div>
            </nav>

 
             <div className='agrupa-tudo'>
                <div>
                    <img className='usuario' src="../assets/image/usuario.png" alt="" />
                    <h2></h2>
                </div>
                        
                        <div className='input-login'>
                            <input type="text" placeholder='EMAIL'/>
                            <input type="text" placeholder='SENHA'/>
                        </div>

                <div className='agrupa-botao'>

                        <div className='agrupa-p'>
                            <p>ESQUECI A SENHA</p>
                            <p>CADASTRE-SE</p>
                        </div>

                        <div>
                            <button>ENTRAR</button>
                        </div>
                </div>

             </div>


        </div>
    </div>
)


}
