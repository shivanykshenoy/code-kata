(function () {

    'use strict';

    beforeEach(module('codeKata.FibonacciCtrl'));

    describe('FibonnaciCtrlSpec', function () {
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
            expect(scope.result).toEqual(1);
        });

        it("f(2) should return 3", function () {
            scope.fibonacciInput = 2;
            scope.$apply();
            expect(scope.result).toEqual(2);
        });

        it("f(3) should return 3", function () {
            scope.fibonacciInput = 3;
            scope.$apply();
            expect(scope.result).toEqual(3);
        });

        it("f(4) should return 5", function () {
            scope.fibonacciInput = 4;
            scope.$apply();
            expect(scope.result).toEqual(5);
        });

        it("f(5) should return 8", function () {
            scope.fibonacciInput = 5;
            scope.$apply();
            expect(scope.result).toEqual(8);
        });

        it("f(3234) should return Number too large", function () {
            scope.fibonacciInput = 3234;
            scope.$apply();
            expect(scope.result).toEqual("Number too large");
        });

        it("f(-1) should return Invalid entry", function () {
            scope.fibonacciInput = -1;
            scope.$apply();
            expect(scope.result).toEqual("Invalid entry");
        });

        it("f(test) should return Invalid entry", function () {
            scope.fibonacciInput = "test";
            scope.$apply();
            expect(scope.result).toEqual("Invalid entry");
        });

    });
}());
