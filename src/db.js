import mysql from 'mysql2/promise';

export const connection = mysql.createConnection({
    host: 'localhost',
    port: 3030,
    database: 'express_intro',
    user: 'root',
    password: '',
});