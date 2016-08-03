var app = angular.module('myApp',[]);
app.controller('myController', ['$scope','$filter', function($scope,$filter){
	// $scope.name = $filter('lowercase')('ABC');
	$scope.name = name;
	$scope.date = new Date();
}])