(function() {
    angular
        .module('hcirs-app')
        .controller('rankCtrl', rankCtrl);

    rankCtrl.$inject = ['$scope', '$state', '$ionicLoading', '$firebaseObject'];

    function rankCtrl($scope, $state, $ionicLoading, $firebaseObject) {
        var ref = firebase.database().ref();

        var obj = $firebaseObject(ref);

        // to take an action after the data loads, use the $loaded() promise
        obj.$loaded().then(function() {
            console.log("loaded record:", obj.$id, obj.someOtherKeyInData);

        });

    }


})();
