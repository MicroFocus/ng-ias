import {IAugmentedJQuery, IDirective, IScope} from 'angular';
let templateUrl = require('components/tile/tile.component.html');

export default function TileDirective(): IDirective {
    return {
        replace: true,
        restrict: 'E',
        templateUrl: templateUrl,
        transclude: true
    };
}
