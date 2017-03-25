myApp.controller('SuccessController', ['$scope', '$rootScope','AuthService', function($scope, $rootScope,AuthService) {
  $scope.message = "Success!!1!";
   $scope.abc= $rootScope.currentUser;
   //  $scope.abc=AuthService.auth;
   console.log( $rootScope.currentUser);
}]);