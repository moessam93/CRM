const mysql = require('mysql');
require('dotenv').config();

const crmDB = mysql.createConnection({
    host:'localhost',
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:'crm',
    multipleStatements:'true'
});

module.exports = crmDB;