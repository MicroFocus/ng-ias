import { Component } from '../../../component.decorator';
import {IScope} from 'angular';

let customDialogTemplateUrl = require('./custom-dialog.template.html');

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
                    '<div class="ias-dialog">' +
                    '    <div class="ias-dialog-container">' +
                    '        <div class="ias-dialog-content">' +
                    '            <div class="ias-dialog-label">' +
                    '                <div class="ias-title">{{title}}</div>' +
                    '            </div>' +
                    '            <p>Add your content here</p>' +
                    '            <div class="ias-actions">' +
                    '               <ias-button ng-click="close()">Got It!</ias-button>' +
                    '            </div>' +
                    '        </div>' +
                    '    </div>' +
                    '</div>'
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

    openTemplateUrlCustomDialog(): void {
        this.IasDialogService
            .open({
                controller: function ($scope, IasDialogService) {
                    $scope.title = 'Custom Template';
                    $scope.close = function() {
                        IasDialogService.close();
                    };
                },
                templateUrl: customDialogTemplateUrl
            });
    }
}
