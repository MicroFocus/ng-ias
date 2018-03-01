import {IAttributes, IAugmentedJQuery, IDirective, IScope} from 'angular';
import {IToggleable} from '../toggle/toggle.directive';
import ToggleService from '../toggle/toggle.service';
const accordionHeaderTemplateUrl = require('components/accordion/accordion-header.component.html');
const accordionItemTemplateUrl = require('components/accordion/accordion-item.component.html');


export function AccordionDirective(): IDirective {
    return {
        restrict: 'E',
        template: '<div class="ias-accordion-group" ng-transclude></div>',
        transclude: true,
        replace: true
    };
}


class AccordionItemController implements IToggleable {
    open: boolean;
    name: string;
    toggleStartOpen: boolean;
    toggleGroup: string;
    toggleMutexGroup: string;

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

export function AccordionItemDirective(): IDirective {
    return {
        bindToController: true,
        controller: AccordionItemController,
        restrict: 'E',
        scope: {
            name: '@',
            toggleStartOpen: '<',
            toggleGroup: '@',
            toggleMutexGroup: '@'
        },
        templateUrl: accordionItemTemplateUrl,
        transclude: true,
        replace: true
    };
}

export function AccordionHeaderDirective(): IDirective {
    return {
        link: function(scope: IScope, element: IAugmentedJQuery, attributes: IAttributes,
                       controller: AccordionItemController) {
            scope['isOpen'] = () => controller.open;
        },
        restrict: 'E',
        templateUrl: accordionHeaderTemplateUrl,
        transclude: true,
        replace: true,
        require: '^iasAccordionItem'
    };
}

