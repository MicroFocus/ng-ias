import { Component } from '../../../component.decorator';

@Component({
    templateUrl: require('./button.component.html')
})
export default class ButtonComponent {

    private alerts = [];

    public simpleButton(): void {
        this.alerts.push({msg: 'You pressed the simple button'});
    }
}
