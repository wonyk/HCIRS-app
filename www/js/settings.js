(function () {
    angular
        .module('hcirs-app')
        .controller('settingsCtrl', settingsCtrl);

    settingsCtrl.$inject = ['$scope', '$firebaseAuth', '$state', 'Settings'];

    function settingsCtrl($scope, $firebaseAuth, $state, Settings) {
        $scope.authObj = $firebaseAuth();
        $scope.user = {};

        $scope.signUp = function () {
            $scope.authObj.$createUserWithEmailAndPassword($scope.user.email, $scope.user.password)
                .then(function (firebaseUser) {
                    $state.go('tab.homePage');
                }).catch(function (error) {
                    console.error("Error: ", error);
                });
        };

        $scope.authObj.$onAuthStateChanged(function (firebaseUser) {
            $scope.firebaseUser = firebaseUser;
        });

        $scope.settings = Settings.all();
    }


})();
