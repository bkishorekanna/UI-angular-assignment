'use strict';

/**
 * @ngdoc overview
 * @name swFrontApp
 * @description
 * # swFrontApp
 *
 * Main module of the application.
 */
angular
    .module('swFrontApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'common.services',
        'productResourceMock',
        'vehicle.controller'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/app/', {
                templateUrl: 'views/Vehicle/VehicleGridView.html',
                controller: 'VehicleGridCtrl'
            })
            .when('/app/detail/:prodId', {
                templateUrl: 'views/Vehicle/VehicleDetailsView.html',
                controller: 'VehicleDetailsCtrl'
            })
            .otherwise({
                redirectTo: '/app/'
            });
    });
