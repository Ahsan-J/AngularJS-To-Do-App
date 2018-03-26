//Changing files name requires you to change the files name in Gruntfile as well
var app = angular.module('AngularApp',['ui.router','ngResource','angularMoment']);

app.controller('AngularAppController',['$scope',function($scope){
    $scope.name = 'Ahsan Ahmed'
    $scope.message = 'This Message is Generated via Angular JS which means the Angular JS is working Correctly'
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
app.factory('rsData',['$resource',function($resource){
    return $resource('./data.json');
}]);

app.factory('db',['moment','rsData',function(moment,rsData){
    return{
        links:[
            {title:'App',link:'App'},
            {title:'About',link:'About'}
        ],
        getLinks:function(){
            return this.links;
        },
        list:rsData.query(),
        addData:function(data){
            var value = {
                name:data,
                editState:false,
                time:moment().format('h:mm:ss a'),
            }
            this.list.unshift(value);
        },
        getData:function(){
            return this.list;
        },
        deleteData:function(index){
            this.list.splice(index,1);
        },
        editData:function(index,newData){
            var value = {
                ...this.list[index],
                name:newData,
                editState:false,
            }
            this.list.splice(index,1,value);
        }
    }
}]);

app.directive('onKeyUp', function () {
    return function (scope, element, attrs) {
        element.bind("keyup", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.onKeyUp);
                });
                event.preventDefault();
            }
        });
    };
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
        controller:['$scope','db','moment',function($scope,db,moment){
            $scope.addTask = function(data){
                db.addData(data);
            }
            $scope.timeNowMoment = moment().format('h:mm:ss a');
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