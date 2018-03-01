import {isArray, IAttributes, IAugmentedJQuery, IDirective, IScope} from 'angular';
import {IToggleable} from '../toggle/toggle.directive';


class AutocompleteController implements IToggleable {
    focusedIndex: number = null;
    itemsExpr: string;
    name: string;
    onItemSelected: (args: any) => void;
    open: boolean = false;
    results: any[];
    searchText: string;

    static $inject = [ '$element', '$scope' ];
    constructor(private $element: IAugmentedJQuery, private $scope: IScope) {}

    // $onInit() {
    //     if (this.searchText) {
    //         this.fetchResults(this.searchText);
    //     }
    // }

    fetchResults(query) {
        const itemsExpr = this.itemsExpr.split(/ in /i)[1];
        const items = this.$scope.$parent.$eval(itemsExpr, { $query: query });

        if (isArray(items)) {
            this.handleResults(items);
        }
        else if (!!items.then) {
            items.then(this.handleResults.bind(this));
        }
    }

    handleResults(items) {
        this.results = items;

        if (!items || !items.length) {
            this.hide();
        }
        else {
            this.show();
        }
    }

    handleKeyDown(event: KeyboardEvent): void {
        switch (event.which || event.keyCode) {
            case 9: // TAB
            case 13: // ENTER
                if (this.isResultFocused()) {
                    event.preventDefault();

                    this.handleResultClick(this.results[this.focusedIndex]);
                }
                break;
            case 27: // ESC
                if (this.isResultFocused()) {
                    this.$element.find('input')[0].focus();
                    this.focusedIndex = null;
                }

                if (!this.searchText) {
                    this.hide();
                }
                break;
            case 38: // UP
                this.focusPrevResult();

                break;
            case 40: // DOWN
                this.focusNextResult();

                break;
        }
    }

    handleResultClick(item): void {
        // this.searchText = item;
        this.$element.find('input')[0].focus();

        if (this.onItemSelected) {
            this.onItemSelected({$item: item});
        }

        this.focusedIndex = null;
    }

    private isResultFocused(): boolean {
        return this.focusedIndex !== null;
    }

    private focusResult(resultIndex): void {
        const results = this.$element[0].querySelectorAll('.ias-result');

        (results[resultIndex] as any).focus();
    }

    private focusNextResult(): void {
        if (!this.results || !this.results.length) {
            return;
        }

        if (!this.isResultFocused()) {
            this.focusedIndex = 0;
        }
        else {
            this.focusedIndex = Math.min(this.results.length - 1, this.focusedIndex + 1);
        }

        this.focusResult(this.focusedIndex);
    }

    private focusPrevResult(): void {
        if (!this.results || !this.results.length || !this.isResultFocused()) {
            return;
        }

        this.focusedIndex = Math.max(0, this.focusedIndex - 1);

        this.focusResult(this.focusedIndex);
    }

    hide(): void {
        this.open = false;

        this.$element.removeClass('ias-open');
    }

    show(element?: IAugmentedJQuery): void {
        this.open = true;

        this.$element.addClass('ias-open');
    }
}


export default function AutocompleteDirective(): IDirective {
    return {
        bindToController: true,
        controller: AutocompleteController,
        controllerAs: '$ctrl',
        restrict: 'E',
        scope: {
            debounce: '<iasDebounce',
            itemsExpr: '@iasItems',
            onItemSelected: '&iasOnItemSelected',
            placeholder: '@',
            searchText: '<iasSearchText'
        },
        template: function(element: JQLite, attributes: IAttributes): string {
            const itemParts = attributes['iasItems'].split(/ in /i);

            return `
                <div class="ias-autocomplete"
                        ng-class="{'ias-open': $ctrl.open}" 
                        ng-keydown="$ctrl.handleKeyDown($event)">
                    <ias-search-box ng-model="$ctrl.searchText"
                                    ng-model-options="{ debounce: $ctrl.debounce || 300 }"
                                    ias-on-change="$ctrl.fetchResults($text)"
                                    placeholder="{{$ctrl.placeholder}}">
                    </ias-search-box>
                    <div class="ias-results">
                        <div class="ias-result" 
                            tabindex="0" 
                            ng-repeat="` + itemParts[0] + ` in $ctrl.results"
                            ng-click="$ctrl.handleResultClick(` + itemParts[0] + `)">` +
                            getItemTemplate() +
                        `</div>
                    </div>
                </div>`;

            function getItemTemplate() {
                const templateElement = element.find('template').detach();

                if (!templateElement.length) {
                    return `{{${itemParts[0]}}}`;
                }

                return templateElement.html();
            }
        },
        replace: true
    };
}

