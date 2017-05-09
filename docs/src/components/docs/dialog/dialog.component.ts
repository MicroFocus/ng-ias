import { Component } from '../../../component.decorator';
import {IScope} from 'angular';

@Component({
    templateUrl: require('./dialog.component.html')
})
export default class DialogComponent {
    static $inject = ['IasDialogService'];
    constructor(private IasDialogService: any) {}

    openAlertDialog(): void {
        this.IasDialogService
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
        this.IasDialogService
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

    openCustomDialog(): void {
        this.IasDialogService
            .open({
                controller: function ($scope, IasDialogService) {
                    $scope.title = 'Custom Template';
                    $scope.close = function() {
                        IasDialogService.close();
                    };
                },
                template:
                    '<ias-dialog>' +
                    '   <div class="ias-dialog-header">' +
                    '       <div class="ias-title">{{title}}</div>' +
                    '   </div>' +
                    '   <div class="ias-dialog-body">' +
                    '       <p>Add your content here</p>' +
                    '   </div>' +
                    '   <div class="ias-actions">' +
                    '      <ias-button ng-click="close()">Got It!</ias-button>' +
                    '   </div>' +
                    '</ias-dialog>'
            });
    }

    openPromptDialog(): void {
        this.IasDialogService
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
