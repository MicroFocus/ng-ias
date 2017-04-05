/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var angular_1 = __webpack_require__(1);
	var app_bar_component_1 = __webpack_require__(2);
	var avatar_component_1 = __webpack_require__(5);
	var button_component_1 = __webpack_require__(7);
	var dialog_component_1 = __webpack_require__(9);
	var dialog_service_1 = __webpack_require__(10);
	var header_component_1 = __webpack_require__(11);
	var icon_component_1 = __webpack_require__(12);
	var input_component_1 = __webpack_require__(14);
	var list_component_1 = __webpack_require__(16);
	var menu_component_1 = __webpack_require__(18);
	var nav_component_1 = __webpack_require__(20);
	var search_box_component_1 = __webpack_require__(22);
	var side_nav_component_1 = __webpack_require__(24);
	var tile_component_1 = __webpack_require__(26);
	var tile_grid_component_1 = __webpack_require__(28);
	var sort_directive_1 = __webpack_require__(29);
	var toggle_directive_1 = __webpack_require__(30);
	var toggle_service_1 = __webpack_require__(31);
	angular_1.module('ng-mfux', [])
	    .component('mfAppBar', app_bar_component_1.default)
	    .component('mfAvatar', avatar_component_1.default)
	    .directive('mfButton', button_component_1.default)
	    .component('mfDialog', dialog_component_1.default)
	    .component('mfHeader', header_component_1.default)
	    .component('mfIcon', icon_component_1.default)
	    .component('mfInputContainer', input_component_1.default)
	    .component('mfList', list_component_1.ListComponent)
	    .component('mfListHeader', list_component_1.ListHeaderComponent)
	    .component('mfListItem', list_component_1.ListItemComponent)
	    .component('mfMenu', menu_component_1.MenuComponent)
	    .component('mfFooterMenu', menu_component_1.MenuFooterComponent)
	    .component('mfHeaderMenu', menu_component_1.MenuHeaderComponent)
	    .component('mfNav', nav_component_1.default)
	    .component('mfSearchBox', search_box_component_1.default)
	    .component('mfSideNav', side_nav_component_1.default)
	    .component('mfTile', tile_component_1.default)
	    .component('mfTileGrid', tile_grid_component_1.default)
	    .directive('mfToggle', toggle_directive_1.ToggleDirective)
	    .directive('mfSort', sort_directive_1.SortDirective)
	    .directive('mfSortOn', sort_directive_1.SortOnDirective)
	    .service('MfDialogService', dialog_service_1.default)
	    .service('MfToggleService', toggle_service_1.default);
	

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = angular;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(3);
	var AppBarComponent = (function () {
	    function AppBarComponent() {
	    }
	    return AppBarComponent;
	}());
	AppBarComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(4),
	        transclude: true
	    })
	], AppBarComponent);
	exports.default = AppBarComponent;
	

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var angular_1 = __webpack_require__(1);
	function Component(options) {
	    return function (controller) { return angular_1.extend(options, { controller: controller }); };
	}
	exports.Component = Component;
	

/***/ },
/* 4 */
/***/ function(module, exports) {

	var path = 'components/app-bar/app-bar.component.html';
	var html = "<div class=\"mf-app-bar-content\" ng-transclude></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(3);
	var AvatarComponent = (function () {
	    function AvatarComponent() {
	    }
	    return AvatarComponent;
	}());
	AvatarComponent = __decorate([
	    component_decorator_1.Component({
	        bindings: {
	            'src': '<'
	        },
	        templateUrl: __webpack_require__(6)
	    })
	], AvatarComponent);
	exports.default = AvatarComponent;
	

/***/ },
/* 6 */
/***/ function(module, exports) {

	var path = 'components/avatar/avatar.component.html';
	var html = "<div class=\"mf-avatar-content\" ng-style=\"{ 'background-image': 'url(' + $ctrl.src + ')' }\"></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var templateUrl = __webpack_require__(8);
	var ButtonController = (function () {
	    function ButtonController($scope) {
	        this.$scope = $scope;
	    }
	    return ButtonController;
	}());
	ButtonController.$inject = ['$scope'];
	exports.ButtonController = ButtonController;
	function ButtonDirective() {
	    return {
	        controller: ButtonController,
	        restrict: 'E',
	        templateUrl: templateUrl,
	        transclude: true,
	        replace: true,
	        link: function (scope, element, attributes, controller) {
	        }
	    };
	}
	exports.default = ButtonDirective;
	ButtonDirective.$inject = ['$compile'];
	

/***/ },
/* 8 */
/***/ function(module, exports) {

	var path = 'components/button/button.component.html';
	var html = "<button class=\"mf-button\" ng-transclude>\n</button>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(3);
	var DialogComponent = (function () {
	    function DialogComponent($element, $transclude) {
	        $transclude(function (clone) {
	            $element.append(clone);
	        });
	    }
	    return DialogComponent;
	}());
	DialogComponent.$inject = ['$element', '$transclude'];
	DialogComponent = __decorate([
	    component_decorator_1.Component({
	        transclude: true
	    })
	], DialogComponent);
	exports.default = DialogComponent;
	

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var angular_1 = __webpack_require__(1);
	var DialogService = (function () {
	    function DialogService($compile, $controller, $document, $q, $rootScope, $templateCache) {
	        this.$compile = $compile;
	        this.$controller = $controller;
	        this.$document = $document;
	        this.$q = $q;
	        this.$rootScope = $rootScope;
	        this.$templateCache = $templateCache;
	    }
	    DialogService.prototype.alert = function (options) {
	        options.cancel = null;
	        options.ok = options.ok || 'OK';
	        return this.open(options);
	    };
	    DialogService.prototype.confirm = function (options) {
	        options.cancel = options.cancel || 'No';
	        options.ok = options.ok || 'Yes';
	        return this.open(options);
	    };
	    DialogService.prototype.open = function (options) {
	        var deferred = this.$q.defer();
	        var dialogHtml = '<mf-dialog ng-click="onScrimClicked()">' +
	            '   <mf-dialog-content ng-click="$event.stopPropagation()">' +
	            '       <div class="mf-dialog-header">' +
	            '           <div ng-if="!!title" class="mf-title">{{title}}</div>' +
	            '       </div>' +
	            '       <div class="mf-dialog-body">' +
	            '           <div ng-if="!prompt">{{textContent}}</div>' +
	            '           <div ng-if="prompt">' +
	            '               <mf-input-container>' +
	            '                   <label for="response">{{textContent}}</label>' +
	            '                   <input id="response" name="response" type="text" ng-model="data.response">' +
	            '               </mf-input-container>' +
	            '           </div>' +
	            '       </div>' +
	            '       <div class="mf-actions">' +
	            '          <mf-button ng-if="!!okText" ng-click="confirm()">{{okText}}</mf-button>' +
	            '          <mf-button ng-if="!!cancelText" ng-click="cancel()">{{cancelText}}</mf-button>' +
	            '       </div>' +
	            '       <mf-button class="mf-icon-button mf-dialog-close-button" ng-click="cancel()">' +
	            '           <mf-icon icon="close_thick"></mf-icon>' +
	            '       </mf-button>' +
	            '   </mf-dialog-content>' +
	            '</mf-dialog>';
	        var scope = this.$rootScope.$new(true);
	        scope['cancel'] = function () {
	            deferred.reject();
	            compiledDialogElement.detach();
	        };
	        scope['confirm'] = function () {
	            var response = scope['data']['response'];
	            deferred.resolve(response);
	            compiledDialogElement.detach();
	        };
	        scope['deferred'] = deferred;
	        scope['cancelText'] = options.cancel;
	        scope['okText'] = options.ok;
	        scope['onScrimClicked'] = function () {
	            scope['cancel']();
	        };
	        scope['prompt'] = options.prompt;
	        scope['data'] = { response: options.response };
	        scope['textContent'] = options.textContent;
	        scope['title'] = options.title;
	        var compiledDialogElement = this.$compile(dialogHtml)(scope);
	        angular_1.element(this.$document.find('body')).append(compiledDialogElement);
	        return deferred.promise;
	    };
	    DialogService.prototype.prompt = function (options) {
	        options.cancel = options.cancel || 'Cancel';
	        options.ok = options.ok || 'OK';
	        options.prompt = true;
	        return this.open(options);
	    };
	    return DialogService;
	}());
	DialogService.$inject = ['$compile', '$controller', '$document', '$q', '$rootScope', '$templateCache'];
	exports.default = DialogService;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(3);
	var HeaderComponent = (function () {
	    function HeaderComponent($element, $transclude) {
	        $transclude(function (clone) {
	            $element.append(clone);
	        });
	    }
	    return HeaderComponent;
	}());
	HeaderComponent.$inject = ['$element', '$transclude'];
	HeaderComponent = __decorate([
	    component_decorator_1.Component({
	        transclude: true
	    })
	], HeaderComponent);
	exports.default = HeaderComponent;
	

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(3);
	var IconComponent = (function () {
	    function IconComponent() {
	    }
	    IconComponent.prototype.$onChanges = function () {
	    };
	    return IconComponent;
	}());
	IconComponent = __decorate([
	    component_decorator_1.Component({
	        bindings: {
	            icon: '@'
	        },
	        templateUrl: __webpack_require__(13)
	    })
	], IconComponent);
	exports.default = IconComponent;
	

/***/ },
/* 13 */
/***/ function(module, exports) {

	var path = 'components/icon/icon.component.html';
	var html = "<i ng-class=\"['mf-icon', 'mf-icon-' + $ctrl.icon]\"></i>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(3);
	var InputContainerComponent = (function () {
	    function InputContainerComponent($element, $transclude) {
	        $transclude(function (clone) {
	            $element.append(clone);
	        });
	    }
	    return InputContainerComponent;
	}());
	InputContainerComponent.$inject = ['$element', '$transclude'];
	InputContainerComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(15),
	        transclude: true
	    })
	], InputContainerComponent);
	exports.default = InputContainerComponent;
	

