app.directive('navigation',[function(){
    return {
        restrict:'EA',
        scope:{
            title:'=',
        },
        replace:true,
        templateUrl:'./assets/html/navigation.html',
        controller:['$scope','db',function($scope,db){
            $scope.navlink = db.getLinks();
        }]
    }
}]);