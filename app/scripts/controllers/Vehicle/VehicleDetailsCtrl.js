/**
 * Created by Kishore on 12/26/2015.
 */

(function () {
    "use strict";
    angular
        .module("vehicle.controller")
        .controller("VehicleDetailsCtrl",
        VehicleDetailsCtrl);

    function VehicleDetailsCtrl($scope,productResource,$routeParams,matchmedia) {
        // $scope.filterImg=['images/img1.png','images/img2.png','images/img3.png'];
        productResource.get({ productId: $routeParams.prodId },function(data) {
            console.log($routeParams.prodId);
            $scope.car = data;
            console.log(data);
        });



    }
}());