import { Component } from '../../../component.decorator';

@Component({
    templateUrl: require('./button.component.html')
})
export default class ButtonComponent {
    simpleButton(): void {
        alert('You pressed the simple button');
    }

    iconButton(): void {
        alert('You pressed an icon button');
    }
}
