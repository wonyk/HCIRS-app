(function() {
    angular
        .module('hcgc-app')
        .controller('settingsCtrl', settingsCtrl);

    settingsCtrl.$inject = ['$scope', '$firebaseAuth'];

    function settingsCtrl($scope, $firebaseAuth) {
        $scope.authObj = $firebaseAuth();
        $scope.user = {};
        $scope.login = function() {

            $scope.authObj.$signInWithEmailAndPassword($scope.user.email, $scope.user.password)
                .then(function(firebaseUser) {
                    console.log("Signed in as:", firebaseUser.uid);
                }).catch(function(error) {
                    console.error("Authentication failed:", error);
                });
        };
        /*
        $scope.authObj.$createUserWithEmailAndPassword("my@email.com", "mypassword")
            .then(function(firebaseUser) {
                console.log("User " + firebaseUser.uid + " created successfully!");
            }).catch(function(error) {
                console.error("Error: ", error);
            });
            */
    }


})();
