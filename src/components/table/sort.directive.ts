import { element, IAttributes, IAugmentedJQuery, ICompileService, IDirective, IScope } from 'angular';

export class SortDirectiveController {
    sortBinding: string;
    sortExpression: string;

    static $inject = ['$element', '$scope'];
    constructor(private $element: IAugmentedJQuery, private $scope: IScope) {
    }

    sortOn(sortOnProperty: string) {
        if (this.sortExpression === sortOnProperty) {
            this.sortExpression = '-' + sortOnProperty;
        }
        else {
            this.sortExpression = sortOnProperty;
        }

        element(this.$element[0].querySelectorAll('.ias-sorted')).removeClass('ias-sorted');
        this.$scope.$eval(this.sortBinding + '="' + this.sortExpression + '"');
    }
}

export function SortDirective(): IDirective {
    return {
        controller: SortDirectiveController,
        restrict: 'A',
        link: (scope: IScope,
               element: IAugmentedJQuery,
               attributes: IAttributes,
               controller: SortDirectiveController) => {
            controller.sortBinding = attributes['iasSort'];
        }
    };
}

interface ISortOnScope extends IScope {
    getSortExpression(): string;
    sortOn: string;
}

export function SortOnDirective($compile: ICompileService): IDirective {
    return {
        require: '^iasSort',
        restrict: 'A',
        scope: {
            'sortOn': '<iasSortOn'
        },
        link: (scope: ISortOnScope,
               element: IAugmentedJQuery,
               attributes: IAttributes,
               controller: SortDirectiveController) => {
            scope.getSortExpression = (): string => {
                return controller.sortExpression;
            };

            // Add sort icons
            let iconHtml =
                '<ias-icon icon="flow_goto_prev_thin" ng-if="getSortExpression() == \'' +
                    scope.sortOn + '\'"></ias-icon>' +
                '<ias-icon icon="flow_goto_next_thin" ng-if="getSortExpression() == \'-' +
                    scope.sortOn + '\'"></ias-icon>';
            let iconElement = $compile(iconHtml)(scope);
            element.append(iconElement);

            // Add ias-sortable class
            element.addClass('ias-sortable');

            // Register click handler
            element.on('click', () => {
                scope.$apply(() => {
                    controller.sortOn(scope['sortOn']);
                    element.addClass('ias-sorted');
                });
            });
        }
    };
}

SortOnDirective.$inject = ['$compile'];
