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
	var icon_input_component_1 = __webpack_require__(14);
	var input_component_1 = __webpack_require__(16);
	var int_input_component_1 = __webpack_require__(18);
	var list_component_1 = __webpack_require__(20);
	var menu_component_1 = __webpack_require__(22);
	var nav_component_1 = __webpack_require__(24);
	var resizing_textarea_component_1 = __webpack_require__(26);
	var search_box_component_1 = __webpack_require__(28);
	var side_nav_component_1 = __webpack_require__(30);
	var tile_component_1 = __webpack_require__(32);
	var tile_grid_component_1 = __webpack_require__(34);
	var sort_directive_1 = __webpack_require__(35);
	var toggle_directive_1 = __webpack_require__(36);
	var toggle_service_1 = __webpack_require__(37);
	angular_1.module('ng-mfux', [])
	    .constant('MENU_MARGIN', 24)
	    .component('mfAppBar', app_bar_component_1.default)
	    .component('mfAvatar', avatar_component_1.default)
	    .directive('mfButton', button_component_1.default)
	    .directive('mfIntInput', int_input_component_1.default)
	    .directive('mfIconInput', icon_input_component_1.default)
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
	    .directive('mfResizingTextarea', resizing_textarea_component_1.default)
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
	var html = "<button class=\"mf-button\" ng-transclude>\r\n</button>";
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
	    DialogService.prototype.open = function (options, dialogHtml) {
	        if (dialogHtml === void 0) { dialogHtml = null; }
	        var deferred = this.$q.defer();
	        if (dialogHtml === null) {
	            dialogHtml =
	                '<mf-dialog ng-click="onScrimClicked()">' +
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
	        }
	        var scope = this.$rootScope.$new(true);
	        scope['$ctrl'] = options.controller;
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
	    return IconComponent;
	}());
	IconComponent = __decorate([
	    component_decorator_1.Component({
	        bindings: {
	            icon: '@',
	            svgIcon: '@'
	        },
	        templateUrl: __webpack_require__(13)
	    })
	], IconComponent);
	exports.default = IconComponent;
	

/***/ },
/* 13 */
/***/ function(module, exports) {

	var path = 'components/icon/icon.component.html';
	var html = "<i ng-if=\"$ctrl.icon\" ng-class=\"['mf-icon', 'mf-icon-' + $ctrl.icon]\"></i>\r\n<img ng-if=\"!$ctrl.icon\" class=\"svg-icon\" ng-src=\"{{$ctrl.svgIcon}}\" ng-attr-alt=\"{{$ctrl.svgIcon}}\"/>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var templateUrl = __webpack_require__(15);
	var IconInputController = (function () {
	    function IconInputController($scope) {
	        this.$scope = $scope;
	    }
	    return IconInputController;
	}());
	IconInputController.$inject = ['$scope'];
	exports.IconInputController = IconInputController;
	function IconInputDirective() {
	    return {
	        controller: IconInputController,
	        restrict: 'E',
	        templateUrl: templateUrl,
	        transclude: true,
	        replace: true,
	        scope: {
	            model: '=ngModel',
	            min: '=',
	            max: '='
	        },
	        link: function (scope, element, attributes, controller) {
	            scope.icon = element.attr('icon');
	            scope.placeholder = element.attr('placeholder');
	        }
	    };
	}
	exports.default = IconInputDirective;
	IconInputController.$inject = ['$compile'];
	

/***/ },
/* 15 */
/***/ function(module, exports) {

	var path = 'components/input/icon.input.component.html';
	var html = "<span class=\"mf-icon-input-container\">\r\n    <input type=\"text\" placeholder=\"{{placeholder}}\">\r\n    <mf-icon icon=\"{{icon}}\"></mf-icon>\r\n</span>";
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
	        templateUrl: __webpack_require__(17),
	        transclude: true
	    })
	], InputContainerComponent);
	exports.default = InputContainerComponent;
	

/***/ },
/* 17 */
/***/ function(module, exports) {

	var path = 'components/input/input.component.html';
	var html = "";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var templateUrl = __webpack_require__(19);
	var IntInputController = (function () {
	    function IntInputController($scope) {
	        this.$scope = $scope;
	    }
	    return IntInputController;
	}());
	IntInputController.$inject = ['$scope'];
	exports.IntInputController = IntInputController;
	function IntInputDirective() {
	    return {
	        controller: IntInputController,
	        restrict: 'E',
	        templateUrl: templateUrl,
	        transclude: true,
	        replace: true,
	        scope: {
	            model: '=ngModel',
	            min: '=',
	            max: '='
	        },
	        link: function (scope, element, attributes, controller) {
	            if (!controller) {
	                return;
	            }
	            var isValid = function (val) {
	                if ('undefined' === typeof val || val === '') {
	                    element.removeClass('inputError');
	                    return;
	                }
	                if (isNaN(Number(val))) {
	                    element.addClass('inputError');
	                }
	                else {
	                    if (scope.max && val > scope.max) {
	                        element.addClass('inputError');
	                        return;
	                    }
	                    else if (scope.min && val < scope.min) {
	                        element.addClass('inputError');
	                        return;
	                    }
	                    element.removeClass('inputError');
	                }
	            };
	            scope.$watch('model', function (newValue, oldValue) {
	                isValid(newValue);
	            });
	            element.bind('input', function (event) {
	                isValid(element.val());
	            });
	        }
	    };
	}
	exports.default = IntInputDirective;
	IntInputController.$inject = ['$compile'];
	

/***/ },
/* 19 */
/***/ function(module, exports) {

	var path = 'components/input/int.input.component.html';
	var html = "<input type=\"text\" class=\"mfIntInput\" ng-transclude>\r\n</input>";
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
	        templateUrl: __webpack_require__(21),
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
/* 21 */
/***/ function(module, exports) {

	var path = 'components/list/list.component.html';
	var html = "";
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
	var angular_1 = __webpack_require__(1);
	var HorizontalAlignment;
	(function (HorizontalAlignment) {
	    HorizontalAlignment[HorizontalAlignment["start"] = 0] = "start";
	    HorizontalAlignment[HorizontalAlignment["center"] = 1] = "center";
	    HorizontalAlignment[HorizontalAlignment["end"] = 2] = "end";
	})(HorizontalAlignment = exports.HorizontalAlignment || (exports.HorizontalAlignment = {}));
	var VerticalAlignment;
	(function (VerticalAlignment) {
	    VerticalAlignment[VerticalAlignment["top"] = 0] = "top";
	    VerticalAlignment[VerticalAlignment["center"] = 1] = "center";
	    VerticalAlignment[VerticalAlignment["bottom"] = 2] = "bottom";
	})(VerticalAlignment = exports.VerticalAlignment || (exports.VerticalAlignment = {}));
	var MenuComponent = (function () {
	    function MenuComponent($document, $element, $window, toggleService, MENU_MARGIN) {
	        this.$document = $document;
	        this.$element = $element;
	        this.$window = $window;
	        this.toggleService = toggleService;
	        this.MENU_MARGIN = MENU_MARGIN;
	        this.open = false;
	        $element.detach();
	        angular_1.element($document.find('body')).append($element);
	        $element.on('click', this.hide.bind(this));
	        this.horizontalAlignment = HorizontalAlignment.start;
	        this.verticalAlignment = VerticalAlignment.top;
	    }
	    MenuComponent.prototype.$onDestroy = function () {
	        this.$element.off('click');
	    };
	    MenuComponent.prototype.$onInit = function () {
	        if (this.align) {
	            var tokens = this.align.split(' ');
	            var horizontalAlignment = HorizontalAlignment[tokens[0]];
	            var verticalAlignment = VerticalAlignment[tokens[1]];
	            this.horizontalAlignment = horizontalAlignment || HorizontalAlignment.start;
	            this.verticalAlignment = verticalAlignment || VerticalAlignment.top;
	        }
	        this.toggleService.register(this);
	    };
	    MenuComponent.prototype.hide = function () {
	        this.open = false;
	        this.$element.removeClass('mf-open');
	    };
	    MenuComponent.prototype.show = function (targetElement) {
	        this.open = true;
	        this.$element.addClass('mf-open');
	        this.showMenuContent(targetElement[0]);
	    };
	    MenuComponent.prototype.getLayoutDirection = function () {
	        return window.getComputedStyle(this.$element[0], null).getPropertyValue('direction');
	    };
	    MenuComponent.prototype.numberToPixels = function (num) {
	        return (num === null) ? null : num + 'px';
	    };
	    MenuComponent.prototype.showMenuContent = function (targetElement) {
	        var menuContentElement = this.$element.find('mf-menu-content')[0];
	        var isLtrLayout = this.getLayoutDirection() !== 'rtl';
	        menuContentElement.style.bottom =
	            menuContentElement.style.left =
	                menuContentElement.style.right =
	                    menuContentElement.style.top = null;
	        var menuBoundingBox = this.$element[0].getBoundingClientRect();
	        var menuContentBoundingBox = menuContentElement.getBoundingClientRect();
	        var targetElementBoundingBox = targetElement.getBoundingClientRect();
	        var bottom = null, left = null, right = null, top = null;
	        if (menuContentBoundingBox.width + (2 * this.MENU_MARGIN) > menuBoundingBox.width) {
	            left = this.MENU_MARGIN;
	            right = this.MENU_MARGIN;
	        }
	        else {
	            switch (this.horizontalAlignment) {
	                case HorizontalAlignment.start:
	                    if (isLtrLayout) {
	                        left = targetElementBoundingBox.left;
	                    }
	                    else {
	                        left = targetElementBoundingBox.right - menuContentBoundingBox.width;
	                    }
	                    break;
	                case HorizontalAlignment.center:
	                    left = targetElementBoundingBox.left +
	                        ((targetElementBoundingBox.width - menuContentBoundingBox.width) / 2);
	                    break;
	                case HorizontalAlignment.end:
	                    if (isLtrLayout) {
	                        left = targetElementBoundingBox.left +
	                            (targetElementBoundingBox.width - menuContentBoundingBox.width);
	                    }
	                    else {
	                        left = targetElementBoundingBox.left;
	                    }
	                    break;
	            }
	            left -= menuBoundingBox.left;
	            left = Math.max(left, this.MENU_MARGIN);
	            if (left + menuContentBoundingBox.width > menuBoundingBox.width) {
	                left = null;
	                right = this.MENU_MARGIN;
	            }
	        }
	        menuContentElement.style.left = this.numberToPixels(left);
	        menuContentElement.style.right = this.numberToPixels(right);
	        menuContentBoundingBox = menuContentElement.getBoundingClientRect();
	        if (menuContentBoundingBox.height + (2 * this.MENU_MARGIN) > menuBoundingBox.height) {
	            top = this.MENU_MARGIN;
	            bottom = this.MENU_MARGIN;
	        }
	        else {
	            switch (this.verticalAlignment) {
	                case VerticalAlignment.top:
	                    top = targetElementBoundingBox.bottom;
	                    break;
	                case VerticalAlignment.center:
	                    top = targetElementBoundingBox.top +
	                        ((targetElementBoundingBox.height - menuContentBoundingBox.height) / 2);
	                    break;
	                case VerticalAlignment.bottom:
	                    top = (targetElementBoundingBox.top - menuContentBoundingBox.height);
	                    break;
	            }
	            top -= menuBoundingBox.top;
	            top = Math.max(top, this.MENU_MARGIN);
	            if (top + menuContentBoundingBox.height > menuBoundingBox.height) {
	                top = null;
	                bottom = this.MENU_MARGIN;
	            }
	        }
	        menuContentElement.style.top = this.numberToPixels(top);
	        menuContentElement.style.bottom = this.numberToPixels(bottom);
	    };
	    return MenuComponent;
	}());
	MenuComponent.$inject = ['$document', '$element', '$window', 'MfToggleService', 'MENU_MARGIN'];
	MenuComponent = __decorate([
	    component_decorator_1.Component({
	        bindings: {
	            align: '@mfAlign',
	            name: '@'
	        },
	        templateUrl: __webpack_require__(23),
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
/* 23 */
/***/ function(module, exports) {

	var path = 'components/menu/menu.component.html';
	var html = "<mf-menu-content ng-transclude ng-click=\"$event.stopPropagation()\"></mf-menu-content>";
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
	var NavComponent = (function () {
	    function NavComponent() {
	    }
	    return NavComponent;
	}());
	NavComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(25),
	        transclude: true
	    })
	], NavComponent);
	exports.default = NavComponent;
	

/***/ },
/* 25 */
/***/ function(module, exports) {

	var path = 'components/nav/nav.component.html';
	var html = "<div class=\"mf-nav-content\" ng-transclude></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var templateUrl = __webpack_require__(27);
	var ResizingTextareaController = (function () {
	    function ResizingTextareaController($scope) {
	        this.$scope = $scope;
	    }
	    return ResizingTextareaController;
	}());
	ResizingTextareaController.$inject = ['$scope'];
	exports.ResizingTextareaController = ResizingTextareaController;
	function ResizingTextareaDirective() {
	    return {
	        controller: ResizingTextareaController,
	        restrict: 'E',
	        templateUrl: templateUrl,
	        transclude: true,
	        replace: true,
	        scope: {
	            model: '=ngModel'
	        },
	        link: function (scope, element, attributes, controller) {
	            if (!controller) {
	                return;
	            }
	            if (element.attr('min-rows')) {
	                var minRows = element.attr('min-rows');
	                if (minRows.indexOf(' ') > -1) {
	                    element.attr('min-rows', minRows.slice(0, minRows.indexOf(' ')));
	                }
	            }
	            var tmpVal = element.val();
	            element.val('');
	            var baseScrollHeight = element[0].scrollHeight;
	            element.val(tmpVal);
	            element.css('overflow-y', 'hidden');
	            element.css('font-size', '15px');
	            var resize = function () {
	                var minRows = 0;
	                if (element.attr('min-rows')) {
	                    minRows = Number(element.attr('min-rows'));
	                }
	                element.attr('rows', minRows);
	                var rows = Math.ceil((element[0].scrollHeight - baseScrollHeight) / 18) + minRows;
	                element.attr('rows', rows);
	            };
	            scope.$watch('model', function (newValue, oldValue) {
	                resize();
	            });
	            element.bind('input', function (event) {
	                resize();
	            });
	        }
	    };
	}
	exports.default = ResizingTextareaDirective;
	ResizingTextareaController.$inject = ['$compile'];
	

/***/ },
/* 27 */
/***/ function(module, exports) {

	var path = 'components/input/resizing.textarea.component.html';
	var html = "<textarea ng-transclude class=\"mfResizingTextArea\" rows=\"3\" min-rows=\"3\"></textarea>";
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
	        templateUrl: __webpack_require__(29)
	    })
	], SearchBoxComponent);
	exports.default = SearchBoxComponent;
	

