;(function (){

  'use strict';

  angular.module('pages')

  .controller('Dashboard', ['$scope', '$http', 'PARSE', '$cookies', '$location',

    function ($scope, $http, PARSE, $cookies, $location ){

      $scope.userName = $cookies.get('username');

      $scope.sesh = $cookies.get('sessionToken');


      $scope.logout = function () {

        var removeSessionToken = function () {$cookies.remove('sessionToken');};
        var removeUserName = function () {$cookies.remove('username');};

        removeSessionToken();
        removeUserName();
        $location.path('/login');





      };



    }

    ]);



}());


angular.module('submitExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.list = [];
      $scope.text = 'hello';
      $scope.submit = function() {
        if ($scope.text) {
          $scope.list.push(this.text);
          $scope.text = '';
        }
      };
    }]);
