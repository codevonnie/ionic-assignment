//angular module called calorificApp. Has dependencies injected which are ionic and my own controllers and 
  //services/factories
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
//config controls the different tab views of the app and uses stateProvider and urlRouterProvider
// sets up the various states which the app can be in.
calorificApp.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
        // setup an abstract state for the tabs directive
        .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: "templates/tabs.html"
          })
        /*each state has a state name, the url where it can be found, the location of the template html
          file for the tab and the controller used by the view*/
        .state('tab.summary', {
            url: '/summary',
            views: {
                'tab-summary': {
            templateUrl: 'templates/tab-summary.html',
            controller: 'FoodController'
                }
            }
        })
        /*each state has a state name, the url where it can be found, the location of the template html
          file for the tab and the controller used by the view*/
        .state('tab.searchfood', {
            url: '/searchfood',
            views: {
                'tab-searchfood':{
            templateUrl: 'templates/tab-searchfood.html',
            controller: 'FoodController'
                }
            }
        })
        /*each state has a state name, the url where it can be found, the location of the template html
          file for the tab and the controller used by the view*/
        .state('tab.addfood', {
            url: '/addfood',
            views: {
                'tab-addfood':{
            templateUrl: 'templates/tab-addfood.html',
            controller: 'FoodController'
                }
            }
        });
    // if none of the above states are matched, use this tab
    $urlRouterProvider.otherwise('/tab/summary');
    }
);