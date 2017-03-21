myApp.controller('RegistrationController', 
  ['$scope', 'AuthService', 
  function($scope, AuthService) {





  $scope.login = function() {
      AuthService.login($scope.user);
  };



  $scope.register = function() {
     AuthService.register($scope.user);

   // Authentication.register($scope.user);
  }; //register

}]); //Controller