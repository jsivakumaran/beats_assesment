beats.factory('beatsFactory', ['$firebase', '$stateParams', 'utilitiesFactory',
function beatsFactory($firebase, $stateParams, utilitiesFactory){
  var factory = {};

  var ref = new Firebase("https://glaring-inferno-5851.firebaseio.com/beats");
  var beats = $firebase(ref).$asArray();
  factory.beats=beats;

  factory.addBeat = function(){
    factory.beats.$add({title: factory.title, id:factory.beats.length+1, reporters:{reporterNum:0}});
  };

  factory.addReporter = function(beatId, name, years, birthdate){
    var beat = utilitiesFactory.findById(factory.beats, $stateParams.beatId);
    var birthdate = birthdate.toString();
    var reporter = {beatId: beat.id, name: name, years: years, birthdate: birthdate}
    var newNum = (beat.reporters.reporterNum+1);
    // debugger;
    beat.reporters.reporterNum = newNum;
    beat.reporters[newNum] = reporter;
    factory.beats.$save(beat);
  }

  return factory;
}]);
