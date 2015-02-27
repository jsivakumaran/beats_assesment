beats.controller('beatsCtrl', ['$scope', '$state', 'beatsFactory',
function beatsCtrl($scope, $state, beatsFactory){
  $scope.beats = beatsFactory.beats;
  $scope.beatsFactory = beatsFactory;

  
}]);
