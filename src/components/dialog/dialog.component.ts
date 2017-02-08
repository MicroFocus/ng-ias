import { IAugmentedJQuery, ITranscludeFunction } from 'angular';
import { Component } from '../../component.decorator';

@Component({
    transclude: true
})
export default class DialogComponent {
    static $inject = [ '$element', '$transclude' ];
    constructor($element: IAugmentedJQuery, $transclude: ITranscludeFunction) {
        $transclude((clone: IAugmentedJQuery) => {
            $element.append(clone);
        });
    }
}
