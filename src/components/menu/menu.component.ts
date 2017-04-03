import { Component } from '../../component.decorator';
import ToggleService from '../toggle/toggle.service';
import { element, IAugmentedJQuery, IDocumentService, ITranscludeFunction } from 'angular';
import { IToggleable } from '../toggle/toggle.directive';

export enum MenuAlignment {
    start,
    center,
    end
}

@Component({
    bindings: {
        align: '@',
        name: '@'
    },
    templateUrl: require('./menu.component.html'),
    transclude: true
})
export class MenuComponent implements IToggleable {
    align: string;
    horizontalAlignment: MenuAlignment;
    verticalAlignment: MenuAlignment;
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

        this.horizontalAlignment = MenuAlignment.start;
        this.verticalAlignment = MenuAlignment.start;

        if (this.align) {
            let tokens = this.align.split(' ');

            let horizontalAlignment = MenuAlignment[tokens[0]];
            let verticalAlignment = MenuAlignment[tokens[1]];

            this.horizontalAlignment = horizontalAlignment || MenuAlignment.start;
            this.verticalAlignment = verticalAlignment || MenuAlignment.start;
        }
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
