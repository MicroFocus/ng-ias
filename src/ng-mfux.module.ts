import { module } from 'angular';
import AppBarComponent from './components/app-bar.component';
import ButtonComponent from './components/button.component';

module('ng-mfux', [])
    .component('mfAppBar', AppBarComponent)
    .component('mfButton', ButtonComponent);
