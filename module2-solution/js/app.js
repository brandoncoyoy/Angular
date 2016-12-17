(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buy = this;

  buy.items = ShoppingListCheckOffService.getItemsBuy();

  buy.boughtItem = function (itemIndex) {
    ShoppingListCheckOffService.boughtItem(itemIndex);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;

  bought.items = ShoppingListCheckOffService.getItemsBought();

}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var buy = [{name:"cookies",quantity:10},{name:"candys",quantity:11},{name:"cholates",quantity:12},{name:"coca cola",quantity:13},{name:"pepsi",quantity:14}];
  var bought = [];
  service.boughtItem = function (itemIdex) {
    bought.push(buy[itemIdex]);
    buy.splice(itemIdex, 1);
  };

  service.getItemsBuy = function () {
    return buy;
  };

  service.getItemsBought = function () {
    return bought;
  };
}

})();
