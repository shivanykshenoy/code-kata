(function () {
    'use strict';

    var module = angular.module('codeKata.FizzBuzzCtrl', []);

    module.controller('FizzBuzzCtrl', ['$scope', function ($scope) {

        $scope.fizzBuzzInput = 0;

        $scope.resultArray = [];

        $scope.errorMessage = '';

        $scope.$watch('fizzBuzzInput', function () {
            var i = 0, result = '',
                isLessThanMax = $scope.fizzBuzzInput <= 1000,
                isValidNumber = !isNaN($scope.fizzBuzzInput) && isFinite($scope.fizzBuzzInput);

            $scope.resultArray = [];
            $scope.errorMessage = '';

            function isDivisibleBy(n, divisor) {
                return n % divisor === 0;
            }

            if ($scope.fizzBuzzInput) {
                if (isLessThanMax && isValidNumber) {
                    for (i = 1; i <= $scope.fizzBuzzInput; i = i + 1) {
                        result = i;
                        if (isDivisibleBy(i, 3)) {
                            result = 'Fizz';
                            if (isDivisibleBy(i, 5)) {
                                result = result + 'Buzz';
                            }
                        } else if (isDivisibleBy(i, 5)) {
                            result = 'Buzz';
                        }
                        $scope.resultArray[i - 1] = result;
                    }
                } else if (!isValidNumber) {
                    $scope.errorMessage = 'Invalid Number';
                } else if (!isLessThanMax) {
                    $scope.errorMessage = 'Number too large.  Max input is 1000.';
                }
            }

        });
    }]);
}());
