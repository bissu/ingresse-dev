'use strict';

angular.module('ingresse-devApp', ['ngResource', 'ngDisqus'])

	.config(function ($disqusProvider, $routeProvider, $locationProvider) {

		$disqusProvider.setShortname('ingresse');
		$locationProvider.html5Mode(true).hashPrefix('!');

		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/references', {
			  templateUrl: 'views/references.html',
			})
			.when('/references/:category', {
			  templateUrl: 'views/references.html',
			})
			.when('/references/:category/:method', {
			  templateUrl: 'views/references.html',
			})
			.otherwise({
				redirectTo: '/'
			});
	})

	.run(function ($rootScope, $route, $routeParams, $location) {
		$rootScope.url = '/';
		$rootScope.location = $location;
	});
