var app = angular.module('myApp',[]);
app.directive('myDirective', function(){
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
		restrict:'A',
		replace:true,
		scope:{
			myUrl:'=someAttr',
			myLink:'@'
		},
		template:'\
		<div>\
			<label>My Url filed:</label>\
			<input type="text"\
			 ng-model="myUrl"/>\
			<a href="{{myUrl}}">{{myLink}}</a>\
		</div>'
	};
});