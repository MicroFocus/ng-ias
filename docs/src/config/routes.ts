routes.$inject = [ '$stateProvider', '$urlRouterProvider' ];

function routes(
    $stateProvider: angular.ui.IStateProvider,
    $urlRouterProvider: angular.ui.IUrlRouterProvider
) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', { url: '/?dir&theme', abstract: true, component: 'application' })
        .state('app.project', { url: '', component: 'project' })
        .state('app.kitchenSink', { url: 'kitchen-sink', component: 'kitchenSink' })

        .state('app.component', { url: 'component/', abstract: true, component: 'components' })
        .state('app.component.accordion', { url: 'accordion', component: 'accordionDocumentation' })
        .state('app.component.button', { url: 'button', component: 'buttonDocumentation' })
        .state('app.component.datePicker', { url: 'datePicker', component: 'datePickerDocumentation' })
        .state('app.component.dialog', { url: 'dialog', component: 'dialogDocumentation' })
        .state('app.component.formField', { url: 'form-field', component: 'formFieldDocumentation' })
        .state('app.component.formValidation', { url: 'form-validation', component: 'formValidationDocumentation' })
        .state('app.component.icon', { url: 'icon', component: 'iconDocumentation' })
        .state('app.component.menu', { url: 'menu', component: 'menuDocumentation' })
        .state('app.component.sideNav', { url: 'side-nav', component: 'sideNavDocumentation' })
        .state('app.component.table', { url: 'table', component: 'tableDocumentation' })
        .state('app.component.tabs', { url: 'tabs', component: 'tabsDocumentation' });
}

export default routes;
