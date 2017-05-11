angular
    .module('hcirs-app', ['ionic', 'ionic.native', 'ionic.cloud', 'firebase', 'hcirs-app.information', 'hcirs-app.game-levels', 'hcirs-app.answers'])

    .config(function ($ionicCloudProvider) {
        $ionicCloudProvider.init({
            "core": {
                "app_id": "d11cd6b3"
            }
        });
    })
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.overlaysWebView(false);
                StatusBar.backgroundColorByHexString('#3b6cbe');
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            // setup an abstract state for the tabs directive
            // Index.js reserved for something else..
            .state('tab', {
                url: '',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            .state('tab.homePage', {
                url: '/',
                views: {
                    'homePage': {
                        templateUrl: 'templates/home.html',
                        controller: 'HomeCtrl'
                    }
                }
            })

            .state('tab.settings', {
                url: '/settings',
                views: {
                    'settings': {
                        templateUrl: 'templates/settings.html',
                        controller: 'settingsCtrl'
                    }
                }
            })

            .state('tab.activities', {
                url: '/activities',
                views: {
                    'activities': {
                        templateUrl: 'templates/activities.html',
                        controller: 'ActivitiesCtrl'
                    }
                },
                resolve: {
                    Level: function (Levels) {
                        return Levels.all();
                    },
                    Answer: function (Answers) {
                        return Answers.everything();
                    },
                    currentAuth: function ($firebaseAuth) {
                        return $firebaseAuth().$requireSignIn();
                    },
                    Internet: function ($cordovaNetwork, $ionicPopup, $state, $location) {
                        $cordovaNetwork.onDisconnect().subscribe(function () {
                            $ionicPopup.alert({
                                title: 'No Network',
                                template: 'You ain\'t playing the game without internet'
                            }).then(function () {
                                $state.go('^.homePage');
                            });
                        });
                        
                        if ($cordovaNetwork.type == 'none') {
                            $ionicPopup.alert({
                                title: 'No Network',
                                template: 'You ain\'t playing the game without internet'
                            }).then(function () {
                                $state.go('^.homePage');
                            });
                        }
                    }
                }
            })

            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })

            .state('schedule', {
                url: '/schedule',
                templateUrl: 'templates/schedule.html'
            })

            .state('info-tab', {
                url: '/information',
                templateUrl: 'templates/information-tab.html'
            })

            .state('info-tab.main', {
                url: '/main',
                views: {
                    'main': {
                        templateUrl: 'templates/main.html'
                    }
                }
            })

            .state('info-tab.faculty', {
                url: '/faculty',
                views: {
                    'faculty': {
                        templateUrl: 'templates/faculty.html',
                        controller: 'FacCtrl'
                    }
                }
            })

            .state('info-tab.cca', {
                url: '/cca',
                views: {
                    'cca': {
                        templateUrl: 'templates/cca.html',
                        controller: 'ccaCtrl'
                    }
                }
            })

            .state('maps', {
                url: '/map',
                templateUrl: 'templates/map.html',
                controller: 'mapCtrl' //in misc
            })

            .state('guide', {
                url: '/guide',
                templateUrl: 'templates/guide.html',
                controller: 'guideCtrl' //in misc
            })

            .state('credits', {
                url: '/about',
                templateUrl: 'templates/about.html'
            })

            .state('instructions', {
                url: '/instructions',
                templateUrl: 'templates/help.html'
            });

        $urlRouterProvider.otherwise('/');

    });
