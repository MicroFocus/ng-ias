import { Component } from '../../component.decorator';
import ToggleService from '../toggle/toggle.service';
import { element, IAugmentedJQuery, IDocumentService, ITranscludeFunction, IWindowService } from 'angular';
import { IToggleable } from '../toggle/toggle.directive';

export enum HorizontalAlignment {
    start,
    center,
    end
}
export enum VerticalAlignment {
    top,
    center,
    bottom
}

@Component({
    bindings: {
        align: '@mfAlign',
        name: '@'
    },
    templateUrl: require('./menu.component.html'),
    transclude: true
})
export class MenuComponent implements IToggleable {
    align: string;
    horizontalAlignment: HorizontalAlignment;
    verticalAlignment: VerticalAlignment;
    name: string;
    open: boolean;

    static $inject = [ '$document', '$element', '$window', 'MfToggleService', 'MENU_MARGIN' ];
    constructor(private $document: IDocumentService,
                private $element: IAugmentedJQuery,
                private $window: IWindowService,
                private toggleService: ToggleService,
                private MENU_MARGIN: number) {
        this.open = false;
        $element.detach();
        element($document.find('body')).append($element);

        $element.on('click', this.hide.bind(this));

        this.horizontalAlignment = HorizontalAlignment.start;
        this.verticalAlignment = VerticalAlignment.top;
    }

    $onDestroy(): void {
        this.$element.off('click');
    }

    $onInit(): void {
        if (this.align) {
            let tokens = this.align.split(' ');

            let horizontalAlignment = HorizontalAlignment[tokens[0]];
            let verticalAlignment = VerticalAlignment[tokens[1]];

            this.horizontalAlignment = horizontalAlignment || HorizontalAlignment.start;
            this.verticalAlignment = verticalAlignment || VerticalAlignment.top;
        }

        this.toggleService.register(this);
    }

    hide(): void {
        this.open = false;

        this.$element.removeClass('mf-open');
    }

    show(targetElement: IAugmentedJQuery): void {
        // Set open state on component and menu element
        this.open = true;
        this.$element.addClass('mf-open');

        this.showMenuContent(targetElement[0]);
    }

    private getLayoutDirection(): string {
        return window.getComputedStyle(this.$element[0], null).getPropertyValue('direction');
    }

    private numberToPixels(num: number): string {
        return (num === null) ? null : num + 'px';
    }

    private showMenuContent(targetElement: HTMLElement) {
        let menuContentElement = this.$element.find('mf-menu-content')[0];

        let isLtrLayout: boolean = this.getLayoutDirection() !== 'rtl';

        // Reset the boundaries of the menu content element
        menuContentElement.style.bottom =
            menuContentElement.style.left =
            menuContentElement.style.right =
            menuContentElement.style.top = null;

        // Calculate top and left offset based on the position of the target element
        let menuBoundingBox = this.$element[0].getBoundingClientRect();
        let menuContentBoundingBox = menuContentElement.getBoundingClientRect();
        let targetElementBoundingBox = targetElement.getBoundingClientRect();

        let bottom: number = null,
            left: number = null,
            right: number = null,
            top: number = null;

        // If menu content is wider than menu container, constrain width to menu container
        if (menuContentBoundingBox.width + (2 * this.MENU_MARGIN) > menuBoundingBox.width) {
            left = this.MENU_MARGIN;
            right = this.MENU_MARGIN;
        }
        else {
            switch (this.horizontalAlignment) {
                case HorizontalAlignment.start:
                    if (isLtrLayout) {
                        left = targetElementBoundingBox.left;
                    }
                    else {
                        left = targetElementBoundingBox.right - menuContentBoundingBox.width;
                    }
                    break;
                case HorizontalAlignment.center:
                    left = targetElementBoundingBox.left +
                        ((targetElementBoundingBox.width - menuContentBoundingBox.width) / 2);
                    break;
                case HorizontalAlignment.end:
                    if (isLtrLayout) {
                        left = targetElementBoundingBox.left +
                            (targetElementBoundingBox.width - menuContentBoundingBox.width);
                    }
                    else {
                        left = targetElementBoundingBox.left;
                    }
                    break;
            }

            // Convert to coordinates relative to menu container
            left -= menuBoundingBox.left;

            // Constrain to menu container boundaries
            left = Math.max(left, this.MENU_MARGIN);
            if (left + menuContentBoundingBox.width > menuBoundingBox.width) {
                left = null;
                right = this.MENU_MARGIN;
            }
        }

        menuContentElement.style.left = this.numberToPixels(left);
        menuContentElement.style.right = this.numberToPixels(right);

        // Recalculate bounding box to account for any shrinking caused by constraining the left and right offsets
        menuContentBoundingBox = menuContentElement.getBoundingClientRect();

        // If menu content is taller than menu container, constrain height to menu container
        if (menuContentBoundingBox.height + (2 * this.MENU_MARGIN) > menuBoundingBox.height) {
            top = this.MENU_MARGIN;
            bottom = this.MENU_MARGIN;
        }
        else {
            switch (this.verticalAlignment) {
                case VerticalAlignment.top:
                    top = targetElementBoundingBox.bottom;
                    break;
                case VerticalAlignment.center:
                    top = targetElementBoundingBox.top +
                        ((targetElementBoundingBox.height - menuContentBoundingBox.height) / 2);
                    break;
                case VerticalAlignment.bottom:
                    top = (targetElementBoundingBox.top - menuContentBoundingBox.height);
                    break;
            }

            // Convert to coordinates relative to menu container
            top -= menuBoundingBox.top;

            // Constrain to menu container boundaries
            top = Math.max(top, this.MENU_MARGIN);
            if (top + menuContentBoundingBox.height > menuBoundingBox.height) {
                top = null;
                bottom = this.MENU_MARGIN;
            }
        }

        menuContentElement.style.top = this.numberToPixels(top);
        menuContentElement.style.bottom = this.numberToPixels(bottom);
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