/***/ },
/* 29 */
/***/ function(module, exports) {

	var path = 'components/search-box/search-box.component.html';
	var html = "<div class=\"mf-search-box-content\">\r\n    <input type=\"text\"\r\n           autocomplete=\"false\"\r\n           ng-model=\"$ctrl.value\"\r\n           ng-attr-placeholder=\"{{$ctrl.placeholder}}\"\r\n           ng-keydown=\"$ctrl.onInputKeyDown($event)\" />\r\n    <mf-icon icon=\"search_thick\"></mf-icon>\r\n    <mf-button class=\"mf-icon-button\" ng-click=\"$ctrl.clearInput()\">\r\n        <mf-icon icon=\"close_thick\"></mf-icon>\r\n    </mf-button>\r\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 30 */
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
	        templateUrl: __webpack_require__(31),
	        transclude: true
	    })
	], SideNavComponent);
	exports.default = SideNavComponent;
	

/***/ },
/* 31 */
/***/ function(module, exports) {

	var path = 'components/side-nav/side-nav.component.html';
	var html = "<div class=\"mf-scrim\" ng-click=\"$ctrl.hide()\"></div>\r\n<div class=\"mf-side-nav-content\" ng-transclude></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 32 */
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
	        templateUrl: __webpack_require__(33),
	        transclude: true
	    })
	], TileComponent);
	exports.default = TileComponent;
	

