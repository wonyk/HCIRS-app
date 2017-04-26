(function () {
    angular
        .module('hcirs-app')
        .controller('ccaCtrl', ccaCtrl);

    ccaCtrl.$inject = ['$scope', 'Information'];

    function ccaCtrl($scope, Information) {
        $scope.ccas =Information.cca();
    }

})();
