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
  methods.getMood = function(callback){
    $http.get('/mood')
      .success(function(data){
        callback(data);
      })
      .error(function(){
        console.log('no mood from server  :[');
      });
  };
  methods.weightedMood = function(mood){
    var weight = 0.80;
    var wMood;
    if(mood > 0.6){
      wMood = mood / weight;
      if(wMood > 1){
        wMood = 1;
      }
    }else if(mood < 0.4){
      // invert mood value so we can apply the same math to low moods 
      wMood = (1-((1-mood) / weight));
      if(wMood < 0){
        wMood = 0;
      }
    }
    return wMood || mood;
  };
  return methods;
})
.controller('AvatarController', function ($scope, AvatarFactory) {
  $scope.getMood = AvatarFactory.getMood;
  $scope.serverMood;
  $scope.emoteStyle = {};
  $scope.getMood(function(data){
    $scope.serverMood = data.serverMood;
    var displayMood = AvatarFactory.weightedMood($scope.serverMood);
    console.log(displayMood);
    var y = Math.floor(191 * displayMood) + 64; // will be used for red and green, making yellow
    var b = Math.floor(32 * (1 - displayMood)) + 128;
    $scope.emoteStyle = {
      backgroundColor: 'rgb(' + y + ',' + y + ',' + b + ')'
    };
  });
});