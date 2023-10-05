import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import conexao from './Repository/connection.js';
import endpoints from './Controller/paginasController.js';

const server = express();
server.use(cors());
server.use(express.json());
server.use(endpoints)



server.listen(process.env.PORT , () => console.log(`API CONECTADA NA PORTA ${process.env.PORT}`));