import { IAttributes, IAugmentedJQuery, IDirective, IScope } from 'angular';
import ToggleService from './toggle.service';

export interface IToggleable {
    name: string;
    open: boolean;
    toggleGroup?: string;
    toggleMutexGroup?: string;

    hide(): void;
    show(element?: IAugmentedJQuery): void;
}

export function ToggleDirective(toggleService: ToggleService): IDirective {
    return {
        link: (scope: IScope, element: IAugmentedJQuery, attrs: IAttributes) => {
            const toggleId = scope['iasToggle'];

            element.on('click', () => {
                scope.$apply(function() {
                    toggleService.toggleComponent(toggleId, element);
                });
            });

            const activeClass = scope['iasToggleActive'];

            if (activeClass) {
                scope.$on(`toggled:${toggleId}`,
                    () => {
                        if (toggleService.isActive(toggleId)) {
                            element.addClass(activeClass);
                        }
                        else {
                            element.removeClass(activeClass);
                        }
                    }
                );
            }
        },
        restrict: 'A',
        scope: {
            iasToggle: '@',
            iasToggleActive: '@'
        }
    };
}

ToggleDirective.$inject = [ 'IasToggleService' ];
