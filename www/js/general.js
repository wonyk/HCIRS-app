(function () {
    angular
        .module('hcirs-app')
        .run(['$rootScope', '$ionicLoading', '$state', function ($rootScope, $ionicLoading) {

            $rootScope.$on('$stateChangeStart',
                function (event, toState, toParams, fromState, fromParams) {
                    $ionicLoading.show({
                        template: '<p>Loading...</p><ion-spinner></ion-spinner>'
                    });
                });

            $rootScope.$on('$stateChangeSuccess',
                function (event, toState, toParams, fromState, fromParams) {
                    $ionicLoading.hide();
                });

        }]);

})();
