import { module } from 'angular';
// import AppBarComponent from './components/app-bar/app-bar.component';
// import AvatarComponent from './components/avatar/avatar.component';
import ButtonDirective from './components/button/button.component';
// import DialogComponent from './components/dialog/dialog.component';
import DialogService from './components/dialog/dialog.service';
// import HeaderComponent from './components/header/header.component';
import IconDirective from './components/icon/icon.directive';
// import InputContainerComponent from './components/input/input.component';
// import IntInput from './components/input/int-input.component';
// import { ListItemComponent } from './components/list/list.component';
import MenuDirective from './components/menu/menu.directive';
// import NavComponent from './components/nav/nav.component';
// import ResizingTextareaComponent from './components/input/resizing-textarea.component';
import SearchBoxComponent from './components/search-box/search-box.component';
import SideNavDirective from './components/side-nav/side-nav.directive';
import TileComponent from './components/tile/tile.component';
import TileGridComponent from './components/tile-grid/tile-grid.component';
import { SortDirective, SortOnDirective } from './components/table/sort.directive';
import { ToggleDirective } from './components/toggle/toggle.directive';
import ToggleService from './components/toggle/toggle.service';
// import PanelComponent from './components/panel/panel.component';

module('ng-ias', [])
    .constant('MENU_MARGIN', 24)
    // .component('iasAppBar', AppBarComponent)
    // .component('iasAvatar', AvatarComponent)
    .directive('iasButton', ButtonDirective)
    // .directive('iasIntInput', IntInput)
    // .component('iasDialog', DialogComponent)
    // .component('iasHeader', HeaderComponent)
    .directive('iasIcon', IconDirective)
    // .component('iasInputContainer', InputContainerComponent)
    // .component('iasListItem', ListItemComponent)
    .directive('iasMenu', MenuDirective)
    // .component('iasNav', NavComponent)
    // .component('iasPanel', PanelComponent)
    // .directive('iasResizingTextarea', ResizingTextareaComponent)
    .component('iasSearchBox', SearchBoxComponent)
    .directive('iasSideNav', SideNavDirective)
    .component('iasTile', TileComponent)
    .component('iasTileGrid', TileGridComponent)

    .directive('iasToggle', ToggleDirective)
    .directive('iasSort', SortDirective)
    .directive('iasSortOn', SortOnDirective)

    .service('IasDialogService', DialogService)
    .service('IasToggleService', ToggleService);
