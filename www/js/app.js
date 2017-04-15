
angular
  .module('hcgc-app', ['ionic', 'hcgc-app.services'])

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
        templateUrl: 'templates/tabs.html'
      })

      .state('tab.homePage', {
        url: '/',
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
      })

      .state('tab.information', {
        url: '/information',
            templateUrl: 'templates/information.html',
            controller: 'InformationCtrl'
      })

      .state('tab.activities', {
        url: '/activities',
            templateUrl: 'templates/activities.html',
            controller: 'ActivitiesCtrl'
      })

      .state('tab.login', {
        url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
      });

    $urlRouterProvider.otherwise('/');

  });
