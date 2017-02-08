import { Component } from '../../component.decorator';
import { IAugmentedJQuery, ITranscludeFunction } from 'angular';

@Component({
    templateUrl: require('./input.component.html'),
    transclude: true
})
export default class InputContainerComponent {
    static $inject = [ '$element', '$transclude' ];
    constructor($element: IAugmentedJQuery, $transclude: ITranscludeFunction) {
        $transclude((clone: IAugmentedJQuery) => {
            $element.append(clone);
        });
    }
}
