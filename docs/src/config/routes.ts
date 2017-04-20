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
        .state('app.component.appBar', { url: 'app-bar', component: 'appBarDocumentation' })
        .state('app.component.avatar', { url: 'avatar', component: 'avatarDocumentation' })
        .state('app.component.button', { url: 'button', component: 'buttonDocumentation' })
        .state('app.component.colors', { url: 'colors', component: 'colorsDocumentation' })
        .state('app.component.dialog', { url: 'dialog', component: 'dialogDocumentation' })
        .state('app.component.formField', { url: 'form-field', component: 'formFieldDocumentation' })
        .state('app.component.header', { url: 'header', component: 'headerDocumentation' })
        .state('app.component.icon', { url: 'icon', component: 'iconDocumentation' })
        .state('app.component.iconButton', { url: 'icon-button', component: 'iconButtonDocumentation' })
        .state('app.component.input', { url: 'input', component: 'inputDocumentation' })
        .state('app.component.link', { url: 'link', component: 'linkDocumentation' })
        .state('app.component.list', { url: 'list', component: 'listDocumentation' })
        .state('app.component.menu', { url: 'menu', component: 'menuDocumentation' })
        .state('app.component.nav', { url: 'nav', component: 'navDocumentation' })
        .state('app.component.panel', { url: 'panel', component: 'panelDocumentation' })
        .state('app.component.searchBox', { url: 'searchBox', component: 'searchBoxDocumentation' })
        .state('app.component.sideNav', { url: 'side-nav', component: 'sideNavDocumentation' })
        .state('app.component.table', { url: 'table', component: 'tableDocumentation' })
        .state('app.component.tabs', { url: 'tile', component: 'tabsDocumentation' })
        .state('app.component.tile', { url: 'tile', component: 'tileDocumentation' })
        .state('app.component.tileGrid', { url: 'tile-grid', component: 'tileGridDocumentation' });
}

export default routes;
