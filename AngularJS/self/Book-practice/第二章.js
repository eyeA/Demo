function my($scope,$timeout){
	var updateClock = function(){
		$scope.clock = new Date();
		$timeout(function(){
			updateClock();
		},1000);
	};
	updateClock();
};

function my($scope){
	$scope.clock2 = {
		now:new Date()
	};
	var updateClock2 = function(){
		$scope.clock2.now = new Date()
	};
	setInterval(function(){
		$scope.$apply(updateClock2);
	},1000);
	updateClock2();
}