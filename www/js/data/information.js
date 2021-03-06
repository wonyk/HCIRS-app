(function () {
    angular
        .module('hcirs-app.information', [])
        .factory('Information', function () {

            var ccas = [
                {
                    fullname:"Infocomm and Robotics Society",
                    content:"The Infocomm and Robotics Society is a place where you can create anything you wish and change the world. {Hc1R5-R0cK5!}",
                    img:"img/ccas/cns/hcirs.jpg",
                    searchtags:"HCIRS Infocomm and Robotics Society Computers Cyber"
                },
                {
                    content:"We organise Astrigue Competition and Convention and with RI’s Astronomy Club and Night Under The Stars within our school",
                    fullname:"Astronomy Club",
                    img:"img/ccas/cns/astro.jpg",
                    searchtags:"ASTRONOMY CLUB",
                
                },
                {
                    content:"In Art Club, you are given the freedom to pursue your passion alongside others who share the same feelings as you.",
                    fullname:"Art Club",
                    img:"img/ccas/cns/art.jpg",
                    searchtags:"ART CLUB",
                
                },
                {
                    fullname:"Mindsports Club",
                    content:"Do you like to constantly stimulate yourself intellectually? Mind Sports Club is the place for you!",
                    img:"img/ccas/cns/mindsports.jpg",
                    searchtags:"  Bridge / Chess / Othello"
                },
                {
                    fullname:"Chinese Calligraphy",
                    content:"Highly productive sessions, little time required (once/ week), clearly advantageous given the hectic JC life",
                    img:"img/ccas/cns/chicalligraphy.jpg",
                    searchtags:"CHINESE CALLIGRAPHY  Chinese Calligraphy"
                },
                {
                    fullname:"Chinese Society",
                    content:"Chinese Society is one of the few CCAs with a long-standing history and a tradition of 35 years that has lasted for many batches",
                    img:"img/ccas/cns/chisoc.jpg",
                    searchtags:"CHINESE SOCIETY  Chinese Society"
                },
                {
                    content:"A group of eight unique individuals who are deeply passionate about serving the community and dedicated to inculcating a culture of giving",
                    fullname:"CIP Council",
                    img:"img/ccas/cns/cipcouncil.jpg",
                    searchtags:"CIP COUNCIL",
                
                },
                {
                    fullname:"ELDDFS",
                    content:"ELDDFS operates as four wings (Literature, Drama, Debate and Film), with each wing holding one or two session per week",
                    img:"img/ccas/cns/elddfs.png",
                    searchtags:"ELDDFS  ELDDFS"
                },
                {
                    fullname:"First Aid Club",
                    content:"Hwa Chong’s First Aid Club organises annual blood donation drive, takes part in First Aid Competitions and serves the school",
                    img:"img/ccas/cns/firstaid.jpg",
                    searchtags:"  First Aid"
                },
                {
                    fullname:"HACAS",
                    content:"HUMANITIES AND CURRENT AFFAIRS SOCIETY",
                    img:"img/ccas/cns/hacas.png",
                    searchtags:"  HACAS"
                },
                {
                    fullname:"Interact",
                    content:"Hwa Chong Interact is where you can serve, bond, lead and organize purposeful events",
                    img:"img/ccas/cns/interact.png",
                    searchtags:"INTERACT  Interact"
                },
                {
                    fullname:"International Cultural Club",
                    content:"INTERNATIONAL CULTURAL CLUB",
                    img:"img/ccas/cns/intcultureclub.jpg",
                    searchtags:"  Japanese Cultural Club"
                },
                {
                    fullname:"Library Club",
                    content:"We maintain Jing Xian Library in the top possible quality for the benefit of the entire school community, teachers, students and staff alike.",
                    img:"img/ccas/cns/library.jpg",
                    searchtags:"LIBRARY CLUB  Library Club"
                },
                {
                    fullname:"PA / AVA",
                    content:"We supply complete, up-to-date equipment and manage shows with our expertise.",
                    img:"img/ccas/cns/PA.png",
                    searchtags:"PA / AVA  PA / AVA"
                },
                {
                    fullname:"Photographic Society",
                    content:"We aim to develop its members in the field of photography, while cultivating a love and appreciation for the subject.",
                    img:"img/ccas/cns/photo.jpg",
                    searchtags:"PHOTOGRAPHIC SOCIETY  Photographic Society"
                },
                {
                    fullname:"Sensorium Vale",
                    content:"We film and record school events and initiate various video projects on our own.",
                    img:"img/ccas/cns/sv.jpg",
                    searchtags:"  Sensorium Vale "
                },
                {
                    fullname:"Law Society",
                    content:"We treat our members to engaging and fun-filled activities like dialogue sessions with experienced lawyers.",
                    img:"img/ccas/cns/lawsoc.png",
                    searchtags:"LAW SOCIETY  Law Society"
                },
                {
                    fullname:"Students' Council",
                    content:"Hi! We are the 42nd Hwa Chong Students' Council, comprising 50 passionate students dedicated to serving the school!",
                    img:"img/ccas/cns/sc.png",
                    searchtags:"STUDENTS' COUNCIL  Students' Council"
                },
                {
                    fullname:"SSRC",
                    content:"The Science Students' Research Council (SSRC) is an association of students who are passionate about science research.",
                    img:"img/ccas/cns/ssrc.png",
                    searchtags:"  SSRC"
                },
                {
                    fullname:"Green Council",
                    content:"A young, yet tightly-knitted and forward-looking community dedicated to transforming Hwa Chong into a more environmentally conscious place.",
                    img:"img/ccas/cns/green.jpg",
                    searchtags:"GREEN COUNCIL  Green Council"
                },
                {
                    fullname:"SNEC",
                    content:"The Students’ National Education Council is a student-led council in Hwa Chong Institution (College).",
                    img:"img/ccas/cns/snec.png",
                    searchtags:"SNEC  SNEC"
                },
                {
                    fullname:"OESC",
                    content:"The Outdoor Education Student Committee is made up of like-minded, adventure-craving guys and girls.",
                    img:"img/ccas/cns/oesc.png",
                    searchtags:"  OESC"
                },
                {
                    fullname:"Badminton",
                    content:"Badminton is an indoor racquet sport played by either two opposing players or two opposing pairs, popular among people of all ages.",
                    img:"img/ccas/sports/badminton.jpg",
                    searchtags:"BADMINTON  Badminton"
                },
                {
                    fullname:"Basketball",
                    content:"Basketball is a team sport played by two teams of five players.",
                    img:"img/ccas/sports/basketball.jpg",
                    searchtags:"  Basketball "
                },
                {
                    fullname:"Canoeing",
                    content:"HCanoe is a dedicated and passionate team. In HCanoe, we don’t only aim for excellence in our sport but also growth as a person.",
                    img:"img/ccas/sports/canoeing.jpg",
                    searchtags:"CANOEING  Canoeing"
                },
                {
                    fullname:"Cross Country",
                    content:"No doubt, Cross-Country trainings are difficult and tough, but it is what makes us better.",
                    img:"img/ccas/sports/crosscountry.png",
                    searchtags:"CROSS COUNTRY  Cross Country"
                },
                {
                    fullname:"Fencing",
                    content:"Founded in 2007, the Hwa Chong Fencing Team has seen hundreds of fencers develop a passion for fencing.",
                    img:"img/ccas/sports/fencing.jpg",
                    searchtags:"FENCING  Fencing"
                },
                {
                    fullname:"Floorball",
                    content:"Floorball is a fun and fast-paced sport played indoors with floorball sticks and a ball.",
                    img:"img/ccas/sports/floorball.png",
                    searchtags:"FLOORBALL  Floorball"
                },
                {
                    fullname:"Gymnastics",
                    content:"The Gymnastics CCA in College mainly focuses on the Trampoline section, instead of the Artistic or Rhythmic forms.",
                    img:"img/ccas/sports/gym.png",
                    searchtags:"GYMNASTICS  Gymnastics"
                },
                {
                    fullname:"Shooting",
                    content:"Hwa Chong has been a traditional powerhouse in the field of shooting.",
                    img:"img/ccas/sports/shooting.jpg",
                    searchtags:"SHOOTING  Shooting"
                },
                {
                    fullname:"Judo",
                    content:"Japanese for \"the gentle way\", Judo is a traditional martial art which involves throwing or pinning opponents to score points.",
                    img:"img/ccas/sports/judo.jpg",
                    searchtags:"JUDO  Judo"
                },
                {
                    fullname:"Netball",
                    content:"In Hwachong Netball, we have a team of friendly, disciplined and dedicated girls.",
                    img:"img/ccas/sports/netball.jpeg",
                    searchtags:"NETBALL  Netball"
                },
                {
                    fullname:"Soccer (Girls)",
                    content:"Always wanted to join a sports CCA that will forge life-long bonds and have a CCA experience you’ll never regret in your JC life?",
                    img:"img/ccas/sports/soccerfemale.jpg",
                    searchtags:"SOCCER (GIRLS)  Soccer (Girls)"
                },
                {
                    fullname:"Softball",
                    content:"Hwa Chong Softball (HCSB) is a CCA rich in history, culture and achievement.",
                    img:"img/ccas/sports/softball.png",
                    searchtags:"SOFTBALL  Softball"
                },
                {
                    fullname:"Squash",
                    content:"The team is relatively small and we warmly welcome newcomers to join our team! :)",
                    img:"img/ccas/sports/squash.png",
                    searchtags:"SQUASH  Squash"
                },
                {
                    fullname:"Swimming and Waterpolo",
                    content:"We are a tightly knit family with seniors and juniors going through thick and thin together whilst having fun, forging stronger friendships",
                    img:"img/ccas/sports/swim.jpg",
                    searchtags:"  Swimming and Waterpolo"
                },
                {
                    fullname:"Table Tennis",
                    content:"Being a tight and closely-knitted team going through thick and thin together, we will definitely welcome you with open hearts!",
                    img:"img/ccas/sports/tabletennis.png",
                    searchtags:"TABLE TENNIS  Table-Tennis"
                },
                {
                    fullname:"Taekwondo",
                    content:"TKD is by far one of the most popular modern arts in the world, and is characterized by its fast, high and spinning kicks.",
                    img:"img/ccas/sports/taekwondo.jpg",
                    searchtags:"TAEKWONDO  Taekwondo"
                },
                {
                    fullname:"Tennis",
                    content:"Tennis is the one for you. You will improve your stamina and speed with our intensive drills, as well as refine your skills by playing matches!",
                    img:"img/ccas/sports/tennis.jpg",
                    searchtags:"TENNIS  Tennis"
                },
                {
                    fullname:"Touch Rugby",
                    content:"Touch Rugby is a 6 vs 6 sport played between two teams on a field.",
                    img:"img/ccas/sports/touchrugby.jpg",
                    searchtags:"TOUCH RUGBY  Touch Rugby"
                },
                {
                    fullname:"Track and Field",
                    content:"Track and Field is not a sport for the faint-hearted. It demands a high level of commitment, passion and determination.",
                    img:"img/ccas/sports/track.png",
                    searchtags:"  Track and Field"
                },
                {
                    fullname:"Ultimate Frisbee",
                    content:"Ultimate Frisbee is a non-contact sport played between 2 teams of 7 players on a large rectangular pitch.",
                    img:"img/ccas/sports/ultimate.jpg",
                    searchtags:"ULTIMATE FRISBEE  Ultimate Frisbee"
                },
                {
                    fullname:"Volleyball",
                    content:"Volleyball is a competitve sports CCA that participates in annually-held national volleyball competitions",
                    img:"img/ccas/sports/volleyball.png",
                    searchtags:"VOLLEYBALL  Volleyball"
                },
                {
                    fullname:"Wushu",
                    content:"WUSHU AND LION DANCE",
                    img:"img/ccas/sports/wushu.png",
                    searchtags:"  Wushu"
                },
                {
                    fullname:"Tchoukball",
                    content:"Pass. Catch. Shoot. These individual actions define and characterise Tchoukball.",
                    img:"img/ccas/sports/tchoukball.jpg",
                    searchtags:"TCHOUKBALL  Tchoukball"
                },
                {
                    fullname:"Chinese Dance",
                    content:"Hwa Chong Chinese Dance (HCCD) consists of talented dancers with a strong passion for dance.",
                    img:"img/ccas/arts/chinesedance.jpg",
                    searchtags:"CHINESE DANCE  Chinese Dance"
                },
                {
                    fullname:"Chinese Orchestra",
                    content:"The Hwa Chong Chinese Orchestra(HCCO) was founded in 1974 and is currently under the baton of Dr. Wei Yanming, teacher-conductor",
                    img:"img/ccas/arts/chinesemusic.png",
                    searchtags:"CHINESE ORCHESTRA  Chinese Orchestra"
                },
                {
                    fullname:"Choir",
                    content:"What is the best word to describe rioHC? Family.",
                    img:"img/ccas/arts/choir.jpg",
                    searchtags:"CHOIR  Choir"
                },
                {
                    fullname:"Concert Band",
                    content:"The Hwa Chong Symphonic Band began humbly as a small military band in 1974 and has since then flourished into a full symphonic band",
                    img:"img/ccas/arts/concertband.jpg",
                    searchtags:"CONCERT BAND  Concert Band"
                },
                {
                    fullname:"Guitar Ensemble",
                    content:"Hwa Chong Guitar Ensemble (HCGE) is a family of musicians with both passion and aptitude for guitar.",
                    img:"img/ccas/arts/guitarmusic.jpg",
                    searchtags:"GUITAR ENSEMBLE  Guitar Ensemble"
                },
                {
                    fullname:"Harmonica",
                    content:"A collective of harmonica aficionados eager to play our way into the hearts of our audience.",
                    img:"img/ccas/arts/harmonicaband.png",
                    searchtags:"  Harmonica"
                },
                {
                    fullname:"Music And Dance",
                    content:"Music and Dance (MAD) comprises modern dance and street dance.",
                    img:"img/ccas/arts/MADance.jpg",
                    searchtags:"MUSIC &amp; DANCE  Music and Dance (MAD)"
                },
                {
                    fullname:"String Ensemble",
                    content:"The Hwa Chong String Ensemble (HCSE) currently houses fifteen souls with ample love to go around.",
                    img:"img/ccas/arts/stringmusic.jpg",
                    searchtags:"STRING ENSEMBLE  String Ensemble"
                }
            ];

            var LocationPics = [{
                location: "blkD",
                data: [{
                    picture: "img/guide/blkD1.jpg",
                    title: "Block D - Hwa Chong Cafe",
                    content: "Our very own HC Cafe, assuring that you have a pleasant time dining and working with your fellow friends in an air-conditioned conducive area"
                }, {
                    picture: "img/guide/blkD2.jpg",
                    title: "Block D - Waterfall",
                    content: "This Waterfall carved one of Hwa Chong's Core Values reminding us that we have to be grateful for the source of water that we are drinking and benefitting from. Immerse yourself in the mesmerising sound of the waterfall."
                }, {
                    picture: "img/guide/blkD3.jpg",
                    title: "Block D - MACRO building VIEW",
                    content: "Majestic building that cost millions to build, just to allow students to enjoy good educational facilities {aC0n5-hAv3-FUn-ruNN1} [Part 3] - Armed with high tech facilities and tools"
                }, {
                    picture: "img/guide/blkD4.jpg",
                    title: "Block D - BIRD's EYES VIEW",
                    content: "Block D viewed from top (nope, not at 6th floor yet). Spectactular isn't it?"
                }, {
                    picture: "img/guide/blkD5.jpg",
                    title: "Block D - Canteen",
                    content: "Our very own college canteen serving you every range of food. From noodles to rice, everything is covered"
                }]
            }, {
                location: "blkA",
                data: [{
                    picture: "img/guide/blkA1.jpg",
                    title: "Block A - Hwa Chong",
                    content: "The grand building which you will seeing everyday for your flag raising and stuff. See the HC Values on the top of the building?"
                }, {
                    picture: "img/guide/blkA2.jpg",
                    title: "Block A - Common Room",
                    content: "A special room that the students have debated and earned from the school to allow students to have a place to rest between breaks and after school!"
                }, {
                    picture: "img/guide/blkA3.jpg",
                    title: "Block A - Class Benches",
                    content: "Benches for every class to put your stuff and do your work. Cherish it. {ng-K0n7akt-B3} [Part 2] Don't get it confiscated... 030..."
                }, {
                    picture: "img/guide/blkA4.jpg",
                    title: "Block A - Reading Room",
                    content: "A cold large room for people to do their self-studies (realise how many of such rooms we have???). Sometimes used for exams."
                }, {
                    picture: "img/guide/blkA5.jpg",
                    title: "Block A - Outer Plaza",
                    content: "Yup. Just another picture of the view of the outer plaza from level 3"
                }]
            }, {
                location: "blkB",
                data: [{
                    picture: "img/guide/blkB1.jpg",
                    title: "Block B - College Reception",
                    content: "A place you will go for consultations with teachers. Most staff rooms are there."
                }, {
                    picture: "img/guide/blkB2.jpg",
                    title: "Block B - Banner Drawing Area",
                    content: "A special location specifically for us to design the beautiful banners that you see everyday"
                }, {
                    picture: "img/guide/blkB3.jpg",
                    title: "Block B - Art Work",
                    content: "Beautiful art work by HC Students. Include photography as well. Walk along that corridor to immerse yourself in an artistic mood"
                }, {
                    picture: "img/guide/blkB4.jpg",
                    title: "Block B - Chinese Department",
                    content: "Chinese Department, also the place for Huang Cheng."
                }, {
                    picture: "img/guide/blkB5.jpg",
                    title: "Block B - Collections of LTs",
                    content: "Lecture Theatres. {ng-aR0UnD-HwA-cH0N9} [Part 4] A place you will be going often to listen to someone talk for 90 minutes."
                }]
            }, {
                location: "blkE",
                data: [{
                    picture: "img/guide/blkE1.jpg",
                    title: "Block E - Auditorium",
                    content: "A damn big place also for mass lectures and civics lessons. You might get to enjoy principal's dialogue also"
                }, {
                    picture: "img/guide/blkE2.jpg",
                    title: "Block E - Library",
                    content: "Great place with great books. They provide a huge array of materials - fiction and non-fiction, of many languages"
                }, {
                    picture: "img/guide/blkE3.jpg",
                    title: "Block E - Stairs",
                    content: "Don't get lost. {bU1lT-u51} [Part 1]"
                }, {
                    picture: "img/guide/blkE4.jpg",
                    title: "Block E - Wall of Fame",
                    content: "A wall containing successful Hwa Chong students. I hope to see your face there in the future"
                }]
            }];





            return {
                cca: function () {
                    return ccas;
                },
                guide: function () {
                    return LocationPics;
                }
            };

        });

})();
