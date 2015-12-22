angular.module('app')
.run(function($rootScope) {

	(function connect() {

		var url = 'ws://localhost:1337';
		var connection = new WebSocket(url);

		connection.onopen = function() {

			console.log('websocket connected');
		}

		connection.onclose = function(e) {

			console.log('websocket closed. reconnecting...');

			$timeout(connect, 10*1000);
		}

		connection.onmessage = function(msg) {

			console.log(msg);

			var payload = JSON.parse(msg.data);

			$rootScope.$broadcast('ws:' + payload.topic, payload.data);
		}
	})();
});