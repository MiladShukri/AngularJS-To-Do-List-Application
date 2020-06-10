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

  // $scope.tasks = [
  //   {
  //     task: "Meeting",
  //     priorityColour: "Red",
  //     priority: "Top",
  //     duration: 1,
  //     available: true,
  //   },
  //   {
  //     task: "Workout",
  //     priorityColour: "Green",
  //     priority: "Low",
  //     duration: 2,
  //     available: true,
  //   },
  //   {
  //     task: "Work on some code",
  //     priorityColour: "Red",
  //     priority: "Top",
  //     duration: 4,
  //     available: true,
  //   },
  //   {
  //     task: "Produce some tests for the code",
  //     priorityColour: "Orange",
  //     priority: "Medium",
  //     duration: 3,
  //     available: true,
  //   },
  //   {
  //     task: "Upload work to github",
  //     priorityColour: "Orange",
  //     priority: "Medium",
  //     duration: 1,
  //     available: true,
  //   },
  //   {
  //     task: "Grab some shopping",
  //     priorityColour: "Green",
  //     priority: "Low",
  //     duration: 1,
  //     available: true,
  //   },
  //   {
  //     task: "Play some games",
  //     priorityColour: "Green",
  //     priority: "Low",
  //     duration: 3,
  //     available: true,
  //   },
  // ];

  $http.get('data/tasks.json').then(function(response){
    $scope.tasks = response.data;
  });

}]);
