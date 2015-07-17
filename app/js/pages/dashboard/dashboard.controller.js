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



function TodoCtrl($scope) {

  $scope.todos = [
    {text:'Learn AngularJS', done:false},
    {text: 'Build an app', done:false}
  ];

  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };


  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };

    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
    };
}
}());


// angular.module('submitExample', [])
//     .controller('ExampleController', ['$scope', function($scope) {
//       $scope.list = [];
//       $scope.text = 'hello';
//       $scope.submit = function() {
//         if ($scope.text) {
//           $scope.list.push(this.text);
//           $scope.text = '';
//         }
//       };
//     }]);
