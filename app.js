var beats = angular.module('beats', ['ui.router', 'firebase']);

beats.config(function($stateProvider){
  $stateProvider.state('beatsList', {
    url: "",
    templateUrl: "partials/beatsList.html",
  });
  
});
