(function () {
    "use strict";

    angular
        .module("vehicle.controller",['matchmedia-ng'])
        .config(['matchmediaProvider', function (matchmediaProvider) {
            matchmediaProvider.rules.phone = "(min-width: 700px)";
            matchmediaProvider.rules.landscape = "(min-width: 300px)";
            matchmediaProvider.rules.desktop = "(min-width: 1500px)";
        }])
}());