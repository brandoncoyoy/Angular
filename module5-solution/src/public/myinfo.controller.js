(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject =['MenuService'];
function MyInfoController(MenuService) {
  var info = this;

  if (localStorage && 'user' in localStorage) {
    info.user = JSON.parse(localStorage.getItem('user'));
    MenuService.getMenuItem(info.user.favorite.toUpperCase()).then(function(response){
      info.item = response;
    });
  }
}

})();
