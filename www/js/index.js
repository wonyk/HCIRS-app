(function() {
    angular
        .module('hcgc-app')
        .controller('IndexCtrl', IndexCtrl);

    IndexCtrl.$inject = ['$scope', '$ionicSideMenuDelegate'];

    function IndexCtrl($scope, $ionicSideMenuDelegate) {
            $ionicSideMenuDelegate.edgeDragThreshold('true'); //Tab is the immediate parent
        };

})();
