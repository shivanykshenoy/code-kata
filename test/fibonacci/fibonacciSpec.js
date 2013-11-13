(function () {

    'use strict';

    beforeEach(module('codeKata.FibonacciCtrl'));

    describe('FibonnaciCtrl', function () {
        var instance, scope;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            instance = $controller("FibonacciCtrl", {
                $scope: scope
            });
        }));

        it("should have app.js setup - FibonnaciCtrl defined", function () {
            expect(instance).toBeDefined();
        });

        it("f(0) should return 0", function () {
            scope.fibonacciInput = 0;
            scope.$apply();
            expect(scope.result).toEqual(0);
        });

        it("f(1) should return 1", function () {
            scope.fibonacciInput = 1;
            scope.$apply();
            expect(1).toEqual(scope.result);
        });

        it("f(2) should return 3", function () {
            scope.fibonacciInput = 2;
            scope.$apply();
            expect(2).toEqual(scope.result);
        });

        it("f(3) should return 3", function () {
            scope.fibonacciInput = 3;
            scope.$apply();
            expect(3).toEqual(scope.result);
        });

        it("f(4) should return 5", function () {
            scope.fibonacciInput = 4;
            scope.$apply();
            expect(5).toEqual(scope.result);
        });

        it("f(5) should return 8", function () {
            scope.fibonacciInput = 5;
            scope.$apply();
            expect(8).toEqual(scope.result);
        });

        it("f(3234) should return Number too large", function () {
            scope.fibonacciInput = 3234;
            scope.$apply();
            expect("Number too large").toEqual(scope.result);
        });

        it("f(-1) should return Invalid entry", function () {
            scope.fibonacciInput = -1;
            scope.$apply();
            expect("Invalid entry").toEqual(scope.result);
        });

        it("f(test) should return Invalid entry", function () {
            scope.fibonacciInput = "test";
            scope.$apply();
            expect("Invalid entry").toEqual(scope.result);
        });

    });
}());
