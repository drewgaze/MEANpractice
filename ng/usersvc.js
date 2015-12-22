angular.module('app')
.service('UserSvc', function($http) {

	var svc = this;

	svc.getUser = function(token) {

		return $http.get('/api/users')
		.then(function(response) {

			return response.data;
		});
	}

	svc.login = function(username, password) {

		return $http.post('/api/sessions', {

			username: username, password: password

		}).then(function(response) {

			//svc.token = response.data;
			localStorage.token = response.data;
			$http.defaults.headers.common['X-Auth'] = response.data;
			return svc.getUser();
		});
	}

	svc.register = function(username, password) {

		return $http.post('/api/users', {username: username, password: password})
		.then(function(user) {

			return svc.login(username, password);
		});
	}

	svc.logout = function(username) {

		delete $http.defaults.headers.common['X-Auth'];
		localStorage.removeItem('token');
	}
});