import { Component } from '../../../component.decorator';

@Component({
    templateUrl: require('./accordion.component.html')
})
export default class AccordionComponent {
    items = new Array(10);

    static $inject = ['IasToggleService'];
    constructor(private toggleService: any) {}

    anyOpen(groupId): boolean {
        return this.toggleService.anyOpen(groupId);
    }

    toggleAll(groupId): void {
        this.toggleService.toggleGroup(groupId);
    }
}
