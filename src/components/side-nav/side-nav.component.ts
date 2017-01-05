import { Component } from '../../component.decorator';

@Component({
    templateUrl: require('./side-nav.component.html'),
    transclude: true
})
export default class SideNavComponent {}
