import {module, bootstrap} from 'angular';
// Config
import config from './config/config';
import routes from './config/routes';
// Layout Components
import ApplicationComponent from './components/application/application.component';
import ComponentsComponent from './components/components/components.component';
import ProjectComponent from './components/project/project.component';
// Docs Components
import AccordionComponent from './components/docs/accordion/accordion.component';
import ButtonComponent from './components/docs/button/button.component';
import DemoContentComponent from './components/components/demo-content.component';
import DatePickerComponent from './components/docs/date-picker/date-picker.component';
import DialogComponent from './components/docs/dialog/dialog.component';

import FormFieldComponent from './components/docs/form-field/form-field.component';
import FormValidationComponent from './components/docs/form-validation/form-validation.component';
import IconComponent from './components/docs/icon/icon.component';
import MenuComponent from './components/docs/menu/menu.component';
import SideNavComponent from './components/docs/side-nav/side-nav.component';
import TableComponent from './components/docs/table/table.component';
import TabsComponent from './components/docs/tabs/tabs.component';
import {AsynchronousValidatorDirective} from './validator.directives';

module('app', [
    'ngAria',
    'ngMessages',
    'ng-ias',
    'ng-prism',
    'ui.router',
])
    .config(routes)
    .config([
        '$qProvider',
        function($qProvider) {
            $qProvider.errorOnUnhandledRejections(false);
        }
    ])
    .constant('config', config)
    // Layout Components
    .component('application', ApplicationComponent)
    .component('components', ComponentsComponent)
    .component('project', ProjectComponent)
    // Docs Components
    .component('accordionDocumentation', AccordionComponent)
    .component('buttonDocumentation', ButtonComponent)
    .component('dialogDocumentation', DialogComponent)
    .component('datePickerDocumentation', DatePickerComponent)
    .component('demoContent', DemoContentComponent)
    .component('formFieldDocumentation', FormFieldComponent)
    .component('formValidationDocumentation', FormValidationComponent)
    .component('iconDocumentation', IconComponent)
    .component('menuDocumentation', MenuComponent)
    .component('sideNavDocumentation', SideNavComponent)
    .component('tableDocumentation', TableComponent)
    .component('tabsDocumentation', TabsComponent)
    // .component('tileDocumentation', TileComponent)

    .directive('asynchronousValidator', AsynchronousValidatorDirective)

    .run(['$transitions', 'IasToggleService',
        ($transitions: {onStart: (Object, Function) => void},   // No definition in @types/angular-ui-router#v1.1.36
         toggleService) => {
            $transitions.onStart({
                to: 'app.component.**',
                from: 'app.component.**'
            }, function() {
                toggleService.hideComponent('componentSideNav');
                document.getElementsByClassName('components-body')[0].scrollTop = 0;
            });
        }
    ]);

bootstrap(document, ['app']);
