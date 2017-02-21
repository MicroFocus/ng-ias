import { Component } from '../../component.decorator';
import ToggleService from '../toggle/toggle.service';
import { element, IAugmentedJQuery, IDocumentService, ITranscludeFunction } from 'angular';
import { IToggleable } from '../toggle/toggle.directive';

@Component({
    bindings: {
        name: '@'
    },
    templateUrl: require('./menu.component.html'),
    transclude: true
})
export class MenuComponent implements IToggleable {
    name: string;
    open: boolean;

    static $inject = [ '$document', '$element', 'MfToggleService' ];
    constructor(private $document: IDocumentService,
                private $element: IAugmentedJQuery,
                private toggleService: ToggleService) {
        this.open = false;
        $element.detach();
        element($document.find('body')).append($element);

        $element.on('click', this.hide.bind(this));
    }

    $onDestroy(): void {
        this.$element.off('click');
    }

    $onInit(): void {
        this.toggleService.register(this);
    }

    hide(): void {
        this.open = false;

        this.$element.removeClass('mf-open');
    }

    show(el: IAugmentedJQuery): void {
        this.open = true;

        let boundingClientRect = el[0].getBoundingClientRect();

        // TODO: do some math
        this.$element.find('mf-menu-content')[0].style.left = boundingClientRect.left + 'px';
        this.$element.find('mf-menu-content')[0].style.top = boundingClientRect.bottom + 'px';

        this.$element.addClass('mf-open');
    }
}

@Component({
    transclude: true
})
export class MenuFooterComponent {
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
export class MenuHeaderComponent {
    static $inject = [ '$element', '$transclude' ];
    constructor($element: IAugmentedJQuery, $transclude: ITranscludeFunction) {
        $transclude((clone: IAugmentedJQuery) => {
            $element.append(clone);
        });
    }
}
