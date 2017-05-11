(function () {
    angular
        .module('hcirs-app')
        .controller('settingsCtrl', settingsCtrl);

    settingsCtrl.$inject = ['$scope', '$firebaseAuth', '$state', 'Settings', '$ionicLoading', '$ionicPopup', '$firebaseObject'];

    function settingsCtrl($scope, $firebaseAuth, $state, Settings, $ionicLoading, $ionicPopup, $firebaseObject) {
        $scope.authObj = $firebaseAuth();
        $scope.user = {};

        $scope.signUp = function () {
            $ionicLoading.show({
                template: '<p>Loading...</p><ion-spinner></ion-spinner>'
            });
            $scope.authObj.$createUserWithEmailAndPassword($scope.user.email, $scope.user.password)
                .then(function (firebaseUser) {
                    var ref = firebase.database().ref(firebaseUser.uid);
                    $scope.userDetails = $firebaseObject(ref.child('details'));
                    $scope.userDetails.name = $scope.user.name;
                    $scope.userDetails.score = 0;
                    $scope.userDetails.$save().then(function () {
                        $ionicLoading.hide();
                        $state.go('^.homePage');
                    });
                }).catch(function (error) {
                    $ionicLoading.hide();
                    $ionicPopup.alert({
                        title: 'Error..',
                        template: error
                    });
                });
        };

        $scope.authObj.$onAuthStateChanged(function (firebaseUser) {
            $scope.firebaseUser = firebaseUser;
        });

        $scope.settings = Settings.all();
    }


})();
