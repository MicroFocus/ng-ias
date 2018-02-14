import {element, forEach, IAttributes, IAugmentedJQuery, IDirective, IScope} from 'angular';

interface ITabsetController {
    activeTab: number;
    activateTab(tabIndex: number): void;
}

export class TabsetController implements ITabsetController {
    activeTab;

    activateTab(tabIndex): void {
        this.activeTab = tabIndex;
    };
}

export default function TabsetDirective(): IDirective {
    return {
        scope: true,
        restrict: 'E',
        controller: TabsetController,
        controllerAs: '$tabsetCtrl',
        compile: (tElement: IAugmentedJQuery) => {
            // Nest element contents inside a tabset
            let tabset = element(`<div class="ias-tabset" role="tablist"></div>`);
            forEach(tElement.contents(), (content: Element) => {
                tabset.append(content);
            });
            tElement.append(tabset);

            // Switch out 'ias-tab' elements for tabs and panes
            let tabs = element(tabset).find('ias-tab');
            let tab;

            forEach(tabs, (tabElement: HTMLElement, index: number) => {
                // Add tab
                let label = tabElement.getAttribute('label');
                tab = element(`<div ng-class="{'ias-tab': true, 'ias-active': $tabsetCtrl.activeTab === ${index}}"
                                       ng-click="$tabsetCtrl.activateTab(${index})"
                                       role="tab">${label}</div>`);
                element(tabElement).replaceWith(tab);

                // Add pane
                let pane = element(`<div class="ias-tab-pane"
                                         ng-if="$tabsetCtrl.activeTab === ${index}"></div>`);
                pane.append(tabElement.innerHTML);
                tElement.append(pane);
            });

            // Add tab base and fill after the last tab, before any right-aligned elements such as links
            if (tab) {
                tab.after(`<div class="ias-tab-base"></div><div class="ias-fill"></div>`);
            }

            return (scope: IScope, iElement: IAugmentedJQuery, iAttrs: IAttributes, tabsetCtrl: ITabsetController) => {
                tabsetCtrl.activeTab = Number(iAttrs.iasActiveTab) || 0;
            };
        }
    };
}
