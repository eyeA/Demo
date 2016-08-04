var app = angular.module('myApp',[]);
app.controller('someController', ['$scope', function($scope){
	//创建模型
	$scope.someModel = {
		someBarValue : 'hello computer'
	}
	//设置$scope自身的操作
	$scope.someAction = function(){
		$scope.someModel.someBarValue = 'hello from parent';
	}
}]);
app.controller('childController', ['$scope', function($scope){
	$scope.childAction = function(){
		$scope.someModel.someBarValue = 'hello from child';
	}
}]);