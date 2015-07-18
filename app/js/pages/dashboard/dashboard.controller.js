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



// function TodoCtrl($scope) {

//   $scope.todos = [];

//   $scope.getTotalRecipes = function () {
//     return $scope.todos.length;
//   };


//   $scope.addTodo = function () {
//     $scope.todos.push({text:$scope.formTodoText, done:false});
//     $scope.formTodoText = '';
//   };

//     $scope.clearCompleted = function () {
//         $scope.todos = _.filter($scope.todos, function(todo){
//             return !todo.done;
//         });
//     };
// }
}());

var app = angular.module("todoApp",[]);

var todoAppCtrl = app.controller("todoAppCtrl",function($scope){

  $scope.tasks = [];
  $scope.taskCount = 0;


  $scope.addTask = function(name){
    if (name){
      $scope.tasks.push(name);
      $scope.newTask = "";
      $scope.taskCount++;
    }
  }

  $scope.deleteTask = function(task){
    var i = $scope.tasks.indexOf(task);
    console.log(i);
    $scope.tasks.splice(i,1);
    $scope.taskCount--;

  }

});


// angular.module('submitExample', [])
//     .controller('TodoCtrl', ['$scope', function($scope) {
//       $scope.list = [];
//       $scope.text = 'hello';
//       $scope.submit = function() {
//         if ($scope.text) {
//           $scope.list.push(this.text);
//           $scope.text = '';
//         }
//       };
//     }]);
