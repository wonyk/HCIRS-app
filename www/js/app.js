angular
    .module('hcgc-app', ['ionic', 'ionic.native', 'ionic.cloud', 'firebase'])

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
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            // setup an abstract state for the tabs directive
            .state('tab', {
                url: '',
                abstract: true,
                templateUrl: 'templates/tabs.html',
                controller: 'IndexCtrl'
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
                }
            })

            .state('tab.login', {
                url: '/login',
                views: {
                    'login': {
                        templateUrl: 'templates/login.html',
                        controller: 'LoginCtrl'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');

    });
