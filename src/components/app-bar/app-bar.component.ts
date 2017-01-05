import { Component } from '../../component.decorator';

@Component({
    templateUrl: require('./app-bar.component.html'),
    transclude: true
})
export default class AppBarComponent {}
