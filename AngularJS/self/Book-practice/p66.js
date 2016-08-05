var app = angular.module('myApp',[]);
app.controller('myController', ['$scope', function($scope){
	$scope.equation = {};
	$scope.change = function(){
		$scope.equation.output = 
			parseInt($scope.equation.x) * 2
	}
}])