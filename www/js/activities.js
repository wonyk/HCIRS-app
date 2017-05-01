(function () {
    angular
        .module('hcirs-app')
        .controller('ActivitiesCtrl', ActivitiesCtrl);

    ActivitiesCtrl.$inject = ['$scope', 'Levels', '$ionicModal'];

    function ActivitiesCtrl($scope, Levels, $ionicModal) {
        $scope.levels = Levels.all();

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

        $ionicModal.fromTemplateUrl('templates/modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function (item) {
            $scope.details = item;
            $scope.modal.show();
        };
        $scope.closeModal = function () {
            $scope.modal.hide();
        };
        // Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });

        $scope.submitFlag = function (answer) {
            console.log(answer);
            $scope.modal.hide();
        };
    }

})();
