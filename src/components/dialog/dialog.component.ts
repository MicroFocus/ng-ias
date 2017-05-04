import { IAugmentedJQuery, ITranscludeFunction } from 'angular';
import { Component } from '../../component.decorator';
import DialogService from './dialog.service';

@Component({
    templateUrl: require('./dialog.component.html'),
    transclude: true
})
export default class DialogComponent {
    static $inject = [ '$element', 'IasDialogService' ];
    constructor(private $element: IAugmentedJQuery, private dialogService: DialogService) {
        $element.on('click', this.cancel.bind(this));
    }

    $destroy(): void {
        this.$element.off();
    }

    cancel(): void {
        this.dialogService.cancel();
    }

    close(): void {
        this.dialogService.close();
    }
}
