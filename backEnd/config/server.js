var express = require('express');
var load = require('express-load');
var bodyparser = require('body-parser');

app = express();
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.set('port', 3000);
app.set("view engine", "ejs");


load('models', {cwd: 'app'}).then('controllers').then('routes').into(app);

module.exports = app;