/***/ },
/* 15 */
/***/ function(module, exports) {

	var path = 'components/input/input.component.html';
	var html = "";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(3);
	var ListComponent = (function () {
	    function ListComponent($element, $transclude) {
	        $transclude(function (clone) {
	            $element.append(clone);
	        });
	    }
	    return ListComponent;
	}());
	ListComponent.$inject = ['$element', '$transclude'];
	ListComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(17),
	        transclude: true
	    })
	], ListComponent);
	exports.ListComponent = ListComponent;
	var ListHeaderComponent = (function () {
	    function ListHeaderComponent($element, $transclude) {
	        $transclude(function (clone) {
	            $element.append(clone);
	        });
	    }
	    return ListHeaderComponent;
	}());
	ListHeaderComponent.$inject = ['$element', '$transclude'];
	ListHeaderComponent = __decorate([
	    component_decorator_1.Component({
	        transclude: true
	    })
	], ListHeaderComponent);
	exports.ListHeaderComponent = ListHeaderComponent;
	var ListItemComponent = (function () {
	    function ListItemComponent($element, $transclude) {
	        $transclude(function (clone) {
	            $element.append(clone);
	        });
	    }
	    return ListItemComponent;
	}());
	ListItemComponent.$inject = ['$element', '$transclude'];
	ListItemComponent = __decorate([
	    component_decorator_1.Component({
	        transclude: true
	    })
	], ListItemComponent);
	exports.ListItemComponent = ListItemComponent;
	

/***/ },
/* 17 */
/***/ function(module, exports) {

	var path = 'components/list/list.component.html';
	var html = "";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(3);
	var angular_1 = __webpack_require__(1);
	var MenuAlignment;
	(function (MenuAlignment) {
	    MenuAlignment[MenuAlignment["start"] = 0] = "start";
	    MenuAlignment[MenuAlignment["center"] = 1] = "center";
	    MenuAlignment[MenuAlignment["end"] = 2] = "end";
	})(MenuAlignment = exports.MenuAlignment || (exports.MenuAlignment = {}));
	var MenuComponent = (function () {
	    function MenuComponent($document, $element, toggleService) {
	        this.$document = $document;
	        this.$element = $element;
	        this.toggleService = toggleService;
	        this.open = false;
	        $element.detach();
	        angular_1.element($document.find('body')).append($element);
	        $element.on('click', this.hide.bind(this));
	        this.horizontalAlignment = MenuAlignment.start;
	        this.verticalAlignment = MenuAlignment.start;
	        if (this.align) {
	            var tokens = this.align.split(' ');
	            var horizontalAlignment = MenuAlignment[tokens[0]];
	            var verticalAlignment = MenuAlignment[tokens[1]];
	            this.horizontalAlignment = horizontalAlignment || MenuAlignment.start;
	            this.verticalAlignment = verticalAlignment || MenuAlignment.start;
	        }
	    }
	    MenuComponent.prototype.$onDestroy = function () {
	        this.$element.off('click');
	    };
	    MenuComponent.prototype.$onInit = function () {
	        this.toggleService.register(this);
	    };
	    MenuComponent.prototype.hide = function () {
	        this.open = false;
	        this.$element.removeClass('mf-open');
	    };
	    MenuComponent.prototype.show = function (el) {
	        this.open = true;
	        var boundingClientRect = el[0].getBoundingClientRect();
	        this.$element.find('mf-menu-content')[0].style.left = boundingClientRect.left + 'px';
	        this.$element.find('mf-menu-content')[0].style.top = boundingClientRect.bottom + 'px';
	        this.$element.addClass('mf-open');
	    };
	    return MenuComponent;
	}());
	MenuComponent.$inject = ['$document', '$element', 'MfToggleService'];
	MenuComponent = __decorate([
	    component_decorator_1.Component({
	        bindings: {
	            align: '@',
	            name: '@'
	        },
	        templateUrl: __webpack_require__(19),
	        transclude: true
	    })
	], MenuComponent);
	exports.MenuComponent = MenuComponent;
	var MenuFooterComponent = (function () {
	    function MenuFooterComponent($element, $transclude) {
	        $transclude(function (clone) {
	            $element.append(clone);
	        });
	    }
	    return MenuFooterComponent;
	}());
	MenuFooterComponent.$inject = ['$element', '$transclude'];
	MenuFooterComponent = __decorate([
	    component_decorator_1.Component({
	        transclude: true
	    })
	], MenuFooterComponent);
	exports.MenuFooterComponent = MenuFooterComponent;
	var MenuHeaderComponent = (function () {
	    function MenuHeaderComponent($element, $transclude) {
	        $transclude(function (clone) {
	            $element.append(clone);
	        });
	    }
	    return MenuHeaderComponent;
	}());
	MenuHeaderComponent.$inject = ['$element', '$transclude'];
	MenuHeaderComponent = __decorate([
	    component_decorator_1.Component({
	        transclude: true
	    })
	], MenuHeaderComponent);
	exports.MenuHeaderComponent = MenuHeaderComponent;
	

/***/ },
/* 19 */
/***/ function(module, exports) {

	var path = 'components/menu/menu.component.html';
	var html = "<mf-menu-content ng-transclude ng-click=\"$event.stopPropagation()\"></mf-menu-content>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(3);
	var NavComponent = (function () {
	    function NavComponent() {
	    }
	    return NavComponent;
	}());
	NavComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(21),
	        transclude: true
	    })
	], NavComponent);
	exports.default = NavComponent;
	

