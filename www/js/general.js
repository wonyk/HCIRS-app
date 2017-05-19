(function () {
    angular
        .module('hcirs-app')
        .run(['$rootScope', '$ionicLoading', '$ionicSideMenuDelegate', '$state', '$ionicPopup', '$cordovaNetwork', function ($rootScope, $ionicLoading, $ionicSideMenuDelegate, $state, $ionicPopup, $cordovaNetwork) {

            $rootScope.$on('$stateChangeStart',
                function (event, toState, toParams, fromState, fromParams) {
                    $ionicLoading.show({
                        template: '<p>Loading...</p><ion-spinner></ion-spinner>'
                    });

                });

            $rootScope.$on('$stateChangeSuccess',
                function (event, toState, toParams, fromState, fromParams) {
                    $ionicLoading.hide();
                    if ($cordovaNetwork.type == "none") {
                        $state.go('network');
                    }
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

            $cordovaNetwork.onDisconnect().subscribe(function () {
                $rootScope.$broadcast('scroll.refreshComplete');
                $ionicLoading.hide();
                $state.go('network');
            });
            $cordovaNetwork.onConnect().subscribe(function () {
                $state.go('tab.homePage');
            });


        }]);

})();
