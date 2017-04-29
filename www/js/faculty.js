(function () {
    angular
        .module('hcirs-app')
        .controller('FacCtrl', FacCtrl);

    FacCtrl.$inject = ['$scope'];

    function FacCtrl($scope) {
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
