var ToDoListApp = angular.module('ToDoListApp', []);

ToDoListApp.config(function(){


});

ToDoListApp.run(function(){


});

ToDoListApp.controller('ToDoController', ['$scope', function($scope){

  $scope.removeTask = function(task){
    var removedTask = $scope.tasks.indexOf(task);
    $scope.tasks.splice(removedTask,1)
  }

  $scope.addTask = function(){
    $scope.tasks.push({
      name: $scope.newTask.name,
      priority: $scope.newTask.priority,
      duration: parseInt($scope.newTask.duration),
      available: true
    });

    $scope.newTask.name = "";
    $scope.newTask.priority = "";
    $scope.newTask.duration = "";
  };

  $scope.tasks = [
    {
      name: "Meeting",
      priority: "Red",
      duration: 1,
      available: true,
      thumb: "content/img/icon.png"
    },
    {
      name: "Workout",
      priority: "Orange",
      duration: 2,
      available: true,
      thumb: "content/img/icon.png"
    },
    {
      name: "Work on some code",
      priority: "Yellow",
      duration: 4,
      available: true,
      thumb: "content/img/icon.png"
    },
    {
      name: "Produce some tests for the code",
      priority: "Green",
      duration: 3,
      available: true,
      thumb: "content/img/icon.png"
    },
    {
      name: "Upload work to github",
      priority: "Blue",
      duration: 1,
      available: true,
      thumb: "content/img/icon.png"
    },
    {
      name: "Grab some shopping",
      priority: "Indigo",
      duration: 1,
      available: true,
      thumb: "content/img/icon.png"
    },
    {
      name: "Play some games",
      priority: "Violet",
      duration: 3,
      available: true,
      thumb: "content/img/icon.png"
    },
  ];

}]);
