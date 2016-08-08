angular.module('myApp.services',[])
.factory('githubService',function($http){
	var githubUrl = 'https://api.github.com';

	var runUserRequest = function(username,path){
		//从使用JSONP调用Githu API的$http服务中返回promise
		return $http({
			method:'JSONP',
			url:githubUrl + '/users/' + 
				username +'/'+
				path+'?/callback=JSOON_CALLBACK'
		});
	};
	// 返回带有一个events函数的服务对象
	return {
		events: function(username){
			return runUserRequest(username,'events')
		}
	}
});

var app = angular.module('myApp', ['myApp.services']);
app.controller('myController',function($scope,githubService){
	// 我们可以调用对象的事件函数
	// $scope.events = githubService.events(username);
	//另外起一行
	// 注意username属性的变化 如果有变化就运行该函数
	$scope.$watch('username',function(newUsername){
		//从使用JSONP调用github API的$http服务中来返回promise
		githubService.events(newUsername)
			.success(function(data,status,headers){
				// success函数在数据中封装响应，因此我们需要data.data来获取原始数据
				$scope.events = data.data;
			})
	})
})