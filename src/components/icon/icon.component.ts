import { Component } from '../../component.decorator';

@Component({
    bindings: {
        iconName: '<icon'
    },
    templateUrl: require('./icon.component.html')
})
export default class IconComponent {
    constructor() {

    }

    $onChanges() {

    }
}
