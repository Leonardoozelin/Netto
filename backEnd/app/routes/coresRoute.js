var controller = require('../controllers/coresController.js');

app.get('/cores', controller.listar);