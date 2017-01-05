import { Component } from '../../component.decorator';

@Component({
    templateUrl: require('./nav.component.html'),
    transclude: true
})
export default class NavComponent {}
