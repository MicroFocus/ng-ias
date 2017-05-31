import { Component } from '../../component.decorator';
import { IAugmentedJQuery, ITranscludeFunction } from 'angular';

// Note: <ias-list> and <ias-list-header> don't need any Angular functionality; therefore they have no implementation

@Component({
    transclude: true
})
export class ListItemComponent {
    static $inject = [ '$element', '$transclude' ];
    constructor($element: IAugmentedJQuery, $transclude: ITranscludeFunction) {
        $transclude((clone: IAugmentedJQuery) => {
            $element.attr('tabindex', '0');
            $element.append(clone);
        });
    }
}
