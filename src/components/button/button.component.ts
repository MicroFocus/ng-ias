import { IAugmentedJQuery, ICompileService, IDirective, IScope, IAttributes } from 'angular';
let templateUrl = require('components/button/button.component.html');

export class ButtonController {
    static $inject = ['$scope'];
    constructor(private $scope: IScope) {
    }

}

export default function ButtonDirective(): IDirective {
    return {
        controller: ButtonController,
        restrict: 'E',
        templateUrl: templateUrl,
        transclude: true,
        replace: true,
        link: (scope: IScope,
               element: IAugmentedJQuery,
               attributes: IAttributes,
               controller: ButtonController) => {
        }
    };
}

ButtonDirective.$inject = ['$compile'];
