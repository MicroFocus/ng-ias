import { IAugmentedJQuery, IDirective } from 'angular';
import { IToggleable } from '../toggle/toggle.directive';
import ToggleService from '../toggle/toggle.service';
let templateUrl = require('components/side-nav/side-nav.component.html');

class SideNavController implements IToggleable {
    name: string;
    open: boolean;

    static $inject = ['$element', 'IasToggleService'];
    constructor(private $element: IAugmentedJQuery, private toggleService: ToggleService) {
        this.open = false;
        // this.name = (this as any).$ctrl.name;
    }

    $onInit(): void {
        this.toggleService.register(this);
    }

    $onDestroy() {
        this.$element.off('click');
    }

    hide() {
        this.$element.removeClass('ias-open');
        this.open = false;
    }

    show() {
        this.$element.addClass('ias-open');
        this.open = true;
    }
}

export default function SideNavDirective(): IDirective {
    return {
        bindToController: true,
        controller: SideNavController,
        controllerAs: '$ctrl',
        scope: {
            name: '@'
        },
        restrict: 'E',
        templateUrl: templateUrl,
        transclude: true,
        replace: true
    };
}
