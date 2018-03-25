app.directive('customDirective',[function(){
    return {
        restrict:'EA',
        scope:{
            name:'='
        },
        replace:true,
        templateUrl:'./assets/html/customDirective.html',
        controller:['$scope',function($scope){
            // $scope.name="Ahsan Ahmed"
        }]
    }
}]);