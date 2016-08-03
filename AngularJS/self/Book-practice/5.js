var app = angular.module('myApp', []);
app.controller('myName', ['$scope', function($scope){
	$scope.person = {
		name:'eyeA',
		age:30
	}
}]);
// 在myName这个属性内部的任何子元素都可以访问到person对象，因为他是定义在$scope上的

//作用域包含作用域的例子
app.controller('parent', ['$scope', function($scope){
	$scope.person = {
		name:'wang',
		age:'26',
		sex:'boy'
	}
}]);

app.controller('child', ['$scope', function($scope){
	$scope.hi = function(){
		alert('hi')
	}
}])