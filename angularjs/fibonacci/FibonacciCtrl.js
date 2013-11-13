(function () {

    'use strict';

    var module = angular.module('codeKata.FibonacciCtrl', []);

    module.controller('FibonacciCtrl', ['$scope', function ($scope) {

        $scope.fibonacciInput = 0;
        $scope.result = 0;

        $scope.$watch('fibonacciInput', function () {
            var num = parseInt($scope.fibonacciInput, 10), i, result = 0, result_1 = 0, result_2 = 0;

            if (num === 1) {
                result = 1;
            } else if (num === 2) {
                result = 2;
            } else {
                result_1 = 1;
                result_2 = 1;
                for (i = 2; i <= num; i = i + 1) {
                    result = result_1 + result_2;
                    result_2 = result_1;
                    result_1 = result;
                }
            }
            $scope.result = result;
        });

    }]);
}());
