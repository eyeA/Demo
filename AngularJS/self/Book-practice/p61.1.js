var app = angular.module('myApp',[]);
app.controller('someController', ['$scope', function($scope){
	//创建模型
	$scope.someBarValue = 'hello computer';
	//设置$scope自身的操作
	$scope.someAction = function(){
		$scope.someBarValue = 'hello from parent';
	}
}]);
app.controller('childController', ['$scope', function($scope){
	$scope.childAction = function(){
		$scope.someBarValue = 'hello from child';
	}
}]);