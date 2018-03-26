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
            var value = {
                name:data,
                editState:false
            }
            this.list.push(value);
        },
        getData:function(){
            return this.list;
        },
        deleteData:function(index){
            this.list.splice(index,1);
        },
        editData:function(index,newData){
            var value = {
                name:newData,
                editState:false
            }
            this.list.splice(index,1,value);
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