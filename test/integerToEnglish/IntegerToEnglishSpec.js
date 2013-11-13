(function () {

    'use strict';

    beforeEach(module('codeKata.IntegerToEnglishCtrl'));

    describe('IntegerToEnglishCtrlSpec', function () {
        var instance, scope;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();

            instance = $controller("IntegerToEnglishCtrl", {
                $scope: scope
            });
        }));

        it("should have app.js setup - IntegerToEnglishCtrl should be defined", function () {
            expect(instance).toBeDefined();
        });

        it("1 should be one", function () {
            scope.integerInput = '1';
            scope.$apply();
            expect(scope.englishConversion).toEqual("one");
        });

        it("10 should be ten", function () {
            scope.integerInput = '10';
            scope.$apply();
            expect(scope.englishConversion).toEqual("ten");
        });

        it("12 should be twelve", function () {
            scope.integerInput = '12';
            scope.$apply();
            expect(scope.englishConversion).toEqual("twelve");
        });
    });
}());
