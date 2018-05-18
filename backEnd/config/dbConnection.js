var mysql = require('mysql');

var database = 'dados';


// criar instancia do banco de dados
var client = mysql.createConnection({
   user: 'root',
   password: '12345678',
   host: 'localhost',
   port: 3306
});

client.query('USE ' + database);

module.exports = client