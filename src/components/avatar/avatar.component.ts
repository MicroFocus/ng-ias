import { IDirective } from 'angular';
let templateUrl = require('components/avatar/avatar.component.html');


class AvatarController {
    imageUrl: string;

    getStyle() {
        return { 'background-image': 'url(' + this.imageUrl + ')' };
    }
}


export default function AvatarDirective(): IDirective {
    return {
        bindToController: true,
        controller: AvatarController,
        controllerAs: '$ctrl',
        scope: {
            imageUrl: '@'
        },
        restrict: 'E',
        templateUrl: templateUrl,
        replace: true
    };
}

