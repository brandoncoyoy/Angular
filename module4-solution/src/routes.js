(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/categories.template.html'
    })
    .state('items', {
      url: '/items',
      templateUrl: 'src/items.template.html'
    });
}

})();
