import { Component } from '../../../component.decorator';

@Component({
    templateUrl: require('./dialog.component.html')
})
export default class DialogComponent {
    static $inject = ['MfDialogService'];
    constructor(private MfDialogService: any) {}

    openAlertDialog(): void {
        this.MfDialogService
            .alert({
                textContent: 'You opened an alert dialog.',
                title: 'Alert!'
            })
            .then(
                function() {
                    alert('resolved');
                },
                function() {
                    alert('rejected');
                });
    }

    openConfirmationDialog(): void {
        this.MfDialogService
            .confirm({
                textContent: 'Are you sure?',
                title: 'Confirmation'
            })
            .then(
                function() {
                    alert('confirmed');
                },
                function() {
                    alert('declined');
                });
    }

    openPromptDialog(): void {
        this.MfDialogService
            .prompt({
                cancel: 'Cancel',
                ok: 'OK',
                textContent: 'What do you want to say?',
                title: 'Prompt'
            })
            .then(
                function(result) {
                    alert(result);
                },
                function() {
                    alert('declined');
                });
    }
}
