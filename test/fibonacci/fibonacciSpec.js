(function () {

    'use strict';

    beforeEach(module('codeKata.FibonnaciCtrl'));

    describe('FibonnaciCtrl', function () {
        var instance, scope;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            instance = $controller("FibonnaciCtrl", {
                $scope: scope
            });
        }));

        it("should have app.js setup - FibonnaciCtrl defined", function () {
            expect(instance).toBeDefined();
        });

    });
}());
