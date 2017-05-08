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
                    score: '15',
                    img: 'img/game/ctf.jpg',
                    id: '1',
                }, {
                    name: "Difficult? Get some help!",
                    description: "Don't worry. It's just your second task. Unfamiliar? Help yourself. Everything you need to know is included.",
                    hint: 'Somehow find something that provides help',
                    score: '25',
                    img: 'img/game/ctf.jpg',
                    id: '2'
                }, {
                    name: 'Knowledge is King',
                    description: 'Get familiar with everything about Hwa Chong. There are 2 parts to this {flag}',
                    hint: 'READING is the KEY to KNOWLEDGE.',
                    score: '35',
                    img: 'img/game/ctf.jpg',
                    id: '3'
                }, {
                    name: 'ICT quiz 1',
                    description: 'What is so special about Hwa Chong Infocomm and Robotics Club?',
                    hint: 'NOTHING',
                    score: '35',
                    img: 'img/game/ctf.jpg',
                    id: '4'
                }, {
                    name: 'Settings',
                    description: 'Tinker with the settings to get something fun',
                    hint: 'NOTHING',
                    score: '30',
                    img: 'img/game/ctf.jpg',
                    id: '5'
                }]
            }, {
                name: 'Lv 2',
                items: [{
                    name: 'ICT quiz 2 - I Luv Pi',
                    description: 'What is my favourite pie? Hawaiian? Key in the answers in full CAPS as flag',
                    hint: 'R _ _ P _ _ R _ _',
                    score: '130',
                    img: 'img/game/ctf.jpg',
                    id: '6'
                }, {
                    name: 'Treasure Hunt 1',
                    description: 'Find this place, the flga is hidden somewhere there...',
                    hint: 'NOTHING',
                    score: '100',
                    img: 'img/game/Audi.jpg',
                    id: '7'
                }, {
                    name: 'ICT quiz 3 - Frameworks',
                    description: 'Which javascript framework is this APP built upon? Key in the answers in full CAPS as flag',
                    hint: '_ N _ _ _ A _ _ S',
                    score: '130',
                    img: 'img/game/ctf.jpg',
                    id: '8'
                }, {
                    name: 'ICT quiz 4 - Cliche Jokes',
                    description: 'Why do Java programmers wear spectacles? Because they can\'t ...',
                    hint: '_ _ (2 characters)',
                    score: '100',
                    img: 'img/game/ctf.jpg',
                    id: '9'
                }]
            }, {
                name: 'Final Level',
                items: [{
                    name: 'Treasure Hunt 2',
                    description: 'Find this place, the flag is hidden somewhere there...',
                    hint: 'NOTHING',
                    score: '150',
                    img: 'img/game/HallOfFame.jpg', //CUSTOM
                    id: '10'
                }, {
                    name: 'RUNNING MAN',
                    description: 'Tour the school using our tour guide function, there will be 4 parts to this flag',
                    hint: '1 part of the flag in each section of the school',
                    score: '500',
                    img: 'img/game/ctf.jpg',
                    id: '11'
                }, {
                    name: 'ICT quiz 5 - Caesar is crying in his grave',
                    description: 'QY FOP BQU WBIHA',
                    hint: 'Shift',
                    score: '200',
                    img: 'img/game/ctf.jpg',
                    id: '12'
                }, {
                    name: 'ICT quiz 6 - Cliche Jokes 2',
                    description: 'Why does woman find C programmers to be better than Java programmers? Because they do not treat them like ...',
                    hint: 'O _ _ E _ _ S',
                    score: '250',
                    img: 'img/game/ctf.jpg',
                    id: '13'
                }]
            }, {
                name: 'Kamikaze',
                items: [{
                    name: 'Speak UP',
                    description: 'Social engineer our CCA members to get the flag',
                    hint: 'Ask useful questions.',
                    score: '100',
                    img: 'img/game/ctf.jpg',
                    id: '14'
                }, {
                    name: 'Showcase your vocals',
                    description: 'Sing at Hwa Chong\'s central plaza stage for the flag - Only 1 up for grab @ 13 30 hours',
                    hint: 'Just be daring and approach HCIRS to plan for your slot',
                    score: '400',
                    img: 'img/game/ctf.jpg',
                    id: '15'
                }, {
                    name: 'Display your skillz',
                    description: 'Mimick a short sample dance by MAD to obtain your flag - Only 1 up for grab @ 14 00 hours',
                    hint: 'Similar to singing, approach HCIRS to plan for a slot',
                    score: '400',
                    img: 'img/game/ctf.jpg',
                    id: '16'
                }]
            },
            {
                name: 'Timed Challenge',
                items: [{
                    name: 'I, Social Media',
                    description: 'Post a short dance video of you / with friends shouting: "Hwa Chong Open House is the BEST!"',
                    hint: 'Come to HCIRS to verify to redeem your flag',
                    score: '200',
                    img: 'img/game/ctf.jpg',
                    id: '17'
                }, {
                    name: 'Man vs Robots',
                    description: 'Come to HCIRS booth to tinker with our self-designed robot to face your next biggest life challenge',
                    hint: 'We will not spoil it',
                    score: '200',
                    img: 'img/game/ctf.jpg',
                    id: '18'
                }]
            }];

            return {
                all: function() {
                    return game;
                }
            };

        });

})();
