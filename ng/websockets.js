angular.module('app')
.run(function($rootScope) {

	var url = 'ws://localhost:1337';
	var connection = new WebSocket(url);

	connection.onopen = function() {

		console.log('websocket connected');
	}

	connection.onmessage = function(msg) {

		console.log(msg);

		var payload = JSON.parse(msg.data);

		$rootScope.$broadcast('ws:' + payload.topic, payload.data);
	}
});