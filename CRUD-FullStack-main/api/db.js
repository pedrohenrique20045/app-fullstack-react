import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost", // Altere se não for localhost
    user: "root", // Usuário do MySQL
    password: "@Nfj48474", // Sua senha do MySQL
    database: "crud2" // Nome do banco de dados
});