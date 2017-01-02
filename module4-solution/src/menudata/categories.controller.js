(function () {
'use strict';

angular.module('data')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject=['MenuDataService'];
function CategoriesController(MenuDataService) {
  var context = this;
  MenuDataService.getAllCategories().then(function(result){
    context.items = result;
  });
}

})();
