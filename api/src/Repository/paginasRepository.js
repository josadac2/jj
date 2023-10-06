import conexao from "./connection.js";



export async function Login (email , senha) {

    let comando = `select ds_email   email ,
                            ds_senha  senha 
                    from    TB_CADASTRO_CLIENTE
                    WHERE ds_email = ? and
                          ds_senha  = ?`

   let r = await conexao.query(comando , [email ,senha])

   return r[0];
    
}



export  async function Buscar () {

let comando = `select *
    from TB_CADASTRO_CLIENTE`


    let r = await conexao.query(comando)

    return r;
}