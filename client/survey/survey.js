angular.module('myApp.main.survey', ['ui.router'])

.config(function ($stateProvider) {
  $stateProvider
    .state('myApp.main.survey', {
      url: '/survey',
      templateUrl: 'survey/survey.tpl.html',
      controller: 'SurveyController'
    });
})
.controller('SurveyController', function ($scope, $state) {
  $scope.answerMood = function(mood){
    $scope.$parent.mood = mood;
    $state.transitionTo('myApp.main.avatar');
  };
});