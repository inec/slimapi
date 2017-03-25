myApp.factory('AuthService',
  ['$rootScope','$location','$firebaseObject',  '$firebaseAuth',
  function($rootScope, $location, $firebaseObject ,$firebaseAuth) {
//name it self
  var ref = firebase.database().ref();
  var auth = $firebaseAuth();
  var myObject;

auth.$onAuthStateChanged(function(authUser){
 if(authUser){
   var userRef=ref.child('users').child(authUser.uid);
   var userObj=$firebaseObject(userRef);
   $rootScope.currentUser  = userObj;
 }else{
   $rootScope.currentUser='';
 }
});

//
  myObject = {
    login: function(user) {
      console.log('as.js L21');
       auth.$createUserWithEmailAndPassword(
        user.email,
        user.password     
      ).then( function(user) {
        $location.path('/success');
      }).catch(function(error){
         console.log('as.js L30'+error.message);
        $rootScope.message =error.message;
      }      ); //signInWithEmailAndPassword
      
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