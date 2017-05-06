(function () {
    angular
        .module('hcirs-app')
        .controller('guideCtrl', guideCtrl);

    guideCtrl.$inject = ['$scope', '$cordovaIBeacon', '$ionicLoading', '$ionicPopup', '$ionicModal', '$ionicScrollDelegate', 'Information', '$cordovaLocationAccuracy'];

    function guideCtrl($scope, $cordovaIBeacon, $ionicLoading, $ionicPopup, $ionicModal, $ionicScrollDelegate, Information, $cordovaLocationAccuracy) {
        //For Misc functions
        $scope.zoomLimit = 0;
        $scope.options = {
            initialSlide: 0,
            loop: true,
            autoplay: 15000,
            autoplayDisableOnInteraction: false,
            effect: 'slide',
        };

        $scope.zoom = function () {
            if ($scope.zoomLimit == 0) {
                $ionicScrollDelegate.$getByHandle('zoom-pane').zoomBy(2.0, true);
                $scope.zoomLimit++;
            } else {
                $ionicScrollDelegate.$getByHandle('zoom-pane').zoomBy(0.5, true);
                $scope.zoomLimit = 0;
            }
        };


        $scope.$on("$ionicSlides.sliderInitialized", function (event, data) {
            $scope.slider = data.slider;
        });

        $scope.$on("$ionicSlides.slideChangeEnd", function (event, data) {
            $scope.activeIndex = data.slider.activeIndex;
            $scope.previousIndex = data.slider.previousIndex;
        });

        $ionicModal.fromTemplateUrl('templates/imgView.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function (picture) {
            $scope.modal.show();
            if (!picture) {
                $scope.picture = "img/misc/map2.jpg"; //For the HCI map
            } else {
                $scope.picture = picture; //For the rest of the image
            }
        };
        $scope.closeModal = function () {
            $scope.modal.hide();
        };
        // Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });

        // Real beacon stuff and controllers
        $scope.started = false;
        $scope.location = Information.guide();
        //This function is crazily coded
        $scope.startGuide = function () {

            //Check location settings
            $cordovaLocationAccuracy.request('2')
                .then(function (data, err) {
                    $scope.started = true;
                    if (err) {
                        $ionicPopup.alert({
                            title: 'Error',
                            template: 'Try again'
                        });
                    }
                });


            $cordovaIBeacon.requestAlwaysAuthorization(); //For ios Only... Android using another plugin..
            var BlockA = $cordovaIBeacon.BeaconRegion('BlockA', 'f7826da6-4fa2-4e98-8024-bc5b71e0893e', '8888', '2222'); //Cloud
            var BlockB = $cordovaIBeacon.BeaconRegion('BlockB', 'f7826da6-4fa2-4e98-8024-bc5b71e0893e', '8888', '49717'); //7rsV
            var BlockCD = $cordovaIBeacon.BeaconRegion('BlockCD', 'f7826da6-4fa2-4e98-8024-bc5b71e0893e', '8888', '3464'); //DUMn
            var BlockE = $cordovaIBeacon.BeaconRegion('BlockE', 'f7826da6-4fa2-4e98-8024-bc5b71e0893e', '8888', '32787'); //zmAY

            // Beacon delegate controller
            var delegate = $cordovaIBeacon.Delegate();
            $cordovaIBeacon.enableDebugLogs();
            //Enable BT automatically
            $cordovaIBeacon.isBluetoothEnabled()
                .then(function (isEnabled) {
                    if (!isEnabled) {
                        $cordovaIBeacon.enableBluetooth();
                    }
                });

            $scope.locs = null; //Initial state

            $cordovaIBeacon.startMonitoringForRegion(BlockCD)
                .then(function (data, err) {
                    if (err) {
                        $ionicPopup.alert({
                            title: 'Error',
                            template: 'Try restarting your app again'
                        });
                    }
                });

            $cordovaIBeacon.startMonitoringForRegion(BlockA)
                .then(function (data, err) {
                    if (err) {
                        $ionicPopup.alert({
                            title: 'Error',
                            template: 'Try restarting your app again'
                        });
                    }
                });

            $cordovaIBeacon.startMonitoringForRegion(BlockB)
                .then(function (data, err) {
                    if (err) {
                        $ionicPopup.alert({
                            title: 'Error',
                            template: 'Try restarting your app again'
                        });
                    }
                });

            $cordovaIBeacon.startMonitoringForRegion(BlockE)
                .then(function (data, err) {
                    if (err) {
                        $ionicPopup.alert({
                            title: 'Error',
                            template: 'Try restarting your app again'
                        });
                    }
                });

            delegate.didEnterRegion()
                .subscribe(function (data, error) {
                    $ionicLoading.show({
                        duration: 500,
                        template: '<p>Loading</p><ion-spinner></ion-spinner>'
                    });
                    if (data.region.identifier == "BlockCD") {
                        $scope.locs = $scope.location[0].data;
                        $scope.$apply();
                    }
                    if (data.region.identifier == "BlockA") {
                        $scope.locs = $scope.location[1].data;
                        $scope.$apply();
                    }
                    if (data.region.identifier == "BlockB") {
                        $scope.locs = $scope.location[2].data;
                        $scope.$apply();
                    }
                    if (data.region.identifier == "BlockE") {
                        $scope.locs = $scope.location[3].data;
                        $scope.$apply();
                    }
                    if (error) {
                        $ionicPopup.alert({
                            title: 'Error',
                            template: 'Try restarting your app again'
                        });
                    }
                });

            delegate.didExitRegion()
                .subscribe(function (data, error) {
                    if (data) {
                        console.log(JSON.stringify(data));
                        $scope.locs = null;
                        $scope.$apply();
                    }
                    if (error) {
                        $ionicPopup.alert({
                            title: 'Error',
                            template: 'Try restarting your app again'
                        });
                    }
                });
        };

        //Reset button at the bottom.

        $scope.reset = function () {
            $scope.started = false;
            $scope.locs = null;
            var BlockA = $cordovaIBeacon.BeaconRegion('BlockA', 'f7826da6-4fa2-4e98-8024-bc5b71e0893e', '8888', '2222'); //Cloud
            var BlockB = $cordovaIBeacon.BeaconRegion('BlockB', 'f7826da6-4fa2-4e98-8024-bc5b71e0893e', '8888', '49717'); //7rsV
            var BlockCD = $cordovaIBeacon.BeaconRegion('BlockCD', 'f7826da6-4fa2-4e98-8024-bc5b71e0893e', '8888', '3464'); //DUMn
            var BlockE = $cordovaIBeacon.BeaconRegion('BlockE', 'f7826da6-4fa2-4e98-8024-bc5b71e0893e', '8888', '32787'); //zmAY
            $cordovaIBeacon.stopMonitoringForRegion(BlockA);
            $cordovaIBeacon.stopMonitoringForRegion(BlockB);
            $cordovaIBeacon.stopMonitoringForRegion(BlockCD);
            $cordovaIBeacon.stopMonitoringForRegion(BlockE);
        };

    }

})();
