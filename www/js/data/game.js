(function () {
    angular
        .module('hcirs-app.game-levels', [])
        .factory('Levels', function () {

            return {
                all: function () {
                    return levels;
                }
            };

        });

})();
