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
	angular_1.module('ng-ias', [])
	    .constant('MENU_MARGIN', 24)
	    .component('iasAppBar', app_bar_component_1.default)
	    .component('iasAvatar', avatar_component_1.default)
	    .directive('iasButton', button_component_1.default)
	    .directive('iasIntInput', int_input_component_1.default)
	    .directive('iasIconInput', icon_input_component_1.default)
	    .component('iasDialog', dialog_component_1.default)
	    .component('iasHeader', header_component_1.default)
	    .component('iasIcon', icon_component_1.default)
	    .component('iasInputContainer', input_component_1.default)
	    .component('iasList', list_component_1.ListComponent)
	    .component('iasListHeader', list_component_1.ListHeaderComponent)
	    .component('iasListItem', list_component_1.ListItemComponent)
	    .component('iasMenu', menu_component_1.MenuComponent)
	    .component('iasFooterMenu', menu_component_1.MenuFooterComponent)
	    .component('iasHeaderMenu', menu_component_1.MenuHeaderComponent)
	    .component('iasNav', nav_component_1.default)
	    .directive('iasResizingTextarea', resizing_textarea_component_1.default)
	    .component('iasSearchBox', search_box_component_1.default)
	    .component('iasSideNav', side_nav_component_1.default)
	    .component('iasTile', tile_component_1.default)
	    .component('iasTileGrid', tile_grid_component_1.default)
	    .directive('iasToggle', toggle_directive_1.ToggleDirective)
	    .directive('iasSort', sort_directive_1.SortDirective)
	    .directive('iasSortOn', sort_directive_1.SortOnDirective)
	    .service('IasDialogService', dialog_service_1.default)
	    .service('IasToggleService', toggle_service_1.default);
	

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
	var html = "<div class=\"ias-app-bar-content\" ng-transclude></div>";
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
	var html = "<div class=\"ias-avatar-content\" ng-style=\"{ 'background-image': 'url(' + $ctrl.src + ')' }\"></div>";
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
	var html = "<button class=\"ias-button\" ng-transclude>\r\n</button>";
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
	                '<ias-dialog ng-click="onScrimClicked()">' +
	                    '   <ias-dialog-content ng-click="$event.stopPropagation()">' +
	                    '       <div class="ias-dialog-header">' +
	                    '           <div ng-if="!!title" class="ias-title">{{title}}</div>' +
	                    '       </div>' +
	                    '       <div class="ias-dialog-body">' +
	                    '           <div ng-if="!prompt">{{textContent}}</div>' +
	                    '           <div ng-if="prompt">' +
	                    '               <ias-input-container>' +
	                    '                   <label for="response">{{textContent}}</label>' +
	                    '                   <input id="response" name="response" type="text" ng-model="data.response">' +
	                    '               </ias-input-container>' +
	                    '           </div>' +
	                    '       </div>' +
	                    '       <div class="ias-actions">' +
	                    '          <ias-button ng-if="!!okText" ng-click="confirm()">{{okText}}</ias-button>' +
	                    '          <ias-button ng-if="!!cancelText" ng-click="cancel()">{{cancelText}}</ias-button>' +
	                    '       </div>' +
	                    '       <ias-button class="ias-icon-button ias-dialog-close-button" ng-click="cancel()">' +
	                    '           <ias-icon icon="close_thick"></ias-icon>' +
	                    '       </ias-button>' +
	                    '   </ias-dialog-content>' +
	                    '</ias-dialog>';
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
	var html = "<i ng-if=\"$ctrl.icon\" ng-class=\"['ias-icon', 'ias-icon-' + $ctrl.icon]\"></i>\r\n<img ng-if=\"!$ctrl.icon\" class=\"svg-icon\" ng-src=\"{{$ctrl.svgIcon}}\" ng-attr-alt=\"{{$ctrl.svgIcon}}\"/>";
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
	var html = "<span class=\"ias-icon-input-container\">\r\n    <input type=\"text\" placeholder=\"{{placeholder}}\">\r\n    <ias-icon icon=\"{{icon}}\"></ias-icon>\r\n</span>";
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
	var html = "<input type=\"text\" class=\"iasIntInput\" ng-transclude>\r\n</input>";
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
	        this.$element.removeClass('ias-open');
	    };
	    MenuComponent.prototype.show = function (targetElement) {
	        this.open = true;
	        this.$element.addClass('ias-open');
	        this.showMenuContent(targetElement[0]);
	    };
	    MenuComponent.prototype.getLayoutDirection = function () {
	        return window.getComputedStyle(this.$element[0], null).getPropertyValue('direction');
	    };
	    MenuComponent.prototype.numberToPixels = function (num) {
	        return (num === null) ? null : num + 'px';
	    };
	    MenuComponent.prototype.showMenuContent = function (targetElement) {
	        var menuContentElement = this.$element.find('ias-menu-content')[0];
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
	MenuComponent.$inject = ['$document', '$element', '$window', 'IasToggleService', 'MENU_MARGIN'];
	MenuComponent = __decorate([
	    component_decorator_1.Component({
	        bindings: {
	            align: '@iasAlign',
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
	var html = "<ias-menu-content ng-transclude ng-click=\"$event.stopPropagation()\"></ias-menu-content>";
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
	var html = "<div class=\"ias-nav-content\" ng-transclude></div>";
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
	var html = "<textarea ng-transclude class=\"iasResizingTextArea\" rows=\"3\" min-rows=\"3\"></textarea>";
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
	var html = "<div class=\"ias-search-box-content\">\r\n    <input type=\"text\"\r\n           autocomplete=\"false\"\r\n           ng-model=\"$ctrl.value\"\r\n           ng-attr-placeholder=\"{{$ctrl.placeholder}}\"\r\n           ng-keydown=\"$ctrl.onInputKeyDown($event)\" />\r\n    <ias-icon icon=\"search_thick\"></ias-icon>\r\n    <ias-button class=\"ias-icon-button\" ng-click=\"$ctrl.clearInput()\">\r\n        <ias-icon icon=\"close_thick\"></ias-icon>\r\n    </ias-button>\r\n</div>";
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
	        this.$element.removeClass('ias-open');
	    };
	    SideNavComponent.prototype.show = function () {
	        this.$element.addClass('ias-open');
	    };
	    return SideNavComponent;
	}());
	SideNavComponent.$inject = ['$element', 'IasToggleService'];
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
	var html = "<div class=\"ias-scrim\" ng-click=\"$ctrl.hide()\"></div>\r\n<div class=\"ias-side-nav-content\" ng-transclude></div>";
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
	var html = "<div class=\"ias-tile-content\" ng-transclude></div>";
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
	            controller.sortBinding = attributes['iasSort'];
	        }
	    };
	}
	exports.SortDirective = SortDirective;
	function SortOnDirective($compile) {
	    return {
	        require: '^iasSort',
	        restrict: 'A',
	        scope: {
	            'sortOn': '<iasSortOn'
	        },
	        link: function (scope, element, attributes, controller) {
	            scope.getSortExpression = function () {
	                return controller.sortExpression;
	            };
	            var iconHtml = '<ias-icon icon="down_thick" ng-if="getSortExpression() == \'' + scope.sortOn + '\'"></ias-icon>' +
	                '<ias-icon icon="up_thick" ng-if="getSortExpression() == \'-' + scope.sortOn + '\'"></ias-icon>';
	            var iconElement = $compile(iconHtml)(scope);
	            element.append(iconElement);
	            element.addClass('ias-sortable');
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
	            element.on('click', function () { toggleService.toggleComponent(attrs['iasToggle'], element); });
	        },
	        restrict: 'A'
	    };
	}
	exports.ToggleDirective = ToggleDirective;
	ToggleDirective.$inject = ['IasToggleService'];
	

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctaWFzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDBkODQ5MDUyMDJiMDhiNTQwMjM1Iiwid2VicGFjazovLy8uL3NyYy9uZy1pYXMubW9kdWxlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAtYmFyL2FwcC1iYXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQuZGVjb3JhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ljb24vaWNvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0L2ljb24uaW5wdXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0L2ljb24uaW5wdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0L2ludC5pbnB1dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW50LmlucHV0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvcmVzaXppbmcudGV4dGFyZWEuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0L3Jlc2l6aW5nLnRleHRhcmVhLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90aWxlL3RpbGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpbGUvdGlsZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90aWxlLWdyaWQvdGlsZS1ncmlkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJsZS9zb3J0LmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90b2dnbGUvdG9nZ2xlLmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90b2dnbGUvdG9nZ2xlLnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAwZDg0OTA1MjAyYjA4YjU0MDIzNVxuICoqLyIsImltcG9ydCB7IG1vZHVsZSB9IGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgQXBwQmFyQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9hcHAtYmFyL2FwcC1iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IEF2YXRhckNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvYXZhdGFyL2F2YXRhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgQnV0dG9uRGlyZWN0aXZlIGZyb20gJy4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCBEaWFsb2dDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IERpYWxvZ1NlcnZpY2UgZnJvbSAnLi9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuc2VydmljZSc7XHJcbmltcG9ydCBIZWFkZXJDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IEljb25Db21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL2ljb24vaWNvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgSWNvbklucHV0IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9pY29uLmlucHV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCBJbnB1dENvbnRhaW5lckNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IEludElucHV0IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9pbnQuaW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlzdENvbXBvbmVudCwgTGlzdEhlYWRlckNvbXBvbmVudCwgTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1lbnVDb21wb25lbnQsIE1lbnVGb290ZXJDb21wb25lbnQsIE1lbnVIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCBOYXZDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50JztcclxuaW1wb3J0IFJlc2l6aW5nVGV4dGFyZWFDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L3Jlc2l6aW5nLnRleHRhcmVhLmNvbXBvbmVudCc7XHJcbmltcG9ydCBTZWFyY2hCb3hDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgU2lkZU5hdkNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50JztcclxuaW1wb3J0IFRpbGVDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL3RpbGUvdGlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgVGlsZUdyaWRDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL3RpbGUtZ3JpZC90aWxlLWdyaWQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU29ydERpcmVjdGl2ZSwgU29ydE9uRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RhYmxlL3NvcnQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVG9nZ2xlRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IFRvZ2dsZVNlcnZpY2UgZnJvbSAnLi9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuc2VydmljZSc7XHJcblxyXG5tb2R1bGUoJ25nLWlhcycsIFtdKVxyXG4gICAgLmNvbnN0YW50KCdNRU5VX01BUkdJTicsIDI0KVxyXG4gICAgLmNvbXBvbmVudCgnaWFzQXBwQmFyJywgQXBwQmFyQ29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnaWFzQXZhdGFyJywgQXZhdGFyQ29tcG9uZW50KVxyXG4gICAgLmRpcmVjdGl2ZSgnaWFzQnV0dG9uJywgQnV0dG9uRGlyZWN0aXZlKVxyXG4gICAgLmRpcmVjdGl2ZSgnaWFzSW50SW5wdXQnLCBJbnRJbnB1dClcclxuICAgIC5kaXJlY3RpdmUoJ2lhc0ljb25JbnB1dCcsIEljb25JbnB1dClcclxuICAgIC5jb21wb25lbnQoJ2lhc0RpYWxvZycsIERpYWxvZ0NvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ2lhc0hlYWRlcicsIEhlYWRlckNvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ2lhc0ljb24nLCBJY29uQ29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnaWFzSW5wdXRDb250YWluZXInLCBJbnB1dENvbnRhaW5lckNvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ2lhc0xpc3QnLCBMaXN0Q29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnaWFzTGlzdEhlYWRlcicsIExpc3RIZWFkZXJDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdpYXNMaXN0SXRlbScsIExpc3RJdGVtQ29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnaWFzTWVudScsIE1lbnVDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdpYXNGb290ZXJNZW51JywgTWVudUZvb3RlckNvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ2lhc0hlYWRlck1lbnUnLCBNZW51SGVhZGVyQ29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnaWFzTmF2JywgTmF2Q29tcG9uZW50KVxyXG4gICAgLmRpcmVjdGl2ZSgnaWFzUmVzaXppbmdUZXh0YXJlYScsIFJlc2l6aW5nVGV4dGFyZWFDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdpYXNTZWFyY2hCb3gnLCBTZWFyY2hCb3hDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdpYXNTaWRlTmF2JywgU2lkZU5hdkNvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ2lhc1RpbGUnLCBUaWxlQ29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnaWFzVGlsZUdyaWQnLCBUaWxlR3JpZENvbXBvbmVudClcclxuXHJcbiAgICAuZGlyZWN0aXZlKCdpYXNUb2dnbGUnLCBUb2dnbGVEaXJlY3RpdmUpXHJcbiAgICAuZGlyZWN0aXZlKCdpYXNTb3J0JywgU29ydERpcmVjdGl2ZSlcclxuICAgIC5kaXJlY3RpdmUoJ2lhc1NvcnRPbicsIFNvcnRPbkRpcmVjdGl2ZSlcclxuXHJcbiAgICAuc2VydmljZSgnSWFzRGlhbG9nU2VydmljZScsIERpYWxvZ1NlcnZpY2UpXHJcbiAgICAuc2VydmljZSgnSWFzVG9nZ2xlU2VydmljZScsIFRvZ2dsZVNlcnZpY2UpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9uZy1pYXMubW9kdWxlLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhbmd1bGFyXCJcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vYXBwLWJhci5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBCYXJDb21wb25lbnQge31cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9hcHAtYmFyL2FwcC1iYXIuY29tcG9uZW50LnRzXG4gKiovIiwiaW1wb3J0IHsgZXh0ZW5kLCBJQXVnbWVudGVkSlF1ZXJ5LCBJQXR0cmlidXRlc30gZnJvbSAnYW5ndWxhcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb250ZW50VGVtcGxhdGVGdW5jdGlvbiB7XHJcbiAgICAoJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksICRhdHRycz86IElBdHRyaWJ1dGVzKTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ29tcG9uZW50KG9wdGlvbnM6IHtcclxuICAgIGJpbmRpbmdzPzogYW55LFxyXG4gICAgYmluZFRvQ29udHJvbGxlcj86IGJvb2xlYW4sXHJcbiAgICBjb250cm9sbGVyQXM/OiBzdHJpbmcsXHJcbiAgICByZXF1aXJlPzogYW55O1xyXG4gICAgdGVtcGxhdGU/OiAoc3RyaW5nIHwgYW55W10gfCBJQ29udGVudFRlbXBsYXRlRnVuY3Rpb24pLFxyXG4gICAgdGVtcGxhdGVVcmw/OiBzdHJpbmcsXHJcbiAgICB0cmFuc2NsdWRlPzogKGJvb2xlYW4gfCBzdHJpbmcpLFxyXG4gICAgc3R5bGVzaGVldFVybD86IHN0cmluZ1xyXG59KSB7XHJcbiAgICByZXR1cm4gKGNvbnRyb2xsZXI6IEZ1bmN0aW9uKSA9PiBleHRlbmQob3B0aW9ucywgeyBjb250cm9sbGVyOiBjb250cm9sbGVyIH0pO1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudC5kZWNvcmF0b3IudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwiaWFzLWFwcC1iYXItY29udGVudFxcXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9hcHAtYmFyL2FwcC1iYXIuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgJ3NyYyc6ICc8J1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2F2YXRhci5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF2YXRhckNvbXBvbmVudCB7XHJcbiAgICBzcmM6IHN0cmluZztcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJpYXMtYXZhdGFyLWNvbnRlbnRcXFwiIG5nLXN0eWxlPVxcXCJ7ICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgJGN0cmwuc3JjICsgJyknIH1cXFwiPjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJQ29tcGlsZVNlcnZpY2UsIElEaXJlY3RpdmUsIElTY29wZSwgSUF0dHJpYnV0ZXMgfSBmcm9tICdhbmd1bGFyJztcclxubGV0IHRlbXBsYXRlVXJsID0gcmVxdWlyZSgnY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sJyk7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29udHJvbGxlciB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsnJHNjb3BlJ107XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRzY29wZTogSVNjb3BlKSB7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25EaXJlY3RpdmUoKTogSURpcmVjdGl2ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnRyb2xsZXI6IEJ1dHRvbkNvbnRyb2xsZXIsXHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogdGVtcGxhdGVVcmwsXHJcbiAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcclxuICAgICAgICByZXBsYWNlOiB0cnVlLFxyXG4gICAgICAgIGxpbms6IChzY29wZTogSVNjb3BlLFxyXG4gICAgICAgICAgICAgICBlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LFxyXG4gICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBJQXR0cmlidXRlcyxcclxuICAgICAgICAgICAgICAgY29udHJvbGxlcjogQnV0dG9uQ29udHJvbGxlcikgPT4ge1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbkJ1dHRvbkRpcmVjdGl2ZS4kaW5qZWN0ID0gWyckY29tcGlsZSddO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8YnV0dG9uIGNsYXNzPVxcXCJpYXMtYnV0dG9uXFxcIiBuZy10cmFuc2NsdWRlPlxcclxcbjwvYnV0dG9uPlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJVHJhbnNjbHVkZUZ1bmN0aW9uIH0gZnJvbSAnYW5ndWxhcic7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYWxvZ0NvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyR0cmFuc2NsdWRlJyBdO1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksICR0cmFuc2NsdWRlOiBJVHJhbnNjbHVkZUZ1bmN0aW9uKSB7XHJcbiAgICAgICAgJHRyYW5zY2x1ZGUoKGNsb25lOiBJQXVnbWVudGVkSlF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC50c1xuICoqLyIsImltcG9ydCB7XHJcbiAgICBlbGVtZW50LFxyXG4gICAgSUNvbXBpbGVTZXJ2aWNlLFxyXG4gICAgSUNvbnRyb2xsZXJTZXJ2aWNlLFxyXG4gICAgSURvY3VtZW50U2VydmljZSxcclxuICAgIElQcm9taXNlLFxyXG4gICAgSVFTZXJ2aWNlLFxyXG4gICAgSVJvb3RTY29wZVNlcnZpY2UsXHJcbiAgICBJVGVtcGxhdGVDYWNoZVNlcnZpY2UgfSBmcm9tICdhbmd1bGFyJztcclxuXHJcbmludGVyZmFjZSBEaWFsb2dPcHRpb25zIHtcclxuICAgIGNhbmNlbDogc3RyaW5nO1xyXG4gICAgY29udHJvbGxlcjogYW55O1xyXG4gICAgb2s6IHN0cmluZztcclxuICAgIHByb21wdDogYm9vbGVhbjtcclxuICAgIHJlc3BvbnNlOiBzdHJpbmc7XHJcbiAgICB0ZXh0Q29udGVudDogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nU2VydmljZSB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRjb21waWxlJywgJyRjb250cm9sbGVyJywgJyRkb2N1bWVudCcsICckcScsICckcm9vdFNjb3BlJywgJyR0ZW1wbGF0ZUNhY2hlJyBdO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkY29tcGlsZTogSUNvbXBpbGVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSAkY29udHJvbGxlcjogSUNvbnRyb2xsZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSAkZG9jdW1lbnQ6IElEb2N1bWVudFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlICRxOiBJUVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlICRyb290U2NvcGU6IElSb290U2NvcGVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSAkdGVtcGxhdGVDYWNoZTogSVRlbXBsYXRlQ2FjaGVTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYWxlcnQob3B0aW9uczogRGlhbG9nT3B0aW9ucyk6IElQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIG9wdGlvbnMuY2FuY2VsID0gbnVsbDtcclxuICAgICAgICBvcHRpb25zLm9rID0gb3B0aW9ucy5vayB8fCAnT0snO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpcm0ob3B0aW9uczogRGlhbG9nT3B0aW9ucyk6IElQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIG9wdGlvbnMuY2FuY2VsID0gb3B0aW9ucy5jYW5jZWwgfHwgJ05vJztcclxuICAgICAgICBvcHRpb25zLm9rID0gb3B0aW9ucy5vayB8fCAnWWVzJztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3BlbihvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKG9wdGlvbnM6IERpYWxvZ09wdGlvbnMsIGRpYWxvZ0h0bWw6IHN0cmluZyA9IG51bGwpOiBJUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgZGVmZXJyZWQgPSB0aGlzLiRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBhbmQgY29tcGlsZSBlbGVtZW50XHJcbiAgICAgICAgaWYgKGRpYWxvZ0h0bWwgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgZGlhbG9nSHRtbCA9XHJcbiAgICAgICAgICAgICAgICAnPGlhcy1kaWFsb2cgbmctY2xpY2s9XCJvblNjcmltQ2xpY2tlZCgpXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgPGlhcy1kaWFsb2ctY29udGVudCBuZy1jbGljaz1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICA8ZGl2IGNsYXNzPVwiaWFzLWRpYWxvZy1oZWFkZXJcIj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgIDxkaXYgbmctaWY9XCIhIXRpdGxlXCIgY2xhc3M9XCJpYXMtdGl0bGVcIj57e3RpdGxlfX08L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgIDxkaXYgY2xhc3M9XCJpYXMtZGlhbG9nLWJvZHlcIj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgIDxkaXYgbmctaWY9XCIhcHJvbXB0XCI+e3t0ZXh0Q29udGVudH19PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICA8ZGl2IG5nLWlmPVwicHJvbXB0XCI+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgPGlhcy1pbnB1dC1jb250YWluZXI+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZXNwb25zZVwiPnt7dGV4dENvbnRlbnR9fTwvbGFiZWw+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInJlc3BvbnNlXCIgbmFtZT1cInJlc3BvbnNlXCIgdHlwZT1cInRleHRcIiBuZy1tb2RlbD1cImRhdGEucmVzcG9uc2VcIj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICA8L2lhcy1pbnB1dC1jb250YWluZXI+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICA8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgIDxkaXYgY2xhc3M9XCJpYXMtYWN0aW9uc1wiPicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICA8aWFzLWJ1dHRvbiBuZy1pZj1cIiEhb2tUZXh0XCIgbmctY2xpY2s9XCJjb25maXJtKClcIj57e29rVGV4dH19PC9pYXMtYnV0dG9uPicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICA8aWFzLWJ1dHRvbiBuZy1pZj1cIiEhY2FuY2VsVGV4dFwiIG5nLWNsaWNrPVwiY2FuY2VsKClcIj57e2NhbmNlbFRleHR9fTwvaWFzLWJ1dHRvbj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgIDxpYXMtYnV0dG9uIGNsYXNzPVwiaWFzLWljb24tYnV0dG9uIGlhcy1kaWFsb2ctY2xvc2UtYnV0dG9uXCIgbmctY2xpY2s9XCJjYW5jZWwoKVwiPicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgPGlhcy1pY29uIGljb249XCJjbG9zZV90aGlja1wiPjwvaWFzLWljb24+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgIDwvaWFzLWJ1dHRvbj4nICtcclxuICAgICAgICAgICAgICAgICcgICA8L2lhcy1kaWFsb2ctY29udGVudD4nICtcclxuICAgICAgICAgICAgICAgICc8L2lhcy1kaWFsb2c+JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzY29wZSA9IHRoaXMuJHJvb3RTY29wZS4kbmV3KHRydWUpO1xyXG5cclxuICAgICAgICBzY29wZVsnJGN0cmwnXSA9IG9wdGlvbnMuY29udHJvbGxlcjtcclxuICAgICAgICBzY29wZVsnY2FuY2VsJ10gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xyXG4gICAgICAgICAgICBjb21waWxlZERpYWxvZ0VsZW1lbnQuZGV0YWNoKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzY29wZVsnY29uZmlybSddID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBzY29wZVsnZGF0YSddWydyZXNwb25zZSddO1xyXG5cclxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGNvbXBpbGVkRGlhbG9nRWxlbWVudC5kZXRhY2goKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNjb3BlWydkZWZlcnJlZCddID0gZGVmZXJyZWQ7XHJcbiAgICAgICAgc2NvcGVbJ2NhbmNlbFRleHQnXSA9IG9wdGlvbnMuY2FuY2VsO1xyXG4gICAgICAgIHNjb3BlWydva1RleHQnXSA9IG9wdGlvbnMub2s7XHJcbiAgICAgICAgc2NvcGVbJ29uU2NyaW1DbGlja2VkJ10gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNjb3BlWydjYW5jZWwnXSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2NvcGVbJ3Byb21wdCddID0gb3B0aW9ucy5wcm9tcHQ7XHJcbiAgICAgICAgc2NvcGVbJ2RhdGEnXSA9IHsgcmVzcG9uc2U6IG9wdGlvbnMucmVzcG9uc2UgfTtcclxuICAgICAgICBzY29wZVsndGV4dENvbnRlbnQnXSA9IG9wdGlvbnMudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgc2NvcGVbJ3RpdGxlJ10gPSBvcHRpb25zLnRpdGxlO1xyXG5cclxuICAgICAgICBsZXQgY29tcGlsZWREaWFsb2dFbGVtZW50ID0gdGhpcy4kY29tcGlsZShkaWFsb2dIdG1sKShzY29wZSk7XHJcblxyXG4gICAgICAgIC8vIEluc2VydCBlbGVtZW50IGludG8gRE9NXHJcbiAgICAgICAgZWxlbWVudCh0aGlzLiRkb2N1bWVudC5maW5kKCdib2R5JykpLmFwcGVuZChjb21waWxlZERpYWxvZ0VsZW1lbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9tcHQob3B0aW9uczogRGlhbG9nT3B0aW9ucyk6IElQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIG9wdGlvbnMuY2FuY2VsID0gb3B0aW9ucy5jYW5jZWwgfHwgJ0NhbmNlbCc7XHJcbiAgICAgICAgb3B0aW9ucy5vayA9IG9wdGlvbnMub2sgfHwgJ09LJztcclxuICAgICAgICBvcHRpb25zLnByb21wdCA9IHRydWU7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4ob3B0aW9ucyk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLnNlcnZpY2UudHNcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJVHJhbnNjbHVkZUZ1bmN0aW9uIH0gZnJvbSAnYW5ndWxhcic7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyR0cmFuc2NsdWRlJyBdO1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksICR0cmFuc2NsdWRlOiBJVHJhbnNjbHVkZUZ1bmN0aW9uKSB7XHJcbiAgICAgICAgJHRyYW5zY2x1ZGUoKGNsb25lOiBJQXVnbWVudGVkSlF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50c1xuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIGljb246ICdAJyxcclxuICAgICAgICBzdmdJY29uOiAnQCdcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9pY29uLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbkNvbXBvbmVudCB7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxpIG5nLWlmPVxcXCIkY3RybC5pY29uXFxcIiBuZy1jbGFzcz1cXFwiWydpYXMtaWNvbicsICdpYXMtaWNvbi0nICsgJGN0cmwuaWNvbl1cXFwiPjwvaT5cXHJcXG48aW1nIG5nLWlmPVxcXCIhJGN0cmwuaWNvblxcXCIgY2xhc3M9XFxcInN2Zy1pY29uXFxcIiBuZy1zcmM9XFxcInt7JGN0cmwuc3ZnSWNvbn19XFxcIiBuZy1hdHRyLWFsdD1cXFwie3skY3RybC5zdmdJY29ufX1cXFwiLz5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSUNvbXBpbGVTZXJ2aWNlLCBJRGlyZWN0aXZlLCBJU2NvcGUsIElBdHRyaWJ1dGVzIH0gZnJvbSAnYW5ndWxhcic7XHJcbmxldCB0ZW1wbGF0ZVVybCA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvaW5wdXQvaWNvbi5pbnB1dC5jb21wb25lbnQuaHRtbCcpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEljb25JbnB1dENvbnRyb2xsZXIge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbJyRzY29wZSddO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJHNjb3BlOiBJU2NvcGUpIHtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGRpcmVjdGl2ZSBzdXBwb3J0cyBzaG93aW5nIGEgdGV4dCBpbnB1dCBmaWVsZCB3aXRoIGFuIGljb24uICBUaGVzZSBmaWVsZHNcclxuICogYXJlIHBvcHVsYXIgZm9yIHNlYXJjaCBib3hlcy4gIFRoZSBkaXJlY3RpdmUgc3R5bGVzIHRoZSBpY29uIHNvIGl0IHdvbid0IGludGVyZmVyZVxyXG4gKiB3aXRoIHRoZSB0ZXh0IGZpZWxkIGFuZCBtYWtlcyB0aGUgc3BhY2luZyBsb29rIGNvcnJlY3QgZm9yIHRoZSBjb250cm9sLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSWNvbklucHV0RGlyZWN0aXZlKCk6IElEaXJlY3RpdmUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb250cm9sbGVyOiBJY29uSW5wdXRDb250cm9sbGVyLFxyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6IHRlbXBsYXRlVXJsLFxyXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXHJcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICBtb2RlbDogJz1uZ01vZGVsJyxcclxuICAgICAgICAgICAgbWluOiAnPScsXHJcbiAgICAgICAgICAgIG1heDogJz0nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaW5rOiAoc2NvcGU6IElTY29wZSxcclxuICAgICAgICAgICAgICAgZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSxcclxuICAgICAgICAgICAgICAgYXR0cmlidXRlczogSUF0dHJpYnV0ZXMsXHJcbiAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IEljb25JbnB1dENvbnRyb2xsZXIpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICBzY29wZS5pY29uID0gZWxlbWVudC5hdHRyKCdpY29uJyk7XHJcbiAgICAgICAgICAgICAgICAgICBzY29wZS5wbGFjZWhvbGRlciA9IGVsZW1lbnQuYXR0cigncGxhY2Vob2xkZXInKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5JY29uSW5wdXRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRjb21waWxlJ107XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaWNvbi5pbnB1dC5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL2lucHV0L2ljb24uaW5wdXQuY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxzcGFuIGNsYXNzPVxcXCJpYXMtaWNvbi1pbnB1dC1jb250YWluZXJcXFwiPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcInt7cGxhY2Vob2xkZXJ9fVxcXCI+XFxyXFxuICAgIDxpYXMtaWNvbiBpY29uPVxcXCJ7e2ljb259fVxcXCI+PC9pYXMtaWNvbj5cXHJcXG48L3NwYW4+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaWNvbi5pbnB1dC5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSVRyYW5zY2x1ZGVGdW5jdGlvbiB9IGZyb20gJ2FuZ3VsYXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9pbnB1dC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dENvbnRhaW5lckNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyR0cmFuc2NsdWRlJyBdO1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksICR0cmFuc2NsdWRlOiBJVHJhbnNjbHVkZUZ1bmN0aW9uKSB7XHJcbiAgICAgICAgJHRyYW5zY2x1ZGUoKGNsb25lOiBJQXVnbWVudGVkSlF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCJcIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJQ29tcGlsZVNlcnZpY2UsIElEaXJlY3RpdmUsIElTY29wZSwgSUF0dHJpYnV0ZXMgfSBmcm9tICdhbmd1bGFyJztcclxubGV0IHRlbXBsYXRlVXJsID0gcmVxdWlyZSgnY29tcG9uZW50cy9pbnB1dC9pbnQuaW5wdXQuY29tcG9uZW50Lmh0bWwnKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRJbnB1dENvbnRyb2xsZXIge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbJyRzY29wZSddO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJHNjb3BlOiBJU2NvcGUpIHtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGRpcmVjdGl2ZSBzdXBwb3J0cyBhbiBpbnB1dCBmaWVsZCB3aGljaCBhZGRzIHRoZSBjbGFzcyBpbnB1dEVycm9yXHJcbiAqIHdoZW4gdGhlIHZhbHVlIGlzIG5vdCBhIG51bWJlci4gIEl0IHdhdGNoZXMgY2hhbmdlcyBmcm9tIHVzZXIgaW5wdXRzLCBcclxuICogdGhlIERPTSwgYW5kIHRoZSBtb2RlbC5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludElucHV0RGlyZWN0aXZlKCk6IElEaXJlY3RpdmUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb250cm9sbGVyOiBJbnRJbnB1dENvbnRyb2xsZXIsXHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogdGVtcGxhdGVVcmwsXHJcbiAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcclxuICAgICAgICByZXBsYWNlOiB0cnVlLFxyXG4gICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgIG1vZGVsOiAnPW5nTW9kZWwnLFxyXG4gICAgICAgICAgICBtaW46ICc9JyxcclxuICAgICAgICAgICAgbWF4OiAnPSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpbms6IChzY29wZTogSVNjb3BlLFxyXG4gICAgICAgICAgICAgICBlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LFxyXG4gICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBJQXR0cmlidXRlcyxcclxuICAgICAgICAgICAgICAgY29udHJvbGxlcjogSW50SW5wdXRDb250cm9sbGVyKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgaWYgKCFjb250cm9sbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgIGxldCBpc1ZhbGlkID0gZnVuY3Rpb24odmFsOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiB2YWwgfHwgdmFsID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKCdpbnB1dEVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihOdW1iZXIodmFsKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcygnaW5wdXRFcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY29wZS5tYXggJiYgdmFsID4gc2NvcGUubWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKCdpbnB1dEVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2NvcGUubWluICYmIHZhbCA8IHNjb3BlLm1pbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcygnaW5wdXRFcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2lucHV0RXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgIHNjb3BlLiR3YXRjaCgnbW9kZWwnLCBmdW5jdGlvbihuZXdWYWx1ZTogc3RyaW5nLCBvbGRWYWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZChuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICBlbGVtZW50LmJpbmQoJ2lucHV0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkKGVsZW1lbnQudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuSW50SW5wdXRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRjb21waWxlJ107XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW50LmlucHV0LmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvaW5wdXQvaW50LmlucHV0LmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImlhc0ludElucHV0XFxcIiBuZy10cmFuc2NsdWRlPlxcclxcbjwvaW5wdXQ+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW50LmlucHV0LmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJVHJhbnNjbHVkZUZ1bmN0aW9uIH0gZnJvbSAnYW5ndWxhcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2xpc3QuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcclxuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xyXG4gICAgICAgICR0cmFuc2NsdWRlKChjbG9uZTogSUF1Z21lbnRlZEpRdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RIZWFkZXJDb21wb25lbnQge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcclxuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xyXG4gICAgICAgICR0cmFuc2NsdWRlKChjbG9uZTogSUF1Z21lbnRlZEpRdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RJdGVtQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnJHRyYW5zY2x1ZGUnIF07XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcclxuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuYXBwZW5kKGNsb25lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiXCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5pbXBvcnQgVG9nZ2xlU2VydmljZSBmcm9tICcuLi90b2dnbGUvdG9nZ2xlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBlbGVtZW50LCBJQXVnbWVudGVkSlF1ZXJ5LCBJRG9jdW1lbnRTZXJ2aWNlLCBJVHJhbnNjbHVkZUZ1bmN0aW9uLCBJV2luZG93U2VydmljZSB9IGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBJVG9nZ2xlYWJsZSB9IGZyb20gJy4uL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlJztcclxuXHJcbmV4cG9ydCBlbnVtIEhvcml6b250YWxBbGlnbm1lbnQge1xyXG4gICAgc3RhcnQsXHJcbiAgICBjZW50ZXIsXHJcbiAgICBlbmRcclxufVxyXG5leHBvcnQgZW51bSBWZXJ0aWNhbEFsaWdubWVudCB7XHJcbiAgICB0b3AsXHJcbiAgICBjZW50ZXIsXHJcbiAgICBib3R0b21cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIGFsaWduOiAnQGlhc0FsaWduJyxcclxuICAgICAgICBuYW1lOiAnQCdcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9tZW51LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IGltcGxlbWVudHMgSVRvZ2dsZWFibGUge1xyXG4gICAgYWxpZ246IHN0cmluZztcclxuICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IEhvcml6b250YWxBbGlnbm1lbnQ7XHJcbiAgICB2ZXJ0aWNhbEFsaWdubWVudDogVmVydGljYWxBbGlnbm1lbnQ7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBvcGVuOiBib29sZWFuO1xyXG5cclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGRvY3VtZW50JywgJyRlbGVtZW50JywgJyR3aW5kb3cnLCAnSWFzVG9nZ2xlU2VydmljZScsICdNRU5VX01BUkdJTicgXTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJGRvY3VtZW50OiBJRG9jdW1lbnRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSAkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgJHdpbmRvdzogSVdpbmRvd1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHRvZ2dsZVNlcnZpY2U6IFRvZ2dsZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIE1FTlVfTUFSR0lOOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcclxuICAgICAgICAkZWxlbWVudC5kZXRhY2goKTtcclxuICAgICAgICBlbGVtZW50KCRkb2N1bWVudC5maW5kKCdib2R5JykpLmFwcGVuZCgkZWxlbWVudCk7XHJcblxyXG4gICAgICAgICRlbGVtZW50Lm9uKCdjbGljaycsIHRoaXMuaGlkZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsQWxpZ25tZW50ID0gSG9yaXpvbnRhbEFsaWdubWVudC5zdGFydDtcclxuICAgICAgICB0aGlzLnZlcnRpY2FsQWxpZ25tZW50ID0gVmVydGljYWxBbGlnbm1lbnQudG9wO1xyXG4gICAgfVxyXG5cclxuICAgICRvbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudC5vZmYoJ2NsaWNrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgJG9uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5hbGlnbikge1xyXG4gICAgICAgICAgICBsZXQgdG9rZW5zID0gdGhpcy5hbGlnbi5zcGxpdCgnICcpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGhvcml6b250YWxBbGlnbm1lbnQgPSBIb3Jpem9udGFsQWxpZ25tZW50W3Rva2Vuc1swXV07XHJcbiAgICAgICAgICAgIGxldCB2ZXJ0aWNhbEFsaWdubWVudCA9IFZlcnRpY2FsQWxpZ25tZW50W3Rva2Vuc1sxXV07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmhvcml6b250YWxBbGlnbm1lbnQgPSBob3Jpem9udGFsQWxpZ25tZW50IHx8IEhvcml6b250YWxBbGlnbm1lbnQuc3RhcnQ7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljYWxBbGlnbm1lbnQgPSB2ZXJ0aWNhbEFsaWdubWVudCB8fCBWZXJ0aWNhbEFsaWdubWVudC50b3A7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRvZ2dsZVNlcnZpY2UucmVnaXN0ZXIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcygnaWFzLW9wZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KHRhcmdldEVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnkpOiB2b2lkIHtcclxuICAgICAgICAvLyBTZXQgb3BlbiBzdGF0ZSBvbiBjb21wb25lbnQgYW5kIG1lbnUgZWxlbWVudFxyXG4gICAgICAgIHRoaXMub3BlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudC5hZGRDbGFzcygnaWFzLW9wZW4nKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93TWVudUNvbnRlbnQodGFyZ2V0RWxlbWVudFswXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRMYXlvdXREaXJlY3Rpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy4kZWxlbWVudFswXSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBudW1iZXJUb1BpeGVscyhudW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIChudW0gPT09IG51bGwpID8gbnVsbCA6IG51bSArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93TWVudUNvbnRlbnQodGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBsZXQgbWVudUNvbnRlbnRFbGVtZW50ID0gdGhpcy4kZWxlbWVudC5maW5kKCdpYXMtbWVudS1jb250ZW50JylbMF07XHJcblxyXG4gICAgICAgIGxldCBpc0x0ckxheW91dDogYm9vbGVhbiA9IHRoaXMuZ2V0TGF5b3V0RGlyZWN0aW9uKCkgIT09ICdydGwnO1xyXG5cclxuICAgICAgICAvLyBSZXNldCB0aGUgYm91bmRhcmllcyBvZiB0aGUgbWVudSBjb250ZW50IGVsZW1lbnRcclxuICAgICAgICBtZW51Q29udGVudEVsZW1lbnQuc3R5bGUuYm90dG9tID1cclxuICAgICAgICAgICAgbWVudUNvbnRlbnRFbGVtZW50LnN0eWxlLmxlZnQgPVxyXG4gICAgICAgICAgICBtZW51Q29udGVudEVsZW1lbnQuc3R5bGUucmlnaHQgPVxyXG4gICAgICAgICAgICBtZW51Q29udGVudEVsZW1lbnQuc3R5bGUudG9wID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRvcCBhbmQgbGVmdCBvZmZzZXQgYmFzZWQgb24gdGhlIHBvc2l0aW9uIG9mIHRoZSB0YXJnZXQgZWxlbWVudFxyXG4gICAgICAgIGxldCBtZW51Qm91bmRpbmdCb3ggPSB0aGlzLiRlbGVtZW50WzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGxldCBtZW51Q29udGVudEJvdW5kaW5nQm94ID0gbWVudUNvbnRlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGxldCB0YXJnZXRFbGVtZW50Qm91bmRpbmdCb3ggPSB0YXJnZXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICBsZXQgYm90dG9tOiBudW1iZXIgPSBudWxsLFxyXG4gICAgICAgICAgICBsZWZ0OiBudW1iZXIgPSBudWxsLFxyXG4gICAgICAgICAgICByaWdodDogbnVtYmVyID0gbnVsbCxcclxuICAgICAgICAgICAgdG9wOiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgICAgICAvLyBJZiBtZW51IGNvbnRlbnQgaXMgd2lkZXIgdGhhbiBtZW51IGNvbnRhaW5lciwgY29uc3RyYWluIHdpZHRoIHRvIG1lbnUgY29udGFpbmVyXHJcbiAgICAgICAgaWYgKG1lbnVDb250ZW50Qm91bmRpbmdCb3gud2lkdGggKyAoMiAqIHRoaXMuTUVOVV9NQVJHSU4pID4gbWVudUJvdW5kaW5nQm94LndpZHRoKSB7XHJcbiAgICAgICAgICAgIGxlZnQgPSB0aGlzLk1FTlVfTUFSR0lOO1xyXG4gICAgICAgICAgICByaWdodCA9IHRoaXMuTUVOVV9NQVJHSU47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuaG9yaXpvbnRhbEFsaWdubWVudCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBIb3Jpem9udGFsQWxpZ25tZW50LnN0YXJ0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0x0ckxheW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gdGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gdGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LnJpZ2h0IC0gbWVudUNvbnRlbnRCb3VuZGluZ0JveC53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEhvcml6b250YWxBbGlnbm1lbnQuY2VudGVyOlxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSB0YXJnZXRFbGVtZW50Qm91bmRpbmdCb3gubGVmdCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgodGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LndpZHRoIC0gbWVudUNvbnRlbnRCb3VuZGluZ0JveC53aWR0aCkgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgSG9yaXpvbnRhbEFsaWdubWVudC5lbmQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTHRyTGF5b3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSB0YXJnZXRFbGVtZW50Qm91bmRpbmdCb3gubGVmdCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LndpZHRoIC0gbWVudUNvbnRlbnRCb3VuZGluZ0JveC53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gdGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRvIGNvb3JkaW5hdGVzIHJlbGF0aXZlIHRvIG1lbnUgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGxlZnQgLT0gbWVudUJvdW5kaW5nQm94LmxlZnQ7XHJcblxyXG4gICAgICAgICAgICAvLyBDb25zdHJhaW4gdG8gbWVudSBjb250YWluZXIgYm91bmRhcmllc1xyXG4gICAgICAgICAgICBsZWZ0ID0gTWF0aC5tYXgobGVmdCwgdGhpcy5NRU5VX01BUkdJTik7XHJcbiAgICAgICAgICAgIGlmIChsZWZ0ICsgbWVudUNvbnRlbnRCb3VuZGluZ0JveC53aWR0aCA+IG1lbnVCb3VuZGluZ0JveC53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgbGVmdCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICByaWdodCA9IHRoaXMuTUVOVV9NQVJHSU47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1lbnVDb250ZW50RWxlbWVudC5zdHlsZS5sZWZ0ID0gdGhpcy5udW1iZXJUb1BpeGVscyhsZWZ0KTtcclxuICAgICAgICBtZW51Q29udGVudEVsZW1lbnQuc3R5bGUucmlnaHQgPSB0aGlzLm51bWJlclRvUGl4ZWxzKHJpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gUmVjYWxjdWxhdGUgYm91bmRpbmcgYm94IHRvIGFjY291bnQgZm9yIGFueSBzaHJpbmtpbmcgY2F1c2VkIGJ5IGNvbnN0cmFpbmluZyB0aGUgbGVmdCBhbmQgcmlnaHQgb2Zmc2V0c1xyXG4gICAgICAgIG1lbnVDb250ZW50Qm91bmRpbmdCb3ggPSBtZW51Q29udGVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICAgIC8vIElmIG1lbnUgY29udGVudCBpcyB0YWxsZXIgdGhhbiBtZW51IGNvbnRhaW5lciwgY29uc3RyYWluIGhlaWdodCB0byBtZW51IGNvbnRhaW5lclxyXG4gICAgICAgIGlmIChtZW51Q29udGVudEJvdW5kaW5nQm94LmhlaWdodCArICgyICogdGhpcy5NRU5VX01BUkdJTikgPiBtZW51Qm91bmRpbmdCb3guaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRvcCA9IHRoaXMuTUVOVV9NQVJHSU47XHJcbiAgICAgICAgICAgIGJvdHRvbSA9IHRoaXMuTUVOVV9NQVJHSU47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMudmVydGljYWxBbGlnbm1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgVmVydGljYWxBbGlnbm1lbnQudG9wOlxyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC5ib3R0b207XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFZlcnRpY2FsQWxpZ25tZW50LmNlbnRlcjpcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSB0YXJnZXRFbGVtZW50Qm91bmRpbmdCb3gudG9wICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCh0YXJnZXRFbGVtZW50Qm91bmRpbmdCb3guaGVpZ2h0IC0gbWVudUNvbnRlbnRCb3VuZGluZ0JveC5oZWlnaHQpIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFZlcnRpY2FsQWxpZ25tZW50LmJvdHRvbTpcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSAodGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LnRvcCAtIG1lbnVDb250ZW50Qm91bmRpbmdCb3guaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ29udmVydCB0byBjb29yZGluYXRlcyByZWxhdGl2ZSB0byBtZW51IGNvbnRhaW5lclxyXG4gICAgICAgICAgICB0b3AgLT0gbWVudUJvdW5kaW5nQm94LnRvcDtcclxuXHJcbiAgICAgICAgICAgIC8vIENvbnN0cmFpbiB0byBtZW51IGNvbnRhaW5lciBib3VuZGFyaWVzXHJcbiAgICAgICAgICAgIHRvcCA9IE1hdGgubWF4KHRvcCwgdGhpcy5NRU5VX01BUkdJTik7XHJcbiAgICAgICAgICAgIGlmICh0b3AgKyBtZW51Q29udGVudEJvdW5kaW5nQm94LmhlaWdodCA+IG1lbnVCb3VuZGluZ0JveC5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRvcCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBib3R0b20gPSB0aGlzLk1FTlVfTUFSR0lOO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZW51Q29udGVudEVsZW1lbnQuc3R5bGUudG9wID0gdGhpcy5udW1iZXJUb1BpeGVscyh0b3ApO1xyXG4gICAgICAgIG1lbnVDb250ZW50RWxlbWVudC5zdHlsZS5ib3R0b20gPSB0aGlzLm51bWJlclRvUGl4ZWxzKGJvdHRvbSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVudUZvb3RlckNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyR0cmFuc2NsdWRlJyBdO1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksICR0cmFuc2NsdWRlOiBJVHJhbnNjbHVkZUZ1bmN0aW9uKSB7XHJcbiAgICAgICAgJHRyYW5zY2x1ZGUoKGNsb25lOiBJQXVnbWVudGVkSlF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVudUhlYWRlckNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyR0cmFuc2NsdWRlJyBdO1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksICR0cmFuc2NsdWRlOiBJVHJhbnNjbHVkZUZ1bmN0aW9uKSB7XHJcbiAgICAgICAgJHRyYW5zY2x1ZGUoKGNsb25lOiBJQXVnbWVudGVkSlF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxpYXMtbWVudS1jb250ZW50IG5nLXRyYW5zY2x1ZGUgbmctY2xpY2s9XFxcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxcXCI+PC9pYXMtbWVudS1jb250ZW50PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vbmF2LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdkNvbXBvbmVudCB7fVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJpYXMtbmF2LWNvbnRlbnRcXFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJQ29tcGlsZVNlcnZpY2UsIElEaXJlY3RpdmUsIElTY29wZSwgSUF0dHJpYnV0ZXMgfSBmcm9tICdhbmd1bGFyJztcclxubGV0IHRlbXBsYXRlVXJsID0gcmVxdWlyZSgnY29tcG9uZW50cy9pbnB1dC9yZXNpemluZy50ZXh0YXJlYS5jb21wb25lbnQuaHRtbCcpO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlc2l6aW5nVGV4dGFyZWFDb250cm9sbGVyIHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyckc2NvcGUnXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRzY29wZTogSVNjb3BlKSB7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBkaXJlY3RpdmUgc3VwcG9ydHMgYSB0ZXh0IGFyZWEgdGhhdCB3aWxsIGdyb3cgYW5kIHNocmluayBiYXNlZCBvbiB0aGUgc2l6ZSBvZiB0aGUgXHJcbiAqIGNvbnRlbnQgaW4gdGhlIHRleHQgYXJlYS5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc2l6aW5nVGV4dGFyZWFEaXJlY3RpdmUoKTogSURpcmVjdGl2ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnRyb2xsZXI6IFJlc2l6aW5nVGV4dGFyZWFDb250cm9sbGVyLFxyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6IHRlbXBsYXRlVXJsLFxyXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXHJcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICBtb2RlbDogJz1uZ01vZGVsJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGluazogKHNjb3BlOiBJU2NvcGUsXHJcbiAgICAgICAgICAgICAgIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksXHJcbiAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IElBdHRyaWJ1dGVzLFxyXG4gICAgICAgICAgICAgICBjb250cm9sbGVyOiBSZXNpemluZ1RleHRhcmVhQ29udHJvbGxlcikgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgIGlmICghY29udHJvbGxlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5hdHRyKCdtaW4tcm93cycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1pblJvd3MgPSBlbGVtZW50LmF0dHIoJ21pbi1yb3dzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1pblJvd3MuaW5kZXhPZignICcpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICogVGhpcyBtZWFucyB0aGF0IHRoZXkgdHJpZWQgdG8gb3ZlcnJpZGUgdGhlIG1pbmltdW0gbnVtYmVyIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHJvd3MgYW5kIHRoZSBBbmd1bGFyIHRyYW5zY2x1ZGUgY29tYmluZWQgdGhlIGF0dHJpYnV0ZXMgaW5zdGVhZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBvZiByZXBsYWNpbmcgdGhlbS4gIFdlIG5lZWQgdG8gZml4IHRoYXQgdXAuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hdHRyKCdtaW4tcm93cycsIG1pblJvd3Muc2xpY2UoMCwgbWluUm93cy5pbmRleE9mKCcgJykpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICAqIFdlIG5lZWQgdG8gc3RhcnQgYnkgZ2V0dGluZyBzb21lIGJhc2ljIG1lYXN1cmVtZW50cy4gIFdlXHJcbiAgICAgICAgICAgICAgICAgICAgKiBzZXQgdGhlIGZvbnQgc2l6ZSBiZWNhdXNlIHdlIG5lZWQgdG8ga25vdyB0aGUgY29ycmVjdCBsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgKiBoZWlnaHQgb3Igd2UgY2FuJ3QgcmVzaXplIHRoZSBib3ggcHJvcGVybHkuXHJcbiAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgIGxldCB0bXBWYWwgPSBlbGVtZW50LnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgZWxlbWVudC52YWwoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgbGV0IGJhc2VTY3JvbGxIZWlnaHQgPSBlbGVtZW50WzBdLnNjcm9sbEhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudmFsKHRtcFZhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgZWxlbWVudC5jc3MoJ292ZXJmbG93LXknLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNzcygnZm9udC1zaXplJywgJzE1cHgnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAqIFRoZSByZXNpemUgZnVuY3Rpb24gaGFuZGxlcyBkZXRlcm1pbmluZyB0aGUgYWN0dWFsXHJcbiAgICAgICAgICAgICAgICAgICAgKiBzaXplIG9mIHRoZSBib3guIFxyXG4gICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICBsZXQgcmVzaXplID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1pblJvd3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmF0dHIoJ21pbi1yb3dzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluUm93cyA9IE51bWJlcihlbGVtZW50LmF0dHIoJ21pbi1yb3dzJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hdHRyKCdyb3dzJywgbWluUm93cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvd3MgPSBNYXRoLmNlaWwoKGVsZW1lbnRbMF0uc2Nyb2xsSGVpZ2h0IC0gYmFzZVNjcm9sbEhlaWdodCkgLyAxOCkgKyBtaW5Sb3dzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXR0cigncm93cycsIHJvd3MpO1xyXG4gICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICBzY29wZS4kd2F0Y2goJ21vZGVsJywgZnVuY3Rpb24obmV3VmFsdWU6IHN0cmluZywgb2xkVmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgZWxlbWVudC5iaW5kKCdpbnB1dCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5SZXNpemluZ1RleHRhcmVhQ29udHJvbGxlci4kaW5qZWN0ID0gWyckY29tcGlsZSddO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2lucHV0L3Jlc2l6aW5nLnRleHRhcmVhLmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvaW5wdXQvcmVzaXppbmcudGV4dGFyZWEuY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjx0ZXh0YXJlYSBuZy10cmFuc2NsdWRlIGNsYXNzPVxcXCJpYXNSZXNpemluZ1RleHRBcmVhXFxcIiByb3dzPVxcXCIzXFxcIiBtaW4tcm93cz1cXFwiM1xcXCI+PC90ZXh0YXJlYT5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9pbnB1dC9yZXNpemluZy50ZXh0YXJlYS5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJTmdNb2RlbENvbnRyb2xsZXIsIElTY29wZSB9IGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ0AnXHJcbiAgICB9LFxyXG4gICAgcmVxdWlyZToge1xyXG4gICAgICAgIG5nTW9kZWw6ICdebmdNb2RlbCdcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9zZWFyY2gtYm94LmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQm94Q29tcG9uZW50IHtcclxuICAgIG5nTW9kZWw6IElOZ01vZGVsQ29udHJvbGxlcjtcclxuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnJHNjb3BlJyBdO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgcHJpdmF0ZSAkc2NvcGU6IElTY29wZSkge1xyXG4gICAgfVxyXG5cclxuICAgICRvbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gU2V0IGRlZmF1bHRzXHJcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXIgfHwgJ1NlYXJjaCc7XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgbmdNb2RlbFxyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLm5nTW9kZWwuJHJlbmRlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2VsZi52YWx1ZSA9IHNlbGYubmdNb2RlbC4kdmlld1ZhbHVlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuJHNjb3BlLiR3YXRjaChcclxuICAgICAgICAgICAgKCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi52YWx1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKG5ld1ZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlbGYubmdNb2RlbC4kc2V0Vmlld1ZhbHVlKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJJbnB1dCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnB1dEtleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSAyNzogLy8gRVNDQVBFXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFySW5wdXQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwiaWFzLXNlYXJjaC1ib3gtY29udGVudFxcXCI+XFxyXFxuICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIlxcclxcbiAgICAgICAgICAgYXV0b2NvbXBsZXRlPVxcXCJmYWxzZVxcXCJcXHJcXG4gICAgICAgICAgIG5nLW1vZGVsPVxcXCIkY3RybC52YWx1ZVxcXCJcXHJcXG4gICAgICAgICAgIG5nLWF0dHItcGxhY2Vob2xkZXI9XFxcInt7JGN0cmwucGxhY2Vob2xkZXJ9fVxcXCJcXHJcXG4gICAgICAgICAgIG5nLWtleWRvd249XFxcIiRjdHJsLm9uSW5wdXRLZXlEb3duKCRldmVudClcXFwiIC8+XFxyXFxuICAgIDxpYXMtaWNvbiBpY29uPVxcXCJzZWFyY2hfdGhpY2tcXFwiPjwvaWFzLWljb24+XFxyXFxuICAgIDxpYXMtYnV0dG9uIGNsYXNzPVxcXCJpYXMtaWNvbi1idXR0b25cXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5jbGVhcklucHV0KClcXFwiPlxcclxcbiAgICAgICAgPGlhcy1pY29uIGljb249XFxcImNsb3NlX3RoaWNrXFxcIj48L2lhcy1pY29uPlxcclxcbiAgICA8L2lhcy1idXR0b24+XFxyXFxuPC9kaXY+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5IH0gZnJvbSAnYW5ndWxhcic7XHJcbmltcG9ydCB7IElUb2dnbGVhYmxlIH0gZnJvbSAnLi4vdG9nZ2xlL3RvZ2dsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgVG9nZ2xlU2VydmljZSBmcm9tICcuLi90b2dnbGUvdG9nZ2xlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIG5hbWU6ICdAJ1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3NpZGUtbmF2LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVOYXZDb21wb25lbnQgaW1wbGVtZW50cyBJVG9nZ2xlYWJsZSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBvcGVuOiBib29sZWFuO1xyXG5cclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyckZWxlbWVudCcsICdJYXNUb2dnbGVTZXJ2aWNlJ107XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCBwcml2YXRlIHRvZ2dsZVNlcnZpY2U6IFRvZ2dsZVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAkb25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlU2VydmljZS5yZWdpc3Rlcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAkb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQub2ZmKCdjbGljaycpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcygnaWFzLW9wZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoJ2lhcy1vcGVuJyk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJpYXMtc2NyaW1cXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5oaWRlKClcXFwiPjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcImlhcy1zaWRlLW5hdi1jb250ZW50XFxcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5IH0gZnJvbSAnYW5ndWxhcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3RpbGUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZUNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JyBdO1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnkpIHtcclxuICAgICAgICAkZWxlbWVudC5hdHRyKCd0YWJpbmRleCcsIDApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvdGlsZS90aWxlLmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvdGlsZS90aWxlLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJpYXMtdGlsZS1jb250ZW50XFxcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL3RpbGUvdGlsZS5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSVRyYW5zY2x1ZGVGdW5jdGlvbiB9IGZyb20gJ2FuZ3VsYXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGVHcmlkQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnJHRyYW5zY2x1ZGUnIF07XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcclxuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuYXBwZW5kKGNsb25lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3RpbGUtZ3JpZC90aWxlLWdyaWQuY29tcG9uZW50LnRzXG4gKiovIiwiaW1wb3J0IHsgSUF0dHJpYnV0ZXMsIElBdWdtZW50ZWRKUXVlcnksIElDb21waWxlU2VydmljZSwgSURpcmVjdGl2ZSwgSVNjb3BlIH0gZnJvbSAnYW5ndWxhcic7XHJcblxyXG5leHBvcnQgY2xhc3MgU29ydERpcmVjdGl2ZUNvbnRyb2xsZXIge1xyXG4gICAgc29ydEJpbmRpbmc6IHN0cmluZztcclxuICAgIHNvcnRFeHByZXNzaW9uOiBzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljICRpbmplY3QgPSBbJyRzY29wZSddO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkc2NvcGU6IElTY29wZSkge1xyXG4gICAgfVxyXG5cclxuICAgIHNvcnRPbihzb3J0T25Qcm9wZXJ0eTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc29ydEV4cHJlc3Npb24gPT09IHNvcnRPblByb3BlcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ydEV4cHJlc3Npb24gPSAnLScgKyBzb3J0T25Qcm9wZXJ0eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ydEV4cHJlc3Npb24gPSBzb3J0T25Qcm9wZXJ0eTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJHNjb3BlLiRldmFsKHRoaXMuc29ydEJpbmRpbmcgKyAnPVwiJyArIHRoaXMuc29ydEV4cHJlc3Npb24gKyAnXCInKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNvcnREaXJlY3RpdmUoKTogSURpcmVjdGl2ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnRyb2xsZXI6IFNvcnREaXJlY3RpdmVDb250cm9sbGVyLFxyXG4gICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgbGluazogKHNjb3BlOiBJU2NvcGUsXHJcbiAgICAgICAgICAgICAgIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksXHJcbiAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IElBdHRyaWJ1dGVzLFxyXG4gICAgICAgICAgICAgICBjb250cm9sbGVyOiBTb3J0RGlyZWN0aXZlQ29udHJvbGxlcikgPT4ge1xyXG4gICAgICAgICAgICBjb250cm9sbGVyLnNvcnRCaW5kaW5nID0gYXR0cmlidXRlc1snaWFzU29ydCddO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBJU29ydE9uU2NvcGUgZXh0ZW5kcyBJU2NvcGUge1xyXG4gICAgZ2V0U29ydEV4cHJlc3Npb24oKTogc3RyaW5nO1xyXG4gICAgc29ydE9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTb3J0T25EaXJlY3RpdmUoJGNvbXBpbGU6IElDb21waWxlU2VydmljZSk6IElEaXJlY3RpdmUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXF1aXJlOiAnXmlhc1NvcnQnLFxyXG4gICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgJ3NvcnRPbic6ICc8aWFzU29ydE9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGluazogKHNjb3BlOiBJU29ydE9uU2NvcGUsXHJcbiAgICAgICAgICAgICAgIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksXHJcbiAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IElBdHRyaWJ1dGVzLFxyXG4gICAgICAgICAgICAgICBjb250cm9sbGVyOiBTb3J0RGlyZWN0aXZlQ29udHJvbGxlcikgPT4ge1xyXG4gICAgICAgICAgICBzY29wZS5nZXRTb3J0RXhwcmVzc2lvbiA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2xsZXIuc29ydEV4cHJlc3Npb247XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgc29ydCBpY29uc1xyXG4gICAgICAgICAgICBsZXQgaWNvbkh0bWwgPVxyXG4gICAgICAgICAgICAgICAgJzxpYXMtaWNvbiBpY29uPVwiZG93bl90aGlja1wiIG5nLWlmPVwiZ2V0U29ydEV4cHJlc3Npb24oKSA9PSBcXCcnICsgc2NvcGUuc29ydE9uICsgJ1xcJ1wiPjwvaWFzLWljb24+JyArXHJcbiAgICAgICAgICAgICAgICAnPGlhcy1pY29uIGljb249XCJ1cF90aGlja1wiIG5nLWlmPVwiZ2V0U29ydEV4cHJlc3Npb24oKSA9PSBcXCctJyArIHNjb3BlLnNvcnRPbiArICdcXCdcIj48L2lhcy1pY29uPic7XHJcbiAgICAgICAgICAgIGxldCBpY29uRWxlbWVudCA9ICRjb21waWxlKGljb25IdG1sKShzY29wZSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKGljb25FbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBpYXMtc29ydGFibGUgY2xhc3NcclxuICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcygnaWFzLXNvcnRhYmxlJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZWdpc3RlciBjbGljayBoYW5kbGVyXHJcbiAgICAgICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuJGFwcGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNvcnRPbihzY29wZVsnc29ydE9uJ10pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcblNvcnRPbkRpcmVjdGl2ZS4kaW5qZWN0ID0gWyckY29tcGlsZSddO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3RhYmxlL3NvcnQuZGlyZWN0aXZlLnRzXG4gKiovIiwiaW1wb3J0IHsgSUF0dHJpYnV0ZXMsIElBdWdtZW50ZWRKUXVlcnksIElEaXJlY3RpdmUsIElTY29wZSB9IGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgVG9nZ2xlU2VydmljZSBmcm9tICcuL3RvZ2dsZS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRvZ2dsZWFibGUge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgb3BlbjogYm9vbGVhbjtcclxuXHJcbiAgICBoaWRlKCk6IHZvaWQ7XHJcbiAgICBzaG93KGVsZW1lbnQ/OiBJQXVnbWVudGVkSlF1ZXJ5KTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRvZ2dsZURpcmVjdGl2ZSh0b2dnbGVTZXJ2aWNlOiBUb2dnbGVTZXJ2aWNlKTogSURpcmVjdGl2ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxpbms6IChzY29wZTogSVNjb3BlLCBlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCBhdHRyczogSUF0dHJpYnV0ZXMpID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCAoKSA9PiB7IHRvZ2dsZVNlcnZpY2UudG9nZ2xlQ29tcG9uZW50KGF0dHJzWydpYXNUb2dnbGUnXSwgZWxlbWVudCk7IH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzdHJpY3Q6ICdBJ1xyXG4gICAgfTtcclxufVxyXG5cclxuVG9nZ2xlRGlyZWN0aXZlLiRpbmplY3QgPSBbICdJYXNUb2dnbGVTZXJ2aWNlJyBdO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlLnRzXG4gKiovIiwiaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSB9IGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBJVG9nZ2xlYWJsZSB9IGZyb20gJy4vdG9nZ2xlLmRpcmVjdGl2ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2dnbGVTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgdG9nZ2xlYWJsZUNvbXBvbmVudHM6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZWFibGVDb21wb25lbnRzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIodG9nZ2xlYWJsZUNvbXBvbmVudDogSVRvZ2dsZWFibGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZWFibGVDb21wb25lbnRzW3RvZ2dsZWFibGVDb21wb25lbnQubmFtZV0gPSB0b2dnbGVhYmxlQ29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUNvbXBvbmVudChjb21wb25lbnRJZDogc3RyaW5nLCBlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHRvZ2dsZWFibGVFbGVtZW50OiBJVG9nZ2xlYWJsZSA9IHRoaXMudG9nZ2xlYWJsZUNvbXBvbmVudHNbY29tcG9uZW50SWRdO1xyXG5cclxuICAgICAgICBpZiAodG9nZ2xlYWJsZUVsZW1lbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRvZ2dsZWFibGVFbGVtZW50Lm9wZW4pIHtcclxuICAgICAgICAgICAgdG9nZ2xlYWJsZUVsZW1lbnQuc2hvdyhlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZWFibGVFbGVtZW50LmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy90b2dnbGUvdG9nZ2xlLnNlcnZpY2UudHNcbiAqKi8iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7O0FDcERBOzs7Ozs7Ozs7Ozs7OztBQ0FBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7QUNOQTtBQU1BO0FBVUE7QUFDQTtBQVhBOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFRQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRkE7QUFOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDRkE7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFKQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFEQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7OztBQ05BO0FBb0JBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQTdGQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNGQTtBQUVBO0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUxBO0FBREE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQkE7QUF1QkE7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFEQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0ZBO0FBRUE7QUFHQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBTEE7QUFEQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxEQTtBQW9EQTs7Ozs7OztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBWUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBREE7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBWUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBREE7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBRUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUE3SkE7QUFQQTtBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBeUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQzdNQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0ZBO0FBRUE7QUFHQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBTEE7QUFEQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwRUE7QUFzRUE7Ozs7Ozs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFXQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBbENBO0FBTEE7QUFUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFZQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBcEJBO0FBSkE7QUFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBREE7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7O0FDSkE7QUFLQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBZEE7QUFKQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQ0E7QUFtQ0E7Ozs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTs7Ozs7Ozs7O0FDakJBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9