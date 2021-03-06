myApp.factory('Authentication',
  ['$rootScope',  '$firebaseAuth',
  function($rootScope, $firebaseAuth) {

  var ref = firebase.database().ref();
  var auth = $firebaseAuth();
  var myObject;

  auth.$onAuthStateChanged(function(authUser) {
    if(authUser) {
      var userRef = ref.child('users').child(authUser.uid);
      var userObj = $firebaseObject(userRef);
      $rootScope.currentUser = userObj;
    } else {
      $rootScope.currentUser = '';
    }
  });

  myObject = {
    login: function(user) {
    $scope.message="wel"+$scope.user.email;
      //signInWithEmailAndPassword
    }, //login

    logout: function() {
      return auth.$signOut();
    }, //logout



    register: function(user) {
      auth.$createUserWithEmailAndPassword(
        user.email,
        user.password
      ).then(function(regUser) {
        var regRef = ref.child('users')
          .child(regUser.uid).set({
            date: firebase.database.ServerValue.TIMESTAMP,
            regUser: regUser.uid,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
          }); //userinfo
          myObject.login(user);
      }).catch(function(error) {
        $rootScope.message = error.message;
      }); //createUserWithEmailAndPassword
    } //register

  }; //return


  return myObject;

}]); //end of service factory