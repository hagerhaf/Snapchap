angular.module('snapchat').controller('settingsCtrl', function ($scope, $stateParams, mainService, $auth, $state) {

  mainService.hideMenu();

  $scope.showMenu = function() {
    mainService.showMenu();
  };

  $scope.logout = function(){
  $auth.logout()
      .then(function() {
        console.log('You have been logged out');
        $state.go('logInSignUp');
  });
}

});
