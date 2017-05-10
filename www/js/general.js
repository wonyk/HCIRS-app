(function () {
    angular
        .module('hcirs-app')
        .run(['$rootScope', '$ionicLoading', '$ionicSideMenuDelegate', '$state', '$ionicPopup', function ($rootScope, $ionicLoading, $ionicSideMenuDelegate, $state, $ionicPopup) {

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

            $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
                if (error === "AUTH_REQUIRED") {
                    $ionicPopup.alert({
                        title: 'Sign up',
                        template: 'Sign up to play!'
                    });
                    $state.go("tab.settings");
                }
            });

            $rootScope.$on('$ionicView.enter', function () {
                $ionicSideMenuDelegate.edgeDragThreshold('true');
            });

        }]);

})();
