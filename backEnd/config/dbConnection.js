var mysql = require('mysql');

var database = 'neto';


// criar instancia do banco de dados
var client = mysql.createConnection({
   user: 'root',
   password: 'leo@mir',
   host: 'localhost',
   port: 3306
});

client.query('USE ' + database);

module.exports = client