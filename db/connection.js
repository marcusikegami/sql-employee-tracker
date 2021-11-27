const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '!Ciabatta#%.F3',
        database: 'example_company'
    },
    console.log('Connected to the election database.')
);

module.exports = db;