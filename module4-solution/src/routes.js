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
      templateUrl: 'src/menudata/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menudata/categories.template.html',
      controller: 'CategoriesController as context'
    })
    .state('items', {
      url: '/items/{shortName}',
      templateUrl: 'src/menudata/items.template.html',
      controller: 'ItemsController as context',
      resolve: {
        shortName: ['$stateParams',function ($stateParams) { return $stateParams.shortName; }]
      }
    });
}

})();
