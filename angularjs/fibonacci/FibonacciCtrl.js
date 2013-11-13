(function () {

    'use strict';

    var module = angular.module('codeKata.FibonacciCtrl', []);

    module.controller('FibonacciCtrl', ['$scope', function ($scope) {

        $scope.fibonacciInput = 0;
        $scope.result = 0;

        $scope.$watch('fibonacciInput', function () {
            var num = parseInt($scope.fibonacciInput, 10), i, result = 0, result_1 = 0, result_2 = 0;

            if (num < 0 || Number.isNaN(num)) {
                result = "Invalid entry";
            } else if (num <= 2) {
                result = num;
            } else {
                result_1 = 1;
                result_2 = 1;
                for (i = 2; i <= num; i = i + 1) {

                    if (result <= Number.MAX_VALUE) {
                        result = result_1 + result_2;
                        result_2 = result_1;
                        result_1 = result;
                    } else {
                        //if the result hits the max value for a number
                        //record it as Not a number;
                        result = "Number too large";
                    }

                }

            }
            $scope.result = result;
        });
    }]);
}());
