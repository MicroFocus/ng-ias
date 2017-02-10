import { Component } from '../../component.decorator';

@Component({
    bindings: {
        icon: '@'
    },
    templateUrl: require('./icon.component.html')
})
export default class IconComponent {
    constructor() {

    }

    $onChanges() {

    }
}
