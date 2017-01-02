(function () {
'use strict';

angular.module('data')
.controller('ItemsController', ItemsController);

ItemsController.$inject=['MenuDataService','shortName'];
function ItemsController(MenuDataService,shortName) {
  var context = this;
  MenuDataService.getItemsForCategory(shortName).then(function(result){
    context.items = result;
  });
}

})();
