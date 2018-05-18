var http = require('http');
<<<<<<< HEAD
var app = require('./config/server');

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express executando na porta 3000');
})
=======
var express = require('express');
var mysql = require('mysql');
var app = express();

var database = 'neto';
var tabela = 'cores';

var client = mysql.createConnection({
    user:'root',
    password:'leo@mir',
    host:'localhost',
    port: 3306
});
app.set("View engine", "ejs");

client.query('use ' + database);
// client.query(
//     'insert into ' + tabela + ' values (null, "Vermelho", "0001")',
//     function(err, result){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log(result);
//         }
//     }
// )

app.get('/cores', function(req, res){
    client.query(
        'SELECT * FROM ' + tabela,
        function(err, result, fields){
            if(err){
               throw err;
            }
            res.render('../views/lista_cores.ejs', {cores:result, title:'Lista'});
        }
    )
})

http.createServer(app).listen(3000, function () {
    console.log('Express rodando na porta ' + 3000);
  });
>>>>>>> c0855e50806255aa04412a13b2e1e85ea260eeaf
