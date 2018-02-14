import {IAugmentedJQuery, IDirective} from 'angular';
let templateUrl = require('components/search-box/search-box.component.html');


class SearchBoxController {
    ngModel: any;
    placeholder: string;

    static $inject = [ '$element' ];
    constructor(private $element: IAugmentedJQuery) {
    }

    $onInit(): void {
        // Set defaults
        this.placeholder = this.placeholder || 'Search';
    }

    clearInput(): void {
        this.ngModel = '';
        this.$element.find('input')[0].focus();
    }

    onInputKeyDown(event: KeyboardEvent): void {
        if ((event.which || event.keyCode) == 27) {
            this.clearInput();
        }
    }
}


export default function SearchBoxDirective(): IDirective {
    return {
        bindToController: true,
        controller: SearchBoxController,
        controllerAs: '$ctrl',
        restrict: 'E',
        scope: {
            ngModel: '=',
            ngModelOptions: '<',
            placeholder: '@'
        },
        templateUrl: templateUrl,
        replace: true
    };
}

