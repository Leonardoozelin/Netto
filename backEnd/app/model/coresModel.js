var client = require('../../config/dbConnection');
var tabela = 'cores';
module.exports = {
	listar
}

function listar(query, callback) {
	client.query(
		'SELECT * FROM ' + tabela, 
		function(err, results, fields)
		{
			if(err)
			{
				throw err;
			}
			return callback(err,results);      
		}
		)
}