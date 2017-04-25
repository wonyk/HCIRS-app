(function () {
    angular
        .module('hcirs-app.settings', [])
        .factory('Settings', function () {

            return {
                all: function () {
                    return settings;
                }
            };

        });

})();
