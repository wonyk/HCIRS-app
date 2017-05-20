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
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
                if (ionic.Platform.isAndroid()) {
                    var permissions = cordova.plugins.permissions;
                    permissions.checkPermission(permissions.ACCESS_COARSE_LOCATION, function (status) {
                        if (status.hasPermission == false) {
                            permissions.requestPermission(permissions.ACCESS_COARSE_LOCATION);
                        }
                    });
                }
            }
            if (window.StatusBar) {
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
                controller: 'guideCtrl'
            })

            .state('credits', {
                url: '/about',
                templateUrl: 'templates/about.html'
            })

            .state('instructions', {
                url: '/instructions',
                templateUrl: 'templates/help.html'
            })

            .state('network', {
                url: '/network',
                templateUrl: 'templates/network.html'
            })

            .state('leaderboard', {
                url: '/ranking',
                templateUrl: 'templates/ranking.html',
                controller: 'rankCtrl'
            });

        $urlRouterProvider.otherwise('/');

    });
