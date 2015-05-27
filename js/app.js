var app = angular.module("myApp", ['ui.router', 'ngMaterial']);
app.config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
  $mdThemingProvider.theme('altTheme').primaryPalette('purple');
  $urlRouterProvider.otherwise('/');
  $stateProvider
        .state('home', {
        url: '/',
        templateUrl: 'partials/users.html'
    })  
}]);
