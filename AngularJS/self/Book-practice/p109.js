var app = angular.module('myApp', []);

app.factory('greeter', function(){
	var count = 0;
	return {
		greet: function(msg){
			alert(msg);
			count++;
			console.log(count)
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