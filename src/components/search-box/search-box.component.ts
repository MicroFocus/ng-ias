import { IAugmentedJQuery, INgModelController, IScope } from 'angular';
import { Component } from '../../component.decorator';

@Component({
    bindings: {
        placeholder: '@'
    },
    require: {
        ngModel: '^ngModel'
    },
    templateUrl: require('./search-box.component.html')
})
export default class SearchBoxComponent {
    ngModel: INgModelController;
    placeholder: string;
    value: string;

    static $inject = [ '$element', '$scope' ];
    constructor(private $element: IAugmentedJQuery, private $scope: IScope) {
    }

    $onInit(): void {
        // Set defaults
        this.placeholder = this.placeholder || 'Search';

        // Initialize ngModel
        let self = this;
        this.ngModel.$render = () => {
            self.value = self.ngModel.$viewValue;
        };

        this.$scope.$watch(
            (): string => {
                return self.value;
            },
            (newValue: string) => {
                self.ngModel.$setViewValue(newValue);
            });
    }

    clearInput(): void {
        this.value = '';
    }

    onInputKeyDown(event: KeyboardEvent): void {
        switch (event.which || event.keyCode) {
            case 27: // ESCAPE
                this.clearInput();
                break;
        }
    }
}
