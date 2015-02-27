var beats = angular.module('beats', ['ui.router', 'firebase', 'ui.bootstrap']);

beats.config(function($stateProvider){
  $stateProvider.state('beatsList', {
    url: "",
    templateUrl: "partials/beatsList.html",
    controller: "beatsCtrl"
  });

  $stateProvider.state('addBeat', {
    url: "/add",
    templateUrl: "partials/addBeat.html",
    controller: 'beatsCtrl',
  });

  $stateProvider.state('reporters', {
    url:"/:beatId",
    templateUrl: "partials/reporters.html",
    controller: "reporterCtrl",
  })

});
