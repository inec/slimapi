myApp.controller('MeetingsController', 
['$scope', '$firebaseAuth','$firebaseArray','AuthService',
 function($scope,$firebaseAuth,$firebaseArray, $rootScope,AuthService) {
    
    var ref = firebase.database().ref();
    var auth = $firebaseAuth();

    auth.$onAuthStateChanged(function(authUser) {
      if(authUser) {
        var meetingsRef = ref.child('users').child(authUser.uid).child('meetings');
        var meetingsInfo = $firebaseArray(meetingsRef);
              
        $scope.addMeeting = function() {
          meetingsInfo.$add({
            name: $scope.meetingname,
            date: firebase.database.ServerValue.TIMESTAMP
          }).then(function() {
            $scope.meetingname='';
          }); //promise
        } //addMeeting     
      }else{
      console.log("not auth");
      }//authUser
    
    });//onAUth 


}]);