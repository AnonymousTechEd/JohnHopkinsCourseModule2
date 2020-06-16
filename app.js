(function () {
    "use strict";
    
    angular
        .module("App", [])
        .controller("ApController", appController)
        .filter("Replace", replaceFilter)
        
        appController.$inject = ["$scope", "$filter", "ReplaceFilter"];



        function appController($scope, $filter, ReplaceFilter) {
            $scope.inputvalue = "";
            $scope.array = ["Avocado", "Apple", "Cake Batter", "Bannana", "Pinapple","Pencil","Pen","Crayon"]
            $scope.search = ""
            $scope.InputButton = function () {
                $scope.search =  $scope.inputvalue
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