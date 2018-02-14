import {IAttributes, IAugmentedJQuery, IDirective, IScope} from 'angular';
const accordionHeaderTemplateUrl = require('components/accordion/accordion-header.component.html');
const accordionItemTemplateUrl = require('components/accordion/accordion-item.component.html');


class AccordionController {
    // isOpen(itemController): boolean {
    //
    // }
}

export function AccordionDirective(): IDirective {
    return {
        controller: AccordionController,
        restrict: 'E',
        template: '<div class="ias-accordion-group" ng-transclude></div>',
        transclude: true,
        replace: true
    };
}


class AccordionItemController {
    private accordionController: AccordionController;
    open: boolean;

    constructor() {
        this.open = false;
    }

    isOpen(): boolean {
        return this.open;
    }

    toggle(): void {
        this.open = !this.open;
    }
}

export function AccordionItemDirective(): IDirective {
    return {
        controller: AccordionItemController,
        controllerAs: '$ctrl',
        link: function(scope: IScope, element: IAugmentedJQuery, attributes: IAttributes,
                       accordionController: AccordionController) {
            scope['accordionController'] = accordionController;
        },
        restrict: 'E',
        require: '^iasAccordion',
        scope: true,
        templateUrl: accordionItemTemplateUrl,
        transclude: true,
        replace: true
    };
}

export function AccordionHeaderDirective(): IDirective {
    return {
        link: function(scope: IScope, element: IAugmentedJQuery, attributes: IAttributes,
                       accordionItemController: AccordionItemController) {
            scope['isOpen'] = accordionItemController.isOpen;
            scope['toggle'] = accordionItemController.toggle;
        },
        restrict: 'E',
        require: '^iasAccordionItem',
        templateUrl: accordionHeaderTemplateUrl,
        transclude: true,
        replace: true
    };
}

