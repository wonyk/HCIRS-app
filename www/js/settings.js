(function () {
    angular
        .module('hcirs-app')
        .controller('settingsCtrl', settingsCtrl);

    settingsCtrl.$inject = ['$scope', '$firebaseAuth', 'AuthStatus', '$state'];

    function settingsCtrl($scope, $firebaseAuth, AuthStatus, $state) {
        $scope.Authed = true;
        if (AuthStatus == null) {
            $scope.Authed = false;
        }
        $scope.authObj = $firebaseAuth();
        $scope.user = {};

        $scope.signUp = function () {
            $scope.authObj.$createUserWithEmailAndPassword($scope.user.email, $scope.user.password)
                .then(function (firebaseUser) {
                    $state.go('homePage');
                }).catch(function (error) {
                    console.error("Error: ", error);
                });
        };
    }


})();
