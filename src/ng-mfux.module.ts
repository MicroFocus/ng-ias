import { module } from 'angular';
import ButtonComponent from './components/button/button.component';
import IconComponent from './components/icon/icon.component';

module('ng-mfux', [])
    .component('mfButton', ButtonComponent)
    .component('mfIcon', IconComponent);
