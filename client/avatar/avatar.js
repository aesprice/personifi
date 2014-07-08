angular.module('myApp.main.avatar', ['ui.router'])

.config(function ($stateProvider) {
  $stateProvider
    .state('myApp.main.avatar', {
      url: '/avatar',
      templateUrl: 'avatar/avatar.tpl.html',
      controller: 'AvatarController'
    });
})
.factory('AvatarFactory', function($http){
  var methods = {};
  methods.getServerMood = function(userMood, callback){
    var data = {userMood: userMood};
    $http.post('/mood', data)
      .success(function(data){
        callback(data);
      })
      .error(function(){
        console.log('no mood from server  :[');
      });
  };
  return methods;
})
.controller('AvatarController', function ($scope, AvatarFactory) {
  $scope.getServerMood = AvatarFactory.getServerMood;
  $scope.serverMood;
  $scope.emoteStyle = {};
  $scope.getServerMood($scope.$parent.mood, function(data){
    $scope.serverMood = data.serverMood;
    $scope.emoteStyle = {
      backgroundColor: 'rgb(' + Math.floor(255 * (1 - $scope.serverMood)) + ',128,' + Math.floor(255 * $scope.serverMood) + ')'
    };
  });
});