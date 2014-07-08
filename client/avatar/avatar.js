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
  methods.getMood = function(userMood, callback){
    // var data = {userMood: userMood};
    $http.get('/mood')
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
  $scope.getMood = AvatarFactory.getMood;
  $scope.serverMood;
  $scope.emoteStyle = {};
  $scope.getMood($scope.$parent.mood, function(data){
    $scope.serverMood = data.serverMood;
    console.log($scope.serverMood);
    var y = Math.floor(191 * $scope.serverMood) + 64; // will be used for red and green, making yellow
    var b = Math.floor(32 * (1 - $scope.serverMood)) + 128;
    $scope.emoteStyle = {
      backgroundColor: 'rgb(' + y + ',' + y + ',' + b + ')'
    };
  });
});