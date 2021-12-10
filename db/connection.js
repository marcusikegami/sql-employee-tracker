const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '!Ciabatta#%.F3',
        database: 'company'
    },
    console.log('Connected to the company database.')
);

module.exports = db;