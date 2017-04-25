(function () {
    angular
        .module('hcirs-app.information', [])
        .factory('Information', function () {

            var ccas = {
                infosoc: {
                    fullname: "Infocomm and Robotics Society",
                    content: "The Infocomm and Robotics Society is a place where you can create anything you wish and change the world",
                    img: "img/ccas/cns/hcirs.jpg",
                    searchtags: "HCIRS Infocomm and Robotics Society Computers Cyber"
                },
                astro: {
                    content: "Every year, we organise Astrigue Competition and Convention and with RI’s Astronomy Club and Night Under The Stars within our school",
                    fullname: "Astronomy Club",
                    img: "img/ccas/cns/astro.jpg",
                    searchtags: "ASTRONOMY CLUB",
                },
                art_club: {
                    content: "In Art Club, you are given the freedom to pursue your passion alongside others who share the same feelings as you.",
                    fullname: "Art Club",
                    img: "img/ccas/cns/art.jpg",
                    searchtags: "ART CLUB",
                },
                mindsports: {
                    fullname: "Mindsports Club",
                    content: "Do you like to constantly stimulate yourself intellectually? Mind Sports Club is the place for you!",
                    img: "img/ccas/cns/mindsports.jpg",
                    searchtags: "  Bridge / Chess / Othello"
                },
                chinesecalligraphy: {
                    fullname: "Chinese Calligraphy",
                    content: "Highly productive sessions, little time required (once/ week), clearly advantageous given the hectic JC life",
                    img: "img/ccas/cns/chicalligraphy.jpg",
                    searchtags: "CHINESE CALLIGRAPHY  Chinese Calligraphy"
                },
                chinesesociety: {
                    fullname: "Chinese Society",
                    content: "Chinese Society is one of the few CCAs in Hwa Chong with a long-standing history and a tradition of 35 years that has lasted for many batches of students.",
                    img: "img/ccas/cns/chisoc.jpg",
                    searchtags: "CHINESE SOCIETY  Chinese Society"
                },
                cipcouncil: {
                    content: "The CIP Council is a group of eight unique individuals who are deeply passionate about serving the community and dedicated to inculcating a culture of giving in Hwa Chong.",
                    fullname: "CIP Council",
                    img: "img/ccas/cns/cipcouncil.jpg",
                    searchtags: "CIP COUNCIL",
                },
                elddfs: {
                    fullname: "ELDDFS",
                    content: "ELDDFS operates as four wings (Literature, Drama, Debate and Film), with each wing holding one session per week (and Debate Wing holding two)",
                    img: "img/ccas/cns/elddfs.png",
                    searchtags: "ELDDFS  ELDDFS"
                },
                firstaid: {
                    fullname: "First Aid Club",
                    content: "Hwa Chong’s First Aid Club organises annual blood donation drive, takes part in First Aid Competitions and serves the school",
                    img: "img/ccas/cns/firstaid.jpg",
                    searchtags: "  First Aid"
                },
                hacas: {
                    fullname: "HACAS",
                    content: "HUMANITIES&nbsp;AND CURRENT AFFAIRS SOCIETY",
                    img: "img/ccas/cns/hacas.png",
                    searchtags: "  HACAS"
                },
                interact: {
                    fullname: "Interact",
                    content: "Hwa Chong Interact is where you can serve, bond, lead and organize purposeful events",
                    img: "img/ccas/cns/interact.png",
                    searchtags: "INTERACT  Interact"
                },
                icc: {
                    fullname: "International Cultural Club",
                    content: "INTERNATIONAL CULTURAL CLUB",
                    img: "img/ccas/cns/intcultureclub.jpg",
                    searchtags: "  Japanese Cultural Club"
                },
                library: {
                    fullname: "Library Club",
                    content: "We maintain Jing Xian Library in the top possible quality for the benefit of the entire school community, teachers, students and staff alike.",
                    img: "img/ccas/cns/library.jpg",
                    searchtags: "LIBRARY CLUB  Library Club"
                },
                paava: {
                    fullname: "PA / AVA",
                    content: "We supply complete, up-to-date equipment and manage shows with our expertise.",
                    img: "img/ccas/cns/PA.png",
                    searchtags: "PA / AVA  PA / AVA"
                },
                photographic: {
                    fullname: "Photographic Society",
                    content: "Hwa Chong Photographic Society is a club that aims to develop its members in the field of photography, while cultivating a love and appreciation for the subject.",
                    img: "img/ccas/cns/photo.jpg",
                    searchtags: "PHOTOGRAPHIC SOCIETY  Photographic Society"
                },
                sensoriumvale: {
                    fullname: "Sensorium Vale",
                    content: "Sensorium Vale is basically Hwa Chong’s very own Film and Media Society! We film and record school events and initiate various video projects on our own.",
                    img: "img/ccas/cns/sv.jpg",
                    searchtags: "  Sensorium Vale "
                },
                lawsociety: {
                    fullname: "Law Society",
                    content: "We treat our members to engaging and fun-filled activities like dialogue sessions with experienced lawyers.",
                    img: "img/ccas/cns/lawsoc.png",
                    searchtags: "LAW SOCIETY  Law Society"
                },
                studentcouncil: {
                    fullname: "Students' Council",
                    content: "Hi! We are the 42nd&nbsp;Hwa Chong Students' Council, comprising 50 passionate students dedicated to serving the school!",
                    img: "img/ccas/cns/sc.png",
                    searchtags: "STUDENTS' COUNCIL  Students' Council"
                },
                ssrc: {
                    fullname: "SSRC",
                    content: "The Science Students' Research Council (SSRC) is an association of students who are passionate about science research.",
                    img: "img/ccas/cns/ssrc.png",
                    searchtags: "  SSRC"
                },
                greencouncil: {
                    fullname: "Green Council",
                    content: "TThe Hwa Chong Green Council is a young, yet tightly-knitted and forward-looking community dedicated to transforming Hwa Chong into a more environmentally conscious place.",
                    img: "img/ccas/cns/green.jpg",
                    searchtags: "GREEN COUNCIL  Green Council"
                },
                snec: {
                    fullname: "SNEC",
                    content: "The Students’ National Education Council is a student-led council in Hwa Chong Institution (College).",
                    img: "img/ccas/cns/snec.png",
                    searchtags: "SNEC  SNEC"
                },
                oesc: {
                    fullname: "OESC",
                    content: "The Outdoor Education Student Committee is made up of like-minded, adventure-craving guys and girls.",
                    img: "img/ccas/cns/oesc.png",
                    searchtags: "  OESC"
                },
                badminton: {
                    fullname: "Badminton",
                    content: "Badminton is an indoor racquet sport played by either two opposing players (singles) or two opposing pairs (doubles), popular among people of all ages.",
                    img: "img/ccas/sports/badminton.jpg",
                    searchtags: "BADMINTON  Badminton"
                },
                basketball: {
                    fullname: "Basketball",
                    content: "Basketball is a team sport played by two teams of five players.",
                    img: "img/ccas/sports/basketball.jpg",
                    searchtags: "  Basketball "
                },
                canoeing: {
                    fullname: "Canoeing",
                    content: "HCanoe is a dedicated and passionate team. In HCanoe, we don’t only aim for excellence in our sport but also growth as a person.",
                    img: "img/ccas/sports/canoeing.jpg",
                    searchtags: "CANOEING  Canoeing"
                },
                crosscountry: {
                    fullname: "Cross Country",
                    content: "No doubt, Cross-Country trainings are difficult and tough, but it is what makes us better.",
                    img: "img/ccas/sports/crosscountry.png",
                    searchtags: "CROSS COUNTRY  Cross Country"
                },
                fencing: {
                    fullname: "Fencing",
                    content: "Founded in 2007, the Hwa Chong Fencing Team has seen hundreds of fencers develop a passion for fencing.",
                    img: "img/ccas/sports/fencing.jpg",
                    searchtags: "FENCING  Fencing"
                },
                floorball: {
                    fullname: "Floorball",
                    content: "Floorball is a fun and fast-paced sport played indoors with floorball sticks and a ball.",
                    img: "img/ccas/sports/floorball.png",
                    searchtags: "FLOORBALL  Floorball"
                },
                gymnastics: {
                    fullname: "Gymnastics",
                    content: "The Gymnastics CCA in College mainly focuses on the Trampoline section, instead of the Artistic or Rhythmic forms.",
                    img: "img/ccas/sports/gym.png",
                    searchtags: "GYMNASTICS  Gymnastics"
                },
                shooting: {
                    fullname: "Shooting",
                    content: "Hwa Chong has been a traditional powerhouse in the field of shooting.",
                    img: "img/ccas/sports/shooting.jpg",
                    searchtags: "SHOOTING  Shooting"
                },
                judo: {
                    fullname: "Judo",
                    content: "Japanese for \"the gentle way\", Judo is a traditional martial art which involves throwing or pinning an opponent to score points.",
                    img: "img/ccas/sports/judo.jpg",
                    searchtags: "JUDO  Judo"
                },
                netball: {
                    fullname: "Netball",
                    content: "In Hwachong Netball, we have a team of friendly, disciplined and dedicated girls.",
                    img: "img/ccas/sports/netball.jpeg",
                    searchtags: "NETBALL  Netball"
                },
                soccergirls: {
                    fullname: "Soccer (Girls)",
                    content: "Always wanted to join a sports CCA that will forge life-long bonds, camaraderie and have a CCA experience you’ll never regret in your JC life?",
                    img: "img/ccas/sports/soccerfemale.jpg",
                    searchtags: "SOCCER (GIRLS)  Soccer (Girls)"
                },
                softball: {
                    fullname: "Softball",
                    content: "Hwa Chong Softball (HCSB) is a CCA rich in history, culture and achievement.",
                    img: "img/ccas/sports/softball.jpg",
                    searchtags: "SOFTBALL  Softball"
                },
                squash: {
                    fullname: "Squash",
                    content: "The team is relatively small and we warmly welcome newcomers to join our team! :)",
                    img: "img/ccas/sports/squash.png",
                    searchtags: "SQUASH  Squash"
                },
                swimming: {
                    fullname: "Swimming and Waterpolo",
                    content: "The Hwa Chong Waterpolo team it is a tightly knit family with seniors and juniors going through thick and thin together whilst having fun, forging stronger friendships in and out of the pool.",
                    img: "img/ccas/sports/swim.jpg",
                    searchtags: "  Swimming and Waterpolo"
                },
                tabletennis: {
                    fullname: "Table Tennis",
                    content: "Being a tight and closely-knitted team going through thick and thin together, we will definitely welcome you with open hearts!",
                    img: "img/ccas/sports/tabletennis.png",
                    searchtags: "TABLE TENNIS  Table-Tennis"
                },
                taekwondo: {
                    fullname: "Taekwondo",
                    content: "TKD is by far one of the most popular modern arts in the world, and is characterized by its fast, high and spinning kicks.",
                    img: "img/ccas/sports/taekwondo.jpg",
                    searchtags: "TAEKWONDO  Taekwondo"
                },
                tennis: {
                    fullname: "Tennis",
                    content: "Tennis is the one for you. You will improve your stamina and speed with our intensive drills, as well as refine your skills by playing matches!",
                    img: "img/ccas/sports/tennis.jpg",
                    searchtags: "TENNIS  Tennis"
                },
                rugby: {
                    fullname: "Touch Rugby",
                    content: "Touch Rugby is a 6 vs 6 sport played between two teams on a field.",
                    img: "img/ccas/sports/touchrugby.jpg",
                    searchtags: "TOUCH RUGBY  Touch Rugby"
                },
                trackandfield: {
                    fullname: "Track and Field",
                    content: "Track and Field is not a sport for the faint-hearted. It demands a high level of commitment, passion and determination.",
                    img: "img/ccas/sports/track.png",
                    searchtags: "  Track and Field"
                },
                frisbee: {
                    fullname: "Ultimate Frisbee",
                    content: "Ultimate Frisbee is a non-contact sport played between 2 teams of 7 players on a large rectangular pitch.",
                    img: "img/ccas/sports/ultimate.png",
                    searchtags: "ULTIMATE FRISBEE  Ultimate Frisbee"
                },
                volleyball: {
                    fullname: "Volleyball",
                    content: "Volleyball is a competitve sports CCA that participates in annually-held national volleyball competitions",
                    img: "img/ccas/sports/volleyball.png",
                    searchtags: "VOLLEYBALL  Volleyball"
                },
                wushu: {
                    fullname: "Wushu",
                    content: "WUSHU AND LION DANCE",
                    img: "img/ccas/sports/wushu.png",
                    searchtags: "  Wushu"
                },
                tchoukball: {
                    fullname: "Tchoukball",
                    content: "Pass. Catch. Shoot. These individual actions define and characterise Tchoukball.",
                    img: "img/ccas/sports/tchoukball.jpg",
                    searchtags: "TCHOUKBALL  Tchoukball"
                },
                chinesedance: {
                    fullname: "Chinese Dance",
                    content: "Hwa Chong Chinese Dance (HCCD) consists of talented dancers with a strong passion for dance.",
                    img: "img/ccas/arts/chinesedance.jpg",
                    searchtags: "CHINESE DANCE  Chinese Dance"
                },
                chineseorchestra: {
                    fullname: "Chinese Orchestra",
                    content: "The Hwa Chong Chinese Orchestra(HCCO) was founded in 1974 and is currently under the baton of Dr. Wei Yanming, teacher-conductor, and Mr. Lum Yan Sing, advisor-cum-instructor.",
                    img: "img/ccas/arts/chinesemusic.png",
                    searchtags: "CHINESE ORCHESTRA  Chinese Orchestra"
                },
                choir: {
                    fullname: "Choir",
                    content: "What is the best word to describe rioHC? Family.",
                    img: "img/ccas/arts/choir.jpg",
                    searchtags: "CHOIR  Choir"
                },
                concertband: {
                    fullname: "Concert Band",
                    content: "The Hwa Chong Symphonic Band (also known as HCBand) began humbly as a small military band in 1974 and has since then flourished into the full symphonic band they are today.",
                    img: "img/ccas/arts/concertband.jpg",
                    searchtags: "CONCERT BAND  Concert Band"
                },
                guitarensemble: {
                    fullname: "Guitar Ensemble",
                    content: "Hwa Chong Guitar Ensemble (HCGE) is a family of musicians with both passion and aptitude for guitar.",
                    img: "img/ccas/arts/guitarmusic.jpg",
                    searchtags: "GUITAR ENSEMBLE  Guitar Ensemble"
                },
                harmonica: {
                    fullname: "Harmonica",
                    content: "A collective of harmonica aficionados eager to play our way into the hearts of our audience.",
                    img: "img/ccas/arts/harmonicaband.png",
                    searchtags: "  Harmonica"
                },
                mad: {
                    fullname: "Music And Dance",
                    content: "Music and Dance (MAD) comprises modern dance and street dance.",
                    img: "img/ccas/arts/MADance.jpg",
                    searchtags: "MUSIC &amp; DANCE  Music and Dance (MAD)"
                },
                stringensemble: {
                    fullname: "String Ensemble",
                    content: "The Hwa Chong String Ensemble (HCSE) currently houses fifteen souls with ample love to go around.",
                    img: "img/ccas/arts/stringmusic.jpg",
                    searchtags: "STRING ENSEMBLE  String Ensemble"
                }
            };



            return {
                cca: function () {
                    return ccas;
                }
            };

        });

})();
