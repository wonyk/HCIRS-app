(function () {
    angular
        .module('hcirs-app')
        .controller('ActivitiesCtrl', ActivitiesCtrl);

    ActivitiesCtrl.$inject = ['$scope', 'Level', '$ionicModal', 'Answer', '$ionicLoading', '$ionicPopup', '$cordovaNativeStorage', '$firebaseObject', 'currentAuth'];

    function ActivitiesCtrl($scope, Level, $ionicModal, Answer, $ionicLoading, $ionicPopup, $cordovaNativeStorage, $firebaseObject, currentAuth) {

        //Ensure the variables are all set up
        $scope.levels = Level;
        $scope.answers = Answer;
        var ref = firebase.database().ref("users");
        var user = $firebaseObject(ref.child(currentAuth.uid));
        user.$loaded()
            .then(function () {
                $scope.score = user.score;
            });

        //Misc functions for css to work: UI improvements
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


        //Real JS to check for answers
        $scope.submitFlag = function (answer, id) {
            var flag = $scope.answers[id - 1].flag;
            var score = $scope.answers[id - 1].score;
            if (answer == flag) {
                $scope.score = $scope.score + score;
                user.score = $scope.score;
                user.$save();
                
                $ionicPopup.alert({
                    title: 'Congrats',
                    template: 'You got the {flag} right! Continue striving!'
                }).then(function (res) {
                    $scope.modal.hide();
                });
            } else {
                $ionicPopup.alert({
                    title: 'Oops...',
                    template: 'Wrong {flag}. Try again!'
                });
            }
        };
    }

})();
