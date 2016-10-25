angular.module('snapchat').controller('chatCtrl', function ($scope, $stateParams, mainService, $rootScope) {

  mainService.showMenu();
  $('#index-html__chat-btn, #index-html__take-photo-btn, #index-html__dots-btn').addClass('chatty-nav');
  $scope.test = function(){
    console.log('$scope.test fired')
    mainService.sendMessage().then(function(response){
      console.log(response)
    })
  }
  

});
