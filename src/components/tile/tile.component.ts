import { Component } from '../../component.decorator';
import { IAugmentedJQuery } from 'angular';

@Component({
    templateUrl: require('./tile.component.html'),
    transclude: true
})
export default class TileComponent {
    static $inject = [ '$element' ];
    constructor($element: IAugmentedJQuery) {
        $element.attr('tabindex', 0);
    }
}
