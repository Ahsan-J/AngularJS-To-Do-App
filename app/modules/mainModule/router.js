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