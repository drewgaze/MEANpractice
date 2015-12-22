angular.module('app')
.controller('ApplicationCtrl', function($scope) {

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
	
});