/***/ },
/* 21 */
/***/ function(module, exports) {

	var path = 'components/nav/nav.component.html';
	var html = "<div class=\"mf-nav-content\" ng-transclude></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(3);
	var SearchBoxComponent = (function () {
	    function SearchBoxComponent($element, $scope) {
	        this.$element = $element;
	        this.$scope = $scope;
	    }
	    SearchBoxComponent.prototype.$onInit = function () {
	        this.placeholder = this.placeholder || 'Search';
	        var self = this;
	        this.ngModel.$render = function () {
	            self.value = self.ngModel.$viewValue;
	        };
	        this.$scope.$watch(function () {
	            return self.value;
	        }, function (newValue) {
	            self.ngModel.$setViewValue(newValue);
	        });
	    };
	    SearchBoxComponent.prototype.clearInput = function () {
	        this.value = '';
	    };
	    SearchBoxComponent.prototype.onInputKeyDown = function (event) {
	        switch (event.which || event.keyCode) {
	            case 27:
	                this.clearInput();
	                break;
	        }
	    };
	    return SearchBoxComponent;
	}());
	SearchBoxComponent.$inject = ['$element', '$scope'];
	SearchBoxComponent = __decorate([
	    component_decorator_1.Component({
	        bindings: {
	            placeholder: '@'
	        },
	        require: {
	            ngModel: '^ngModel'
	        },
	        templateUrl: __webpack_require__(23)
	    })
	], SearchBoxComponent);
	exports.default = SearchBoxComponent;
	

/***/ },
/* 23 */
/***/ function(module, exports) {

	var path = 'components/search-box/search-box.component.html';
	var html = "<div class=\"mf-search-box-content\">\n    <input type=\"text\"\n           autocomplete=\"false\"\n           ng-model=\"$ctrl.value\"\n           ng-attr-placeholder=\"{{$ctrl.placeholder}}\"\n           ng-keydown=\"$ctrl.onInputKeyDown($event)\" />\n    <mf-icon icon=\"search_thick\"></mf-icon>\n    <mf-button class=\"mf-icon-button\" ng-click=\"$ctrl.clearInput()\">\n        <mf-icon icon=\"close_thick\"></mf-icon>\n    </mf-button>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(3);
	var SideNavComponent = (function () {
	    function SideNavComponent($element, toggleService) {
	        this.$element = $element;
	        this.toggleService = toggleService;
	        this.open = false;
	    }
	    SideNavComponent.prototype.$onInit = function () {
	        this.toggleService.register(this);
	    };
	    SideNavComponent.prototype.$onDestroy = function () {
	        this.$element.off('click');
	    };
	    SideNavComponent.prototype.hide = function () {
	        this.$element.removeClass('mf-open');
	    };
	    SideNavComponent.prototype.show = function () {
	        this.$element.addClass('mf-open');
	    };
	    return SideNavComponent;
	}());
	SideNavComponent.$inject = ['$element', 'MfToggleService'];
	SideNavComponent = __decorate([
	    component_decorator_1.Component({
	        bindings: {
	            name: '@'
	        },
	        templateUrl: __webpack_require__(25),
	        transclude: true
	    })
	], SideNavComponent);
	exports.default = SideNavComponent;
	

/***/ },
/* 25 */
/***/ function(module, exports) {

	var path = 'components/side-nav/side-nav.component.html';
	var html = "<div class=\"mf-scrim\" ng-click=\"$ctrl.hide()\"></div>\n<div class=\"mf-side-nav-content\" ng-transclude></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(3);
	var TileComponent = (function () {
	    function TileComponent($element) {
	        $element.attr('tabindex', 0);
	    }
	    return TileComponent;
	}());
	TileComponent.$inject = ['$element'];
	TileComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(27),
	        transclude: true
	    })
	], TileComponent);
	exports.default = TileComponent;
	

