import {IAugmentedJQuery, IRootScopeService} from 'angular';
import { IToggleable } from './toggle.directive';

export default class ToggleService {
    private toggleableComponents: any;
    private toggleGroups: any;

    static $inject = ['$rootScope'];
    constructor(private $rootScope: IRootScopeService) {
        this.toggleableComponents = {};
        this.toggleGroups = {};
    }

    register(toggleableComponent: IToggleable): void {
        this.toggleableComponents[toggleableComponent.name] = toggleableComponent;

        // Register with toggle group if toggleGroup property provided
        const group = toggleableComponent.toggleGroup || toggleableComponent.toggleMutexGroup;
        if (group) {
            if (!this.toggleGroups[group]) {
                this.toggleGroups[group] = [toggleableComponent];

                // Mutex group requires that only one component show at all times.
                if (toggleableComponent.toggleMutexGroup) {
                    this.showComponent(toggleableComponent.name);
                }
            }
            else {
                this.toggleGroups[group].push(toggleableComponent);
            }
        }
    }

    hideComponent(componentId: string): void {
        const toggleableComponent: IToggleable = this.toggleableComponents[componentId];
        if (toggleableComponent == null) {
            return;
        }

        if (toggleableComponent.toggleMutexGroup) {
            // Mutex group requires that one component show at all times. So don't hide the only open component
            // in the group
            if (toggleableComponent.open) {
                return;
            }
        }

        this.hide(toggleableComponent);
    }

    showComponent(componentId: string): void {
        const toggleableElement: IToggleable = this.toggleableComponents[componentId];
        if (toggleableElement == null) {
            return;
        }

        if (toggleableElement.toggleMutexGroup) {
            const toggleGroup = this.toggleGroups[toggleableElement.toggleMutexGroup];

            toggleGroup.forEach((groupComponent) => {
                this.hide(groupComponent);
            });
        }

        this.show(toggleableElement, null);
    }

    anyOpen(groupId: string): boolean {
        const group = this.toggleGroups[groupId];

        if (!group) {
            return false;
        }

        return group.filter(component => component.open).length > 0;
    }

    toggleGroup(groupId: string): void {
        const group = this.toggleGroups[groupId];

        if (!group) {
            return;
        }

        if (this.anyOpen(groupId)) {
            group.forEach(this.hide, this);
        }
        else {
            group.forEach(this.show, this);
        }
    }

    toggleComponent(componentId: string, triggerElement: IAugmentedJQuery): void {
        const toggleableElement: IToggleable = this.toggleableComponents[componentId];
        if (toggleableElement == null) {
            return;
        }

        if (toggleableElement.toggleMutexGroup) {
            const toggleGroup = this.toggleGroups[toggleableElement.toggleMutexGroup];

            toggleGroup.forEach((groupComponent) => {
                this.hide(groupComponent);
            });

            this.show(toggleableElement, triggerElement);
        }
        else {
            if (!toggleableElement.open) {
                this.show(toggleableElement, triggerElement);
            }
            else {
                this.hide(toggleableElement);
            }
        }
    }

    isActive(toggleId: string): boolean {
        const toggleableComponent = this.toggleableComponents[toggleId];

        return toggleableComponent && toggleableComponent.toggleMutexGroup && toggleableComponent.open;
    }

    private hide(component: IToggleable): void {
        if (component.open) {
            component.hide();
            this.$rootScope.$broadcast(`toggled:${component.name}`);
        }
    }

    private show(component: IToggleable, triggerElement?: IAugmentedJQuery): void {
        if (!component.open) {
            component.show(triggerElement);
            this.$rootScope.$broadcast(`toggled:${component.name}`);
        }
    }
}
