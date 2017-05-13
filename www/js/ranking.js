(function () {
    angular
        .module('hcirs-app')
        .controller('rankCtrl', rankCtrl);

    rankCtrl.$inject = ['$scope', '$state', '$ionicLoading', '$firebaseObject', '$cordovaNetwork', '$ionicPopup'];

    function rankCtrl($scope, $state, $ionicLoading, $firebaseObject, $cordovaNetwork, $ionicPopup) {
        $ionicLoading.show({
            template: '<p>Loading...</p><ion-spinner></ion-spinner>'
        });
        var ref = firebase.database().ref();
        var players = $firebaseObject(ref);

        var getPlayerScore = function () {
            if ($cordovaNetwork.type == 'none') {
                $scope.$broadcast('scroll.refreshComplete');
                $ionicPopup.alert({
                    title: 'No Network',
                    template: 'You ain\'t checking the score without internet'
                }).then(function () {
                    $state.go('tab.homePage');
                });
            } else {
                $scope.players = [];
                players.$loaded().then(function () {
                    angular.forEach(players, function (value, key) {
                        $scope.players.push(value.details);
                    });
                    $scope.$broadcast('scroll.refreshComplete');
                    $ionicLoading.hide();
                });
            }
        };

        //Get player score
        getPlayerScore();
        //Refresh function
        $scope.refresh = function () {
            getPlayerScore();
        };

        $cordovaNetwork.onDisconnect().subscribe(function () {
            $scope.$broadcast('scroll.refreshComplete');
            $ionicLoading.hide();
            $ionicPopup.alert({
                title: 'No Network',
                template: 'You ain\'t checking the score without internet'
            }).then(function () {
                $state.go('tab.homePage');
            });
        });
    }


})();
