import { Component } from '../../component.decorator';
import { IAugmentedJQuery, ITranscludeFunction } from 'angular';

@Component({
    transclude: true
})
export default class TileGridComponent {
    static $inject = [ '$element', '$transclude' ];
    constructor($element: IAugmentedJQuery, $transclude: ITranscludeFunction) {
        $transclude((clone: IAugmentedJQuery) => {
            $element.append(clone);
        });
    }
}
