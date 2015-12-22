angular.module('app')
.controller('ApplicationCtrl', function($scope, $http, UserSvc) {

	$scope.$on('login', function(_, user) {

		$scope.currentUser = user;
	});

	$scope.$on('register', function(_, user) {

		$scope.currentUser = user;
	});

	$scope.logout = function(username, password) {

		$scope.currentUser = null;
		UserSvc.logout();
	}

	$scope.checkToken = function() {

		if (window.localStorage.token && window.localStorage.token != 'null') {

			$http.defaults.headers.common['X-Auth'] = window.localStorage.token;

			UserSvc.getUser()
			.then(function(user) {

				$scope.currentUser = user;
			})
		}
	}
	
});