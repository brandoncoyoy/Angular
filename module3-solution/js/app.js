(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems',FoundItems);

function FoundItems(){
  var ddo = {
    templateUrl: 'loader/itemsloaderindicator.template.html',
    scope: {
      items: '<',
      onRemove:'&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController(){
}
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var controller = this;
  controller.term ='';
  controller.found = [];
  controller.Load = function(){
    controller.found = MenuSearchService.getMatchedMenuItems(controller.term).then(function(foundItems){
      controller.found = foundItems;
    });
  }
  controller.removeItem = function (itemIndex) {
    controller.found.splice(itemIndex, 1);
  };
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
    }).then(function(result){
      var foundItems = [];
      if(searchTerm){
        for (var i = 0; i < result.data.menu_items.length; i++) {
          var description = result.data.menu_items[i].description;
          if (description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
            foundItems.push(result.data.menu_items[i]);
          }
        }
      }
      return foundItems;
    });
  };

}

})();
