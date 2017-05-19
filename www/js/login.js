(function () {
    angular
        .module('hcirs-app')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$firebaseAuth', '$ionicSideMenuDelegate', '$state', '$ionicPopup'];

    function LoginCtrl($scope, $firebaseAuth, $ionicSideMenuDelegate, $state, $ionicPopup) {
        $scope.authObj = $firebaseAuth();
        $scope.user = {};
        $scope.login = function () {
            $scope.authObj.$signInWithEmailAndPassword($scope.user.email, $scope.user.password)
                .then(function () {
                    $state.go('tab.homePage');
                }).catch(function (error) {
                    $ionicPopup.alert({
                        title: 'Authentication Failed',
                        template: error
                    });
                });
        };
    }


})();
