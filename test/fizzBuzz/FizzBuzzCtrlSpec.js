(function () {

    'use strict';

    beforeEach(module('codeKata.FizzBuzzCtrl'));

    describe('FizzBuzzCtrlSpec', function () {
        var instance, scope;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            instance = $controller("FizzBuzzCtrl", {
                $scope: scope
            });
        }));

        it("should have app.js setup - FizzBuzzCtrl defined", function () {
            expect(instance).toBeDefined();
        });

        it("f(1) should return 1", function () {
            scope.fizzBuzzInput = 1;
            scope.$apply();
            expect(scope.resultArray[0]).toEqual(1);
        });

        it("f(2) should return 2", function () {
            scope.fizzBuzzInput = 2;
            scope.$apply();
            expect(scope.resultArray[1]).toEqual(2);
        });

        it("f(3) should return 'Fizz'", function () {
            scope.fizzBuzzInput = 3;
            scope.$apply();
            expect(scope.resultArray[2]).toEqual('Fizz');
        });

        it("f(5) should return 'FizzBuzz'", function () {
            scope.fizzBuzzInput = 5;
            scope.$apply();
            expect(scope.resultArray[2]).toEqual('Fizz');
        });

        it("f('test') should set errorMessage to 'Invalid Number'", function () {
            scope.fizzBuzzInput = 'test';
            scope.$apply();
            expect(scope.errorMessage).toEqual('Invalid Number');
        });
    });
}());