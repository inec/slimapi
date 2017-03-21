myApp.factory('AuthService',
  ['$rootScope',  '$firebaseAuth',
  function($rootScope, $firebaseAuth) {
//name it self
  var ref = firebase.database().ref();
  var auth = $firebaseAuth();
  var myObject;


//
  myObject = {
    login: function(user) {
    $rootScope.message="wel"+$rootScope.user.email;      //signInWithEmailAndPassword
    }, //login

    logout: function() {
    }, //logout



    register: function(user) {

      auth.$createUserWithEmailAndPassword(
        user.email,
        user.password
      ).then(function(regUser) {
        var regRef = ref.child('users')
        .child(regUser.uid).set({
          date:firebase.database.ServerValue.TIMESTAMP,
          regUser: 'regUser.uid',
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email
        });//user

        $rootScope.message  = "hi"+user.firstname+"  , thanks";
      }).catch(function(error) {
        $rootScope.message = error.message;
      }); //createUserWithEmailAndPassword
    } //register

  }; //return


  return myObject;

}]); //end of service factory