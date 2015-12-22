var ws = require('ws');
var _ = require('lodash');
var remove = require('lodash.remove');

var clients = [];

exports.connect = function(server) {

	var wss = new ws.Server({server: server});

	wss.on('connection', function connection(ws) {

		clients.push(ws);

		exports.broadcast('new client connected');

		ws.on('close', function() {

			remove(clients, ws);
		});
	});
}

exports.broadcast = function(topic, data) {

	var json = JSON.stringify({topic: topic, data: data});
	clients.forEach(function(client) {

		client.send(json);
	});
}