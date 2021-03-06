(function(){

  'use strict';
  angular
         .module('letApp')
         .config(configState)
         .config(configLocation);

  
  configState.$inject = ['$stateProvider','$urlRouterProvider'];
  configLocation.$inject = ['$locationProvider'];


  function configState($stateProvider,$urlRouterProvider){

      // states
      $stateProvider
        .state('main.login', {
          url: '/login',          
          data : { bodyClasses : 'login' },
          views : {
              '' : {                
                templateUrl : '/users/views/login.html',
                controller : 'LoginController',
                controllerAs : 'loginCtr'
              },
              'header@' : {
                  templateProvider : function(){
                      return null;                            
                  }
              }
          }
        }).state('main.signup', {
          url: '/signup',          
          data : { bodyClasses : 'login' },
          views : {
              '' : {                
                templateUrl : '/users/views/signup.html',
                controller : 'SignupController',
                controllerAs : 'signupCtr'
              },
              'header@' : {
                  templateProvider : function(){
                      return null;                            
                  }
              }
          }
        }).state('main.dashboard', {
          url: '/dashboard',          
          data : { bodyClasses : 'login' },
          views : {
              '' : {                
                templateUrl : '/users/views/dashboard.html',
                controller : 'DashboardController',
                controllerAs : 'dashboardCtr'
              }
          }
        });
  }

  function configLocation($locationProvider){
    $locationProvider.html5Mode({
      enabled:true,
      requireBase:false
    });
  }

})();
