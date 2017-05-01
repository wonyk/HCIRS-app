(function () {
    angular
        .module('hcirs-app')
        .controller('ccaCtrl', ccaCtrl);

    ccaCtrl.$inject = ['$scope', 'Information', '$ionicLoading', '$ionicPopover'];

    function ccaCtrl($scope, Information, $ionicLoading, $ionicPopover) {
        $scope.ccas = Information.cca();
        $ionicLoading.show({
            duration: 1500,
            template: '<p>Loading...</p><ion-spinner></ion-spinner>'
        });
    }

})();
