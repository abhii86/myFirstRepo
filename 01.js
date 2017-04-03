
var app = angular.module("myApp", []);
var ctrl = app.controller("parentController", ["$scope", function($scope){
    $scope.name = "abhishek";
    $scope.salary = 40000;
    $scope.company = "Genpact";
}]);
var childCtrl = app.controller("childController", ["$scope", function($scope){
    $scope.name = "Satvik";
    $scope.address = "Electronic city";
    var houseAddress = "#1333 Jai Bhawani Residency";
    $scope.getHouseAddress = function(){
        $scope.house = houseAddress;
        return $scope.house;
    };
}]);