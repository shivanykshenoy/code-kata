(function () {

    'use strict';

    var module = angular.module('codeKata.SampleCtrl', []);

    module.controller('SampleCtrl', [
        '$scope', 'SampleData',
        function ($scope, SampleData) {

            $scope.name = "This is a sample controller!";
            $scope.data = SampleData.all();

        }]);
}());