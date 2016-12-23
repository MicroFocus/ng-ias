import { Component } from '../../component.decorator';

@Component({
    templateUrl: require('./button.component.html'),
    transclude: true
})
export default class ButtonComponent {}
