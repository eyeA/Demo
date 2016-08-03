var app = angular.module('myApp', []);
app.controller('myController', ['$scope','$parse', function($scope,$parse){
	$scope.$watch('expr',function(newVal,oldVal,scope){
		if(newVal !== oldVal){
			var parseFun = $parse(newVal);
			$scope.parsedValue = parseFun(scope);
		}
	});
}]);