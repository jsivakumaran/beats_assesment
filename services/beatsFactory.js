beats.factory('beatsFactory', ['$firebase', function beatsFactory($firebase){
  var factory = {};

  var ref = new Firebase("https://glaring-inferno-5851.firebaseio.com/beats");
  var beats = $firebase(ref).$asArray();
  factory.beats=beats;

  factory.addBeat = function(){
    factory.beats.$add({title: factory.title});
  };

  return factory;
}]);
