'use strict';

var app = angular.module('jordanandshelbyApp');

app.controller('ScrollCtrl', function ($scope, $location, $anchorScroll) {
	$scope.scroll = function(id){
  	$location.hash(id);
  	$anchorScroll();
  };
});

app.controller('MainCtrl', function ($scope, $firebase, FIREBASE, $location, $anchorScroll) {
  $scope.countdown = function(){

  	return Math.abs(new Date() - Date.parse('2014-02-16 5:00 PM')) / (60*60*24*1000);
  };

  $scope.rsvpMe = function(data){
  	$firebase(FIREBASE).$child('rsvp').$add(data);
  	data.submitted = true;
  };
});


app.controller('RsvpCtrl', function ($scope, $firebase, FIREBASE) {
  $scope.rsvps = $firebase(FIREBASE).$child('rsvp');
});
