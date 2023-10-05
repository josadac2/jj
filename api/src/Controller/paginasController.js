import { Router } from "express";
import { Buscar } from "../Repository/paginasRepository.js";


let endpoints = Router();


endpoints.get('/login', async (req,resp) => {

let r = req.body;

let resposta = await Buscar (r)

resp.send(resposta)

})




endpoints.post('/login', async (req,resp) => {


    let {email , senha} = req.body


})



export default endpoints ;