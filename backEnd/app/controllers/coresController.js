var model = require('./../model/coresModel');

module.exports = {
	listar
}

function listar(req, res) {
	var query = 2;
	var results = model.listar(query, function (err, results){
		if (err) {
			console.log("Deu erro");
		}
		res.render('../app/views/lista_cores.ejs', {cores: results, title:'Lista'})    
	});

function listById(id) {
	alert(id);
}

			

	
}