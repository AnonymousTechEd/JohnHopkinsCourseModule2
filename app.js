(function () {
    "use strict";

    angular
        .module("App", [])
        .controller("ApController", appController);
        
        appController.$inject = ["$scope", "$filter"]



        function appController($scope, $filter) {
            $scope.inputvalue = "";
            $scope.response = "";
            $scope.cookieCost = .45;
            
            $scope.InputButton = function () {
                var msg =  "Yes"
                $scope.response = $filter("uppercase")(msg)
            }
        }






})();