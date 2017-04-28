(function () {
    angular
        .module('hcirs-app.settings', [])
        .factory('Settings', function () {

            var settings = {
                'notifications': true,
                'photos': 0
            };

            return {
                all: function () {
                    return settings;
                }
            };

        });

})();
