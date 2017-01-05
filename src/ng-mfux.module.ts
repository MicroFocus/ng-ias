import { module } from 'angular';
import AppBarComponent from './components/app-bar/app-bar.component';
import ButtonComponent from './components/button/button.component';
import IconComponent from './components/icon/icon.component';
import NavComponent from './components/nav/nav.component';
import SideNavComponent from './components/side-nav/side-nav.component';

module('ng-mfux', [])
    .component('mfAppBar', AppBarComponent)
    .component('mfButton', ButtonComponent)
    .component('mfIcon', IconComponent)
    .component('mfNav', NavComponent)
    .component('mfSideNav', SideNavComponent);
