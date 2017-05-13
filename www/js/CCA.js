(function () {
    angular
        .module('hcirs-app')
        .controller('ccaCtrl', ccaCtrl);

    ccaCtrl.$inject = ['$scope', 'Information', '$ionicLoading'];

    function ccaCtrl($scope, Information, $ionicLoading) {
        $scope.ccas = Information.cca();
        $ionicLoading.show({
            duration: 2200,
            template: '<p>Loading...</p><ion-spinner></ion-spinner>'
        });
    }

})();