/***/ },
/* 27 */
/***/ function(module, exports) {

	var path = 'components/tile/tile.component.html';
	var html = "<div class=\"mf-tile-content\" ng-transclude></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(3);
	var TileGridComponent = (function () {
	    function TileGridComponent($element, $transclude) {
	        $transclude(function (clone) {
	            $element.append(clone);
	        });
	    }
	    return TileGridComponent;
	}());
	TileGridComponent.$inject = ['$element', '$transclude'];
	TileGridComponent = __decorate([
	    component_decorator_1.Component({
	        transclude: true
	    })
	], TileGridComponent);
	exports.default = TileGridComponent;
	

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var SortDirectiveController = (function () {
	    function SortDirectiveController($scope) {
	        this.$scope = $scope;
	    }
	    SortDirectiveController.prototype.sortOn = function (sortOnProperty) {
	        if (this.sortExpression === sortOnProperty) {
	            this.sortExpression = '-' + sortOnProperty;
	        }
	        else {
	            this.sortExpression = sortOnProperty;
	        }
	        this.$scope.$eval(this.sortBinding + '="' + this.sortExpression + '"');
	    };
	    return SortDirectiveController;
	}());
	SortDirectiveController.$inject = ['$scope'];
	exports.SortDirectiveController = SortDirectiveController;
	function SortDirective() {
	    return {
	        controller: SortDirectiveController,
	        restrict: 'A',
	        link: function (scope, element, attributes, controller) {
	            controller.sortBinding = attributes['mfSort'];
	        }
	    };
	}
	exports.SortDirective = SortDirective;
	function SortOnDirective($compile) {
	    return {
	        require: '^mfSort',
	        restrict: 'A',
	        scope: {
	            'sortOn': '<mfSortOn'
	        },
	        link: function (scope, element, attributes, controller) {
	            scope.getSortExpression = function () {
	                return controller.sortExpression;
	            };
	            var iconHtml = '<mf-icon icon="down_thick" ng-if="getSortExpression() == \'' + scope.sortOn + '\'"></mf-icon>' +
	                '<mf-icon icon="up_thick" ng-if="getSortExpression() == \'-' + scope.sortOn + '\'"></mf-icon>';
	            var iconElement = $compile(iconHtml)(scope);
	            element.append(iconElement);
	            element.addClass('mf-sortable');
	            element.on('click', function () {
	                scope.$apply(function () {
	                    controller.sortOn(scope['sortOn']);
	                });
	            });
	        }
	    };
	}
	exports.SortOnDirective = SortOnDirective;
	SortOnDirective.$inject = ['$compile'];
	

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	function ToggleDirective(toggleService) {
	    return {
	        link: function (scope, element, attrs) {
	            element.on('click', function () { toggleService.toggleComponent(attrs['mfToggle'], element); });
	        },
	        restrict: 'A'
	    };
	}
	exports.ToggleDirective = ToggleDirective;
	ToggleDirective.$inject = ['MfToggleService'];
	

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ToggleService = (function () {
	    function ToggleService() {
	        this.toggleableComponents = {};
	    }
	    ToggleService.prototype.register = function (toggleableComponent) {
	        this.toggleableComponents[toggleableComponent.name] = toggleableComponent;
	    };
	    ToggleService.prototype.toggleComponent = function (componentId, element) {
	        var toggleableElement = this.toggleableComponents[componentId];
	        if (toggleableElement == null) {
	            return;
	        }
	        if (!toggleableElement.open) {
	            toggleableElement.show(element);
	        }
	        else {
	            toggleableElement.hide();
	        }
	    };
	    return ToggleService;
	}());
	exports.default = ToggleService;


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbWZ1eC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlNWQ0OTgyODM2OTUzMjc2ZGViNSIsIndlYnBhY2s6Ly8vLi9zcmMvbmctbWZ1eC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC5kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpbGUvdGlsZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGlsZS90aWxlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpbGUtZ3JpZC90aWxlLWdyaWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYmxlL3NvcnQuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGU1ZDQ5ODI4MzY5NTMyNzZkZWI1XG4gKiovIiwiaW1wb3J0IHsgbW9kdWxlIH0gZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgQXBwQmFyQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9hcHAtYmFyL2FwcC1iYXIuY29tcG9uZW50JztcbmltcG9ydCBBdmF0YXJDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50JztcbmltcG9ydCBCdXR0b25EaXJlY3RpdmUgZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcbmltcG9ydCBEaWFsb2dDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCBEaWFsb2dTZXJ2aWNlIGZyb20gJy4vY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IEhlYWRlckNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IEljb25Db21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL2ljb24vaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IElucHV0Q29udGFpbmVyQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCwgTGlzdEhlYWRlckNvbXBvbmVudCwgTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZW51Q29tcG9uZW50LCBNZW51Rm9vdGVyQ29tcG9uZW50LCBNZW51SGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IE5hdkNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQnO1xuaW1wb3J0IFNlYXJjaEJveENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgU2lkZU5hdkNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50JztcbmltcG9ydCBUaWxlQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy90aWxlL3RpbGUuY29tcG9uZW50JztcbmltcG9ydCBUaWxlR3JpZENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvdGlsZS1ncmlkL3RpbGUtZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU29ydERpcmVjdGl2ZSwgU29ydE9uRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RhYmxlL3NvcnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4vY29tcG9uZW50cy90b2dnbGUvdG9nZ2xlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgVG9nZ2xlU2VydmljZSBmcm9tICcuL2NvbXBvbmVudHMvdG9nZ2xlL3RvZ2dsZS5zZXJ2aWNlJztcblxubW9kdWxlKCduZy1tZnV4JywgW10pXG4gICAgLmNvbXBvbmVudCgnbWZBcHBCYXInLCBBcHBCYXJDb21wb25lbnQpXG4gICAgLmNvbXBvbmVudCgnbWZBdmF0YXInLCBBdmF0YXJDb21wb25lbnQpXG4gICAgLmRpcmVjdGl2ZSgnbWZCdXR0b24nLCBCdXR0b25EaXJlY3RpdmUpXG4gICAgLmNvbXBvbmVudCgnbWZEaWFsb2cnLCBEaWFsb2dDb21wb25lbnQpXG4gICAgLmNvbXBvbmVudCgnbWZIZWFkZXInLCBIZWFkZXJDb21wb25lbnQpXG4gICAgLmNvbXBvbmVudCgnbWZJY29uJywgSWNvbkNvbXBvbmVudClcbiAgICAuY29tcG9uZW50KCdtZklucHV0Q29udGFpbmVyJywgSW5wdXRDb250YWluZXJDb21wb25lbnQpXG4gICAgLmNvbXBvbmVudCgnbWZMaXN0JywgTGlzdENvbXBvbmVudClcbiAgICAuY29tcG9uZW50KCdtZkxpc3RIZWFkZXInLCBMaXN0SGVhZGVyQ29tcG9uZW50KVxuICAgIC5jb21wb25lbnQoJ21mTGlzdEl0ZW0nLCBMaXN0SXRlbUNvbXBvbmVudClcbiAgICAuY29tcG9uZW50KCdtZk1lbnUnLCBNZW51Q29tcG9uZW50KVxuICAgIC5jb21wb25lbnQoJ21mRm9vdGVyTWVudScsIE1lbnVGb290ZXJDb21wb25lbnQpXG4gICAgLmNvbXBvbmVudCgnbWZIZWFkZXJNZW51JywgTWVudUhlYWRlckNvbXBvbmVudClcbiAgICAuY29tcG9uZW50KCdtZk5hdicsIE5hdkNvbXBvbmVudClcbiAgICAuY29tcG9uZW50KCdtZlNlYXJjaEJveCcsIFNlYXJjaEJveENvbXBvbmVudClcbiAgICAuY29tcG9uZW50KCdtZlNpZGVOYXYnLCBTaWRlTmF2Q29tcG9uZW50KVxuICAgIC5jb21wb25lbnQoJ21mVGlsZScsIFRpbGVDb21wb25lbnQpXG4gICAgLmNvbXBvbmVudCgnbWZUaWxlR3JpZCcsIFRpbGVHcmlkQ29tcG9uZW50KVxuXG4gICAgLmRpcmVjdGl2ZSgnbWZUb2dnbGUnLCBUb2dnbGVEaXJlY3RpdmUpXG4gICAgLmRpcmVjdGl2ZSgnbWZTb3J0JywgU29ydERpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKCdtZlNvcnRPbicsIFNvcnRPbkRpcmVjdGl2ZSlcblxuICAgIC5zZXJ2aWNlKCdNZkRpYWxvZ1NlcnZpY2UnLCBEaWFsb2dTZXJ2aWNlKVxuICAgIC5zZXJ2aWNlKCdNZlRvZ2dsZVNlcnZpY2UnLCBUb2dnbGVTZXJ2aWNlKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL25nLW1mdXgubW9kdWxlLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhbmd1bGFyXCJcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vYXBwLWJhci5jb21wb25lbnQuaHRtbCcpLFxuICAgIHRyYW5zY2x1ZGU6IHRydWVcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBCYXJDb21wb25lbnQge31cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudC50c1xuICoqLyIsImltcG9ydCB7IGV4dGVuZCwgSUF1Z21lbnRlZEpRdWVyeSwgSUF0dHJpYnV0ZXN9IGZyb20gJ2FuZ3VsYXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb250ZW50VGVtcGxhdGVGdW5jdGlvbiB7XG4gICAgKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkYXR0cnM/OiBJQXR0cmlidXRlcyk6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvbXBvbmVudChvcHRpb25zOiB7XG4gICAgYmluZGluZ3M/OiBhbnksXG4gICAgYmluZFRvQ29udHJvbGxlcj86IGJvb2xlYW4sXG4gICAgY29udHJvbGxlckFzPzogc3RyaW5nLFxuICAgIHJlcXVpcmU/OiBhbnk7XG4gICAgdGVtcGxhdGU/OiAoc3RyaW5nIHwgYW55W10gfCBJQ29udGVudFRlbXBsYXRlRnVuY3Rpb24pLFxuICAgIHRlbXBsYXRlVXJsPzogc3RyaW5nLFxuICAgIHRyYW5zY2x1ZGU/OiAoYm9vbGVhbiB8IHN0cmluZyksXG4gICAgc3R5bGVzaGVldFVybD86IHN0cmluZ1xufSkge1xuICAgIHJldHVybiAoY29udHJvbGxlcjogRnVuY3Rpb24pID0+IGV4dGVuZChvcHRpb25zLCB7IGNvbnRyb2xsZXI6IGNvbnRyb2xsZXIgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnQuZGVjb3JhdG9yLnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9hcHAtYmFyL2FwcC1iYXIuY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxkaXYgY2xhc3M9XFxcIm1mLWFwcC1iYXItY29udGVudFxcXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9hcHAtYmFyL2FwcC1iYXIuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICAgIGJpbmRpbmdzOiB7XG4gICAgICAgICdzcmMnOiAnPCdcbiAgICB9LFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2F2YXRhci5jb21wb25lbnQuaHRtbCcpXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXZhdGFyQ29tcG9uZW50IHtcbiAgICBzcmM6IHN0cmluZztcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvYXZhdGFyL2F2YXRhci5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxkaXYgY2xhc3M9XFxcIm1mLWF2YXRhci1jb250ZW50XFxcIiBuZy1zdHlsZT1cXFwieyAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJyArICRjdHJsLnNyYyArICcpJyB9XFxcIj48L2Rpdj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSUNvbXBpbGVTZXJ2aWNlLCBJRGlyZWN0aXZlLCBJU2NvcGUsIElBdHRyaWJ1dGVzIH0gZnJvbSAnYW5ndWxhcic7XG5sZXQgdGVtcGxhdGVVcmwgPSByZXF1aXJlKCdjb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmh0bWwnKTtcblxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbnRyb2xsZXIge1xuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyckc2NvcGUnXTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRzY29wZTogSVNjb3BlKSB7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbkRpcmVjdGl2ZSgpOiBJRGlyZWN0aXZlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb250cm9sbGVyOiBCdXR0b25Db250cm9sbGVyLFxuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogdGVtcGxhdGVVcmwsXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIGxpbms6IChzY29wZTogSVNjb3BlLFxuICAgICAgICAgICAgICAgZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSxcbiAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IElBdHRyaWJ1dGVzLFxuICAgICAgICAgICAgICAgY29udHJvbGxlcjogQnV0dG9uQ29udHJvbGxlcikgPT4ge1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuQnV0dG9uRGlyZWN0aXZlLiRpbmplY3QgPSBbJyRjb21waWxlJ107XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8YnV0dG9uIGNsYXNzPVxcXCJtZi1idXR0b25cXFwiIG5nLXRyYW5zY2x1ZGU+XFxuPC9idXR0b24+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnksIElUcmFuc2NsdWRlRnVuY3Rpb24gfSBmcm9tICdhbmd1bGFyJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0cmFuc2NsdWRlOiB0cnVlXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyR0cmFuc2NsdWRlJyBdO1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcbiAgICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQudHNcbiAqKi8iLCJpbXBvcnQge1xuICAgIGVsZW1lbnQsXG4gICAgSUNvbXBpbGVTZXJ2aWNlLFxuICAgIElDb250cm9sbGVyU2VydmljZSxcbiAgICBJRG9jdW1lbnRTZXJ2aWNlLFxuICAgIElQcm9taXNlLFxuICAgIElRU2VydmljZSxcbiAgICBJUm9vdFNjb3BlU2VydmljZSxcbiAgICBJVGVtcGxhdGVDYWNoZVNlcnZpY2UgfSBmcm9tICdhbmd1bGFyJztcblxuaW50ZXJmYWNlIERpYWxvZ09wdGlvbnMge1xuICAgIGNhbmNlbDogc3RyaW5nO1xuICAgIG9rOiBzdHJpbmc7XG4gICAgcHJvbXB0OiBib29sZWFuO1xuICAgIHJlc3BvbnNlOiBzdHJpbmc7XG4gICAgdGV4dENvbnRlbnQ6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2dTZXJ2aWNlIHtcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRjb21waWxlJywgJyRjb250cm9sbGVyJywgJyRkb2N1bWVudCcsICckcScsICckcm9vdFNjb3BlJywgJyR0ZW1wbGF0ZUNhY2hlJyBdO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJGNvbXBpbGU6IElDb21waWxlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlICRjb250cm9sbGVyOiBJQ29udHJvbGxlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSAkZG9jdW1lbnQ6IElEb2N1bWVudFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSAkcTogSVFTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgJHJvb3RTY29wZTogSVJvb3RTY29wZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSAkdGVtcGxhdGVDYWNoZTogSVRlbXBsYXRlQ2FjaGVTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgYWxlcnQob3B0aW9uczogRGlhbG9nT3B0aW9ucyk6IElQcm9taXNlPGFueT4ge1xuICAgICAgICBvcHRpb25zLmNhbmNlbCA9IG51bGw7XG4gICAgICAgIG9wdGlvbnMub2sgPSBvcHRpb25zLm9rIHx8ICdPSyc7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMub3BlbihvcHRpb25zKTtcbiAgICB9XG5cbiAgICBjb25maXJtKG9wdGlvbnM6IERpYWxvZ09wdGlvbnMpOiBJUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgb3B0aW9ucy5jYW5jZWwgPSBvcHRpb25zLmNhbmNlbCB8fCAnTm8nO1xuICAgICAgICBvcHRpb25zLm9rID0gb3B0aW9ucy5vayB8fCAnWWVzJztcblxuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIG9wZW4ob3B0aW9uczogRGlhbG9nT3B0aW9ucyk6IElQcm9taXNlPGFueT4ge1xuICAgICAgICBsZXQgZGVmZXJyZWQgPSB0aGlzLiRxLmRlZmVyKCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGFuZCBjb21waWxlIGVsZW1lbnRcbiAgICAgICAgbGV0IGRpYWxvZ0h0bWwgPVxuICAgICAgICAgICAgJzxtZi1kaWFsb2cgbmctY2xpY2s9XCJvblNjcmltQ2xpY2tlZCgpXCI+JyArXG4gICAgICAgICAgICAnICAgPG1mLWRpYWxvZy1jb250ZW50IG5nLWNsaWNrPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+JyArXG4gICAgICAgICAgICAnICAgICAgIDxkaXYgY2xhc3M9XCJtZi1kaWFsb2ctaGVhZGVyXCI+JyArXG4gICAgICAgICAgICAnICAgICAgICAgICA8ZGl2IG5nLWlmPVwiISF0aXRsZVwiIGNsYXNzPVwibWYtdGl0bGVcIj57e3RpdGxlfX08L2Rpdj4nICtcbiAgICAgICAgICAgICcgICAgICAgPC9kaXY+JyArXG4gICAgICAgICAgICAnICAgICAgIDxkaXYgY2xhc3M9XCJtZi1kaWFsb2ctYm9keVwiPicgK1xuICAgICAgICAgICAgJyAgICAgICAgICAgPGRpdiBuZy1pZj1cIiFwcm9tcHRcIj57e3RleHRDb250ZW50fX08L2Rpdj4nICtcbiAgICAgICAgICAgICcgICAgICAgICAgIDxkaXYgbmctaWY9XCJwcm9tcHRcIj4nICtcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICA8bWYtaW5wdXQtY29udGFpbmVyPicgK1xuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVzcG9uc2VcIj57e3RleHRDb250ZW50fX08L2xhYmVsPicgK1xuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJyZXNwb25zZVwiIG5hbWU9XCJyZXNwb25zZVwiIHR5cGU9XCJ0ZXh0XCIgbmctbW9kZWw9XCJkYXRhLnJlc3BvbnNlXCI+JyArXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgPC9tZi1pbnB1dC1jb250YWluZXI+JyArXG4gICAgICAgICAgICAnICAgICAgICAgICA8L2Rpdj4nICtcbiAgICAgICAgICAgICcgICAgICAgPC9kaXY+JyArXG4gICAgICAgICAgICAnICAgICAgIDxkaXYgY2xhc3M9XCJtZi1hY3Rpb25zXCI+JyArXG4gICAgICAgICAgICAnICAgICAgICAgIDxtZi1idXR0b24gbmctaWY9XCIhIW9rVGV4dFwiIG5nLWNsaWNrPVwiY29uZmlybSgpXCI+e3tva1RleHR9fTwvbWYtYnV0dG9uPicgK1xuICAgICAgICAgICAgJyAgICAgICAgICA8bWYtYnV0dG9uIG5nLWlmPVwiISFjYW5jZWxUZXh0XCIgbmctY2xpY2s9XCJjYW5jZWwoKVwiPnt7Y2FuY2VsVGV4dH19PC9tZi1idXR0b24+JyArXG4gICAgICAgICAgICAnICAgICAgIDwvZGl2PicgK1xuICAgICAgICAgICAgJyAgICAgICA8bWYtYnV0dG9uIGNsYXNzPVwibWYtaWNvbi1idXR0b24gbWYtZGlhbG9nLWNsb3NlLWJ1dHRvblwiIG5nLWNsaWNrPVwiY2FuY2VsKClcIj4nICtcbiAgICAgICAgICAgICcgICAgICAgICAgIDxtZi1pY29uIGljb249XCJjbG9zZV90aGlja1wiPjwvbWYtaWNvbj4nICtcbiAgICAgICAgICAgICcgICAgICAgPC9tZi1idXR0b24+JyArXG4gICAgICAgICAgICAnICAgPC9tZi1kaWFsb2ctY29udGVudD4nICtcbiAgICAgICAgICAgICc8L21mLWRpYWxvZz4nO1xuXG4gICAgICAgIGxldCBzY29wZSA9IHRoaXMuJHJvb3RTY29wZS4kbmV3KHRydWUpO1xuXG4gICAgICAgIHNjb3BlWydjYW5jZWwnXSA9ICgpID0+IHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xuICAgICAgICAgICAgY29tcGlsZWREaWFsb2dFbGVtZW50LmRldGFjaCgpO1xuICAgICAgICB9O1xuICAgICAgICBzY29wZVsnY29uZmlybSddID0gKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gc2NvcGVbJ2RhdGEnXVsncmVzcG9uc2UnXTtcblxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICBjb21waWxlZERpYWxvZ0VsZW1lbnQuZGV0YWNoKCk7XG4gICAgICAgIH07XG4gICAgICAgIHNjb3BlWydkZWZlcnJlZCddID0gZGVmZXJyZWQ7XG4gICAgICAgIHNjb3BlWydjYW5jZWxUZXh0J10gPSBvcHRpb25zLmNhbmNlbDtcbiAgICAgICAgc2NvcGVbJ29rVGV4dCddID0gb3B0aW9ucy5vaztcbiAgICAgICAgc2NvcGVbJ29uU2NyaW1DbGlja2VkJ10gPSAoKSA9PiB7XG4gICAgICAgICAgICBzY29wZVsnY2FuY2VsJ10oKTtcbiAgICAgICAgfTtcbiAgICAgICAgc2NvcGVbJ3Byb21wdCddID0gb3B0aW9ucy5wcm9tcHQ7XG4gICAgICAgIHNjb3BlWydkYXRhJ10gPSB7IHJlc3BvbnNlOiBvcHRpb25zLnJlc3BvbnNlIH07XG4gICAgICAgIHNjb3BlWyd0ZXh0Q29udGVudCddID0gb3B0aW9ucy50ZXh0Q29udGVudDtcbiAgICAgICAgc2NvcGVbJ3RpdGxlJ10gPSBvcHRpb25zLnRpdGxlO1xuXG4gICAgICAgIGxldCBjb21waWxlZERpYWxvZ0VsZW1lbnQgPSB0aGlzLiRjb21waWxlKGRpYWxvZ0h0bWwpKHNjb3BlKTtcblxuICAgICAgICAvLyBJbnNlcnQgZWxlbWVudCBpbnRvIERPTVxuICAgICAgICBlbGVtZW50KHRoaXMuJGRvY3VtZW50LmZpbmQoJ2JvZHknKSkuYXBwZW5kKGNvbXBpbGVkRGlhbG9nRWxlbWVudCk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfVxuXG4gICAgcHJvbXB0KG9wdGlvbnM6IERpYWxvZ09wdGlvbnMpOiBJUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgb3B0aW9ucy5jYW5jZWwgPSBvcHRpb25zLmNhbmNlbCB8fCAnQ2FuY2VsJztcbiAgICAgICAgb3B0aW9ucy5vayA9IG9wdGlvbnMub2sgfHwgJ09LJztcbiAgICAgICAgb3B0aW9ucy5wcm9tcHQgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4ob3B0aW9ucyk7XG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLnNlcnZpY2UudHNcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJVHJhbnNjbHVkZUZ1bmN0aW9uIH0gZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcblxuQENvbXBvbmVudCh7XG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcbiAgICAgICAgJHRyYW5zY2x1ZGUoKGNsb25lOiBJQXVnbWVudGVkSlF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICAgIGJpbmRpbmdzOiB7XG4gICAgICAgIGljb246ICdAJ1xuICAgIH0sXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vaWNvbi5jb21wb25lbnQuaHRtbCcpXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICAkb25DaGFuZ2VzKCkge1xuXG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxpIG5nLWNsYXNzPVxcXCJbJ21mLWljb24nLCAnbWYtaWNvbi0nICsgJGN0cmwuaWNvbl1cXFwiPjwvaT5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XG5pbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJVHJhbnNjbHVkZUZ1bmN0aW9uIH0gZnJvbSAnYW5ndWxhcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2lucHV0LmNvbXBvbmVudC5odG1sJyksXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0Q29udGFpbmVyQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyR0cmFuc2NsdWRlJyBdO1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcbiAgICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiXCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XG5pbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJVHJhbnNjbHVkZUZ1bmN0aW9uIH0gZnJvbSAnYW5ndWxhcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2xpc3QuY29tcG9uZW50Lmh0bWwnKSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQge1xuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnJHRyYW5zY2x1ZGUnIF07XG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksICR0cmFuc2NsdWRlOiBJVHJhbnNjbHVkZUZ1bmN0aW9uKSB7XG4gICAgICAgICR0cmFuc2NsdWRlKChjbG9uZTogSUF1Z21lbnRlZEpRdWVyeSkgPT4ge1xuICAgICAgICAgICAgJGVsZW1lbnQuYXBwZW5kKGNsb25lKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICB0cmFuc2NsdWRlOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIExpc3RIZWFkZXJDb21wb25lbnQge1xuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnJHRyYW5zY2x1ZGUnIF07XG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksICR0cmFuc2NsdWRlOiBJVHJhbnNjbHVkZUZ1bmN0aW9uKSB7XG4gICAgICAgICR0cmFuc2NsdWRlKChjbG9uZTogSUF1Z21lbnRlZEpRdWVyeSkgPT4ge1xuICAgICAgICAgICAgJGVsZW1lbnQuYXBwZW5kKGNsb25lKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICB0cmFuc2NsdWRlOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIExpc3RJdGVtQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyR0cmFuc2NsdWRlJyBdO1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcbiAgICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCJcIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XG5pbXBvcnQgVG9nZ2xlU2VydmljZSBmcm9tICcuLi90b2dnbGUvdG9nZ2xlLnNlcnZpY2UnO1xuaW1wb3J0IHsgZWxlbWVudCwgSUF1Z21lbnRlZEpRdWVyeSwgSURvY3VtZW50U2VydmljZSwgSVRyYW5zY2x1ZGVGdW5jdGlvbiB9IGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHsgSVRvZ2dsZWFibGUgfSBmcm9tICcuLi90b2dnbGUvdG9nZ2xlLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBlbnVtIE1lbnVBbGlnbm1lbnQge1xuICAgIHN0YXJ0LFxuICAgIGNlbnRlcixcbiAgICBlbmRcbn1cblxuQENvbXBvbmVudCh7XG4gICAgYmluZGluZ3M6IHtcbiAgICAgICAgYWxpZ246ICdAJyxcbiAgICAgICAgbmFtZTogJ0AnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9tZW51LmNvbXBvbmVudC5odG1sJyksXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IGltcGxlbWVudHMgSVRvZ2dsZWFibGUge1xuICAgIGFsaWduOiBzdHJpbmc7XG4gICAgaG9yaXpvbnRhbEFsaWdubWVudDogTWVudUFsaWdubWVudDtcbiAgICB2ZXJ0aWNhbEFsaWdubWVudDogTWVudUFsaWdubWVudDtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgb3BlbjogYm9vbGVhbjtcblxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGRvY3VtZW50JywgJyRlbGVtZW50JywgJ01mVG9nZ2xlU2VydmljZScgXTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRkb2N1bWVudDogSURvY3VtZW50U2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlICRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdG9nZ2xlU2VydmljZTogVG9nZ2xlU2VydmljZSkge1xuICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgJGVsZW1lbnQuZGV0YWNoKCk7XG4gICAgICAgIGVsZW1lbnQoJGRvY3VtZW50LmZpbmQoJ2JvZHknKSkuYXBwZW5kKCRlbGVtZW50KTtcblxuICAgICAgICAkZWxlbWVudC5vbignY2xpY2snLCB0aGlzLmhpZGUuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgdGhpcy5ob3Jpem9udGFsQWxpZ25tZW50ID0gTWVudUFsaWdubWVudC5zdGFydDtcbiAgICAgICAgdGhpcy52ZXJ0aWNhbEFsaWdubWVudCA9IE1lbnVBbGlnbm1lbnQuc3RhcnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuYWxpZ24pIHtcbiAgICAgICAgICAgIGxldCB0b2tlbnMgPSB0aGlzLmFsaWduLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgICAgIGxldCBob3Jpem9udGFsQWxpZ25tZW50ID0gTWVudUFsaWdubWVudFt0b2tlbnNbMF1dO1xuICAgICAgICAgICAgbGV0IHZlcnRpY2FsQWxpZ25tZW50ID0gTWVudUFsaWdubWVudFt0b2tlbnNbMV1dO1xuXG4gICAgICAgICAgICB0aGlzLmhvcml6b250YWxBbGlnbm1lbnQgPSBob3Jpem9udGFsQWxpZ25tZW50IHx8IE1lbnVBbGlnbm1lbnQuc3RhcnQ7XG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsQWxpZ25tZW50ID0gdmVydGljYWxBbGlnbm1lbnQgfHwgTWVudUFsaWdubWVudC5zdGFydDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQub2ZmKCdjbGljaycpO1xuICAgIH1cblxuICAgICRvbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudG9nZ2xlU2VydmljZS5yZWdpc3Rlcih0aGlzKTtcbiAgICB9XG5cbiAgICBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKCdtZi1vcGVuJyk7XG4gICAgfVxuXG4gICAgc2hvdyhlbDogSUF1Z21lbnRlZEpRdWVyeSk6IHZvaWQge1xuICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xuXG4gICAgICAgIGxldCBib3VuZGluZ0NsaWVudFJlY3QgPSBlbFswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAvLyBUT0RPOiBkbyBzb21lIG1hdGhcbiAgICAgICAgdGhpcy4kZWxlbWVudC5maW5kKCdtZi1tZW51LWNvbnRlbnQnKVswXS5zdHlsZS5sZWZ0ID0gYm91bmRpbmdDbGllbnRSZWN0LmxlZnQgKyAncHgnO1xuICAgICAgICB0aGlzLiRlbGVtZW50LmZpbmQoJ21mLW1lbnUtY29udGVudCcpWzBdLnN0eWxlLnRvcCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5ib3R0b20gKyAncHgnO1xuXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoJ21mLW9wZW4nKTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHRyYW5zY2x1ZGU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgTWVudUZvb3RlckNvbXBvbmVudCB7XG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcbiAgICAgICAgJHRyYW5zY2x1ZGUoKGNsb25lOiBJQXVnbWVudGVkSlF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHRyYW5zY2x1ZGU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgTWVudUhlYWRlckNvbXBvbmVudCB7XG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcbiAgICAgICAgJHRyYW5zY2x1ZGUoKGNsb25lOiBJQXVnbWVudGVkSlF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPG1mLW1lbnUtY29udGVudCBuZy10cmFuc2NsdWRlIG5nLWNsaWNrPVxcXCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcXFwiPjwvbWYtbWVudS1jb250ZW50PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vbmF2LmNvbXBvbmVudC5odG1sJyksXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdkNvbXBvbmVudCB7fVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwibWYtbmF2LWNvbnRlbnRcXFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJTmdNb2RlbENvbnRyb2xsZXIsIElTY29wZSB9IGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICAgIGJpbmRpbmdzOiB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiAnQCdcbiAgICB9LFxuICAgIHJlcXVpcmU6IHtcbiAgICAgICAgbmdNb2RlbDogJ15uZ01vZGVsJ1xuICAgIH0sXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc2VhcmNoLWJveC5jb21wb25lbnQuaHRtbCcpXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQm94Q29tcG9uZW50IHtcbiAgICBuZ01vZGVsOiBJTmdNb2RlbENvbnRyb2xsZXI7XG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICB2YWx1ZTogc3RyaW5nO1xuXG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckc2NvcGUnIF07XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgcHJpdmF0ZSAkc2NvcGU6IElTY29wZSkge1xuICAgIH1cblxuICAgICRvbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIFNldCBkZWZhdWx0c1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlciB8fCAnU2VhcmNoJztcblxuICAgICAgICAvLyBJbml0aWFsaXplIG5nTW9kZWxcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLm5nTW9kZWwuJHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHNlbGYudmFsdWUgPSBzZWxmLm5nTW9kZWwuJHZpZXdWYWx1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLiRzY29wZS4kd2F0Y2goXG4gICAgICAgICAgICAoKTogc3RyaW5nID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAobmV3VmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYubmdNb2RlbC4kc2V0Vmlld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFySW5wdXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICBvbklucHV0S2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMjc6IC8vIEVTQ0FQRVxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxkaXYgY2xhc3M9XFxcIm1mLXNlYXJjaC1ib3gtY29udGVudFxcXCI+XFxuICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgYXV0b2NvbXBsZXRlPVxcXCJmYWxzZVxcXCJcXG4gICAgICAgICAgIG5nLW1vZGVsPVxcXCIkY3RybC52YWx1ZVxcXCJcXG4gICAgICAgICAgIG5nLWF0dHItcGxhY2Vob2xkZXI9XFxcInt7JGN0cmwucGxhY2Vob2xkZXJ9fVxcXCJcXG4gICAgICAgICAgIG5nLWtleWRvd249XFxcIiRjdHJsLm9uSW5wdXRLZXlEb3duKCRldmVudClcXFwiIC8+XFxuICAgIDxtZi1pY29uIGljb249XFxcInNlYXJjaF90aGlja1xcXCI+PC9tZi1pY29uPlxcbiAgICA8bWYtYnV0dG9uIGNsYXNzPVxcXCJtZi1pY29uLWJ1dHRvblxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLmNsZWFySW5wdXQoKVxcXCI+XFxuICAgICAgICA8bWYtaWNvbiBpY29uPVxcXCJjbG9zZV90aGlja1xcXCI+PC9tZi1pY29uPlxcbiAgICA8L21mLWJ1dHRvbj5cXG48L2Rpdj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XG5pbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5IH0gZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgeyBJVG9nZ2xlYWJsZSB9IGZyb20gJy4uL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlJztcbmltcG9ydCBUb2dnbGVTZXJ2aWNlIGZyb20gJy4uL3RvZ2dsZS90b2dnbGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIGJpbmRpbmdzOiB7XG4gICAgICAgIG5hbWU6ICdAJ1xuICAgIH0sXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc2lkZS1uYXYuY29tcG9uZW50Lmh0bWwnKSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZU5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIElUb2dnbGVhYmxlIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgb3BlbjogYm9vbGVhbjtcblxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyckZWxlbWVudCcsICdNZlRvZ2dsZVNlcnZpY2UnXTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCBwcml2YXRlIHRvZ2dsZVNlcnZpY2U6IFRvZ2dsZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgJG9uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50b2dnbGVTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMpO1xuICAgIH1cblxuICAgICRvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQub2ZmKCdjbGljaycpO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ21mLW9wZW4nKTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLiRlbGVtZW50LmFkZENsYXNzKCdtZi1vcGVuJyk7XG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJtZi1zY3JpbVxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLmhpZGUoKVxcXCI+PC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwibWYtc2lkZS1uYXYtY29udGVudFxcXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcbmltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnkgfSBmcm9tICdhbmd1bGFyJztcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vdGlsZS5jb21wb25lbnQuaHRtbCcpLFxuICAgIHRyYW5zY2x1ZGU6IHRydWVcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JyBdO1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5KSB7XG4gICAgICAgICRlbGVtZW50LmF0dHIoJ3RhYmluZGV4JywgMCk7XG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy90aWxlL3RpbGUuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy90aWxlL3RpbGUuY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxkaXYgY2xhc3M9XFxcIm1mLXRpbGUtY29udGVudFxcXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy90aWxlL3RpbGUuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XG5pbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJVHJhbnNjbHVkZUZ1bmN0aW9uIH0gZnJvbSAnYW5ndWxhcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHRyYW5zY2x1ZGU6IHRydWVcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlR3JpZENvbXBvbmVudCB7XG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcbiAgICAgICAgJHRyYW5zY2x1ZGUoKGNsb25lOiBJQXVnbWVudGVkSlF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3RpbGUtZ3JpZC90aWxlLWdyaWQuY29tcG9uZW50LnRzXG4gKiovIiwiaW1wb3J0IHsgSUF0dHJpYnV0ZXMsIElBdWdtZW50ZWRKUXVlcnksIElDb21waWxlU2VydmljZSwgSURpcmVjdGl2ZSwgSVNjb3BlIH0gZnJvbSAnYW5ndWxhcic7XG5cbmV4cG9ydCBjbGFzcyBTb3J0RGlyZWN0aXZlQ29udHJvbGxlciB7XG4gICAgc29ydEJpbmRpbmc6IHN0cmluZztcbiAgICBzb3J0RXhwcmVzc2lvbjogc3RyaW5nO1xuXG4gICAgc3RhdGljICRpbmplY3QgPSBbJyRzY29wZSddO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJHNjb3BlOiBJU2NvcGUpIHtcbiAgICB9XG5cbiAgICBzb3J0T24oc29ydE9uUHJvcGVydHk6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5zb3J0RXhwcmVzc2lvbiA9PT0gc29ydE9uUHJvcGVydHkpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydEV4cHJlc3Npb24gPSAnLScgKyBzb3J0T25Qcm9wZXJ0eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc29ydEV4cHJlc3Npb24gPSBzb3J0T25Qcm9wZXJ0eTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJHNjb3BlLiRldmFsKHRoaXMuc29ydEJpbmRpbmcgKyAnPVwiJyArIHRoaXMuc29ydEV4cHJlc3Npb24gKyAnXCInKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTb3J0RGlyZWN0aXZlKCk6IElEaXJlY3RpdmUge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRyb2xsZXI6IFNvcnREaXJlY3RpdmVDb250cm9sbGVyLFxuICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICBsaW5rOiAoc2NvcGU6IElTY29wZSxcbiAgICAgICAgICAgICAgIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksXG4gICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBJQXR0cmlidXRlcyxcbiAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFNvcnREaXJlY3RpdmVDb250cm9sbGVyKSA9PiB7XG4gICAgICAgICAgICBjb250cm9sbGVyLnNvcnRCaW5kaW5nID0gYXR0cmlidXRlc1snbWZTb3J0J107XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5pbnRlcmZhY2UgSVNvcnRPblNjb3BlIGV4dGVuZHMgSVNjb3BlIHtcbiAgICBnZXRTb3J0RXhwcmVzc2lvbigpOiBzdHJpbmc7XG4gICAgc29ydE9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTb3J0T25EaXJlY3RpdmUoJGNvbXBpbGU6IElDb21waWxlU2VydmljZSk6IElEaXJlY3RpdmUge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlcXVpcmU6ICdebWZTb3J0JyxcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICdzb3J0T24nOiAnPG1mU29ydE9uJ1xuICAgICAgICB9LFxuICAgICAgICBsaW5rOiAoc2NvcGU6IElTb3J0T25TY29wZSxcbiAgICAgICAgICAgICAgIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksXG4gICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBJQXR0cmlidXRlcyxcbiAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFNvcnREaXJlY3RpdmVDb250cm9sbGVyKSA9PiB7XG4gICAgICAgICAgICBzY29wZS5nZXRTb3J0RXhwcmVzc2lvbiA9ICgpOiBzdHJpbmcgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250cm9sbGVyLnNvcnRFeHByZXNzaW9uO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gQWRkIHNvcnQgaWNvbnNcbiAgICAgICAgICAgIGxldCBpY29uSHRtbCA9XG4gICAgICAgICAgICAgICAgJzxtZi1pY29uIGljb249XCJkb3duX3RoaWNrXCIgbmctaWY9XCJnZXRTb3J0RXhwcmVzc2lvbigpID09IFxcJycgKyBzY29wZS5zb3J0T24gKyAnXFwnXCI+PC9tZi1pY29uPicgK1xuICAgICAgICAgICAgICAgICc8bWYtaWNvbiBpY29uPVwidXBfdGhpY2tcIiBuZy1pZj1cImdldFNvcnRFeHByZXNzaW9uKCkgPT0gXFwnLScgKyBzY29wZS5zb3J0T24gKyAnXFwnXCI+PC9tZi1pY29uPic7XG4gICAgICAgICAgICBsZXQgaWNvbkVsZW1lbnQgPSAkY29tcGlsZShpY29uSHRtbCkoc2NvcGUpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmQoaWNvbkVsZW1lbnQpO1xuXG4gICAgICAgICAgICAvLyBBZGQgbWYtc29ydGFibGUgY2xhc3NcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ21mLXNvcnRhYmxlJyk7XG5cbiAgICAgICAgICAgIC8vIFJlZ2lzdGVyIGNsaWNrIGhhbmRsZXJcbiAgICAgICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNjb3BlLiRhcHBseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuc29ydE9uKHNjb3BlWydzb3J0T24nXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cblNvcnRPbkRpcmVjdGl2ZS4kaW5qZWN0ID0gWyckY29tcGlsZSddO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy90YWJsZS9zb3J0LmRpcmVjdGl2ZS50c1xuICoqLyIsImltcG9ydCB7IElBdHRyaWJ1dGVzLCBJQXVnbWVudGVkSlF1ZXJ5LCBJRGlyZWN0aXZlLCBJU2NvcGUgfSBmcm9tICdhbmd1bGFyJztcbmltcG9ydCBUb2dnbGVTZXJ2aWNlIGZyb20gJy4vdG9nZ2xlLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUb2dnbGVhYmxlIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgb3BlbjogYm9vbGVhbjtcblxuICAgIGhpZGUoKTogdm9pZDtcbiAgICBzaG93KGVsZW1lbnQ/OiBJQXVnbWVudGVkSlF1ZXJ5KTogdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRvZ2dsZURpcmVjdGl2ZSh0b2dnbGVTZXJ2aWNlOiBUb2dnbGVTZXJ2aWNlKTogSURpcmVjdGl2ZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGluazogKHNjb3BlOiBJU2NvcGUsIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksIGF0dHJzOiBJQXR0cmlidXRlcykgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCAoKSA9PiB7IHRvZ2dsZVNlcnZpY2UudG9nZ2xlQ29tcG9uZW50KGF0dHJzWydtZlRvZ2dsZSddLCBlbGVtZW50KTsgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc3RyaWN0OiAnQSdcbiAgICB9O1xufVxuXG5Ub2dnbGVEaXJlY3RpdmUuJGluamVjdCA9IFsgJ01mVG9nZ2xlU2VydmljZScgXTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvdG9nZ2xlL3RvZ2dsZS5kaXJlY3RpdmUudHNcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5IH0gZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgeyBJVG9nZ2xlYWJsZSB9IGZyb20gJy4vdG9nZ2xlLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZ2dsZVNlcnZpY2Uge1xuICAgIHByaXZhdGUgdG9nZ2xlYWJsZUNvbXBvbmVudHM6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZWFibGVDb21wb25lbnRzID0ge307XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIodG9nZ2xlYWJsZUNvbXBvbmVudDogSVRvZ2dsZWFibGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50b2dnbGVhYmxlQ29tcG9uZW50c1t0b2dnbGVhYmxlQ29tcG9uZW50Lm5hbWVdID0gdG9nZ2xlYWJsZUNvbXBvbmVudDtcbiAgICB9XG5cbiAgICB0b2dnbGVDb21wb25lbnQoY29tcG9uZW50SWQ6IHN0cmluZywgZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSk6IHZvaWQge1xuICAgICAgICBsZXQgdG9nZ2xlYWJsZUVsZW1lbnQ6IElUb2dnbGVhYmxlID0gdGhpcy50b2dnbGVhYmxlQ29tcG9uZW50c1tjb21wb25lbnRJZF07XG5cbiAgICAgICAgaWYgKHRvZ2dsZWFibGVFbGVtZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdG9nZ2xlYWJsZUVsZW1lbnQub3Blbikge1xuICAgICAgICAgICAgdG9nZ2xlYWJsZUVsZW1lbnQuc2hvdyhlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvZ2dsZWFibGVFbGVtZW50LmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvdG9nZ2xlL3RvZ2dsZS5zZXJ2aWNlLnRzXG4gKiovIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7QUM3Q0E7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7OztBQ05BO0FBTUE7QUFVQTtBQUNBO0FBWEE7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQVFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFGQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNGQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUpBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBYkE7QUFlQTs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7O0FDTkE7QUFtQkE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUExRkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFEQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBUUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFSQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFEQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUVBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQWpEQTtBQVBBO0FBUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUE2REE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBREE7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBWUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBREE7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFXQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBbENBO0FBTEE7QUFUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFZQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBcEJBO0FBSkE7QUFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBREE7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7O0FDSkE7QUFLQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBZEE7QUFKQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQ0E7QUFtQ0E7Ozs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTs7Ozs7Ozs7O0FDakJBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9