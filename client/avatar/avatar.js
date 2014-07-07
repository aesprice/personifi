angular.module('myApp.main.avatar', ['ui.router'])

.config(function ($stateProvider) {
  $stateProvider
    .state('myApp.main.avatar', {
      url: '/avatar',
      templateUrl: 'avatar/avatar.tpl.html',
      controller: 'AvatarController'
    });
})
.controller('AvatarController', function ($scope) {
  $scope.emoteStyle = {
    backgroundColor: 'rgb(' + Math.floor(255 * (1 - $scope.$parent.mood)) + ',128,' + Math.floor(255 * $scope.$parent.mood) + ')'
  };
});