var ToDoListApp = angular.module('ToDoListApp', []);

ToDoListApp.config(function(){


});

ToDoListApp.run(function(){


});

ToDoListApp.controller('ToDoController', ['$scope', '$http', function($scope, $http){

  $scope.priorities = ["Top", "Medium", "Low"];

  $scope.removeTask = function(task){
    var removedTask = $scope.tasks.indexOf(task);
    $scope.tasks.splice(removedTask,1)
  }

  $scope.addTask = function(){
    if ($scope.newTask.priority == "Top"){
      $scope.tasks.push({
        task: $scope.newTask.task,
        priority: $scope.newTask.priority,
        duration: parseInt($scope.newTask.duration),
        available: true,
        priorityColour: "Red"
      });
    }
    else if ($scope.newTask.priority == "Medium"){
      $scope.tasks.push({
        task: $scope.newTask.task,
        priority: $scope.newTask.priority,
        duration: parseInt($scope.newTask.duration),
        available: true,
        priorityColour: "Orange"
      });
    }
    else if ($scope.newTask.priority == "Low"){
      $scope.tasks.push({
        task: $scope.newTask.task,
        priority: $scope.newTask.priority,
        duration: parseInt($scope.newTask.duration),
        available: true,
        priorityColour: "Green"
      });
    }


    $scope.newTask.task = "";
    $scope.newTask.priority = "";
    $scope.newTask.duration = "";

  };

  $http.get('data/tasks.json').then(function(response){
    $scope.tasks = response.data;
  });

}]);
