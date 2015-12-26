/**
 * Created by Kishore on 12/26/2015.
 */

(function () {
    "use strict";
    angular
        .module("vehicle.controller")
        .controller("VehicleGridCtrl",
        VehicleGridCtrl);

    function VehicleGridCtrl($rootScope,$scope,$filter,productResource,$location,matchmedia) {
        $scope.filterImg=[
            {url:'images/img1.png',vehicleType:'Sports'},
            {url:'images/img2.png',vehicleType:'sedan'},
            {url:'images/img3.png',vehicleType:'coupe'}
        ];


        $scope.head={
            imageUrl : "Asset",
            srNo: "Serial No",
            vehicleType: "Vehicle Type",
            fuelLevel: "Fuel Level",
            distance: "Distance"
        }

        $scope.vehicleType="";

        productResource.query(function(data) {

            $scope.cars = data;

            // functions have been describe process the data for display
            $scope.search();

        });


        $scope.getDetails= function(prodId){
            console.log(prodId);
            $location.path('/app/detail/'+prodId);

        }


        $scope.setFilter=function(val){
            $scope.vehicleType=val;
            $scope.search();
        };

        $rootScope.isPhone= matchmedia.isPhone();
        $rootScope.isPortrait = matchmedia.isLandscape();

        matchmedia.onPhone( function(mediaQueryList){
            $rootScope.isPhone = mediaQueryList.matches;
        });

        matchmedia.onDesktop( function(mediaQueryList){
            $rootScope.isPhone = !mediaQueryList.matches;
        });



        $scope.sortingOrder = '';
        $scope.reverse = false;
        $scope.filteredItems = [];
        $scope.groupedItems = [];
        $scope.itemsPerPage = 5;
        $scope.pagedItems = [];
        $scope.currentPage = 0;

        $scope.groupToPages = function () {
            $scope.pagedItems = [];

            for (var i = 0; i < $scope.filteredItems.length; i++) {
                if (i % $scope.itemsPerPage === 0) {
                    $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.filteredItems[i] ];
                } else {
                    $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
                }
            }
        };

        $scope.range = function (start, end) {
            var ret = [];
            if (!end) {
                end = start;
                start = 0;
            }
            for (var i = start; i < end; i++) {
                ret.push(i);
            }
            return ret;
        };

        $scope.prevPage = function () {
            if ($scope.currentPage > 0) {
                $scope.currentPage--;
            }
        };

        $scope.nextPage = function () {
            if ($scope.currentPage < $scope.pagedItems.length - 1) {
                $scope.currentPage++;
            }
        };

        $scope.setPage = function () {
            $scope.currentPage = this.n;
        };

        // change sorting order
        $scope.sort_by = function(newSortingOrder) {
            if ($scope.sortingOrder == newSortingOrder)
                $scope.reverse = !$scope.reverse;

            $scope.sortingOrder = newSortingOrder;

            // icon setup
            $('th i').each(function(){
                // icon reset
                $(this).removeClass().addClass('icon-sort');
            });
            if ($scope.reverse)
                $('th.'+newSortingOrder+' i').removeClass().addClass('icon-chevron-up');
            else
                $('th.'+newSortingOrder+' i').removeClass().addClass('icon-chevron-down');
        };

        var searchMatch = function (haystack, needle) {

            if (!needle) {
                return true;
            }
            return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
        };

        // init the filtered items
        $scope.search = function () {
            $scope.filteredItems = $filter('filter')($scope.cars, function (item) {


                    if (searchMatch(item['vehicleType'], $scope.vehicleType))
                        return true;

                return false;
            });
            // take care of the sorting order
            if ($scope.sortingOrder !== '') {
                $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sortingOrder, $scope.reverse);
            }
            $scope.currentPage = 0;
            // now group by pages
            $scope.groupToPages();
        };



    }
}());
