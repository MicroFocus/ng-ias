import {IAugmentedJQuery, IDirective, IScope} from 'angular';
let templateUrl = require('components/search-box/search-box.component.html');


class SearchBoxController {
    ngModel: any;
    onChange: (args: any) => void;
    placeholder: string;

    static $inject = [ '$element', '$scope' ];
    constructor(private $element: IAugmentedJQuery, private $scope: IScope) {
    }

    $onInit() {
        this.$scope.$watch(
            '$ctrl.ngModel',
            (newValue: string, oldValue: string) => {
                if (newValue !== oldValue && this.onChange) {
                    this.onChange({$text: newValue});
                }
            });
    }

    clearInput(): void {
        this.ngModel = '';
        this.$element.find('input')[0].focus();
    }

    onInputKeyDown(event: KeyboardEvent): void {
        if ((event.which || event.keyCode) == 27) {
            if (!!this.ngModel) {
                event.preventDefault();
            }
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
            onChange: '&iasOnChange',
            placeholder: '@'
        },
        templateUrl: templateUrl,
        replace: true
    };
}

