angular.module('myApp', [])

.controller('DashboardController', [
  '$scope', 'GithubService',
    function($scope, GithubService) {
      GithubService.getPullRequests()
      .then(function(data) {
        $scope.pullRequests = data;
      })
}])
// 在angular中创建promise，可以使用内置的$q服务
// 首先需要把$q服务注入到想要使用它的对象中
.factory('GithubService', [
  '$q', '$http', // 现在就可以访问到$q库了
    function($q, $http) {
      var getPullRequests = function() {
        var deferred = $q.defer(); // 创建一个deferred对象，可以调用defer方法
        // Get list of open angular js pull requests from github
        $http.get('https://api.github.com/repos/angular/angular.js/pulls')
        .success(function(data) {
          deferred.resolve(data);
        })
        .error(function(reason) {
          deferred.reject(reason);
        })
        return deferred.promise;
      }

      return {
        getPullRequests: getPullRequests
      };
}]);