(function () {
    angular
        .module('hcirs-app')
        .controller('rankCtrl', rankCtrl);

    rankCtrl.$inject = ['$scope', '$state', '$ionicLoading', '$firebaseObject'];

    function rankCtrl($scope, $state, $ionicLoading, $firebaseObject) {
        $ionicLoading.show({
            template: '<p>Loading...</p><ion-spinner></ion-spinner>'
        });
        var ref = firebase.database().ref();
        var players = $firebaseObject(ref);

        var getPlayerScore = function () {
            $scope.players = [];
            players.$loaded().then(function () {
                angular.forEach(players, function (value, key) {
                    $scope.players.push(value.details);
                });
                $scope.$broadcast('scroll.refreshComplete');
                $ionicLoading.hide();
            });
        };

        getPlayerScore();

        $scope.refresh = function () {
            getPlayerScore();
        };
    }


})();
