(function () {
    angular
        .module('hcirs-app')
        .controller('FacCtrl', FacCtrl);

    FacCtrl.$inject = ['$scope', '$ionicPopup'];

    function FacCtrl($scope, $ionicPopup) {
        $ionicPopup.alert({
            title: 'Swipe to view',
            template: 'Swipe left and right to view the various faculties'
        });

        $scope.options = {
            loop: false,
            effect: 'fade'
        };

        $scope.$on("$ionicSlides.sliderInitialized", function (event, data) {
            // data.slider is the instance of Swiper
            $scope.slider = data.slider;
        });

        $scope.$on("$ionicSlides.slideChangeEnd", function (event, data) {
            $scope.activeIndex = data.slider.activeIndex;
            $scope.previousIndex = data.slider.previousIndex;
        });
    }

})();
