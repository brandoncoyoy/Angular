(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject =['MenuService'];
function SignUpController(MenuService) {
  var form = this;
  form.message ='';
  form.favoriteStatus='';

  form.submit = function () {
    if(form.user.favorite){
      MenuService.getMenuItem(form.user.favorite.toUpperCase()).then(function(response){
        localStorage.setItem('user', JSON.stringify(form.user));
        form.message ='Your information has been saved';
        form.favoriteStatus='';
      },function(response){
        form.message ='';
        form.favoriteStatus='No such menu number exists';
      });
    }else{
      form.message ='';
      form.favoriteStatus='No such menu number exists';
    }

  };
}

})();
