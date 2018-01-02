import { Component } from '../../component.decorator';
import { IDocumentService } from 'angular';

@Component({
    templateUrl: require('./application.component.html')
})
export default class ApplicationComponent {
    projectName: string;

    static $inject = ['$document', '$state', '$stateParams', 'config'];
    constructor(private $document: IDocumentService,
                private $state: angular.ui.IStateService,
                private $stateParams: angular.ui.IStateParamsService,
                config: any) {
        this.projectName = config.projectName;
    }

    // This click handler overrides the ui-sref directive so that ui-sref-active
    // functions correctly for all children of the abstract state 'app.component'
    goToComponentsView($event): void {
        $event.preventDefault();

        this.$state.go('app.component.appBar');
    };

    isComponentsView(): boolean {
        return /^app.component/.test(this.$state.current.name);
    }
}
