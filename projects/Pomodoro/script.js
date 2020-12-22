var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
	$scope.status = "Work Session";
});

app.controller('myCtrl1', function($scope) {
	$scope.timer = "30:00";
});