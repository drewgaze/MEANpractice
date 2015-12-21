var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(require('./controllers'));

var server = app.listen(1337, function() {

	console.log('server listening on', server.address().port);
});