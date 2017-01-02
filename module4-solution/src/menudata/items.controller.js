(function () {
'use strict';

angular.module('data')
.controller('ItemsController', ItemsController);

ItemsController.$inject=['itemsList'];
function ItemsController(itemsList) {
  var context = this;
  context.items = itemsList;
}

})();
