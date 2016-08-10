var app = angular.module('myApp', ["ngAnimate"]);

app.controller('HomeController', ['$scope', function($scope){

	$scope.roommates = ['A','B','C','D'];

	setTimeout(function(){
		$scope.roommates.push('NEW');
		$scope.$apply();  //  触发一次digest  必须要有的 

		setTimeout(function(){
			$scope.roommates.shift();
			$scope.$apply();  // 触发digest   必须要有的 
		},2000);
	},1000);
}]);
//  一秒后 加了第五个元素  2s后移除了第一个元素

