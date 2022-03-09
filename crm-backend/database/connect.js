const mysql = require('mysql');
require('dotenv').config();

const crmDB = mysql.createConnection({
    host:'localhost',
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:'crm',
    multipleStatements:'true',
    timezone : "+00:00"
});

module.exports = crmDB;