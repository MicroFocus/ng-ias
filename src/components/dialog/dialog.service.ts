import {
    element,
    ICompileService,
    IControllerService,
    IDocumentService,
    IPromise,
    IQService,
    IRootScopeService,
    ITemplateCacheService } from 'angular';

interface DialogOptions {
    cancel: string;
    controller: any;
    ok: string;
    prompt: boolean;
    response: string;
    textContent: string;
    title: string;
}

export default class DialogService {
    static $inject = [ '$compile', '$controller', '$document', '$q', '$rootScope', '$templateCache' ];
    constructor(private $compile: ICompileService,
                private $controller: IControllerService,
                private $document: IDocumentService,
                private $q: IQService,
                private $rootScope: IRootScopeService,
                private $templateCache: ITemplateCacheService) {
    }

    alert(options: DialogOptions): IPromise<any> {
        options.cancel = null;
        options.ok = options.ok || 'OK';

        return this.open(options);
    }

    confirm(options: DialogOptions): IPromise<any> {
        options.cancel = options.cancel || 'No';
        options.ok = options.ok || 'Yes';

        return this.open(options);
    }

    open(options: DialogOptions, dialogHtml: string = null): IPromise<any> {
        let deferred = this.$q.defer();

        // Create and compile element
        if (dialogHtml === null) {
            dialogHtml =
                '<ias-dialog ng-click="onScrimClicked()">' +
                '   <ias-dialog-content ng-click="$event.stopPropagation()">' +
                '       <div class="ias-dialog-header">' +
                '           <div ng-if="!!title" class="ias-title">{{title}}</div>' +
                '       </div>' +
                '       <div class="ias-dialog-body">' +
                '           <div ng-if="!prompt">{{textContent}}</div>' +
                '           <div ng-if="prompt">' +
                '               <ias-input-container>' +
                '                   <label for="response">{{textContent}}</label>' +
                '                   <input id="response" name="response" type="text" ng-model="data.response">' +
                '               </ias-input-container>' +
                '           </div>' +
                '       </div>' +
                '       <div class="ias-actions">' +
                '          <ias-button ng-if="!!okText" ng-click="confirm()">{{okText}}</ias-button>' +
                '          <ias-button ng-if="!!cancelText" ng-click="cancel()">{{cancelText}}</ias-button>' +
                '       </div>' +
                '       <ias-button class="ias-icon-button ias-dialog-close-button" ng-click="cancel()">' +
                '           <ias-icon icon="close_thick"></ias-icon>' +
                '       </ias-button>' +
                '   </ias-dialog-content>' +
                '</ias-dialog>';
        }

        let scope = this.$rootScope.$new(true);

        scope['$ctrl'] = options.controller;
        scope['cancel'] = () => {
            deferred.reject();
            compiledDialogElement.detach();
        };
        scope['confirm'] = () => {
            let response = scope['data']['response'];

            deferred.resolve(response);
            compiledDialogElement.detach();
        };
        scope['deferred'] = deferred;
        scope['cancelText'] = options.cancel;
        scope['okText'] = options.ok;
        scope['onScrimClicked'] = () => {
            scope['cancel']();
        };
        scope['prompt'] = options.prompt;
        scope['data'] = { response: options.response };
        scope['textContent'] = options.textContent;
        scope['title'] = options.title;

        let compiledDialogElement = this.$compile(dialogHtml)(scope);

        // Insert element into DOM
        element(this.$document.find('body')).append(compiledDialogElement);

        return deferred.promise;
    }

    prompt(options: DialogOptions): IPromise<any> {
        options.cancel = options.cancel || 'Cancel';
        options.ok = options.ok || 'OK';
        options.prompt = true;

        return this.open(options);
    }
}
