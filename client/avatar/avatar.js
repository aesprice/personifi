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
});