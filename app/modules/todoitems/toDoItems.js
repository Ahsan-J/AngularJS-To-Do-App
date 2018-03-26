app.directive('toDoItems',[function(){
    return {
        restrict:'EA',
        scope:{
            
        },
        replace:true,
        templateUrl:'./assets/html/toDoItems.html',
        controller:['$scope','db',function($scope,db){
            $scope.tasks = db.getData()

            $scope.taskManager = {
                delete:function(index){
                    db.deleteData(index);
                },
                edit:function(index,newTask){
                    db.editData(index,newTask);
                },
                editInit:function(index){
                    $scope.task.editState[index]=true;
                },
                changeEditState:function(state){
                    return !state;
                }
            }
            
        }]
    }
}]);