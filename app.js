(function () {
    "use strict";

    angular
        .module("App", [])
        .controller("ApController", appController)
        .filter("Replace", replaceFilter)
        
        appController.$inject = ["$scope", "$filter", "ReplaceFilter"];



        function appController($scope, $filter, ReplaceFilter) {
            $scope.inputvalue = "";
            $scope.inputvalue2 = "";
            $scope.response = "Eduard is dumb";
            $scope.InputButton = function () {
                $scope.response = ReplaceFilter($scope.response, $scope.inputvalue, $scope.inputvalue2)
            }
        }

        function replaceFilter() {
            return function (input, a, b) {
                input = input || "";
                input = input.replace(a, b)
                return input
            }
        }





})();