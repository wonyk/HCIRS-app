(function () {
    angular
        .module('hcirs-app')
        .controller('ActivitiesCtrl', ActivitiesCtrl);

    ActivitiesCtrl.$inject = ['$scope'];

    function ActivitiesCtrl($scope) {
        $scope.levels = [{
            name: 'Lv 1',
            items: ['Testing']
        },
        {
            name: 'Lv 2',
            items: ['Nothing to see']
        }
        ];

        $scope.toggleLevel = function (level) {
            if ($scope.isLevelShown(level)) {
                $scope.shownLevel = null;
            } else {
                $scope.shownLevel = level;
            }
        };
        $scope.isLevelShown = function (level) {
            return $scope.shownLevel === level;
        };
    }

})();