/***/ },
/* 33 */
/***/ function(module, exports) {

	var path = 'components/tile/tile.component.html';
	var html = "<div class=\"mf-tile-content\" ng-transclude></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 34 */
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
/* 35 */
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
/* 36 */
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
/* 37 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbWZ1eC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzMTNiMTc3OTg0NzM3YTFhOGVhNyIsIndlYnBhY2s6Ly8vLi9zcmMvbmctbWZ1eC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC5kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaWNvbi5pbnB1dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaWNvbi5pbnB1dC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW50LmlucHV0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pbnQuaW5wdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC9yZXNpemluZy50ZXh0YXJlYS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvcmVzaXppbmcudGV4dGFyZWEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpbGUvdGlsZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGlsZS90aWxlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpbGUtZ3JpZC90aWxlLWdyaWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYmxlL3NvcnQuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDMxM2IxNzc5ODQ3MzdhMWE4ZWE3XG4gKiovIiwiaW1wb3J0IHsgbW9kdWxlIH0gZnJvbSAnYW5ndWxhcic7XHJcbmltcG9ydCBBcHBCYXJDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgQXZhdGFyQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCBCdXR0b25EaXJlY3RpdmUgZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IERpYWxvZ0NvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgRGlhbG9nU2VydmljZSBmcm9tICcuL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5zZXJ2aWNlJztcclxuaW1wb3J0IEhlYWRlckNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgSWNvbkNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudCc7XHJcbmltcG9ydCBJY29uSW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L2ljb24uaW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IElucHV0Q29udGFpbmVyQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgSW50SW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L2ludC5pbnB1dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50LCBMaXN0SGVhZGVyQ29tcG9uZW50LCBMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWVudUNvbXBvbmVudCwgTWVudUZvb3RlckNvbXBvbmVudCwgTWVudUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IE5hdkNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQnO1xyXG5pbXBvcnQgUmVzaXppbmdUZXh0YXJlYUNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvcmVzaXppbmcudGV4dGFyZWEuY29tcG9uZW50JztcclxuaW1wb3J0IFNlYXJjaEJveENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCBTaWRlTmF2Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQnO1xyXG5pbXBvcnQgVGlsZUNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvdGlsZS90aWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCBUaWxlR3JpZENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvdGlsZS1ncmlkL3RpbGUtZ3JpZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3J0RGlyZWN0aXZlLCBTb3J0T25EaXJlY3RpdmUgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUvc29ydC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUb2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL2NvbXBvbmVudHMvdG9nZ2xlL3RvZ2dsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgVG9nZ2xlU2VydmljZSBmcm9tICcuL2NvbXBvbmVudHMvdG9nZ2xlL3RvZ2dsZS5zZXJ2aWNlJztcclxuXHJcbm1vZHVsZSgnbmctbWZ1eCcsIFtdKVxyXG4gICAgLmNvbnN0YW50KCdNRU5VX01BUkdJTicsIDI0KVxyXG4gICAgLmNvbXBvbmVudCgnbWZBcHBCYXInLCBBcHBCYXJDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdtZkF2YXRhcicsIEF2YXRhckNvbXBvbmVudClcclxuICAgIC5kaXJlY3RpdmUoJ21mQnV0dG9uJywgQnV0dG9uRGlyZWN0aXZlKVxyXG4gICAgLmRpcmVjdGl2ZSgnbWZJbnRJbnB1dCcsIEludElucHV0KVxyXG4gICAgLmRpcmVjdGl2ZSgnbWZJY29uSW5wdXQnLCBJY29uSW5wdXQpXHJcbiAgICAuY29tcG9uZW50KCdtZkRpYWxvZycsIERpYWxvZ0NvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ21mSGVhZGVyJywgSGVhZGVyQ29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnbWZJY29uJywgSWNvbkNvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ21mSW5wdXRDb250YWluZXInLCBJbnB1dENvbnRhaW5lckNvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ21mTGlzdCcsIExpc3RDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdtZkxpc3RIZWFkZXInLCBMaXN0SGVhZGVyQ29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnbWZMaXN0SXRlbScsIExpc3RJdGVtQ29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnbWZNZW51JywgTWVudUNvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ21mRm9vdGVyTWVudScsIE1lbnVGb290ZXJDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdtZkhlYWRlck1lbnUnLCBNZW51SGVhZGVyQ29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnbWZOYXYnLCBOYXZDb21wb25lbnQpXHJcbiAgICAuZGlyZWN0aXZlKCdtZlJlc2l6aW5nVGV4dGFyZWEnLCBSZXNpemluZ1RleHRhcmVhQ29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnbWZTZWFyY2hCb3gnLCBTZWFyY2hCb3hDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdtZlNpZGVOYXYnLCBTaWRlTmF2Q29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnbWZUaWxlJywgVGlsZUNvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ21mVGlsZUdyaWQnLCBUaWxlR3JpZENvbXBvbmVudClcclxuXHJcbiAgICAuZGlyZWN0aXZlKCdtZlRvZ2dsZScsIFRvZ2dsZURpcmVjdGl2ZSlcclxuICAgIC5kaXJlY3RpdmUoJ21mU29ydCcsIFNvcnREaXJlY3RpdmUpXHJcbiAgICAuZGlyZWN0aXZlKCdtZlNvcnRPbicsIFNvcnRPbkRpcmVjdGl2ZSlcclxuXHJcbiAgICAuc2VydmljZSgnTWZEaWFsb2dTZXJ2aWNlJywgRGlhbG9nU2VydmljZSlcclxuICAgIC5zZXJ2aWNlKCdNZlRvZ2dsZVNlcnZpY2UnLCBUb2dnbGVTZXJ2aWNlKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbmctbWZ1eC5tb2R1bGUudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImFuZ3VsYXJcIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9hcHAtYmFyLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcEJhckNvbXBvbmVudCB7fVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQudHNcbiAqKi8iLCJpbXBvcnQgeyBleHRlbmQsIElBdWdtZW50ZWRKUXVlcnksIElBdHRyaWJ1dGVzfSBmcm9tICdhbmd1bGFyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRlbnRUZW1wbGF0ZUZ1bmN0aW9uIHtcclxuICAgICgkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJGF0dHJzPzogSUF0dHJpYnV0ZXMpOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb21wb25lbnQob3B0aW9uczoge1xyXG4gICAgYmluZGluZ3M/OiBhbnksXHJcbiAgICBiaW5kVG9Db250cm9sbGVyPzogYm9vbGVhbixcclxuICAgIGNvbnRyb2xsZXJBcz86IHN0cmluZyxcclxuICAgIHJlcXVpcmU/OiBhbnk7XHJcbiAgICB0ZW1wbGF0ZT86IChzdHJpbmcgfCBhbnlbXSB8IElDb250ZW50VGVtcGxhdGVGdW5jdGlvbiksXHJcbiAgICB0ZW1wbGF0ZVVybD86IHN0cmluZyxcclxuICAgIHRyYW5zY2x1ZGU/OiAoYm9vbGVhbiB8IHN0cmluZyksXHJcbiAgICBzdHlsZXNoZWV0VXJsPzogc3RyaW5nXHJcbn0pIHtcclxuICAgIHJldHVybiAoY29udHJvbGxlcjogRnVuY3Rpb24pID0+IGV4dGVuZChvcHRpb25zLCB7IGNvbnRyb2xsZXI6IGNvbnRyb2xsZXIgfSk7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50LmRlY29yYXRvci50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJtZi1hcHAtYmFyLWNvbnRlbnRcXFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgICdzcmMnOiAnPCdcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9hdmF0YXIuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdmF0YXJDb21wb25lbnQge1xyXG4gICAgc3JjOiBzdHJpbmc7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvYXZhdGFyL2F2YXRhci5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwibWYtYXZhdGFyLWNvbnRlbnRcXFwiIG5nLXN0eWxlPVxcXCJ7ICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgJGN0cmwuc3JjICsgJyknIH1cXFwiPjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJQ29tcGlsZVNlcnZpY2UsIElEaXJlY3RpdmUsIElTY29wZSwgSUF0dHJpYnV0ZXMgfSBmcm9tICdhbmd1bGFyJztcclxubGV0IHRlbXBsYXRlVXJsID0gcmVxdWlyZSgnY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sJyk7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29udHJvbGxlciB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsnJHNjb3BlJ107XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRzY29wZTogSVNjb3BlKSB7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25EaXJlY3RpdmUoKTogSURpcmVjdGl2ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnRyb2xsZXI6IEJ1dHRvbkNvbnRyb2xsZXIsXHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogdGVtcGxhdGVVcmwsXHJcbiAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcclxuICAgICAgICByZXBsYWNlOiB0cnVlLFxyXG4gICAgICAgIGxpbms6IChzY29wZTogSVNjb3BlLFxyXG4gICAgICAgICAgICAgICBlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LFxyXG4gICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBJQXR0cmlidXRlcyxcclxuICAgICAgICAgICAgICAgY29udHJvbGxlcjogQnV0dG9uQ29udHJvbGxlcikgPT4ge1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbkJ1dHRvbkRpcmVjdGl2ZS4kaW5qZWN0ID0gWyckY29tcGlsZSddO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8YnV0dG9uIGNsYXNzPVxcXCJtZi1idXR0b25cXFwiIG5nLXRyYW5zY2x1ZGU+XFxyXFxuPC9idXR0b24+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnksIElUcmFuc2NsdWRlRnVuY3Rpb24gfSBmcm9tICdhbmd1bGFyJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnJHRyYW5zY2x1ZGUnIF07XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcclxuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuYXBwZW5kKGNsb25lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnRzXG4gKiovIiwiaW1wb3J0IHtcclxuICAgIGVsZW1lbnQsXHJcbiAgICBJQ29tcGlsZVNlcnZpY2UsXHJcbiAgICBJQ29udHJvbGxlclNlcnZpY2UsXHJcbiAgICBJRG9jdW1lbnRTZXJ2aWNlLFxyXG4gICAgSVByb21pc2UsXHJcbiAgICBJUVNlcnZpY2UsXHJcbiAgICBJUm9vdFNjb3BlU2VydmljZSxcclxuICAgIElUZW1wbGF0ZUNhY2hlU2VydmljZSB9IGZyb20gJ2FuZ3VsYXInO1xyXG5cclxuaW50ZXJmYWNlIERpYWxvZ09wdGlvbnMge1xyXG4gICAgY2FuY2VsOiBzdHJpbmc7XHJcbiAgICBjb250cm9sbGVyOiBhbnk7XHJcbiAgICBvazogc3RyaW5nO1xyXG4gICAgcHJvbXB0OiBib29sZWFuO1xyXG4gICAgcmVzcG9uc2U6IHN0cmluZztcclxuICAgIHRleHRDb250ZW50OiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2dTZXJ2aWNlIHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGNvbXBpbGUnLCAnJGNvbnRyb2xsZXInLCAnJGRvY3VtZW50JywgJyRxJywgJyRyb290U2NvcGUnLCAnJHRlbXBsYXRlQ2FjaGUnIF07XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRjb21waWxlOiBJQ29tcGlsZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlICRjb250cm9sbGVyOiBJQ29udHJvbGxlclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlICRkb2N1bWVudDogSURvY3VtZW50U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgJHE6IElRU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgJHJvb3RTY29wZTogSVJvb3RTY29wZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlICR0ZW1wbGF0ZUNhY2hlOiBJVGVtcGxhdGVDYWNoZVNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBhbGVydChvcHRpb25zOiBEaWFsb2dPcHRpb25zKTogSVByb21pc2U8YW55PiB7XHJcbiAgICAgICAgb3B0aW9ucy5jYW5jZWwgPSBudWxsO1xyXG4gICAgICAgIG9wdGlvbnMub2sgPSBvcHRpb25zLm9rIHx8ICdPSyc7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4ob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlybShvcHRpb25zOiBEaWFsb2dPcHRpb25zKTogSVByb21pc2U8YW55PiB7XHJcbiAgICAgICAgb3B0aW9ucy5jYW5jZWwgPSBvcHRpb25zLmNhbmNlbCB8fCAnTm8nO1xyXG4gICAgICAgIG9wdGlvbnMub2sgPSBvcHRpb25zLm9rIHx8ICdZZXMnO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4ob3B0aW9uczogRGlhbG9nT3B0aW9ucywgZGlhbG9nSHRtbDogc3RyaW5nID0gbnVsbCk6IElQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCBkZWZlcnJlZCA9IHRoaXMuJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGFuZCBjb21waWxlIGVsZW1lbnRcclxuICAgICAgICBpZiAoZGlhbG9nSHRtbCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBkaWFsb2dIdG1sID1cclxuICAgICAgICAgICAgICAgICc8bWYtZGlhbG9nIG5nLWNsaWNrPVwib25TY3JpbUNsaWNrZWQoKVwiPicgK1xyXG4gICAgICAgICAgICAgICAgJyAgIDxtZi1kaWFsb2ctY29udGVudCBuZy1jbGljaz1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICA8ZGl2IGNsYXNzPVwibWYtZGlhbG9nLWhlYWRlclwiPicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgPGRpdiBuZy1pZj1cIiEhdGl0bGVcIiBjbGFzcz1cIm1mLXRpdGxlXCI+e3t0aXRsZX19PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgIDwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICA8ZGl2IGNsYXNzPVwibWYtZGlhbG9nLWJvZHlcIj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgIDxkaXYgbmctaWY9XCIhcHJvbXB0XCI+e3t0ZXh0Q29udGVudH19PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICA8ZGl2IG5nLWlmPVwicHJvbXB0XCI+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgPG1mLWlucHV0LWNvbnRhaW5lcj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlc3BvbnNlXCI+e3t0ZXh0Q29udGVudH19PC9sYWJlbD4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicmVzcG9uc2VcIiBuYW1lPVwicmVzcG9uc2VcIiB0eXBlPVwidGV4dFwiIG5nLW1vZGVsPVwiZGF0YS5yZXNwb25zZVwiPicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgIDwvbWYtaW5wdXQtY29udGFpbmVyPicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgIDwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICA8ZGl2IGNsYXNzPVwibWYtYWN0aW9uc1wiPicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICA8bWYtYnV0dG9uIG5nLWlmPVwiISFva1RleHRcIiBuZy1jbGljaz1cImNvbmZpcm0oKVwiPnt7b2tUZXh0fX08L21mLWJ1dHRvbj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgPG1mLWJ1dHRvbiBuZy1pZj1cIiEhY2FuY2VsVGV4dFwiIG5nLWNsaWNrPVwiY2FuY2VsKClcIj57e2NhbmNlbFRleHR9fTwvbWYtYnV0dG9uPicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICA8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgPG1mLWJ1dHRvbiBjbGFzcz1cIm1mLWljb24tYnV0dG9uIG1mLWRpYWxvZy1jbG9zZS1idXR0b25cIiBuZy1jbGljaz1cImNhbmNlbCgpXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICA8bWYtaWNvbiBpY29uPVwiY2xvc2VfdGhpY2tcIj48L21mLWljb24+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgIDwvbWYtYnV0dG9uPicgK1xyXG4gICAgICAgICAgICAgICAgJyAgIDwvbWYtZGlhbG9nLWNvbnRlbnQ+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9tZi1kaWFsb2c+JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzY29wZSA9IHRoaXMuJHJvb3RTY29wZS4kbmV3KHRydWUpO1xyXG5cclxuICAgICAgICBzY29wZVsnJGN0cmwnXSA9IG9wdGlvbnMuY29udHJvbGxlcjtcclxuICAgICAgICBzY29wZVsnY2FuY2VsJ10gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xyXG4gICAgICAgICAgICBjb21waWxlZERpYWxvZ0VsZW1lbnQuZGV0YWNoKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzY29wZVsnY29uZmlybSddID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBzY29wZVsnZGF0YSddWydyZXNwb25zZSddO1xyXG5cclxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGNvbXBpbGVkRGlhbG9nRWxlbWVudC5kZXRhY2goKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNjb3BlWydkZWZlcnJlZCddID0gZGVmZXJyZWQ7XHJcbiAgICAgICAgc2NvcGVbJ2NhbmNlbFRleHQnXSA9IG9wdGlvbnMuY2FuY2VsO1xyXG4gICAgICAgIHNjb3BlWydva1RleHQnXSA9IG9wdGlvbnMub2s7XHJcbiAgICAgICAgc2NvcGVbJ29uU2NyaW1DbGlja2VkJ10gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNjb3BlWydjYW5jZWwnXSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2NvcGVbJ3Byb21wdCddID0gb3B0aW9ucy5wcm9tcHQ7XHJcbiAgICAgICAgc2NvcGVbJ2RhdGEnXSA9IHsgcmVzcG9uc2U6IG9wdGlvbnMucmVzcG9uc2UgfTtcclxuICAgICAgICBzY29wZVsndGV4dENvbnRlbnQnXSA9IG9wdGlvbnMudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgc2NvcGVbJ3RpdGxlJ10gPSBvcHRpb25zLnRpdGxlO1xyXG5cclxuICAgICAgICBsZXQgY29tcGlsZWREaWFsb2dFbGVtZW50ID0gdGhpcy4kY29tcGlsZShkaWFsb2dIdG1sKShzY29wZSk7XHJcblxyXG4gICAgICAgIC8vIEluc2VydCBlbGVtZW50IGludG8gRE9NXHJcbiAgICAgICAgZWxlbWVudCh0aGlzLiRkb2N1bWVudC5maW5kKCdib2R5JykpLmFwcGVuZChjb21waWxlZERpYWxvZ0VsZW1lbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9tcHQob3B0aW9uczogRGlhbG9nT3B0aW9ucyk6IElQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIG9wdGlvbnMuY2FuY2VsID0gb3B0aW9ucy5jYW5jZWwgfHwgJ0NhbmNlbCc7XHJcbiAgICAgICAgb3B0aW9ucy5vayA9IG9wdGlvbnMub2sgfHwgJ09LJztcclxuICAgICAgICBvcHRpb25zLnByb21wdCA9IHRydWU7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4ob3B0aW9ucyk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLnNlcnZpY2UudHNcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJVHJhbnNjbHVkZUZ1bmN0aW9uIH0gZnJvbSAnYW5ndWxhcic7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyR0cmFuc2NsdWRlJyBdO1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksICR0cmFuc2NsdWRlOiBJVHJhbnNjbHVkZUZ1bmN0aW9uKSB7XHJcbiAgICAgICAgJHRyYW5zY2x1ZGUoKGNsb25lOiBJQXVnbWVudGVkSlF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50c1xuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIGljb246ICdAJyxcclxuICAgICAgICBzdmdJY29uOiAnQCdcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9pY29uLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbkNvbXBvbmVudCB7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxpIG5nLWlmPVxcXCIkY3RybC5pY29uXFxcIiBuZy1jbGFzcz1cXFwiWydtZi1pY29uJywgJ21mLWljb24tJyArICRjdHJsLmljb25dXFxcIj48L2k+XFxyXFxuPGltZyBuZy1pZj1cXFwiISRjdHJsLmljb25cXFwiIGNsYXNzPVxcXCJzdmctaWNvblxcXCIgbmctc3JjPVxcXCJ7eyRjdHJsLnN2Z0ljb259fVxcXCIgbmctYXR0ci1hbHQ9XFxcInt7JGN0cmwuc3ZnSWNvbn19XFxcIi8+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnksIElDb21waWxlU2VydmljZSwgSURpcmVjdGl2ZSwgSVNjb3BlLCBJQXR0cmlidXRlcyB9IGZyb20gJ2FuZ3VsYXInO1xyXG5sZXQgdGVtcGxhdGVVcmwgPSByZXF1aXJlKCdjb21wb25lbnRzL2lucHV0L2ljb24uaW5wdXQuY29tcG9uZW50Lmh0bWwnKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJY29uSW5wdXRDb250cm9sbGVyIHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyckc2NvcGUnXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRzY29wZTogSVNjb3BlKSB7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBkaXJlY3RpdmUgc3VwcG9ydHMgc2hvd2luZyBhIHRleHQgaW5wdXQgZmllbGQgd2l0aCBhbiBpY29uLiAgVGhlc2UgZmllbGRzXHJcbiAqIGFyZSBwb3B1bGFyIGZvciBzZWFyY2ggYm94ZXMuICBUaGUgZGlyZWN0aXZlIHN0eWxlcyB0aGUgaWNvbiBzbyBpdCB3b24ndCBpbnRlcmZlcmVcclxuICogd2l0aCB0aGUgdGV4dCBmaWVsZCBhbmQgbWFrZXMgdGhlIHNwYWNpbmcgbG9vayBjb3JyZWN0IGZvciB0aGUgY29udHJvbC5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEljb25JbnB1dERpcmVjdGl2ZSgpOiBJRGlyZWN0aXZlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY29udHJvbGxlcjogSWNvbklucHV0Q29udHJvbGxlcixcclxuICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiB0ZW1wbGF0ZVVybCxcclxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxyXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgbW9kZWw6ICc9bmdNb2RlbCcsXHJcbiAgICAgICAgICAgIG1pbjogJz0nLFxyXG4gICAgICAgICAgICBtYXg6ICc9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGluazogKHNjb3BlOiBJU2NvcGUsXHJcbiAgICAgICAgICAgICAgIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksXHJcbiAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IElBdHRyaWJ1dGVzLFxyXG4gICAgICAgICAgICAgICBjb250cm9sbGVyOiBJY29uSW5wdXRDb250cm9sbGVyKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgc2NvcGUuaWNvbiA9IGVsZW1lbnQuYXR0cignaWNvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgc2NvcGUucGxhY2Vob2xkZXIgPSBlbGVtZW50LmF0dHIoJ3BsYWNlaG9sZGVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuSWNvbklucHV0Q29udHJvbGxlci4kaW5qZWN0ID0gWyckY29tcGlsZSddO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2lucHV0L2ljb24uaW5wdXQuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9pbnB1dC9pY29uLmlucHV0LmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8c3BhbiBjbGFzcz1cXFwibWYtaWNvbi1pbnB1dC1jb250YWluZXJcXFwiPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcInt7cGxhY2Vob2xkZXJ9fVxcXCI+XFxyXFxuICAgIDxtZi1pY29uIGljb249XFxcInt7aWNvbn19XFxcIj48L21mLWljb24+XFxyXFxuPC9zcGFuPlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2lucHV0L2ljb24uaW5wdXQuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XHJcbmltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnksIElUcmFuc2NsdWRlRnVuY3Rpb24gfSBmcm9tICdhbmd1bGFyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vaW5wdXQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRDb250YWluZXJDb21wb25lbnQge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcclxuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xyXG4gICAgICAgICR0cmFuc2NsdWRlKChjbG9uZTogSUF1Z21lbnRlZEpRdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiXCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSUNvbXBpbGVTZXJ2aWNlLCBJRGlyZWN0aXZlLCBJU2NvcGUsIElBdHRyaWJ1dGVzIH0gZnJvbSAnYW5ndWxhcic7XHJcbmxldCB0ZW1wbGF0ZVVybCA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvaW5wdXQvaW50LmlucHV0LmNvbXBvbmVudC5odG1sJyk7XHJcblxyXG5leHBvcnQgY2xhc3MgSW50SW5wdXRDb250cm9sbGVyIHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyckc2NvcGUnXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRzY29wZTogSVNjb3BlKSB7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBkaXJlY3RpdmUgc3VwcG9ydHMgYW4gaW5wdXQgZmllbGQgd2hpY2ggYWRkcyB0aGUgY2xhc3MgaW5wdXRFcnJvclxyXG4gKiB3aGVuIHRoZSB2YWx1ZSBpcyBub3QgYSBudW1iZXIuICBJdCB3YXRjaGVzIGNoYW5nZXMgZnJvbSB1c2VyIGlucHV0cywgXHJcbiAqIHRoZSBET00sIGFuZCB0aGUgbW9kZWwuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRJbnB1dERpcmVjdGl2ZSgpOiBJRGlyZWN0aXZlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY29udHJvbGxlcjogSW50SW5wdXRDb250cm9sbGVyLFxyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6IHRlbXBsYXRlVXJsLFxyXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXHJcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICBtb2RlbDogJz1uZ01vZGVsJyxcclxuICAgICAgICAgICAgbWluOiAnPScsXHJcbiAgICAgICAgICAgIG1heDogJz0nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaW5rOiAoc2NvcGU6IElTY29wZSxcclxuICAgICAgICAgICAgICAgZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSxcclxuICAgICAgICAgICAgICAgYXR0cmlidXRlczogSUF0dHJpYnV0ZXMsXHJcbiAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IEludElucHV0Q29udHJvbGxlcikgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgIGlmICghY29udHJvbGxlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICBsZXQgaXNWYWxpZCA9IGZ1bmN0aW9uKHZhbDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgaWYgKCd1bmRlZmluZWQnID09PSB0eXBlb2YgdmFsIHx8IHZhbCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcygnaW5wdXRFcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4oTnVtYmVyKHZhbCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ2lucHV0RXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcGUubWF4ICYmIHZhbCA+IHNjb3BlLm1heCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcygnaW5wdXRFcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNjb3BlLm1pbiAmJiB2YWwgPCBzY29wZS5taW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ2lucHV0RXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKCdpbnB1dEVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICBzY29wZS4kd2F0Y2goJ21vZGVsJywgZnVuY3Rpb24obmV3VmFsdWU6IHN0cmluZywgb2xkVmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgZWxlbWVudC5iaW5kKCdpbnB1dCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZChlbGVtZW50LnZhbCgpKTtcclxuICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbkludElucHV0Q29udHJvbGxlci4kaW5qZWN0ID0gWyckY29tcGlsZSddO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2lucHV0L2ludC5pbnB1dC5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL2lucHV0L2ludC5pbnB1dC5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJtZkludElucHV0XFxcIiBuZy10cmFuc2NsdWRlPlxcclxcbjwvaW5wdXQ+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW50LmlucHV0LmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJVHJhbnNjbHVkZUZ1bmN0aW9uIH0gZnJvbSAnYW5ndWxhcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2xpc3QuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcclxuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xyXG4gICAgICAgICR0cmFuc2NsdWRlKChjbG9uZTogSUF1Z21lbnRlZEpRdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RIZWFkZXJDb21wb25lbnQge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcclxuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xyXG4gICAgICAgICR0cmFuc2NsdWRlKChjbG9uZTogSUF1Z21lbnRlZEpRdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RJdGVtQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnJHRyYW5zY2x1ZGUnIF07XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcclxuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuYXBwZW5kKGNsb25lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiXCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5pbXBvcnQgVG9nZ2xlU2VydmljZSBmcm9tICcuLi90b2dnbGUvdG9nZ2xlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBlbGVtZW50LCBJQXVnbWVudGVkSlF1ZXJ5LCBJRG9jdW1lbnRTZXJ2aWNlLCBJVHJhbnNjbHVkZUZ1bmN0aW9uLCBJV2luZG93U2VydmljZSB9IGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBJVG9nZ2xlYWJsZSB9IGZyb20gJy4uL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlJztcclxuXHJcbmV4cG9ydCBlbnVtIEhvcml6b250YWxBbGlnbm1lbnQge1xyXG4gICAgc3RhcnQsXHJcbiAgICBjZW50ZXIsXHJcbiAgICBlbmRcclxufVxyXG5leHBvcnQgZW51bSBWZXJ0aWNhbEFsaWdubWVudCB7XHJcbiAgICB0b3AsXHJcbiAgICBjZW50ZXIsXHJcbiAgICBib3R0b21cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIGFsaWduOiAnQG1mQWxpZ24nLFxyXG4gICAgICAgIG5hbWU6ICdAJ1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL21lbnUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBJVG9nZ2xlYWJsZSB7XHJcbiAgICBhbGlnbjogc3RyaW5nO1xyXG4gICAgaG9yaXpvbnRhbEFsaWdubWVudDogSG9yaXpvbnRhbEFsaWdubWVudDtcclxuICAgIHZlcnRpY2FsQWxpZ25tZW50OiBWZXJ0aWNhbEFsaWdubWVudDtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIG9wZW46IGJvb2xlYW47XHJcblxyXG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZG9jdW1lbnQnLCAnJGVsZW1lbnQnLCAnJHdpbmRvdycsICdNZlRvZ2dsZVNlcnZpY2UnLCAnTUVOVV9NQVJHSU4nIF07XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRkb2N1bWVudDogSURvY3VtZW50U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlICR3aW5kb3c6IElXaW5kb3dTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB0b2dnbGVTZXJ2aWNlOiBUb2dnbGVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBNRU5VX01BUkdJTjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XHJcbiAgICAgICAgJGVsZW1lbnQuZGV0YWNoKCk7XHJcbiAgICAgICAgZWxlbWVudCgkZG9jdW1lbnQuZmluZCgnYm9keScpKS5hcHBlbmQoJGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAkZWxlbWVudC5vbignY2xpY2snLCB0aGlzLmhpZGUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbEFsaWdubWVudCA9IEhvcml6b250YWxBbGlnbm1lbnQuc3RhcnQ7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbEFsaWdubWVudCA9IFZlcnRpY2FsQWxpZ25tZW50LnRvcDtcclxuICAgIH1cclxuXHJcbiAgICAkb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQub2ZmKCdjbGljaycpO1xyXG4gICAgfVxyXG5cclxuICAgICRvbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWxpZ24pIHtcclxuICAgICAgICAgICAgbGV0IHRva2VucyA9IHRoaXMuYWxpZ24uc3BsaXQoJyAnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBob3Jpem9udGFsQWxpZ25tZW50ID0gSG9yaXpvbnRhbEFsaWdubWVudFt0b2tlbnNbMF1dO1xyXG4gICAgICAgICAgICBsZXQgdmVydGljYWxBbGlnbm1lbnQgPSBWZXJ0aWNhbEFsaWdubWVudFt0b2tlbnNbMV1dO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ob3Jpem9udGFsQWxpZ25tZW50ID0gaG9yaXpvbnRhbEFsaWdubWVudCB8fCBIb3Jpem9udGFsQWxpZ25tZW50LnN0YXJ0O1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsQWxpZ25tZW50ID0gdmVydGljYWxBbGlnbm1lbnQgfHwgVmVydGljYWxBbGlnbm1lbnQudG9wO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50b2dnbGVTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ21mLW9wZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KHRhcmdldEVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnkpOiB2b2lkIHtcclxuICAgICAgICAvLyBTZXQgb3BlbiBzdGF0ZSBvbiBjb21wb25lbnQgYW5kIG1lbnUgZWxlbWVudFxyXG4gICAgICAgIHRoaXMub3BlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudC5hZGRDbGFzcygnbWYtb3BlbicpO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dNZW51Q29udGVudCh0YXJnZXRFbGVtZW50WzBdKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldExheW91dERpcmVjdGlvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLiRlbGVtZW50WzBdLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG51bWJlclRvUGl4ZWxzKG51bTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gKG51bSA9PT0gbnVsbCkgPyBudWxsIDogbnVtICsgJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dNZW51Q29udGVudCh0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGxldCBtZW51Q29udGVudEVsZW1lbnQgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ21mLW1lbnUtY29udGVudCcpWzBdO1xyXG5cclxuICAgICAgICBsZXQgaXNMdHJMYXlvdXQ6IGJvb2xlYW4gPSB0aGlzLmdldExheW91dERpcmVjdGlvbigpICE9PSAncnRsJztcclxuXHJcbiAgICAgICAgLy8gUmVzZXQgdGhlIGJvdW5kYXJpZXMgb2YgdGhlIG1lbnUgY29udGVudCBlbGVtZW50XHJcbiAgICAgICAgbWVudUNvbnRlbnRFbGVtZW50LnN0eWxlLmJvdHRvbSA9XHJcbiAgICAgICAgICAgIG1lbnVDb250ZW50RWxlbWVudC5zdHlsZS5sZWZ0ID1cclxuICAgICAgICAgICAgbWVudUNvbnRlbnRFbGVtZW50LnN0eWxlLnJpZ2h0ID1cclxuICAgICAgICAgICAgbWVudUNvbnRlbnRFbGVtZW50LnN0eWxlLnRvcCA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0b3AgYW5kIGxlZnQgb2Zmc2V0IGJhc2VkIG9uIHRoZSBwb3NpdGlvbiBvZiB0aGUgdGFyZ2V0IGVsZW1lbnRcclxuICAgICAgICBsZXQgbWVudUJvdW5kaW5nQm94ID0gdGhpcy4kZWxlbWVudFswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBsZXQgbWVudUNvbnRlbnRCb3VuZGluZ0JveCA9IG1lbnVDb250ZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBsZXQgdGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94ID0gdGFyZ2V0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgbGV0IGJvdHRvbTogbnVtYmVyID0gbnVsbCxcclxuICAgICAgICAgICAgbGVmdDogbnVtYmVyID0gbnVsbCxcclxuICAgICAgICAgICAgcmlnaHQ6IG51bWJlciA9IG51bGwsXHJcbiAgICAgICAgICAgIHRvcDogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gSWYgbWVudSBjb250ZW50IGlzIHdpZGVyIHRoYW4gbWVudSBjb250YWluZXIsIGNvbnN0cmFpbiB3aWR0aCB0byBtZW51IGNvbnRhaW5lclxyXG4gICAgICAgIGlmIChtZW51Q29udGVudEJvdW5kaW5nQm94LndpZHRoICsgKDIgKiB0aGlzLk1FTlVfTUFSR0lOKSA+IG1lbnVCb3VuZGluZ0JveC53aWR0aCkge1xyXG4gICAgICAgICAgICBsZWZ0ID0gdGhpcy5NRU5VX01BUkdJTjtcclxuICAgICAgICAgICAgcmlnaHQgPSB0aGlzLk1FTlVfTUFSR0lOO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmhvcml6b250YWxBbGlnbm1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgSG9yaXpvbnRhbEFsaWdubWVudC5zdGFydDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNMdHJMYXlvdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC5yaWdodCAtIG1lbnVDb250ZW50Qm91bmRpbmdCb3gud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBIb3Jpem9udGFsQWxpZ25tZW50LmNlbnRlcjpcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gdGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LmxlZnQgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC53aWR0aCAtIG1lbnVDb250ZW50Qm91bmRpbmdCb3gud2lkdGgpIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEhvcml6b250YWxBbGlnbm1lbnQuZW5kOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0x0ckxheW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gdGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LmxlZnQgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC53aWR0aCAtIG1lbnVDb250ZW50Qm91bmRpbmdCb3gud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ29udmVydCB0byBjb29yZGluYXRlcyByZWxhdGl2ZSB0byBtZW51IGNvbnRhaW5lclxyXG4gICAgICAgICAgICBsZWZ0IC09IG1lbnVCb3VuZGluZ0JveC5sZWZ0O1xyXG5cclxuICAgICAgICAgICAgLy8gQ29uc3RyYWluIHRvIG1lbnUgY29udGFpbmVyIGJvdW5kYXJpZXNcclxuICAgICAgICAgICAgbGVmdCA9IE1hdGgubWF4KGxlZnQsIHRoaXMuTUVOVV9NQVJHSU4pO1xyXG4gICAgICAgICAgICBpZiAobGVmdCArIG1lbnVDb250ZW50Qm91bmRpbmdCb3gud2lkdGggPiBtZW51Qm91bmRpbmdCb3gud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIGxlZnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQgPSB0aGlzLk1FTlVfTUFSR0lOO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZW51Q29udGVudEVsZW1lbnQuc3R5bGUubGVmdCA9IHRoaXMubnVtYmVyVG9QaXhlbHMobGVmdCk7XHJcbiAgICAgICAgbWVudUNvbnRlbnRFbGVtZW50LnN0eWxlLnJpZ2h0ID0gdGhpcy5udW1iZXJUb1BpeGVscyhyaWdodCk7XHJcblxyXG4gICAgICAgIC8vIFJlY2FsY3VsYXRlIGJvdW5kaW5nIGJveCB0byBhY2NvdW50IGZvciBhbnkgc2hyaW5raW5nIGNhdXNlZCBieSBjb25zdHJhaW5pbmcgdGhlIGxlZnQgYW5kIHJpZ2h0IG9mZnNldHNcclxuICAgICAgICBtZW51Q29udGVudEJvdW5kaW5nQm94ID0gbWVudUNvbnRlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICAvLyBJZiBtZW51IGNvbnRlbnQgaXMgdGFsbGVyIHRoYW4gbWVudSBjb250YWluZXIsIGNvbnN0cmFpbiBoZWlnaHQgdG8gbWVudSBjb250YWluZXJcclxuICAgICAgICBpZiAobWVudUNvbnRlbnRCb3VuZGluZ0JveC5oZWlnaHQgKyAoMiAqIHRoaXMuTUVOVV9NQVJHSU4pID4gbWVudUJvdW5kaW5nQm94LmhlaWdodCkge1xyXG4gICAgICAgICAgICB0b3AgPSB0aGlzLk1FTlVfTUFSR0lOO1xyXG4gICAgICAgICAgICBib3R0b20gPSB0aGlzLk1FTlVfTUFSR0lOO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnZlcnRpY2FsQWxpZ25tZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFZlcnRpY2FsQWxpZ25tZW50LnRvcDpcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSB0YXJnZXRFbGVtZW50Qm91bmRpbmdCb3guYm90dG9tO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBWZXJ0aWNhbEFsaWdubWVudC5jZW50ZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gdGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LnRvcCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgodGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LmhlaWdodCAtIG1lbnVDb250ZW50Qm91bmRpbmdCb3guaGVpZ2h0KSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBWZXJ0aWNhbEFsaWdubWVudC5ib3R0b206XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gKHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC50b3AgLSBtZW51Q29udGVudEJvdW5kaW5nQm94LmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdG8gY29vcmRpbmF0ZXMgcmVsYXRpdmUgdG8gbWVudSBjb250YWluZXJcclxuICAgICAgICAgICAgdG9wIC09IG1lbnVCb3VuZGluZ0JveC50b3A7XHJcblxyXG4gICAgICAgICAgICAvLyBDb25zdHJhaW4gdG8gbWVudSBjb250YWluZXIgYm91bmRhcmllc1xyXG4gICAgICAgICAgICB0b3AgPSBNYXRoLm1heCh0b3AsIHRoaXMuTUVOVV9NQVJHSU4pO1xyXG4gICAgICAgICAgICBpZiAodG9wICsgbWVudUNvbnRlbnRCb3VuZGluZ0JveC5oZWlnaHQgPiBtZW51Qm91bmRpbmdCb3guaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0b3AgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tID0gdGhpcy5NRU5VX01BUkdJTjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWVudUNvbnRlbnRFbGVtZW50LnN0eWxlLnRvcCA9IHRoaXMubnVtYmVyVG9QaXhlbHModG9wKTtcclxuICAgICAgICBtZW51Q29udGVudEVsZW1lbnQuc3R5bGUuYm90dG9tID0gdGhpcy5udW1iZXJUb1BpeGVscyhib3R0b20pO1xyXG4gICAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lbnVGb290ZXJDb21wb25lbnQge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcclxuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xyXG4gICAgICAgICR0cmFuc2NsdWRlKChjbG9uZTogSUF1Z21lbnRlZEpRdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lbnVIZWFkZXJDb21wb25lbnQge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcclxuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xyXG4gICAgICAgICR0cmFuc2NsdWRlKChjbG9uZTogSUF1Z21lbnRlZEpRdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8bWYtbWVudS1jb250ZW50IG5nLXRyYW5zY2x1ZGUgbmctY2xpY2s9XFxcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxcXCI+PC9tZi1tZW51LWNvbnRlbnQ+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9uYXYuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2Q29tcG9uZW50IHt9XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxkaXYgY2xhc3M9XFxcIm1mLW5hdi1jb250ZW50XFxcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSUNvbXBpbGVTZXJ2aWNlLCBJRGlyZWN0aXZlLCBJU2NvcGUsIElBdHRyaWJ1dGVzIH0gZnJvbSAnYW5ndWxhcic7XHJcbmxldCB0ZW1wbGF0ZVVybCA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvaW5wdXQvcmVzaXppbmcudGV4dGFyZWEuY29tcG9uZW50Lmh0bWwnKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXNpemluZ1RleHRhcmVhQ29udHJvbGxlciB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsnJHNjb3BlJ107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkc2NvcGU6IElTY29wZSkge1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZGlyZWN0aXZlIHN1cHBvcnRzIGEgdGV4dCBhcmVhIHRoYXQgd2lsbCBncm93IGFuZCBzaHJpbmsgYmFzZWQgb24gdGhlIHNpemUgb2YgdGhlIFxyXG4gKiBjb250ZW50IGluIHRoZSB0ZXh0IGFyZWEuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXNpemluZ1RleHRhcmVhRGlyZWN0aXZlKCk6IElEaXJlY3RpdmUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb250cm9sbGVyOiBSZXNpemluZ1RleHRhcmVhQ29udHJvbGxlcixcclxuICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiB0ZW1wbGF0ZVVybCxcclxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxyXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgbW9kZWw6ICc9bmdNb2RlbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpbms6IChzY29wZTogSVNjb3BlLFxyXG4gICAgICAgICAgICAgICBlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LFxyXG4gICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBJQXR0cmlidXRlcyxcclxuICAgICAgICAgICAgICAgY29udHJvbGxlcjogUmVzaXppbmdUZXh0YXJlYUNvbnRyb2xsZXIpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRyb2xsZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuYXR0cignbWluLXJvd3MnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGxldCBtaW5Sb3dzID0gZWxlbWVudC5hdHRyKCdtaW4tcm93cycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGlmIChtaW5Sb3dzLmluZGV4T2YoJyAnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFRoaXMgbWVhbnMgdGhhdCB0aGV5IHRyaWVkIHRvIG92ZXJyaWRlIHRoZSBtaW5pbXVtIG51bWJlciBvZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKiByb3dzIGFuZCB0aGUgQW5ndWxhciB0cmFuc2NsdWRlIGNvbWJpbmVkIHRoZSBhdHRyaWJ1dGVzIGluc3RlYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICogb2YgcmVwbGFjaW5nIHRoZW0uICBXZSBuZWVkIHRvIGZpeCB0aGF0IHVwLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXR0cignbWluLXJvd3MnLCBtaW5Sb3dzLnNsaWNlKDAsIG1pblJvd3MuaW5kZXhPZignICcpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgKiBXZSBuZWVkIHRvIHN0YXJ0IGJ5IGdldHRpbmcgc29tZSBiYXNpYyBtZWFzdXJlbWVudHMuICBXZVxyXG4gICAgICAgICAgICAgICAgICAgICogc2V0IHRoZSBmb250IHNpemUgYmVjYXVzZSB3ZSBuZWVkIHRvIGtub3cgdGhlIGNvcnJlY3QgbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICogaGVpZ2h0IG9yIHdlIGNhbid0IHJlc2l6ZSB0aGUgYm94IHByb3Blcmx5LlxyXG4gICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICBsZXQgdG1wVmFsID0gZWxlbWVudC52YWwoKTtcclxuICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgICAgIGxldCBiYXNlU2Nyb2xsSGVpZ2h0ID0gZWxlbWVudFswXS5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICBlbGVtZW50LnZhbCh0bXBWYWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY3NzKCdvdmVyZmxvdy15JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgZWxlbWVudC5jc3MoJ2ZvbnQtc2l6ZScsICcxNXB4Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgKiBUaGUgcmVzaXplIGZ1bmN0aW9uIGhhbmRsZXMgZGV0ZXJtaW5pbmcgdGhlIGFjdHVhbFxyXG4gICAgICAgICAgICAgICAgICAgICogc2l6ZSBvZiB0aGUgYm94LiBcclxuICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgbGV0IHJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGxldCBtaW5Sb3dzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5hdHRyKCdtaW4tcm93cycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblJvd3MgPSBOdW1iZXIoZWxlbWVudC5hdHRyKCdtaW4tcm93cycpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXR0cigncm93cycsIG1pblJvd3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGxldCByb3dzID0gTWF0aC5jZWlsKChlbGVtZW50WzBdLnNjcm9sbEhlaWdodCAtIGJhc2VTY3JvbGxIZWlnaHQpIC8gMTgpICsgbWluUm93cztcclxuICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmF0dHIoJ3Jvd3MnLCByb3dzKTtcclxuICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKCdtb2RlbCcsIGZ1bmN0aW9uKG5ld1ZhbHVlOiBzdHJpbmcsIG9sZFZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXNpemUoKTtcclxuICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYmluZCgnaW5wdXQnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuUmVzaXppbmdUZXh0YXJlYUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGNvbXBpbGUnXTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9pbnB1dC9yZXNpemluZy50ZXh0YXJlYS5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL2lucHV0L3Jlc2l6aW5nLnRleHRhcmVhLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8dGV4dGFyZWEgbmctdHJhbnNjbHVkZSBjbGFzcz1cXFwibWZSZXNpemluZ1RleHRBcmVhXFxcIiByb3dzPVxcXCIzXFxcIiBtaW4tcm93cz1cXFwiM1xcXCI+PC90ZXh0YXJlYT5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9pbnB1dC9yZXNpemluZy50ZXh0YXJlYS5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJTmdNb2RlbENvbnRyb2xsZXIsIElTY29wZSB9IGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ0AnXHJcbiAgICB9LFxyXG4gICAgcmVxdWlyZToge1xyXG4gICAgICAgIG5nTW9kZWw6ICdebmdNb2RlbCdcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9zZWFyY2gtYm94LmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQm94Q29tcG9uZW50IHtcclxuICAgIG5nTW9kZWw6IElOZ01vZGVsQ29udHJvbGxlcjtcclxuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnJHNjb3BlJyBdO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgcHJpdmF0ZSAkc2NvcGU6IElTY29wZSkge1xyXG4gICAgfVxyXG5cclxuICAgICRvbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gU2V0IGRlZmF1bHRzXHJcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXIgfHwgJ1NlYXJjaCc7XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgbmdNb2RlbFxyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLm5nTW9kZWwuJHJlbmRlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2VsZi52YWx1ZSA9IHNlbGYubmdNb2RlbC4kdmlld1ZhbHVlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuJHNjb3BlLiR3YXRjaChcclxuICAgICAgICAgICAgKCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi52YWx1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKG5ld1ZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlbGYubmdNb2RlbC4kc2V0Vmlld1ZhbHVlKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJJbnB1dCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnB1dEtleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSAyNzogLy8gRVNDQVBFXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFySW5wdXQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwibWYtc2VhcmNoLWJveC1jb250ZW50XFxcIj5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiXFxyXFxuICAgICAgICAgICBhdXRvY29tcGxldGU9XFxcImZhbHNlXFxcIlxcclxcbiAgICAgICAgICAgbmctbW9kZWw9XFxcIiRjdHJsLnZhbHVlXFxcIlxcclxcbiAgICAgICAgICAgbmctYXR0ci1wbGFjZWhvbGRlcj1cXFwie3skY3RybC5wbGFjZWhvbGRlcn19XFxcIlxcclxcbiAgICAgICAgICAgbmcta2V5ZG93bj1cXFwiJGN0cmwub25JbnB1dEtleURvd24oJGV2ZW50KVxcXCIgLz5cXHJcXG4gICAgPG1mLWljb24gaWNvbj1cXFwic2VhcmNoX3RoaWNrXFxcIj48L21mLWljb24+XFxyXFxuICAgIDxtZi1idXR0b24gY2xhc3M9XFxcIm1mLWljb24tYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwuY2xlYXJJbnB1dCgpXFxcIj5cXHJcXG4gICAgICAgIDxtZi1pY29uIGljb249XFxcImNsb3NlX3RoaWNrXFxcIj48L21mLWljb24+XFxyXFxuICAgIDwvbWYtYnV0dG9uPlxcclxcbjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSB9IGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBJVG9nZ2xlYWJsZSB9IGZyb20gJy4uL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IFRvZ2dsZVNlcnZpY2UgZnJvbSAnLi4vdG9nZ2xlL3RvZ2dsZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBuYW1lOiAnQCdcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9zaWRlLW5hdi5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlTmF2Q29tcG9uZW50IGltcGxlbWVudHMgSVRvZ2dsZWFibGUge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgb3BlbjogYm9vbGVhbjtcclxuXHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsnJGVsZW1lbnQnLCAnTWZUb2dnbGVTZXJ2aWNlJ107XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCBwcml2YXRlIHRvZ2dsZVNlcnZpY2U6IFRvZ2dsZVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAkb25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlU2VydmljZS5yZWdpc3Rlcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAkb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQub2ZmKCdjbGljaycpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcygnbWYtb3BlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudC5hZGRDbGFzcygnbWYtb3BlbicpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwibWYtc2NyaW1cXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5oaWRlKClcXFwiPjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcIm1mLXNpZGUtbmF2LWNvbnRlbnRcXFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XHJcbmltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnkgfSBmcm9tICdhbmd1bGFyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vdGlsZS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnIF07XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSkge1xyXG4gICAgICAgICRlbGVtZW50LmF0dHIoJ3RhYmluZGV4JywgMCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy90aWxlL3RpbGUuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy90aWxlL3RpbGUuY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxkaXYgY2xhc3M9XFxcIm1mLXRpbGUtY29udGVudFxcXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy90aWxlL3RpbGUuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XHJcbmltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnksIElUcmFuc2NsdWRlRnVuY3Rpb24gfSBmcm9tICdhbmd1bGFyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlR3JpZENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyR0cmFuc2NsdWRlJyBdO1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksICR0cmFuc2NsdWRlOiBJVHJhbnNjbHVkZUZ1bmN0aW9uKSB7XHJcbiAgICAgICAgJHRyYW5zY2x1ZGUoKGNsb25lOiBJQXVnbWVudGVkSlF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy90aWxlLWdyaWQvdGlsZS1ncmlkLmNvbXBvbmVudC50c1xuICoqLyIsImltcG9ydCB7IElBdHRyaWJ1dGVzLCBJQXVnbWVudGVkSlF1ZXJ5LCBJQ29tcGlsZVNlcnZpY2UsIElEaXJlY3RpdmUsIElTY29wZSB9IGZyb20gJ2FuZ3VsYXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNvcnREaXJlY3RpdmVDb250cm9sbGVyIHtcclxuICAgIHNvcnRCaW5kaW5nOiBzdHJpbmc7XHJcbiAgICBzb3J0RXhwcmVzc2lvbjogc3RyaW5nO1xyXG5cclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyckc2NvcGUnXTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJHNjb3BlOiBJU2NvcGUpIHtcclxuICAgIH1cclxuXHJcbiAgICBzb3J0T24oc29ydE9uUHJvcGVydHk6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLnNvcnRFeHByZXNzaW9uID09PSBzb3J0T25Qcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLnNvcnRFeHByZXNzaW9uID0gJy0nICsgc29ydE9uUHJvcGVydHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNvcnRFeHByZXNzaW9uID0gc29ydE9uUHJvcGVydHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiRzY29wZS4kZXZhbCh0aGlzLnNvcnRCaW5kaW5nICsgJz1cIicgKyB0aGlzLnNvcnRFeHByZXNzaW9uICsgJ1wiJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTb3J0RGlyZWN0aXZlKCk6IElEaXJlY3RpdmUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb250cm9sbGVyOiBTb3J0RGlyZWN0aXZlQ29udHJvbGxlcixcclxuICAgICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICAgIGxpbms6IChzY29wZTogSVNjb3BlLFxyXG4gICAgICAgICAgICAgICBlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LFxyXG4gICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBJQXR0cmlidXRlcyxcclxuICAgICAgICAgICAgICAgY29udHJvbGxlcjogU29ydERpcmVjdGl2ZUNvbnRyb2xsZXIpID0+IHtcclxuICAgICAgICAgICAgY29udHJvbGxlci5zb3J0QmluZGluZyA9IGF0dHJpYnV0ZXNbJ21mU29ydCddO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBJU29ydE9uU2NvcGUgZXh0ZW5kcyBJU2NvcGUge1xyXG4gICAgZ2V0U29ydEV4cHJlc3Npb24oKTogc3RyaW5nO1xyXG4gICAgc29ydE9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTb3J0T25EaXJlY3RpdmUoJGNvbXBpbGU6IElDb21waWxlU2VydmljZSk6IElEaXJlY3RpdmUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXF1aXJlOiAnXm1mU29ydCcsXHJcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICAnc29ydE9uJzogJzxtZlNvcnRPbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpbms6IChzY29wZTogSVNvcnRPblNjb3BlLFxyXG4gICAgICAgICAgICAgICBlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LFxyXG4gICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBJQXR0cmlidXRlcyxcclxuICAgICAgICAgICAgICAgY29udHJvbGxlcjogU29ydERpcmVjdGl2ZUNvbnRyb2xsZXIpID0+IHtcclxuICAgICAgICAgICAgc2NvcGUuZ2V0U29ydEV4cHJlc3Npb24gPSAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250cm9sbGVyLnNvcnRFeHByZXNzaW9uO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIHNvcnQgaWNvbnNcclxuICAgICAgICAgICAgbGV0IGljb25IdG1sID1cclxuICAgICAgICAgICAgICAgICc8bWYtaWNvbiBpY29uPVwiZG93bl90aGlja1wiIG5nLWlmPVwiZ2V0U29ydEV4cHJlc3Npb24oKSA9PSBcXCcnICsgc2NvcGUuc29ydE9uICsgJ1xcJ1wiPjwvbWYtaWNvbj4nICtcclxuICAgICAgICAgICAgICAgICc8bWYtaWNvbiBpY29uPVwidXBfdGhpY2tcIiBuZy1pZj1cImdldFNvcnRFeHByZXNzaW9uKCkgPT0gXFwnLScgKyBzY29wZS5zb3J0T24gKyAnXFwnXCI+PC9tZi1pY29uPic7XHJcbiAgICAgICAgICAgIGxldCBpY29uRWxlbWVudCA9ICRjb21waWxlKGljb25IdG1sKShzY29wZSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKGljb25FbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBtZi1zb3J0YWJsZSBjbGFzc1xyXG4gICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKCdtZi1zb3J0YWJsZScpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVnaXN0ZXIgY2xpY2sgaGFuZGxlclxyXG4gICAgICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNjb3BlLiRhcHBseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5zb3J0T24oc2NvcGVbJ3NvcnRPbiddKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5Tb3J0T25EaXJlY3RpdmUuJGluamVjdCA9IFsnJGNvbXBpbGUnXTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy90YWJsZS9zb3J0LmRpcmVjdGl2ZS50c1xuICoqLyIsImltcG9ydCB7IElBdHRyaWJ1dGVzLCBJQXVnbWVudGVkSlF1ZXJ5LCBJRGlyZWN0aXZlLCBJU2NvcGUgfSBmcm9tICdhbmd1bGFyJztcclxuaW1wb3J0IFRvZ2dsZVNlcnZpY2UgZnJvbSAnLi90b2dnbGUuc2VydmljZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUb2dnbGVhYmxlIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIG9wZW46IGJvb2xlYW47XHJcblxyXG4gICAgaGlkZSgpOiB2b2lkO1xyXG4gICAgc2hvdyhlbGVtZW50PzogSUF1Z21lbnRlZEpRdWVyeSk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUb2dnbGVEaXJlY3RpdmUodG9nZ2xlU2VydmljZTogVG9nZ2xlU2VydmljZSk6IElEaXJlY3RpdmUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsaW5rOiAoc2NvcGU6IElTY29wZSwgZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgYXR0cnM6IElBdHRyaWJ1dGVzKSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgKCkgPT4geyB0b2dnbGVTZXJ2aWNlLnRvZ2dsZUNvbXBvbmVudChhdHRyc1snbWZUb2dnbGUnXSwgZWxlbWVudCk7IH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzdHJpY3Q6ICdBJ1xyXG4gICAgfTtcclxufVxyXG5cclxuVG9nZ2xlRGlyZWN0aXZlLiRpbmplY3QgPSBbICdNZlRvZ2dsZVNlcnZpY2UnIF07XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvdG9nZ2xlL3RvZ2dsZS5kaXJlY3RpdmUudHNcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5IH0gZnJvbSAnYW5ndWxhcic7XHJcbmltcG9ydCB7IElUb2dnbGVhYmxlIH0gZnJvbSAnLi90b2dnbGUuZGlyZWN0aXZlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZ2dsZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSB0b2dnbGVhYmxlQ29tcG9uZW50czogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlYWJsZUNvbXBvbmVudHMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlcih0b2dnbGVhYmxlQ29tcG9uZW50OiBJVG9nZ2xlYWJsZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlYWJsZUNvbXBvbmVudHNbdG9nZ2xlYWJsZUNvbXBvbmVudC5uYW1lXSA9IHRvZ2dsZWFibGVDb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQ29tcG9uZW50KGNvbXBvbmVudElkOiBzdHJpbmcsIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgdG9nZ2xlYWJsZUVsZW1lbnQ6IElUb2dnbGVhYmxlID0gdGhpcy50b2dnbGVhYmxlQ29tcG9uZW50c1tjb21wb25lbnRJZF07XHJcblxyXG4gICAgICAgIGlmICh0b2dnbGVhYmxlRWxlbWVudCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdG9nZ2xlYWJsZUVsZW1lbnQub3Blbikge1xyXG4gICAgICAgICAgICB0b2dnbGVhYmxlRWxlbWVudC5zaG93KGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdG9nZ2xlYWJsZUVsZW1lbnQuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuc2VydmljZS50c1xuICoqLyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7QUNwREE7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7OztBQ05BO0FBTUE7QUFVQTtBQUNBO0FBWEE7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQVFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFGQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNGQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUpBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBYkE7QUFlQTs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7O0FDTkE7QUFvQkE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBN0ZBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBREE7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQVNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0ZBO0FBRUE7QUFHQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBTEE7QUFEQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJCQTtBQXVCQTs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDRkE7QUFFQTtBQUdBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFMQTtBQURBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbERBO0FBb0RBOzs7Ozs7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBREE7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFZQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFEQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFZQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFEQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFFQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBUUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQTdKQTtBQVBBO0FBUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUF5S0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBREE7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBWUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBREE7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDN01BO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDRkE7QUFFQTtBQUdBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFMQTtBQURBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBFQTtBQXNFQTs7Ozs7OztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQVdBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFsQ0E7QUFMQTtBQVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQVlBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFwQkE7QUFKQTtBQVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFEQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBREE7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7QUNKQTtBQUtBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFkQTtBQUpBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpDQTtBQW1DQTs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBOzs7Ozs7Ozs7QUNqQkE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=