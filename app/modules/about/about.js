app.directive('about',[function(){
    return {
        restrict:'EA',
        scope:{
            
        },
        replace:true,
        templateUrl:'./assets/html/about.html',
        controller:['$scope','db',function($scope,db){
            
        }]
    }
}]);