(function () {
    "use strict";

    angular
        .module("App", [])
        .controller("CheckIfToMuch", [
            "$scope",
            function ($scope) {
                $scope.inputvalue = "";
                $scope.isItToMuch = "";
                $scope.findIfItsToMuch = function () {
                    $scope.arrayOfStrings = $scope.inputvalue.split(",")
                    $scope.numberOfItems = $scope.arrayOfStrings.length
                    if($scope.inputvalue == "") {
                        $scope.isItToMuch = "Please enter data first";
                    } else {
                        if($scope.numberOfItems <= 3) {
                            $scope.isItToMuch = "Enjoy";
                        } else {
                            $scope.isItToMuch = "Too much!";
                        }
                    }
                }
            }
        ]);

})();