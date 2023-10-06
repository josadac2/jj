import { Router } from "express";
import { Buscar , Login } from "../Repository/paginasRepository.js";


let endpoints = Router();


endpoints.get('/login', async (req,resp) => {

let r = req.body;

let resposta = await Buscar (r)

resp.send(resposta)

})




endpoints.post('/login', async (req,resp) => {

try{

    const {email , senha} = req.body;

  

    let r = await Login(email , senha);

    if (r.length === 0)
    throw new Error('Credenciais Inválidas')

    resp.send(r)
}  catch (err) {
    resp.status(404).send({
        erro : err.message
    })
}
   

})



export default endpoints ;