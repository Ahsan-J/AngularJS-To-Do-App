app.directive('toDoInput',[function(){
    return {
        restrict:'EA',
        scope:{
            buttontext:'=',
        },
        replace:true,
        templateUrl:'./assets/html/toDoInput.html',
        controller:['$scope','db','moment',function($scope,db,moment){
            $scope.addTask = function(data){
                db.addData(data);
            }
            $scope.timeNowMoment = moment().format('h:mm:ss a');
        }]
    }
}]);