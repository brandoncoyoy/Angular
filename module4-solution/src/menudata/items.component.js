(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'src/menudata/items.template.html',
  controller: ItemsComponentController,
  bindings: {
    items: '<',
  }
});

ItemsComponentController.$inject = ['MenuDataService']
function ItemsComponentController(MenuDataService) {
  var $ctrl=this;
  $ctrl.$onInit = function () {

  };
  $ctrl.$doCheck = function () {

  };

}

})();
