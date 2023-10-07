import { useState } from 'react';
import axios from 'axios';
import './index.scss' ;
import { useNavigate } from 'react-router-dom';


 

export function Login () {

    const navigate = useNavigate();

const [email , setEmail] = useState('');
const [senha , setSenha] = useState('');
const [erro, setErro] = useState([])

async function Entrar() {

    try{
    let url = 'http://localhost:5001/login';

    let pessoa = {
        email: email ,
        senha: senha
    }

    let r = await axios.post(url,pessoa)

    navigate('/')
}catch(err) {
    if(err.response.status === 400) {
        setErro(err.response.data.erro)
    }
}

}

    

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
                            <input type="text" placeholder='EMAIL' value={email} onChange={e => setEmail (e.target.value)}/>
                            <input type="password" placeholder='SENHA' value={senha} onChange={e => setSenha (e.target.value)}/>
                        </div>

                <div className='agrupa-botao'>

                        <div className='agrupa-p'>
                            <p>ESQUECI A SENHA</p>
                            <p>CADASTRE-SE</p>
                        </div>

                        <div>
                            <button onClick={Entrar}>ENTRAR</button>
                        </div>
                </div>

             </div>


        </div>
    </div>
)


}
