(function() {
    angular
        .module('hcirs-app.game-levels', [])
        .factory('Levels', function() {

            var game = [{
                name: 'Lv 1',
                items: [{
                    name: "Beginner's Luck",
                    description: 'If you do not know what to do, you should always seek for a clue.',
                    hint: 'Well, you are lucky. Here\'s the flag: {ThANks4U5ing-0UR-APP}',
                    id: '1'
                }, {
                    name: "It's getting harder",
                    description: ''
                }]
            }, {
                name: 'Lv 2',
                items: [{
                    
                }]
            }, {
                name: 'Final Level',
                items: [{
                    
                }]
            }, {
                name: 'Kamikaze',
                items: [{
                    name: 'Speak UP',
                    description: 'Social engineer our CCA members to get the flag',
                    hint: 'Ask useful questions.',
                    id: ''
                }]
            },
            {
                name: 'Timed Challenge',
                items: [{
                    
                }]
            }];

            return {
                all: function() {
                    return game;
                }
            };

        });

})();
