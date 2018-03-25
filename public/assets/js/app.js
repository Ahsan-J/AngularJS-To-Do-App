//Changing files name requires you to change the files name in Gruntfile as well
var app = angular.module('AngularApp',['ui.router']);

app.controller('AngularAppController',['$scope',function($scope){
    $scope.name = 'Ahsan Ahmed'
    $scope.message = 'This Message is Generated via Angular JS which means the Angular JS is working Correctly'
}]);

app.factory('db',function(){
    return{
        links:[
            {title:'App',link:'App'},
            {title:'About',link:'About'}
        ],
        getLinks:function(){
            return this.links;
        },
        list:[],
        addData:function(data){
            this.list.push(data);
        },
        getData:function(){
            return this.list;
        },
        deleteData:function(index){
            this.list.splice(index,1);
        },
        editData:function(index,newData){
            this.list.splice(index,1,newData);
        }
    }
});

app.config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider.state({
      name: 'App',
      url: '/',
      template: `<to-do-input buttontext="'Add Task'"></to-do-input>
                 <to-do-items></to-do-items>`
    })
  
    $stateProvider.state({
      name: 'About',
      url: '/about',
      template: `<about></about>`
    })

  }]);
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