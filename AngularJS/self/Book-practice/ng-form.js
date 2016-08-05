angular.module('myApp', [])
.controller('FormController', function($scope) {
  $scope.fields = [
    {placeholder: 'Username', isRequired: true},
    {placeholder: 'Password', isRequired: true},
    {placeholder: 'Email (optional)', isRequired: false}
  ];

  $scope.submitForm = function() {
    alert("it works!");
  };
})

.controller('counter',function($scope){
	$scope.decreament = function(){
		$scope.count -= 1	
	}
})

.controller('cityController', ['$scope', function($scope){
	$scope.cities = [
		{name:'beijing'},
		{name:'shanghai'},
		{name:'hebei'},
		{name:'tianjin'}
	];
}])

.controller('classController', ['$scope', function($scope){
	$scope.generateNumber = function(){
		return Math.floor(Math.random()*10+1)
	}
}])