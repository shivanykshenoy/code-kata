(function (angular, $) {

    'use strict';

    var ngModule = angular.module('codeKata.sampleDirectives', []);

    ngModule.directive('customHello', function ($parse) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function ($scope, element) {

                element.html('Hello! This is your template!');
            }
        };
    });

}(window.angular, window.jQuery));