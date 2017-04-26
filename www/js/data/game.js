(function() {
    angular
        .module('hcirs-app.game-levels', [])
        .factory('Levels', function() {

            var game = [{
                name: 'Lv 1',
                items: [{
                    name: "Beginner's Luck",
                    link: "more"
                }, {
                    name: "It's getting harder"
                }]
            }, {
                name: 'Lv 2',
                items: ['Nothing to see']
            }];

            return {
                all: function() {
                    return game;
                }
            };

        });

})();
