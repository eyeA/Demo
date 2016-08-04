var app = angular.module('myApp',[]);
app.directive('myDirective',function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		restrict: 'A',
		//link: function($scope, iElm, iAttrs, controller) {
			
		//}
		template: '<a href="https://www.baidu.com/">直接到百度</a>'
	};
});
app.directive('myDirectivec', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		// link: function($scope, iElm, iAttrs, controller) {
			
		// }
		restrict: 'A',
		replace: true,
		template: '<a href="{{ myLink }}">{{ myText }}</a>',
		scope: {
			myLink:'@', //绑定策略
			myText:'@'
		}
	};
});


// 创建 隔离作用域是解除共享状态导致的一些问题比如：控制器被移除，或者在控制器作用域中也定义了一个同样名字的属性，不得不更改代码