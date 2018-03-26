//Changing files name requires you to change the files name in Gruntfile as well
var app = angular.module('AngularApp',['ui.router','ngResource','angularMoment']);

app.controller('AngularAppController',['$scope',function($scope){
    $scope.name = 'Ahsan Ahmed'
    $scope.message = 'This Message is Generated via Angular JS which means the Angular JS is working Correctly'
}]);