beats.controller('reporterCtrl', ['$scope', '$state', '$stateParams', '$firebase', 'beatsFactory',
function reporterCtrl($scope, $state, $stateParams, $firebase, beatsFactory){

  $scope.beats = beatsFactory.beats;
  $scope.beatsFactory = beatsFactory;


  $scope.addReporter = function(){
    alert($stateParams.beatId);
    beatsFactory.addReporter($stateParams.beatId, $scope.name, $scope.years, $scope.birthdate);
  }

}]);
