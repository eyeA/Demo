var app = angular.module('myApp', []);
app.controller('myEmail', ['$scope','$interpolate', function($scope,$interpolate){
	$scope.$watch('emailBody',function(body){
		if(body){
			var template = $interpolate(body);
			$scope.previewText = template({to: $scope.to});
			//	$scope.previewText = template();结果是一样的
		}	
	});
}]);



