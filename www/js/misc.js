// For small controllers. Don't bother creating seperate ones for debugging.

(function () {
    angular
        .module('hcirs-app')

        .controller('mapCtrl', function ($scope, $ionicModal, $ionicScrollDelegate) {
            $scope.directions = function () {
                window.open('https://www.google.com.sg/maps/dir//Hwa+Chong+Institution,+661+Bukit+Timah+Road,+Singapore+269734/@1.3261933,103.8013251,17z/data=!4m13!1m4!3m3!1s0x31da1a09bbc92047:0xa1220963b9dd51d5!2sHwa+Chong+Institution!3b1!4m7!1m0!1m5!1m1!1s0x31da1a09bbc92047:0xa1220963b9dd51d5!2m2!1d103.8035138!2d1.3261879', '_blank', 'location=no');
            };
            $scope.zoomLimit = 0;

            $scope.zoom = function () {
                if ($scope.zoomLimit == 0) {
                    $ionicScrollDelegate.$getByHandle('zoom-pane').zoomBy(2.0, true);
                    $scope.zoomLimit++;
                } else {
                    $ionicScrollDelegate.$getByHandle('zoom-pane').zoomBy(0.5, true);
                    $scope.zoomLimit = 0;
                }
            };

            $ionicModal.fromTemplateUrl('templates/mapView.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function () {
                $scope.modal.show();
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };
            $scope.$on('$destroy', function () {
                $scope.modal.remove();
            });
        });

})();
