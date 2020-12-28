var app = angular.module('myApp', []);
function switchToWork() {
	app.controller('myCtrl', function($scope) {
		$scope.status = "Work Session";
	});
}
function switchToRest() {
	app.controller('myCtrl', function($scope) {
		$scope.status = "Rest Session";
	});
}

switchToWork();
