(function () {
'use strict';

angular.module('data')
.component('categorieslist', {
  templateUrl: 'src/menudata/categorieslist.template.html',
  controller: CategoriesListComponentController,
  bindings: {
    items: '<'
  }
});

CategoriesListComponentController.$inject = ['$rootScope']
function CategoriesListComponentController($rootScope) {
  var $ctrl=this;
  $ctrl.$onInit = function () {
  };

  $ctrl.$doCheck = function () {
  };

}
})();
