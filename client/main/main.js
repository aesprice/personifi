(function (angular) {
  "use strict";
  angular.module('myApp.main', ['ui.router', 'myApp.main.note', 'myApp.main.survey', 'myApp.main.avatar'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('myApp.main', {
        url: '/main',
        templateUrl: 'main/main.tpl.html',
        controller: 'MainController'
      });
  })
  .controller('MainController', function ($scope, $state) {
    $scope.mood;
    $state.transitionTo('myApp.main.avatar');
  });
}(angular));
