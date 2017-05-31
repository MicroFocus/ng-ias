import { IAugmentedJQuery, IDirective, IScope, IAttributes } from 'angular';
let templateUrl = require('components/input/int-input.component.html');

export class IntInputController {
    static $inject = ['$scope'];

    constructor(private $scope: IScope) {
    }

}

/**
 * This directive supports an input field which adds the class inputError
 * when the value is not a number.  It watches changes from user inputs, 
 * the DOM, and the model.
 */
export default function IntInputDirective(): IDirective {
    return {
        controller: IntInputController,
        restrict: 'E',
        templateUrl: templateUrl,
        transclude: true,
        replace: true,
        scope: {
            model: '=ngModel',
            min: '=',
            max: '='
        },
        link: (scope: IScope,
               element: IAugmentedJQuery,
               attributes: IAttributes,
               controller: IntInputController) => {

                   if (!controller) {
                       return;
                   }

                   let isValid = function(val: string) {
                       if ('undefined' === typeof val || val === '') {
                           element.removeClass('inputError');
                           return;
                       }

                       if (isNaN(Number(val))) {
                           element.addClass('inputError');
                       } else {
                           if (scope.max && val > scope.max) {
                               element.addClass('inputError');
                               return;
                           } else if (scope.min && val < scope.min) {
                               element.addClass('inputError');
                               return;
                           }
                           element.removeClass('inputError');
                       }
                   };

                   scope.$watch('model', function(newValue: string, oldValue: string) {
                       isValid(newValue);
                   });

                   element.bind('input', function(event) {
                       isValid(element.val());
                   });
        }
    };
}

IntInputController.$inject = ['$compile'];
