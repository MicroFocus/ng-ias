import { IAttributes, IAugmentedJQuery, ICompileService, IDirective, IScope } from 'angular';

export class SortDirectiveController {
    sortBinding: string;
    sortExpression: string;

    static $inject = ['$scope'];
    constructor(private $scope: IScope) {
    }

    sortOn(sortOnProperty: string) {
        if (this.sortExpression === sortOnProperty) {
            this.sortExpression = '-' + sortOnProperty;
        }
        else {
            this.sortExpression = sortOnProperty;
        }

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
                '<ias-icon icon="down_thick" ng-if="getSortExpression() == \'' + scope.sortOn + '\'"></ias-icon>' +
                '<ias-icon icon="up_thick" ng-if="getSortExpression() == \'-' + scope.sortOn + '\'"></ias-icon>';
            let iconElement = $compile(iconHtml)(scope);
            element.append(iconElement);

            // Add ias-sortable class
            element.addClass('ias-sortable');

            // Register click handler
            element.on('click', () => {
                scope.$apply(() => {
                    controller.sortOn(scope['sortOn']);
                });
            });
        }
    };
}

SortOnDirective.$inject = ['$compile'];
