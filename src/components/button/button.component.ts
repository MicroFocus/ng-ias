import { Component } from '../../component.decorator';
import { IAugmentedJQuery } from 'angular';

@Component({
    templateUrl: require('./button.component.html'),
    transclude: true
})
export default class ButtonComponent {
    static $inject = [ '$element' ];
    constructor(private $element: IAugmentedJQuery) {
    }

    $doCheck() {
        let disabled = this.$element.prop('disabled') === true;
        this.$element.attr('tabindex', disabled ? -1 : 0);
    }
}
