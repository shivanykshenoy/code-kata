(function () {

    'use strict';

    var module = angular.module('codeKata.FibonacciCtrl', []);

    module.controller('FibonacciCtrl', [
        '$scope',
        function ($scope) {

            $scope.fibonacciInput = 0;
            $scope.result = 0;

            $scope.$watch('fibonacciInput', function(){

            });

        }]);
}());
