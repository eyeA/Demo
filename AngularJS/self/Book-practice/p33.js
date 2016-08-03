var app = angular.module('myApp',[]);
app.directive('ensureUnique', ['$http', function($http){
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
		require: 'ngModel',
		link: function($scope, iElm, iAttrs, controller) {
			$scope.$watch(iAttrs.ngModel,function(){
				$http({
					method: 'POST',
					url: 'api/check' + iAttrs.ensureUnique,
					data: {'field':iAttrs.ensureUnique}
				}).success(function(data,status,headers.cfg){
					controller.$setValidity('unique',data.isUnique);
				}).error(function(data,status,headers,cfg){
					controller.$setValidity('unique',false)
				})
			})
		}
	};
}]);