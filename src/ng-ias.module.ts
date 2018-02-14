import { module } from 'angular';
import { AccordionDirective, AccordionHeaderDirective, AccordionItemDirective}
from './components/accordion/accordion.component';
import AvatarDirective from './components/avatar/avatar.component';
import ButtonDirective from './components/button/button.component';
import DatePickerDirective from './components/date-picker/date-picker.component';
import DialogService from './components/dialog/dialog.service';
import IconDirective from './components/icon/icon.directive';
import MenuDirective from './components/menu/menu.directive';
import SearchBoxDirective from './components/search-box/search-box.component';
import SideNavDirective from './components/side-nav/side-nav.directive';
import TabsetDirective from './components/tabs/tabset.directive';
import TileDirective from './components/tile/tile.component';
import { SortDirective, SortOnDirective } from './components/table/sort.directive';
import { ToggleDirective } from './components/toggle/toggle.directive';
import ToggleService from './components/toggle/toggle.service';
import {
    EmailValidatorDirective,
    MatchesValidatorDirective,
    PasswordValidatorDirective} from './components/validators/validator.directives';

module('ng-ias', [])
    .constant('MENU_MARGIN', 24)

    // Components
    .directive('iasAccordion', AccordionDirective)
    .directive('iasAccordionItem', AccordionItemDirective)
    .directive('iasAccordionHeader', AccordionHeaderDirective)
    .directive('iasAvatar', AvatarDirective)
    .directive('iasButton', ButtonDirective)
    .directive('iasDatePicker', DatePickerDirective)
    .directive('iasIcon', IconDirective)
    .directive('iasMenu', MenuDirective)
    .directive('iasSearchBox', SearchBoxDirective)
    .directive('iasSideNav', SideNavDirective)
    .directive('iasTabset', TabsetDirective)
    .directive('iasTile', TileDirective)

    // Directives
    .directive('iasToggle', ToggleDirective)
    .directive('iasSort', SortDirective)
    .directive('iasSortOn', SortOnDirective)

    // Validators
    .directive('iasEmail', EmailValidatorDirective)
    .directive('iasMatches', MatchesValidatorDirective)
    .directive('iasPassword', PasswordValidatorDirective)

    .service('IasDialogService', DialogService)
    .service('IasToggleService', ToggleService);
