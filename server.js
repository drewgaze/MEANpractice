var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(require('./auth'));
app.use(bodyParser.json());
app.use(require('./controllers'));
//app.use('/api/sessions', require('./controllers/api/sessions'));
//app.use('/api/users', require('./controllers/api/users'));

var server = app.listen(1337, function() {

	console.log('server listening on', server.address().port);
});

require('./websockets').connect(server);