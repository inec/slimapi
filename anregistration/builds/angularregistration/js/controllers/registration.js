myApp.controller('RegistrationController', 
  ['$scope', 'AuthService', 
  function($scope, AuthService) {





  $scope.login = function() {
    console.log('regis.js');
      AuthService.login($scope.user);
  };

  $scope.logout = function() {
      AuthService.logout();
  };

  $scope.register = function() {
     AuthService.register($scope.user);

   // Authentication.register($scope.user);
  }; //register

}]); //Controller