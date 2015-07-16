;(function () {
  'use strict';


  angular.module('pages', ['ngRoute', 'ngCookies'])


  //.constant and headers will go here
  // connecting to PARSE for user registration
.constant('PARSE', {
  URL: 'https://api.parse.com/1/',
  CONFIG: {
    headers: {

      'X-Parse-Application-Id' : 'bgfFuGi2AZfAsvJRSkTitItuXbpAditbGRlqErZ5',
      'X-Parse-REST-API-Key' : 'XDXw3lwErnFGFHwIRhwUt13lTmx0qqK6zy0pv2kD',

    }
  }
})


  .config(function ($routeProvider) {
    $routeProvider


    .when('/', {
      templateUrl: 'js/pages/dashboard/dashboard.tpl.html',
      controller: 'Dashboard'
    })


    .when('/register', {
      templateUrl: 'js/pages/register/register.tpl.html',
      controller: 'Registration'
    })

    .when('/login', {
      templateUrl: 'js/pages/login/login.tpl.html',
      controller: 'Login'
    });

  });



}());

