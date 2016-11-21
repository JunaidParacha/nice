var app = angular.module('app', ['ngRoute','ngCookies', 'ngMessages']);

app.config(function ($routeProvider) {
  $routeProvider
  .when('/',{
      templateUrl: 'partials/login.html',
  })
  .when('/register',{
      templateUrl: 'partials/registration.html'
  })

  .when('/main',{
      templateUrl: 'partials/main.html'
  })
  .when('/appoinment',{
      templateUrl: 'partials/appoinment.html'
  })
  .otherwise({
    redirectTo: '/'
  });

})
