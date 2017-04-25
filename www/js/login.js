(function () {
    angular
        .module('hcirs-app')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$firebaseAuth', '$ionicSideMenuDelegate', '$state'];

    function LoginCtrl($scope, $firebaseAuth, $ionicSideMenuDelegate, $state) {
        $scope.authObj = $firebaseAuth();
        $scope.user = {};
        $scope.login = function () {
            $scope.authObj.$signInWithEmailAndPassword($scope.user.email, $scope.user.password)
                .then(function (firebaseUser) {
                    console.log("Signed in as:", firebaseUser.uid);
                    $state.go('tab.homePage');
                }).catch(function (error) {
                    console.error("Authentication failed:", error);
                });
        };
        $ionicSideMenuDelegate.edgeDragThreshold('true');
    }

})();
