(function () {
    angular
        .module('hcirs-app.settings', [])
        .factory('Settings', function () {

            var settings = {
                'notifications': true,
            };

            return {
                all: function () {
                    return settings;
                },
                setName: function (name) {
                    settings.name = name;
                    console.log(name);
                }
            };

        });

})();
