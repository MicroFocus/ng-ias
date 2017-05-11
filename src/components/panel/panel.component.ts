import { Component } from '../../component.decorator';

@Component({
    templateUrl: require('./panel.component.html'),
    transclude: true
})
export default class PanelComponent {}
