import { IDirective } from 'angular';
let templateUrl = require('components/button/button.component.html');


export default function ButtonDirective(): IDirective {
    return {
        restrict: 'E',
        templateUrl: templateUrl,
        transclude: true,
        replace: true
    };
}
