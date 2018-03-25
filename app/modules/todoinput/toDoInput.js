app.directive('toDoInput',[function(){
    return {
        restrict:'EA',
        scope:{
            buttontext:'=',
        },
        replace:true,
        templateUrl:'./assets/html/toDoInput.html',
        controller:['$scope','db',function($scope,db){

            $scope.addTask = function(data){
                db.addData(data);
            }
            
        }]
    }
}]);