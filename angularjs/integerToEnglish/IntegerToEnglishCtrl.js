(function () {
    'use strict';

    var module = angular.module('codeKata.IntegerToEnglishCtrl', []);

    module.controller('IntegerToEnglishCtrl', ['$scope', function ($scope) {

        var digits = { '0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine', '10': 'ten'},
            tens = {'11': 'eleven', '12': 'twelve', '13': 'thirteen', '14': 'fourteen', '15': 'fifteen', '16': 'sixteen', '17': 'seventeen', '18': 'eighteen', '19': 'nineteen', '20': 'twenty', '30': 'thirty', '40': 'fourty', '50': 'fifty', '60': 'sixty', '70': 'seventy', '80': 'eighty', '90': 'ninety'},
            bigs = {'100': 'hundred', '1000': 'thousand'},
            num = 0,
            numTen,
            numHundred,
            numThousand,
            factor,
            phrase;

        $scope.integerInput = '0';

        $scope.englishConversion = digits[$scope.integerInput];

        $scope.$watch('integerInput', function () {

            if ($scope.integerInput) {
                num = parseInt($scope.integerInput, 10);

                factor = num / 10;

                if (factor <= 1) {
                    phrase = digits[$scope.integerInput];
                } else if (factor >= 1 && factor <= 2) {
                    phrase = tens[$scope.integerInput];
                } else {
                    numTen = num % 10;

                }

                $scope.englishConversion = phrase;
            }
            // do your logic here;

            //boundary conditions

            //what if I don't pass an integer
        });

    }]);


}());
