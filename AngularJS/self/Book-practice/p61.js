var app = angular.module('myApp',[]);
app.controller('someController', ['$scope', function($scope){
	//创建模型
	$scope.someModel = {
		//添加属性
		someProperty:'hello computer'
	}
	//设置$scope自身的操作
	$scope.someAction = function(){
		$scope.someModel.someProperty = 'hello eyeA';
	}
}])