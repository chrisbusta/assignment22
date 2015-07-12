;(function (){
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

    .when('/about', {
      templateUrl: 'js/about/about.tpl.html',
      controller: 'About'
    })

    .when('/contact', {
      templateUrl: 'js/contact/contact.tpl.html',
      controller: 'Contact'
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

// ;(function (){

//   'use strict';

//   angular.module('rProvider', ['ngRoute'])

//   .constant('HEROKU', {
//     // URL: 'https://nameless-forest-6621.herokuapp.com/',
//     CONFIG: {
//       headers: {

//         'Access-Token' : ''

//       }
//     }

//   })

//   .config(function ($routeProvider) {
//     $routeProvider

//     .when('/', {
//       templateUrl: 'js/rProvider/dashboard/dashboard.tpl.html',
//       controller: 'Dashboard'
//     })

//     .when('/login', {
//       templateUrl: 'js/rProvider/login/login.tpl.html',
//       controller: 'User'
//     })
//     // .otherwise('/login');

//     .when('/register', {
//       templateUrl: 'js/pages/register/register.tpl.html',
//       controller: 'Register'
//     })

//     .when('/addDest', {
//       templateUrl: 'js/rProvider/trip/trip.tpl.html',
//       controller: 'Trip'
//     })


//     .when('/mapDest', {

//       templateUrl: 'js/rPRovider/map/mapped.tpl.html',
//       controller: 'Mapped'

//     })


//     .when('/trips/:trip_id/locations', {

//       templateUrl: 'js/rProvider/destination/destination.tpl.html',
//       controller: 'Destination'

//     });




//   });


// }());

// re-inject if angular-google-maps is the map answer
// 'uiGmapgoogle-maps'





  // // create the module and name it scotchApp
  // var scotchApp = angular.module('scotchApp', ['ngRoute']);

  // // configure our routes
  // scotchApp.config(function($routeProvider) {
  //   $routeProvider

  //     // route for the home page
  //     .when('/', {
  //       templateUrl : 'pages/home.html',
  //       controller  : 'mainController'
  //     })

  //     // route for the about page
  //     .when('/about', {
  //       templateUrl : 'pages/about.html',
  //       controller  : 'aboutController'
  //     })

  //     // route for the contact page
  //     .when('/contact', {
  //       templateUrl : 'pages/contact.html',
  //       controller  : 'contactController'
  //     });
  // });

  // // create the controller and inject Angular's $scope
  // scotchApp.controller('mainController', function($scope) {
  //   // create a message to display in our view
  //   $scope.message = 'Everyone come and see how good I look!';
  // });

  // scotchApp.controller('aboutController', function($scope) {
  //   $scope.message = 'Look! I am an about page.';
  // });

  // scotchApp.controller('contactController', function($scope) {
  //   $scope.message = 'Contact us! JK. This is just a demo.';
  // });
