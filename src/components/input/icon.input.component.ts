import { IAugmentedJQuery, ICompileService, IDirective, IScope, IAttributes } from 'angular';
let templateUrl = require('components/input/icon.input.component.html');

export class IconInputController {
    static $inject = ['$scope'];

    constructor(private $scope: IScope) {
    }

}

/**
 * This directive supports showing a text input field with an icon.  These fields
 * are popular for search boxes.  The directive styles the icon so it won't interfere
 * with the text field and makes the spacing look correct for the control.
 */
export default function IconInputDirective(): IDirective {
    return {
        controller: IconInputController,
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
               controller: IconInputController) => {

                   scope.icon = element.attr('icon');
                   scope.placeholder = element.attr('placeholder');
        }
    };
}

IconInputController.$inject = ['$compile'];
