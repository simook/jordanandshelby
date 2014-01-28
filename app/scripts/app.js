'use strict';

angular.module('jordanandshelbyApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/reservations', {
      templateUrl: 'views/rsvp.html',
      controller: 'RsvpCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
})
.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();
  });
})
.constant('FIREBASE', new Firebase('https://jordanandshelby.firebaseio.com/'));
