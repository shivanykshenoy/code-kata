(function () {

    'use strict';

    var module = angular.module('codeKata.HomeCtrl', []);

    module.controller('HomeCtrl', ['$scope', function ($scope) {
        $scope.problems = [
            {name: 'sample', display: 'Blog Feed', desc: 'Access the google blog feed, https://ajax.googleapis.com/ajax/services/feed/find?v=1.0&q=Official%23Google%23Blogs, via a JSONP request and display the results, add a filter to search for a specific item from the result set.'},
            {name: 'fibonacci', display: 'Fibonacci Numbers', desc: 'Calculate f(n) where n is 1...n and f(n) represents the next number in the fibonnaci series.'},
            {name: 'fizzBuzz', display: 'Fizz Buzz', desc: '"Write a function that prints the numbers from 1 to (n). But for multiples of 3 print \'Fizz\' instead of the number and for the multiples of 5 print \'Buzz\'. For numbers which are multiples of both three and five print\'FizzBuzz\'.'},
            {name: 'phrase', display: 'Integer to English', desc: 'Given an Integer, convert it to an English phrase that describes the supplied Integer, for exampl 1250 - One thousand two hundred fifty.'}

        ];
    }]);
}());