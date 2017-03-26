myApp.controller('MeetingsController', 
['$scope', '$firebaseAuth','$firebaseArray','AuthService',
 function($scope,$firebaseAuth,$firebaseArray, $rootScope,AuthService) {
    
    var ref = firebase.database().ref();
    var auth = $firebaseAuth();

    auth.$onAuthStateChanged(function(authUser) {
      if(authUser) {
        var meetingsRef = ref.child('users').child(authUser.uid).child('meetings');
        var meetingsInfo = $firebaseArray(meetingsRef);
  
      }else{
      console.log("not auth");
      }//authUser
    
    });//onAUth 


}]);