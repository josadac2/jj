import userEvent from '@testing-library/user-event';
import mysql from 'mysql2/promise';


const conexao = await mysql.createConnection({

host:process.env.HOST ,
user:process.env.USER ,
password:process.env.PWD ,
database:process.env.DB 


})



export default conexao ;

console.log(`BD SUBIU NA PORTA `);