import {IAugmentedJQuery, IDirective} from 'angular';
import {IToggleable} from '../toggle/toggle.directive';
import ToggleService from '../toggle/toggle.service';

class TabPaneController implements IToggleable {
    name: string;
    open: boolean;
    toggleMutexGroup: string;
    toggleStartOpen: boolean;

    static $inject = ['$element', 'IasToggleService'];
    constructor(private $element: IAugmentedJQuery, private toggleService: ToggleService) {
        this.open = false;
    }

    $onInit(): void {
        this.toggleService.register(this);

        if (this.toggleStartOpen) {
            this.toggleService.showComponent(this.name);
        }
    }

    hide(): void {
        this.open = false;

        this.$element.removeClass('ias-open');
    }

    show(element?: IAugmentedJQuery): void {
        this.open = true;

        this.$element.addClass('ias-open');
    }
}

export default function TabPaneDirective(): IDirective {
    return {
        bindToController: true,
        controller: TabPaneController,
        replace: true,
        restrict: 'E',
        scope: {
            toggleMutexGroup: '@toggleGroup',
            toggleStartOpen: '<',
            name: '@'
        },
        template: `
            <div class="ias-tab-pane" ng-transclude></div>        
        `,
        transclude: true
    };
}
