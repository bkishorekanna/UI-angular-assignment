/**
 * Created by Kishore on 12/26/2015.
 */
(function () {
    "use strict";

    var app = angular
                .module("productResourceMock",
                        ["ngMockE2E"]);

    app.run(function ($httpBackend) {
        var products = [{

            "vehicleId": 1,
            "vehicleType": "SUV",
            "srNo": "FLT32541",
            "fuelLevel": "10",
            "distance": "100Km",
            "serviceDue": "100days",
            "gpsId": "Garden Cart",
            "vehicleOwner": "jose",
            "noOfDrivers": 5,
            "chrgPerHr": 10,
            "parkGarage": "Lincoln Street",
            "sapId": "SUV1589",
            "legacyId": "45879",
            "make": "Ford",
            "Transmission": "Manual",
            "platNo": "USH5124",
            "lastTrip": "100Km",
            "fuelCost": "$50pg",
            "laborCost": "$20/hr",
            "model": "Ecosport",
            "year": 2014,
            "lastRpt": "Brodaway",
            "odometer": "150000Kms",
            "oilLevel": "Green",
            "tirePressureLevel": "yellow",
            "idealHrs": "120hrs",
            "renewal": 2018,
            "imgUrl": "images/vehicle/car1.png"
        }, {

            "vehicleId": 2,
            "vehicleType": "Sedan",
            "srNo": "FLT18723",
            "fuelLevel": "10",
            "distance": "100Km",
            "serviceDue": "100days",
            "gpsId": "Garden Cart",
            "vehicleOwner": "jose",
            "noOfDrivers": 5,
            "chrgPerHr": 10,
            "parkGarage": "Lincoln Street",
            "sapId": "SUV1589",
            "legacyId": "45879",
            "make": "Ford",
            "Transmission": "Manual",
            "platNo": "USH5124",
            "lastTrip": "100Km",
            "fuelCost": "$50pg",
            "laborCost": "$20/hr",
            "model": "Ecosport",
            "year": 2014,
            "lastRpt": "Brodaway",
            "odometer": "150000Kms",
            "oilLevel": "Green",
            "tirePressureLevel": "yellow",
            "idealHrs": "120hrs",
            "renewal": 2018,
             "imgUrl": "images/vehicle/car2.png"
        }, {

            "vehicleId": 3,
            "vehicleType": "Coupe",
            "srNo": "FLT32541",
            "fuelLevel": "10",
            "distance": "100Km",
            "serviceDue": "100days",
            "gpsId": "Garden Cart",
            "vehicleOwner": "jose",
            "noOfDrivers": 5,
            "chrgPerHr": 10,
            "parkGarage": "Lincoln Street",
            "sapId": "SUV1589",
            "legacyId": "45879",
            "make": "Ford",
            "Transmission": "Manual",
            "platNo": "USH5124",
            "lastTrip": "100Km",
            "fuelCost": "$50pg",
            "laborCost": "$20/hr",
            "model": "Ecosport",
            "year": 2014,
            "lastRpt": "Brodaway",
            "odometer": "150000Kms",
            "oilLevel": "Green",
            "tirePressureLevel": "yellow",
            "idealHrs": "120hrs",
            "renewal": 2018,
            "imgUrl": "images/vehicle/car3.png"
        }, {

            "vehicleId": 4,
            "serviceDue": "100days",
            "srNo": "FLT28756",
            "fuelLevel": "10",
            "distance": "100Km",
            "vehicleType": "EV",
            "gpsId": "Garden Cart",
            "vehicleOwner": "jose",
            "noOfDrivers": 5,
            "chrgPerHr": 10,
            "parkGarage": "Lincoln Street",
            "sapId": "SUV1589",
            "legacyId": "45879",
            "make": "Ford",
            "Transmission": "Manual",
            "platNo": "USH5124",
            "lastTrip": "100Km",
            "fuelCost": "$50pg",
            "laborCost": "$20/hr",
            "model": "Ecosport",
            "year": 2014,
            "lastRpt": "Brodaway",
            "odometer": "150000Kms",
            "oilLevel": "Green",
            "tirePressureLevel": "yellow",
            "idealHrs": "120hrs",
            "renewal": 2018,
            "imgUrl": "images/vehicle/car4.png"
        }, {

            "vehicleId": 5,
            "vehicleType": "SUV",
            "srNo": "FLT38524",
            "fuelLevel": "10",
            "distance": "100Km",
            "serviceDue": "100days",
            "gpsId": "Garden Cart",
            "vehicleOwner": "jose",
            "noOfDrivers": 5,
            "chrgPerHr": 10,
            "parkGarage": "Lincoln Street",
            "sapId": "SUV1589",
            "legacyId": "45879",
            "make": "Ford",
            "Transmission": "Manual",
            "platNo": "USH5124",
            "lastTrip": "100Km",
            "fuelCost": "$50pg",
            "laborCost": "$20/hr",
            "model": "Ecosport",
            "year": 2014,
            "lastRpt": "Brodaway",
            "odometer": "150000Kms",
            "oilLevel": "Green",
            "tirePressureLevel": "yellow",
            "idealHrs": "120hrs",
            "renewal": 2018,
             "imgUrl": "images/vehicle/car5.png"
        }, {

            "vehicleId": 6,
            "vehicleType": "TRUCK",
            "srNo": "FLT48733",
            "fuelLevel": "10",
            "distance": "100Km",
            "serviceDue": "100days",
            "gpsId": "Garden Cart",
            "vehicleOwner": "jose",
            "noOfDrivers": 5,
            "chrgPerHr": 10,
            "parkGarage": "Lincoln Street",
            "sapId": "SUV1589",
            "legacyId": "45879",
            "make": "Ford",
            "Transmission": "Manual",
            "platNo": "USH5124",
            "lastTrip": "100Km",
            "fuelCost": "$50pg",
            "laborCost": "$20/hr",
            "model": "Ecosport",
            "year": 2014,
            "lastRpt": "Brodaway",
            "odometer": "150000Kms",
            "oilLevel": "Green",
            "tirePressureLevel": "yellow",
            "idealHrs": "120hrs",
            "renewal": 2018,
            "imgUrl": "images/vehicle/car6.png"
        }, {

            "vehicleId": 7,
            "vehicleType": "Sports",
            "srNo": "FLT98755",
            "fuelLevel": "10",
            "distance": "100Km",
            "serviceDue": "100days",
            "gpsId": "Garden Cart",
            "vehicleOwner": "jose",
            "noOfDrivers": 5,
            "chrgPerHr": 10,
            "parkGarage": "Lincoln Street",
            "sapId": "SUV1589",
            "legacyId": "45879",
            "make": "Ford",
            "Transmission": "Manual",
            "platNo": "USH5124",
            "lastTrip": "100Km",
            "fuelCost": "$50pg",
            "laborCost": "$20/hr",
            "model": "Ecosport",
            "year": 2014,
            "lastRpt": "Brodaway",
            "odometer": "150000Kms",
            "oilLevel": "Green",
            "tirePressureLevel": "yellow",
            "idealHrs": "120hrs",
            "renewal": 2018,
            "imgUrl": "images/vehicle/car7.png"
        }, {

            "vehicleId": 8,
            "vehicleType": "SUV",
            "srNo": "FLT78774",
            "fuelLevel": "10",
            "distance": "100Km",
            "serviceDue": "100days",
            "gpsId": "Garden Cart",
            "vehicleOwner": "jose",
            "noOfDrivers": 5,
            "chrgPerHr": 10,
            "parkGarage": "Lincoln Street",
            "sapId": "SUV1589",
            "legacyId": "45879",
            "make": "Ford",
            "Transmission": "Manual",
            "platNo": "USH5124",
            "lastTrip": "100Km",
            "fuelCost": "$50pg",
            "laborCost": "$20/hr",
            "model": "Ecosport",
            "year": 2014,
            "lastRpt": "Brodaway",
            "odometer": "150000Kms",
            "oilLevel": "Green",
            "tirePressureLevel": "yellow",
            "idealHrs": "120hrs",
            "renewal": 2018,
            "imgUrl": "images/vehicle/car8.png"
        }];

        var productUrl = "/api/products"

        $httpBackend.whenGET(productUrl).respond(products);

        var editingRegex = new RegExp(productUrl + "/[A-Z0-9][A-Z0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
            var product = {"productId": 0};
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];
            console.log(id);
            if (id != null || id != undefined) {
                for (var i = 0; i < products.length; i++) {
                    if (products[i].srNo == id) {
                        product = products[i];
                        break;
                    }
                };
            }
            return [200, product, {}];
        });

        $httpBackend.whenPOST(productUrl).respond(function (method, url, data) {
            var product = angular.fromJson(data);

            if (!product.productId) {
                // new product Id
                product.productId = products[products.length - 1].productId + 1;
                products.push(product);
            }
            else {
                // Updated product
                for (var i = 0; i < products.length; i++) {
                    if (products[i].productId == product.productId) {
                        products[i] = product;
                        break;
                    }
                };
            }
            return [200, product, {}];
        });

        // Pass through any requests for application files
        $httpBackend.whenGET('views/Vehicle/VehicleGridView.html').passThrough();
        $httpBackend.whenGET('views/Vehicle/VehicleDetailsView.html').passThrough();
        $httpBackend.whenGET('/app/').passThrough();

    })
}());
