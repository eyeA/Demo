function my($scope,$timeout){
	// 第一个 
	var updateClock = function(){
		$scope.clock = new Date();
		$timeout(function(){
			updateClock();
		},1000);
	};
	updateClock();
	
// 第二个
	$scope.clock2 = {
		now:new Date(),
	};
	var updateClock2 = function(){
		$scope.clock2.now = new Date()
	};
	setInterval(function(){
		$scope.$apply(updateClock2);
	},1000);
	updateClock2();

};

// function my($scope){
// 	$scope.clock2 = {
// 		now:new Date(),
// 	};
// 	var updateClock2 = function(){
// 		$scope.clock2.now = new Date()
// 	};
// 	setInterval(function(){
// 		$scope.$apply(updateClock2);
// 	},1000);
// 	updateClock2();
// }

// 分开分别写是 NG