(function () {
    angular
        .module('hcirs-app')
        .controller('settingsCtrl', settingsCtrl);

    settingsCtrl.$inject = ['$scope', '$firebaseAuth', '$state', '$ionicLoading', '$ionicPopup', '$firebaseObject'];

    function settingsCtrl($scope, $firebaseAuth, $state, $ionicLoading, $ionicPopup, $firebaseObject) {
        $scope.authObj = $firebaseAuth();
        $scope.user = {};

        //Sign up
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

        //Others
        $scope.authObj.$onAuthStateChanged(function (firebaseUser) {
            $scope.firebaseUser = firebaseUser;
        });

        $scope.notifications = true;

        $scope.toggle = function () {
            $ionicPopup.confirm({
                title: 'Toggle Notifications',
                template: 'Are you sure you want to play with this?'
            }).then(function (res) {
                if (res) {
                    $ionicPopup.alert({
                        title: 'Too bad',
                        template: 'I will not ALLOW IT. Plus it does not do anything..'
                    });
                } else {
                    $ionicPopup.alert({
                        title: 'Good!',
                        template: 'Reward you a flag: {Juz-A-fr33-f1Ag}'
                    }).then(function () {
                        $scope.notifications = true;
                    });
                }
            });
        };
    }


})();
