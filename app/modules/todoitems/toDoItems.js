app.directive('toDoItems',[function(){
    return {
        restrict:'EA',
        scope:{
            
        },
        replace:true,
        templateUrl:'./assets/html/toDoItems.html',
        controller:['$scope','db',function($scope,db){
            $scope.tasks = db.getData();

            $scope.taskManager = {
                delete:function(index){
                    db.deleteData(index);
                },
                edit:function(index){
                    db.editData(index,'New Task '+index);
                }
            }
            
        }]
    }
}]);