(function () {
'use strict';

angular.module('data')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject=[categoriesList'];
function CategoriesController(categoriesList) {
  var context = this;
  context.items = categoriesList;
}

})();
