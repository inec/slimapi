var myApp = angular.module('myApp', 
  ['ngRoute', 'firebase']);

myApp.run(['$rootScope', '$location', function($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
    if (error == 'AUTH_REQUIRED') {
      console.log("sorry");
      $rootScope.message = 'Sorry, you must log in to access that page1';
      $location.path('/login');
    }//Auth Required
  }); 
}]); 
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/register', {
      templateUrl: 'views/register.html',
      controller: 'RegistrationController'
    }).
    when('/checkins/:uId/:mId', {
      templateUrl: 'views/register.html',
      controller: 'RegistrationController'
    }).
    when('/login', {
      templateUrl: 'views/login.html',
      controller: 'RegistrationController'
    }).

    when('/meetings', {
     templateUrl: 'views/meetings.html',
      controller: 'MeetingsController'
     /*,resolve: {
        currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        } //currentAuth
      }*///resolve
    }).
    otherwise({
      redirectTo: '/'
    });
}]);