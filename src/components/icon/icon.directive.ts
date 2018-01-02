import { IDirective } from 'angular';
let templateUrl = require('components/icon/icon.component.html');


export default function IconDirective(): IDirective {
    return {
        scope: {
            icon: '@'
        },
        restrict: 'E',
        templateUrl: templateUrl,
        replace: true
    };
}
