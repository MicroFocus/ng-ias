import { Component } from '../../component.decorator';

@Component({
    bindings: {
        icon: '@',
        svgIcon: '@'
    },
    templateUrl: require('./icon.component.html')
})
export default class IconComponent {
}
