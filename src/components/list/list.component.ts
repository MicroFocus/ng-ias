import { Component } from '../../component.decorator';
import { IAugmentedJQuery, ITranscludeFunction } from 'angular';

@Component({
    transclude: true
})
export class ListComponent {
    static $inject = [ '$element', '$transclude' ];
    constructor($element: IAugmentedJQuery, $transclude: ITranscludeFunction) {
        $transclude((clone: IAugmentedJQuery) => {
            $element.append(clone);
        });
    }
}

@Component({
    transclude: true
})
export class ListHeaderComponent {
    static $inject = [ '$element', '$transclude' ];
    constructor($element: IAugmentedJQuery, $transclude: ITranscludeFunction) {
        $transclude((clone: IAugmentedJQuery) => {
            $element.append(clone);
        });
    }
}

@Component({
    transclude: true
})
export class ListItemComponent {
    static $inject = [ '$element', '$transclude' ];
    constructor($element: IAugmentedJQuery, $transclude: ITranscludeFunction) {
        $transclude((clone: IAugmentedJQuery) => {
            $element.append(clone);
        });
    }
}
