import { Router } from "express";
import { Buscar , Login } from "../Repository/paginasRepository.js";


let endpoints = Router();


endpoints.get('/login', async (req,resp) => {

let r = req.body;

let resposta = await Buscar (r)

resp.send(resposta)

})




endpoints.post('/login', async (req,resp) => {


    let {email , senha} = req.body

    let r = await Login(email , senha)
    

})



export default endpoints ;