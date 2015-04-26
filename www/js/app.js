var calorificApp = angular.module('calorificApp', ['ionic', 'calorificApp.controllers', 'calorificApp.services']);

calorificApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

calorificApp.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider

        .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: "templates/tabs.html"
          })

        .state('tab.summary', {
            url: '/summary',
            views: {
                'tab-summary': {
            templateUrl: 'templates/tab-summary.html',
            controller: 'FoodController'
                }
            }
        })

        .state('tab.searchfood', {
            url: '/searchfood',
            views: {
                'tab-searchfood':{
            templateUrl: 'templates/tab-searchfood.html',
            controller: 'FoodController'
                }
            }
        })

        .state('tab.addfood', {
            url: '/addfood',
            views: {
                'tab-addfood':{
            templateUrl: 'templates/tab-addfood.html',
            controller: 'FoodController'
                }
            }
        });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/summary');
    }
);