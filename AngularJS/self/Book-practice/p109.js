var app = angular.module('myApp', []);

app.factory('greeter', function(){
	return {
		greet: function(msg){
			alert(msg);
		},
		end:function(msg){
			alert(msg);
		}
	}
})

.controller('myController',function($scope,greeter){
	$scope.sayHello = function(){
		greeter.greet('Hello');
		greeter.end('over')
	}
})