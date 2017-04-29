(function() {
    angular
        .module('hcirs-app.game-levels', [])
        .factory('Levels', function() {

            var game = [{
                name: 'Lv 1',
                items: [{
                    name: "Beginner's Luck",
                    answer: ''
                }, {
                    name: "It's getting harder"
                }]
            }, {
                name: 'Lv 2',
                items: ['Nothing to see']
            }, {
                name: 'Final Level',
                items: []
            }, {
                name: 'Kamikaze',
                items: []
            },
            {
                name: 'Timed Challenge',
                items: []
            }];

            return {
                all: function() {
                    return game;
                }
            };

        });

})();
