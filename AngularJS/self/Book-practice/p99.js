var app = angular.module('myApp',['ngRoute']);

// 这里采用数组这种特殊的依赖注入语法
app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/',{
			// templateUrl: 'p100.html',
			template:'<div><h2>AngularJS</h2></div>'

			// 如果配置了controller属性，见P101
			// controller: 'myController'
		})
}])