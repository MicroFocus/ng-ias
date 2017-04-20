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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbWZ1eC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1YTdiNzQ0YTUzMGM5YzUyN2M0MSIsIndlYnBhY2s6Ly8vLi9zcmMvbmctbWZ1eC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC5kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaWNvbi5pbnB1dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaWNvbi5pbnB1dC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW50LmlucHV0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pbnQuaW5wdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC9yZXNpemluZy50ZXh0YXJlYS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvcmVzaXppbmcudGV4dGFyZWEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpbGUvdGlsZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGlsZS90aWxlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpbGUtZ3JpZC90aWxlLWdyaWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYmxlL3NvcnQuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDVhN2I3NDRhNTMwYzljNTI3YzQxXG4gKiovIiwiaW1wb3J0IHsgbW9kdWxlIH0gZnJvbSAnYW5ndWxhcic7XHJcbmltcG9ydCBBcHBCYXJDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgQXZhdGFyQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCBCdXR0b25EaXJlY3RpdmUgZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IERpYWxvZ0NvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgRGlhbG9nU2VydmljZSBmcm9tICcuL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5zZXJ2aWNlJztcclxuaW1wb3J0IEhlYWRlckNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgSWNvbkNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudCc7XHJcbmltcG9ydCBJY29uSW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L2ljb24uaW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IElucHV0Q29udGFpbmVyQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgSW50SW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L2ludC5pbnB1dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50LCBMaXN0SGVhZGVyQ29tcG9uZW50LCBMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWVudUNvbXBvbmVudCwgTWVudUZvb3RlckNvbXBvbmVudCwgTWVudUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IE5hdkNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQnO1xyXG5pbXBvcnQgUmVzaXppbmdUZXh0YXJlYUNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvcmVzaXppbmcudGV4dGFyZWEuY29tcG9uZW50JztcclxuaW1wb3J0IFNlYXJjaEJveENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCBTaWRlTmF2Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQnO1xyXG5pbXBvcnQgVGlsZUNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvdGlsZS90aWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCBUaWxlR3JpZENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvdGlsZS1ncmlkL3RpbGUtZ3JpZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3J0RGlyZWN0aXZlLCBTb3J0T25EaXJlY3RpdmUgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUvc29ydC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUb2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL2NvbXBvbmVudHMvdG9nZ2xlL3RvZ2dsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgVG9nZ2xlU2VydmljZSBmcm9tICcuL2NvbXBvbmVudHMvdG9nZ2xlL3RvZ2dsZS5zZXJ2aWNlJztcclxuXHJcbm1vZHVsZSgnbmctbWZ1eCcsIFtdKVxyXG4gICAgLmNvbnN0YW50KCdNRU5VX01BUkdJTicsIDI0KVxyXG4gICAgLmNvbXBvbmVudCgnbWZBcHBCYXInLCBBcHBCYXJDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdtZkF2YXRhcicsIEF2YXRhckNvbXBvbmVudClcclxuICAgIC5kaXJlY3RpdmUoJ21mQnV0dG9uJywgQnV0dG9uRGlyZWN0aXZlKVxyXG4gICAgLmRpcmVjdGl2ZSgnbWZJbnRJbnB1dCcsIEludElucHV0KVxyXG4gICAgLmRpcmVjdGl2ZSgnbWZJY29uSW5wdXQnLCBJY29uSW5wdXQpXHJcbiAgICAuY29tcG9uZW50KCdtZkRpYWxvZycsIERpYWxvZ0NvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ21mSGVhZGVyJywgSGVhZGVyQ29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnbWZJY29uJywgSWNvbkNvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ21mSW5wdXRDb250YWluZXInLCBJbnB1dENvbnRhaW5lckNvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ21mTGlzdCcsIExpc3RDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdtZkxpc3RIZWFkZXInLCBMaXN0SGVhZGVyQ29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnbWZMaXN0SXRlbScsIExpc3RJdGVtQ29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnbWZNZW51JywgTWVudUNvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ21mRm9vdGVyTWVudScsIE1lbnVGb290ZXJDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdtZkhlYWRlck1lbnUnLCBNZW51SGVhZGVyQ29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnbWZOYXYnLCBOYXZDb21wb25lbnQpXHJcbiAgICAuZGlyZWN0aXZlKCdtZlJlc2l6aW5nVGV4dGFyZWEnLCBSZXNpemluZ1RleHRhcmVhQ29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnbWZTZWFyY2hCb3gnLCBTZWFyY2hCb3hDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdtZlNpZGVOYXYnLCBTaWRlTmF2Q29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnbWZUaWxlJywgVGlsZUNvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ21mVGlsZUdyaWQnLCBUaWxlR3JpZENvbXBvbmVudClcclxuXHJcbiAgICAuZGlyZWN0aXZlKCdtZlRvZ2dsZScsIFRvZ2dsZURpcmVjdGl2ZSlcclxuICAgIC5kaXJlY3RpdmUoJ21mU29ydCcsIFNvcnREaXJlY3RpdmUpXHJcbiAgICAuZGlyZWN0aXZlKCdtZlNvcnRPbicsIFNvcnRPbkRpcmVjdGl2ZSlcclxuXHJcbiAgICAuc2VydmljZSgnTWZEaWFsb2dTZXJ2aWNlJywgRGlhbG9nU2VydmljZSlcclxuICAgIC5zZXJ2aWNlKCdNZlRvZ2dsZVNlcnZpY2UnLCBUb2dnbGVTZXJ2aWNlKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbmctbWZ1eC5tb2R1bGUudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImFuZ3VsYXJcIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9hcHAtYmFyLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcEJhckNvbXBvbmVudCB7fVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQudHNcbiAqKi8iLCJpbXBvcnQgeyBleHRlbmQsIElBdWdtZW50ZWRKUXVlcnksIElBdHRyaWJ1dGVzfSBmcm9tICdhbmd1bGFyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRlbnRUZW1wbGF0ZUZ1bmN0aW9uIHtcclxuICAgICgkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJGF0dHJzPzogSUF0dHJpYnV0ZXMpOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb21wb25lbnQob3B0aW9uczoge1xyXG4gICAgYmluZGluZ3M/OiBhbnksXHJcbiAgICBiaW5kVG9Db250cm9sbGVyPzogYm9vbGVhbixcclxuICAgIGNvbnRyb2xsZXJBcz86IHN0cmluZyxcclxuICAgIHJlcXVpcmU/OiBhbnk7XHJcbiAgICB0ZW1wbGF0ZT86IChzdHJpbmcgfCBhbnlbXSB8IElDb250ZW50VGVtcGxhdGVGdW5jdGlvbiksXHJcbiAgICB0ZW1wbGF0ZVVybD86IHN0cmluZyxcclxuICAgIHRyYW5zY2x1ZGU/OiAoYm9vbGVhbiB8IHN0cmluZyksXHJcbiAgICBzdHlsZXNoZWV0VXJsPzogc3RyaW5nXHJcbn0pIHtcclxuICAgIHJldHVybiAoY29udHJvbGxlcjogRnVuY3Rpb24pID0+IGV4dGVuZChvcHRpb25zLCB7IGNvbnRyb2xsZXI6IGNvbnRyb2xsZXIgfSk7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50LmRlY29yYXRvci50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJtZi1hcHAtYmFyLWNvbnRlbnRcXFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgICdzcmMnOiAnPCdcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9hdmF0YXIuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdmF0YXJDb21wb25lbnQge1xyXG4gICAgc3JjOiBzdHJpbmc7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvYXZhdGFyL2F2YXRhci5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwibWYtYXZhdGFyLWNvbnRlbnRcXFwiIG5nLXN0eWxlPVxcXCJ7ICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgJGN0cmwuc3JjICsgJyknIH1cXFwiPjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJQ29tcGlsZVNlcnZpY2UsIElEaXJlY3RpdmUsIElTY29wZSwgSUF0dHJpYnV0ZXMgfSBmcm9tICdhbmd1bGFyJztcclxubGV0IHRlbXBsYXRlVXJsID0gcmVxdWlyZSgnY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sJyk7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29udHJvbGxlciB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsnJHNjb3BlJ107XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRzY29wZTogSVNjb3BlKSB7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25EaXJlY3RpdmUoKTogSURpcmVjdGl2ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnRyb2xsZXI6IEJ1dHRvbkNvbnRyb2xsZXIsXHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogdGVtcGxhdGVVcmwsXHJcbiAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcclxuICAgICAgICByZXBsYWNlOiB0cnVlLFxyXG4gICAgICAgIGxpbms6IChzY29wZTogSVNjb3BlLFxyXG4gICAgICAgICAgICAgICBlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LFxyXG4gICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBJQXR0cmlidXRlcyxcclxuICAgICAgICAgICAgICAgY29udHJvbGxlcjogQnV0dG9uQ29udHJvbGxlcikgPT4ge1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbkJ1dHRvbkRpcmVjdGl2ZS4kaW5qZWN0ID0gWyckY29tcGlsZSddO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8YnV0dG9uIGNsYXNzPVxcXCJtZi1idXR0b25cXFwiIG5nLXRyYW5zY2x1ZGU+XFxyXFxuPC9idXR0b24+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnksIElUcmFuc2NsdWRlRnVuY3Rpb24gfSBmcm9tICdhbmd1bGFyJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnJHRyYW5zY2x1ZGUnIF07XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcclxuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuYXBwZW5kKGNsb25lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnRzXG4gKiovIiwiaW1wb3J0IHtcclxuICAgIGVsZW1lbnQsXHJcbiAgICBJQ29tcGlsZVNlcnZpY2UsXHJcbiAgICBJQ29udHJvbGxlclNlcnZpY2UsXHJcbiAgICBJRG9jdW1lbnRTZXJ2aWNlLFxyXG4gICAgSVByb21pc2UsXHJcbiAgICBJUVNlcnZpY2UsXHJcbiAgICBJUm9vdFNjb3BlU2VydmljZSxcclxuICAgIElUZW1wbGF0ZUNhY2hlU2VydmljZSB9IGZyb20gJ2FuZ3VsYXInO1xyXG5cclxuaW50ZXJmYWNlIERpYWxvZ09wdGlvbnMge1xyXG4gICAgY2FuY2VsOiBzdHJpbmc7XHJcbiAgICBvazogc3RyaW5nO1xyXG4gICAgcHJvbXB0OiBib29sZWFuO1xyXG4gICAgcmVzcG9uc2U6IHN0cmluZztcclxuICAgIHRleHRDb250ZW50OiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2dTZXJ2aWNlIHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGNvbXBpbGUnLCAnJGNvbnRyb2xsZXInLCAnJGRvY3VtZW50JywgJyRxJywgJyRyb290U2NvcGUnLCAnJHRlbXBsYXRlQ2FjaGUnIF07XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRjb21waWxlOiBJQ29tcGlsZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlICRjb250cm9sbGVyOiBJQ29udHJvbGxlclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlICRkb2N1bWVudDogSURvY3VtZW50U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgJHE6IElRU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgJHJvb3RTY29wZTogSVJvb3RTY29wZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlICR0ZW1wbGF0ZUNhY2hlOiBJVGVtcGxhdGVDYWNoZVNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBhbGVydChvcHRpb25zOiBEaWFsb2dPcHRpb25zKTogSVByb21pc2U8YW55PiB7XHJcbiAgICAgICAgb3B0aW9ucy5jYW5jZWwgPSBudWxsO1xyXG4gICAgICAgIG9wdGlvbnMub2sgPSBvcHRpb25zLm9rIHx8ICdPSyc7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4ob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlybShvcHRpb25zOiBEaWFsb2dPcHRpb25zKTogSVByb21pc2U8YW55PiB7XHJcbiAgICAgICAgb3B0aW9ucy5jYW5jZWwgPSBvcHRpb25zLmNhbmNlbCB8fCAnTm8nO1xyXG4gICAgICAgIG9wdGlvbnMub2sgPSBvcHRpb25zLm9rIHx8ICdZZXMnO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4ob3B0aW9uczogRGlhbG9nT3B0aW9ucyk6IElQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCBkZWZlcnJlZCA9IHRoaXMuJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGFuZCBjb21waWxlIGVsZW1lbnRcclxuICAgICAgICBsZXQgZGlhbG9nSHRtbCA9XHJcbiAgICAgICAgICAgICc8bWYtZGlhbG9nIG5nLWNsaWNrPVwib25TY3JpbUNsaWNrZWQoKVwiPicgK1xyXG4gICAgICAgICAgICAnICAgPG1mLWRpYWxvZy1jb250ZW50IG5nLWNsaWNrPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgPGRpdiBjbGFzcz1cIm1mLWRpYWxvZy1oZWFkZXJcIj4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgPGRpdiBuZy1pZj1cIiEhdGl0bGVcIiBjbGFzcz1cIm1mLXRpdGxlXCI+e3t0aXRsZX19PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgPGRpdiBjbGFzcz1cIm1mLWRpYWxvZy1ib2R5XCI+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgIDxkaXYgbmctaWY9XCIhcHJvbXB0XCI+e3t0ZXh0Q29udGVudH19PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgIDxkaXYgbmctaWY9XCJwcm9tcHRcIj4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgIDxtZi1pbnB1dC1jb250YWluZXI+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlc3BvbnNlXCI+e3t0ZXh0Q29udGVudH19PC9sYWJlbD4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJyZXNwb25zZVwiIG5hbWU9XCJyZXNwb25zZVwiIHR5cGU9XCJ0ZXh0XCIgbmctbW9kZWw9XCJkYXRhLnJlc3BvbnNlXCI+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICA8L21mLWlucHV0LWNvbnRhaW5lcj4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgPGRpdiBjbGFzcz1cIm1mLWFjdGlvbnNcIj4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICA8bWYtYnV0dG9uIG5nLWlmPVwiISFva1RleHRcIiBuZy1jbGljaz1cImNvbmZpcm0oKVwiPnt7b2tUZXh0fX08L21mLWJ1dHRvbj4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICA8bWYtYnV0dG9uIG5nLWlmPVwiISFjYW5jZWxUZXh0XCIgbmctY2xpY2s9XCJjYW5jZWwoKVwiPnt7Y2FuY2VsVGV4dH19PC9tZi1idXR0b24+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgPG1mLWJ1dHRvbiBjbGFzcz1cIm1mLWljb24tYnV0dG9uIG1mLWRpYWxvZy1jbG9zZS1idXR0b25cIiBuZy1jbGljaz1cImNhbmNlbCgpXCI+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgIDxtZi1pY29uIGljb249XCJjbG9zZV90aGlja1wiPjwvbWYtaWNvbj4nICtcclxuICAgICAgICAgICAgJyAgICAgICA8L21mLWJ1dHRvbj4nICtcclxuICAgICAgICAgICAgJyAgIDwvbWYtZGlhbG9nLWNvbnRlbnQ+JyArXHJcbiAgICAgICAgICAgICc8L21mLWRpYWxvZz4nO1xyXG5cclxuICAgICAgICBsZXQgc2NvcGUgPSB0aGlzLiRyb290U2NvcGUuJG5ldyh0cnVlKTtcclxuXHJcbiAgICAgICAgc2NvcGVbJ2NhbmNlbCddID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgY29tcGlsZWREaWFsb2dFbGVtZW50LmRldGFjaCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2NvcGVbJ2NvbmZpcm0nXSA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gc2NvcGVbJ2RhdGEnXVsncmVzcG9uc2UnXTtcclxuXHJcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBjb21waWxlZERpYWxvZ0VsZW1lbnQuZGV0YWNoKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzY29wZVsnZGVmZXJyZWQnXSA9IGRlZmVycmVkO1xyXG4gICAgICAgIHNjb3BlWydjYW5jZWxUZXh0J10gPSBvcHRpb25zLmNhbmNlbDtcclxuICAgICAgICBzY29wZVsnb2tUZXh0J10gPSBvcHRpb25zLm9rO1xyXG4gICAgICAgIHNjb3BlWydvblNjcmltQ2xpY2tlZCddID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzY29wZVsnY2FuY2VsJ10oKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNjb3BlWydwcm9tcHQnXSA9IG9wdGlvbnMucHJvbXB0O1xyXG4gICAgICAgIHNjb3BlWydkYXRhJ10gPSB7IHJlc3BvbnNlOiBvcHRpb25zLnJlc3BvbnNlIH07XHJcbiAgICAgICAgc2NvcGVbJ3RleHRDb250ZW50J10gPSBvcHRpb25zLnRleHRDb250ZW50O1xyXG4gICAgICAgIHNjb3BlWyd0aXRsZSddID0gb3B0aW9ucy50aXRsZTtcclxuXHJcbiAgICAgICAgbGV0IGNvbXBpbGVkRGlhbG9nRWxlbWVudCA9IHRoaXMuJGNvbXBpbGUoZGlhbG9nSHRtbCkoc2NvcGUpO1xyXG5cclxuICAgICAgICAvLyBJbnNlcnQgZWxlbWVudCBpbnRvIERPTVxyXG4gICAgICAgIGVsZW1lbnQodGhpcy4kZG9jdW1lbnQuZmluZCgnYm9keScpKS5hcHBlbmQoY29tcGlsZWREaWFsb2dFbGVtZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvbXB0KG9wdGlvbnM6IERpYWxvZ09wdGlvbnMpOiBJUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBvcHRpb25zLmNhbmNlbCA9IG9wdGlvbnMuY2FuY2VsIHx8ICdDYW5jZWwnO1xyXG4gICAgICAgIG9wdGlvbnMub2sgPSBvcHRpb25zLm9rIHx8ICdPSyc7XHJcbiAgICAgICAgb3B0aW9ucy5wcm9tcHQgPSB0cnVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKG9wdGlvbnMpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5zZXJ2aWNlLnRzXG4gKiovIiwiaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSVRyYW5zY2x1ZGVGdW5jdGlvbiB9IGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcclxuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xyXG4gICAgICAgICR0cmFuc2NsdWRlKChjbG9uZTogSUF1Z21lbnRlZEpRdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHNcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBpY29uOiAnQCcsXHJcbiAgICAgICAgc3ZnSWNvbjogJ0AnXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vaWNvbi5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb25Db21wb25lbnQge1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8aSBuZy1pZj1cXFwiJGN0cmwuaWNvblxcXCIgbmctY2xhc3M9XFxcIlsnbWYtaWNvbicsICdtZi1pY29uLScgKyAkY3RybC5pY29uXVxcXCI+PC9pPlxcclxcbjxpbWcgbmctaWY9XFxcIiEkY3RybC5pY29uXFxcIiBjbGFzcz1cXFwic3ZnLWljb25cXFwiIG5nLXNyYz1cXFwie3skY3RybC5zdmdJY29ufX1cXFwiIG5nLWF0dHItYWx0PVxcXCJ7eyRjdHJsLnN2Z0ljb259fVxcXCIvPlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2ljb24vaWNvbi5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJQ29tcGlsZVNlcnZpY2UsIElEaXJlY3RpdmUsIElTY29wZSwgSUF0dHJpYnV0ZXMgfSBmcm9tICdhbmd1bGFyJztcclxubGV0IHRlbXBsYXRlVXJsID0gcmVxdWlyZSgnY29tcG9uZW50cy9pbnB1dC9pY29uLmlucHV0LmNvbXBvbmVudC5odG1sJyk7XHJcblxyXG5leHBvcnQgY2xhc3MgSWNvbklucHV0Q29udHJvbGxlciB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsnJHNjb3BlJ107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkc2NvcGU6IElTY29wZSkge1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZGlyZWN0aXZlIHN1cHBvcnRzIHNob3dpbmcgYSB0ZXh0IGlucHV0IGZpZWxkIHdpdGggYW4gaWNvbi4gIFRoZXNlIGZpZWxkc1xyXG4gKiBhcmUgcG9wdWxhciBmb3Igc2VhcmNoIGJveGVzLiAgVGhlIGRpcmVjdGl2ZSBzdHlsZXMgdGhlIGljb24gc28gaXQgd29uJ3QgaW50ZXJmZXJlXHJcbiAqIHdpdGggdGhlIHRleHQgZmllbGQgYW5kIG1ha2VzIHRoZSBzcGFjaW5nIGxvb2sgY29ycmVjdCBmb3IgdGhlIGNvbnRyb2wuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJY29uSW5wdXREaXJlY3RpdmUoKTogSURpcmVjdGl2ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnRyb2xsZXI6IEljb25JbnB1dENvbnRyb2xsZXIsXHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogdGVtcGxhdGVVcmwsXHJcbiAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcclxuICAgICAgICByZXBsYWNlOiB0cnVlLFxyXG4gICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgIG1vZGVsOiAnPW5nTW9kZWwnLFxyXG4gICAgICAgICAgICBtaW46ICc9JyxcclxuICAgICAgICAgICAgbWF4OiAnPSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpbms6IChzY29wZTogSVNjb3BlLFxyXG4gICAgICAgICAgICAgICBlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LFxyXG4gICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBJQXR0cmlidXRlcyxcclxuICAgICAgICAgICAgICAgY29udHJvbGxlcjogSWNvbklucHV0Q29udHJvbGxlcikgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgIHNjb3BlLmljb24gPSBlbGVtZW50LmF0dHIoJ2ljb24nKTtcclxuICAgICAgICAgICAgICAgICAgIHNjb3BlLnBsYWNlaG9sZGVyID0gZWxlbWVudC5hdHRyKCdwbGFjZWhvbGRlcicpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbkljb25JbnB1dENvbnRyb2xsZXIuJGluamVjdCA9IFsnJGNvbXBpbGUnXTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pY29uLmlucHV0LmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvaW5wdXQvaWNvbi5pbnB1dC5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPHNwYW4gY2xhc3M9XFxcIm1mLWljb24taW5wdXQtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7e3BsYWNlaG9sZGVyfX1cXFwiPlxcclxcbiAgICA8bWYtaWNvbiBpY29uPVxcXCJ7e2ljb259fVxcXCI+PC9tZi1pY29uPlxcclxcbjwvc3Bhbj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pY29uLmlucHV0LmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJVHJhbnNjbHVkZUZ1bmN0aW9uIH0gZnJvbSAnYW5ndWxhcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2lucHV0LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0Q29udGFpbmVyQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnJHRyYW5zY2x1ZGUnIF07XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcclxuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuYXBwZW5kKGNsb25lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnksIElDb21waWxlU2VydmljZSwgSURpcmVjdGl2ZSwgSVNjb3BlLCBJQXR0cmlidXRlcyB9IGZyb20gJ2FuZ3VsYXInO1xyXG5sZXQgdGVtcGxhdGVVcmwgPSByZXF1aXJlKCdjb21wb25lbnRzL2lucHV0L2ludC5pbnB1dC5jb21wb25lbnQuaHRtbCcpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEludElucHV0Q29udHJvbGxlciB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsnJHNjb3BlJ107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkc2NvcGU6IElTY29wZSkge1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZGlyZWN0aXZlIHN1cHBvcnRzIGFuIGlucHV0IGZpZWxkIHdoaWNoIGFkZHMgdGhlIGNsYXNzIGlucHV0RXJyb3JcclxuICogd2hlbiB0aGUgdmFsdWUgaXMgbm90IGEgbnVtYmVyLiAgSXQgd2F0Y2hlcyBjaGFuZ2VzIGZyb20gdXNlciBpbnB1dHMsIFxyXG4gKiB0aGUgRE9NLCBhbmQgdGhlIG1vZGVsLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50SW5wdXREaXJlY3RpdmUoKTogSURpcmVjdGl2ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnRyb2xsZXI6IEludElucHV0Q29udHJvbGxlcixcclxuICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiB0ZW1wbGF0ZVVybCxcclxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxyXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgbW9kZWw6ICc9bmdNb2RlbCcsXHJcbiAgICAgICAgICAgIG1pbjogJz0nLFxyXG4gICAgICAgICAgICBtYXg6ICc9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGluazogKHNjb3BlOiBJU2NvcGUsXHJcbiAgICAgICAgICAgICAgIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksXHJcbiAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IElBdHRyaWJ1dGVzLFxyXG4gICAgICAgICAgICAgICBjb250cm9sbGVyOiBJbnRJbnB1dENvbnRyb2xsZXIpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRyb2xsZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgbGV0IGlzVmFsaWQgPSBmdW5jdGlvbih2YWw6IHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGlmICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIHZhbCB8fCB2YWwgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2lucHV0RXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKE51bWJlcih2YWwpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKCdpbnB1dEVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3BlLm1heCAmJiB2YWwgPiBzY29wZS5tYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ2lucHV0RXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY29wZS5taW4gJiYgdmFsIDwgc2NvcGUubWluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKCdpbnB1dEVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcygnaW5wdXRFcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKCdtb2RlbCcsIGZ1bmN0aW9uKG5ld1ZhbHVlOiBzdHJpbmcsIG9sZFZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYmluZCgnaW5wdXQnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQoZWxlbWVudC52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5JbnRJbnB1dENvbnRyb2xsZXIuJGluamVjdCA9IFsnJGNvbXBpbGUnXTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pbnQuaW5wdXQuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9pbnB1dC9pbnQuaW5wdXQuY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwibWZJbnRJbnB1dFxcXCIgbmctdHJhbnNjbHVkZT5cXHJcXG48L2lucHV0PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2lucHV0L2ludC5pbnB1dC5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSVRyYW5zY2x1ZGVGdW5jdGlvbiB9IGZyb20gJ2FuZ3VsYXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9saXN0LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnJHRyYW5zY2x1ZGUnIF07XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcclxuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuYXBwZW5kKGNsb25lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0SGVhZGVyQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnJHRyYW5zY2x1ZGUnIF07XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcclxuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuYXBwZW5kKGNsb25lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0SXRlbUNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyR0cmFuc2NsdWRlJyBdO1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksICR0cmFuc2NsdWRlOiBJVHJhbnNjbHVkZUZ1bmN0aW9uKSB7XHJcbiAgICAgICAgJHRyYW5zY2x1ZGUoKGNsb25lOiBJQXVnbWVudGVkSlF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuaW1wb3J0IFRvZ2dsZVNlcnZpY2UgZnJvbSAnLi4vdG9nZ2xlL3RvZ2dsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgZWxlbWVudCwgSUF1Z21lbnRlZEpRdWVyeSwgSURvY3VtZW50U2VydmljZSwgSVRyYW5zY2x1ZGVGdW5jdGlvbiwgSVdpbmRvd1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyJztcclxuaW1wb3J0IHsgSVRvZ2dsZWFibGUgfSBmcm9tICcuLi90b2dnbGUvdG9nZ2xlLmRpcmVjdGl2ZSc7XHJcblxyXG5leHBvcnQgZW51bSBIb3Jpem9udGFsQWxpZ25tZW50IHtcclxuICAgIHN0YXJ0LFxyXG4gICAgY2VudGVyLFxyXG4gICAgZW5kXHJcbn1cclxuZXhwb3J0IGVudW0gVmVydGljYWxBbGlnbm1lbnQge1xyXG4gICAgdG9wLFxyXG4gICAgY2VudGVyLFxyXG4gICAgYm90dG9tXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBhbGlnbjogJ0BtZkFsaWduJyxcclxuICAgICAgICBuYW1lOiAnQCdcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9tZW51LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IGltcGxlbWVudHMgSVRvZ2dsZWFibGUge1xyXG4gICAgYWxpZ246IHN0cmluZztcclxuICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IEhvcml6b250YWxBbGlnbm1lbnQ7XHJcbiAgICB2ZXJ0aWNhbEFsaWdubWVudDogVmVydGljYWxBbGlnbm1lbnQ7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBvcGVuOiBib29sZWFuO1xyXG5cclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGRvY3VtZW50JywgJyRlbGVtZW50JywgJyR3aW5kb3cnLCAnTWZUb2dnbGVTZXJ2aWNlJywgJ01FTlVfTUFSR0lOJyBdO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkZG9jdW1lbnQ6IElEb2N1bWVudFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlICRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSAkd2luZG93OiBJV2luZG93U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgdG9nZ2xlU2VydmljZTogVG9nZ2xlU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgTUVOVV9NQVJHSU46IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICRlbGVtZW50LmRldGFjaCgpO1xyXG4gICAgICAgIGVsZW1lbnQoJGRvY3VtZW50LmZpbmQoJ2JvZHknKSkuYXBwZW5kKCRlbGVtZW50KTtcclxuXHJcbiAgICAgICAgJGVsZW1lbnQub24oJ2NsaWNrJywgdGhpcy5oaWRlLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLmhvcml6b250YWxBbGlnbm1lbnQgPSBIb3Jpem9udGFsQWxpZ25tZW50LnN0YXJ0O1xyXG4gICAgICAgIHRoaXMudmVydGljYWxBbGlnbm1lbnQgPSBWZXJ0aWNhbEFsaWdubWVudC50b3A7XHJcbiAgICB9XHJcblxyXG4gICAgJG9uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLiRlbGVtZW50Lm9mZignY2xpY2snKTtcclxuICAgIH1cclxuXHJcbiAgICAkb25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmFsaWduKSB7XHJcbiAgICAgICAgICAgIGxldCB0b2tlbnMgPSB0aGlzLmFsaWduLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaG9yaXpvbnRhbEFsaWdubWVudCA9IEhvcml6b250YWxBbGlnbm1lbnRbdG9rZW5zWzBdXTtcclxuICAgICAgICAgICAgbGV0IHZlcnRpY2FsQWxpZ25tZW50ID0gVmVydGljYWxBbGlnbm1lbnRbdG9rZW5zWzFdXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbEFsaWdubWVudCA9IGhvcml6b250YWxBbGlnbm1lbnQgfHwgSG9yaXpvbnRhbEFsaWdubWVudC5zdGFydDtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbEFsaWdubWVudCA9IHZlcnRpY2FsQWxpZ25tZW50IHx8IFZlcnRpY2FsQWxpZ25tZW50LnRvcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudG9nZ2xlU2VydmljZS5yZWdpc3Rlcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKCdtZi1vcGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdyh0YXJnZXRFbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5KTogdm9pZCB7XHJcbiAgICAgICAgLy8gU2V0IG9wZW4gc3RhdGUgb24gY29tcG9uZW50IGFuZCBtZW51IGVsZW1lbnRcclxuICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoJ21mLW9wZW4nKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93TWVudUNvbnRlbnQodGFyZ2V0RWxlbWVudFswXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRMYXlvdXREaXJlY3Rpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy4kZWxlbWVudFswXSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBudW1iZXJUb1BpeGVscyhudW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIChudW0gPT09IG51bGwpID8gbnVsbCA6IG51bSArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93TWVudUNvbnRlbnQodGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBsZXQgbWVudUNvbnRlbnRFbGVtZW50ID0gdGhpcy4kZWxlbWVudC5maW5kKCdtZi1tZW51LWNvbnRlbnQnKVswXTtcclxuXHJcbiAgICAgICAgbGV0IGlzTHRyTGF5b3V0OiBib29sZWFuID0gdGhpcy5nZXRMYXlvdXREaXJlY3Rpb24oKSAhPT0gJ3J0bCc7XHJcblxyXG4gICAgICAgIC8vIFJlc2V0IHRoZSBib3VuZGFyaWVzIG9mIHRoZSBtZW51IGNvbnRlbnQgZWxlbWVudFxyXG4gICAgICAgIG1lbnVDb250ZW50RWxlbWVudC5zdHlsZS5ib3R0b20gPVxyXG4gICAgICAgICAgICBtZW51Q29udGVudEVsZW1lbnQuc3R5bGUubGVmdCA9XHJcbiAgICAgICAgICAgIG1lbnVDb250ZW50RWxlbWVudC5zdHlsZS5yaWdodCA9XHJcbiAgICAgICAgICAgIG1lbnVDb250ZW50RWxlbWVudC5zdHlsZS50b3AgPSBudWxsO1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgdG9wIGFuZCBsZWZ0IG9mZnNldCBiYXNlZCBvbiB0aGUgcG9zaXRpb24gb2YgdGhlIHRhcmdldCBlbGVtZW50XHJcbiAgICAgICAgbGV0IG1lbnVCb3VuZGluZ0JveCA9IHRoaXMuJGVsZW1lbnRbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgbGV0IG1lbnVDb250ZW50Qm91bmRpbmdCb3ggPSBtZW51Q29udGVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgbGV0IHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveCA9IHRhcmdldEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICAgIGxldCBib3R0b206IG51bWJlciA9IG51bGwsXHJcbiAgICAgICAgICAgIGxlZnQ6IG51bWJlciA9IG51bGwsXHJcbiAgICAgICAgICAgIHJpZ2h0OiBudW1iZXIgPSBudWxsLFxyXG4gICAgICAgICAgICB0b3A6IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIElmIG1lbnUgY29udGVudCBpcyB3aWRlciB0aGFuIG1lbnUgY29udGFpbmVyLCBjb25zdHJhaW4gd2lkdGggdG8gbWVudSBjb250YWluZXJcclxuICAgICAgICBpZiAobWVudUNvbnRlbnRCb3VuZGluZ0JveC53aWR0aCArICgyICogdGhpcy5NRU5VX01BUkdJTikgPiBtZW51Qm91bmRpbmdCb3gud2lkdGgpIHtcclxuICAgICAgICAgICAgbGVmdCA9IHRoaXMuTUVOVV9NQVJHSU47XHJcbiAgICAgICAgICAgIHJpZ2h0ID0gdGhpcy5NRU5VX01BUkdJTjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5ob3Jpem9udGFsQWxpZ25tZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEhvcml6b250YWxBbGlnbm1lbnQuc3RhcnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTHRyTGF5b3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSB0YXJnZXRFbGVtZW50Qm91bmRpbmdCb3gubGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSB0YXJnZXRFbGVtZW50Qm91bmRpbmdCb3gucmlnaHQgLSBtZW51Q29udGVudEJvdW5kaW5nQm94LndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgSG9yaXpvbnRhbEFsaWdubWVudC5jZW50ZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC5sZWZ0ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCh0YXJnZXRFbGVtZW50Qm91bmRpbmdCb3gud2lkdGggLSBtZW51Q29udGVudEJvdW5kaW5nQm94LndpZHRoKSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBIb3Jpem9udGFsQWxpZ25tZW50LmVuZDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNMdHJMYXlvdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC5sZWZ0ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0YXJnZXRFbGVtZW50Qm91bmRpbmdCb3gud2lkdGggLSBtZW51Q29udGVudEJvdW5kaW5nQm94LndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSB0YXJnZXRFbGVtZW50Qm91bmRpbmdCb3gubGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdG8gY29vcmRpbmF0ZXMgcmVsYXRpdmUgdG8gbWVudSBjb250YWluZXJcclxuICAgICAgICAgICAgbGVmdCAtPSBtZW51Qm91bmRpbmdCb3gubGVmdDtcclxuXHJcbiAgICAgICAgICAgIC8vIENvbnN0cmFpbiB0byBtZW51IGNvbnRhaW5lciBib3VuZGFyaWVzXHJcbiAgICAgICAgICAgIGxlZnQgPSBNYXRoLm1heChsZWZ0LCB0aGlzLk1FTlVfTUFSR0lOKTtcclxuICAgICAgICAgICAgaWYgKGxlZnQgKyBtZW51Q29udGVudEJvdW5kaW5nQm94LndpZHRoID4gbWVudUJvdW5kaW5nQm94LndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0ID0gdGhpcy5NRU5VX01BUkdJTjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWVudUNvbnRlbnRFbGVtZW50LnN0eWxlLmxlZnQgPSB0aGlzLm51bWJlclRvUGl4ZWxzKGxlZnQpO1xyXG4gICAgICAgIG1lbnVDb250ZW50RWxlbWVudC5zdHlsZS5yaWdodCA9IHRoaXMubnVtYmVyVG9QaXhlbHMocmlnaHQpO1xyXG5cclxuICAgICAgICAvLyBSZWNhbGN1bGF0ZSBib3VuZGluZyBib3ggdG8gYWNjb3VudCBmb3IgYW55IHNocmlua2luZyBjYXVzZWQgYnkgY29uc3RyYWluaW5nIHRoZSBsZWZ0IGFuZCByaWdodCBvZmZzZXRzXHJcbiAgICAgICAgbWVudUNvbnRlbnRCb3VuZGluZ0JveCA9IG1lbnVDb250ZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgLy8gSWYgbWVudSBjb250ZW50IGlzIHRhbGxlciB0aGFuIG1lbnUgY29udGFpbmVyLCBjb25zdHJhaW4gaGVpZ2h0IHRvIG1lbnUgY29udGFpbmVyXHJcbiAgICAgICAgaWYgKG1lbnVDb250ZW50Qm91bmRpbmdCb3guaGVpZ2h0ICsgKDIgKiB0aGlzLk1FTlVfTUFSR0lOKSA+IG1lbnVCb3VuZGluZ0JveC5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdG9wID0gdGhpcy5NRU5VX01BUkdJTjtcclxuICAgICAgICAgICAgYm90dG9tID0gdGhpcy5NRU5VX01BUkdJTjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy52ZXJ0aWNhbEFsaWdubWVudCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBWZXJ0aWNhbEFsaWdubWVudC50b3A6XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gdGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LmJvdHRvbTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVmVydGljYWxBbGlnbm1lbnQuY2VudGVyOlxyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC50b3AgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC5oZWlnaHQgLSBtZW51Q29udGVudEJvdW5kaW5nQm94LmhlaWdodCkgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVmVydGljYWxBbGlnbm1lbnQuYm90dG9tOlxyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9ICh0YXJnZXRFbGVtZW50Qm91bmRpbmdCb3gudG9wIC0gbWVudUNvbnRlbnRCb3VuZGluZ0JveC5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRvIGNvb3JkaW5hdGVzIHJlbGF0aXZlIHRvIG1lbnUgY29udGFpbmVyXHJcbiAgICAgICAgICAgIHRvcCAtPSBtZW51Qm91bmRpbmdCb3gudG9wO1xyXG5cclxuICAgICAgICAgICAgLy8gQ29uc3RyYWluIHRvIG1lbnUgY29udGFpbmVyIGJvdW5kYXJpZXNcclxuICAgICAgICAgICAgdG9wID0gTWF0aC5tYXgodG9wLCB0aGlzLk1FTlVfTUFSR0lOKTtcclxuICAgICAgICAgICAgaWYgKHRvcCArIG1lbnVDb250ZW50Qm91bmRpbmdCb3guaGVpZ2h0ID4gbWVudUJvdW5kaW5nQm94LmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgdG9wID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbSA9IHRoaXMuTUVOVV9NQVJHSU47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1lbnVDb250ZW50RWxlbWVudC5zdHlsZS50b3AgPSB0aGlzLm51bWJlclRvUGl4ZWxzKHRvcCk7XHJcbiAgICAgICAgbWVudUNvbnRlbnRFbGVtZW50LnN0eWxlLmJvdHRvbSA9IHRoaXMubnVtYmVyVG9QaXhlbHMoYm90dG9tKTtcclxuICAgIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZW51Rm9vdGVyQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnJHRyYW5zY2x1ZGUnIF07XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcclxuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuYXBwZW5kKGNsb25lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZW51SGVhZGVyQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnJHRyYW5zY2x1ZGUnIF07XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcclxuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuYXBwZW5kKGNsb25lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPG1mLW1lbnUtY29udGVudCBuZy10cmFuc2NsdWRlIG5nLWNsaWNrPVxcXCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcXFwiPjwvbWYtbWVudS1jb250ZW50PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vbmF2LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdkNvbXBvbmVudCB7fVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJtZi1uYXYtY29udGVudFxcXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnksIElDb21waWxlU2VydmljZSwgSURpcmVjdGl2ZSwgSVNjb3BlLCBJQXR0cmlidXRlcyB9IGZyb20gJ2FuZ3VsYXInO1xyXG5sZXQgdGVtcGxhdGVVcmwgPSByZXF1aXJlKCdjb21wb25lbnRzL2lucHV0L3Jlc2l6aW5nLnRleHRhcmVhLmNvbXBvbmVudC5odG1sJyk7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVzaXppbmdUZXh0YXJlYUNvbnRyb2xsZXIge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbJyRzY29wZSddO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJHNjb3BlOiBJU2NvcGUpIHtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGRpcmVjdGl2ZSBzdXBwb3J0cyBhIHRleHQgYXJlYSB0aGF0IHdpbGwgZ3JvdyBhbmQgc2hyaW5rIGJhc2VkIG9uIHRoZSBzaXplIG9mIHRoZSBcclxuICogY29udGVudCBpbiB0aGUgdGV4dCBhcmVhLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzaXppbmdUZXh0YXJlYURpcmVjdGl2ZSgpOiBJRGlyZWN0aXZlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY29udHJvbGxlcjogUmVzaXppbmdUZXh0YXJlYUNvbnRyb2xsZXIsXHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogdGVtcGxhdGVVcmwsXHJcbiAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcclxuICAgICAgICByZXBsYWNlOiB0cnVlLFxyXG4gICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgIG1vZGVsOiAnPW5nTW9kZWwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaW5rOiAoc2NvcGU6IElTY29wZSxcclxuICAgICAgICAgICAgICAgZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSxcclxuICAgICAgICAgICAgICAgYXR0cmlidXRlczogSUF0dHJpYnV0ZXMsXHJcbiAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFJlc2l6aW5nVGV4dGFyZWFDb250cm9sbGVyKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgaWYgKCFjb250cm9sbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmF0dHIoJ21pbi1yb3dzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWluUm93cyA9IGVsZW1lbnQuYXR0cignbWluLXJvd3MnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICBpZiAobWluUm93cy5pbmRleE9mKCcgJykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBUaGlzIG1lYW5zIHRoYXQgdGhleSB0cmllZCB0byBvdmVycmlkZSB0aGUgbWluaW11bSBudW1iZXIgb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcm93cyBhbmQgdGhlIEFuZ3VsYXIgdHJhbnNjbHVkZSBjb21iaW5lZCB0aGUgYXR0cmlidXRlcyBpbnN0ZWFkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIG9mIHJlcGxhY2luZyB0aGVtLiAgV2UgbmVlZCB0byBmaXggdGhhdCB1cC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmF0dHIoJ21pbi1yb3dzJywgbWluUm93cy5zbGljZSgwLCBtaW5Sb3dzLmluZGV4T2YoJyAnKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICAgICogV2UgbmVlZCB0byBzdGFydCBieSBnZXR0aW5nIHNvbWUgYmFzaWMgbWVhc3VyZW1lbnRzLiAgV2VcclxuICAgICAgICAgICAgICAgICAgICAqIHNldCB0aGUgZm9udCBzaXplIGJlY2F1c2Ugd2UgbmVlZCB0byBrbm93IHRoZSBjb3JyZWN0IGxpbmVcclxuICAgICAgICAgICAgICAgICAgICAqIGhlaWdodCBvciB3ZSBjYW4ndCByZXNpemUgdGhlIGJveCBwcm9wZXJseS5cclxuICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgbGV0IHRtcFZhbCA9IGVsZW1lbnQudmFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICBlbGVtZW50LnZhbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICBsZXQgYmFzZVNjcm9sbEhlaWdodCA9IGVsZW1lbnRbMF0uc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgZWxlbWVudC52YWwodG1wVmFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNzcygnb3ZlcmZsb3cteScsICdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY3NzKCdmb250LXNpemUnLCAnMTVweCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICogVGhlIHJlc2l6ZSBmdW5jdGlvbiBoYW5kbGVzIGRldGVybWluaW5nIHRoZSBhY3R1YWxcclxuICAgICAgICAgICAgICAgICAgICAqIHNpemUgb2YgdGhlIGJveC4gXHJcbiAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgIGxldCByZXNpemUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWluUm93cyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuYXR0cignbWluLXJvd3MnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5Sb3dzID0gTnVtYmVyKGVsZW1lbnQuYXR0cignbWluLXJvd3MnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmF0dHIoJ3Jvd3MnLCBtaW5Sb3dzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm93cyA9IE1hdGguY2VpbCgoZWxlbWVudFswXS5zY3JvbGxIZWlnaHQgLSBiYXNlU2Nyb2xsSGVpZ2h0KSAvIDE4KSArIG1pblJvd3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hdHRyKCdyb3dzJywgcm93cyk7XHJcbiAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgIHNjb3BlLiR3YXRjaCgnbW9kZWwnLCBmdW5jdGlvbihuZXdWYWx1ZTogc3RyaW5nLCBvbGRWYWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICBlbGVtZW50LmJpbmQoJ2lucHV0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXNpemUoKTtcclxuICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcblJlc2l6aW5nVGV4dGFyZWFDb250cm9sbGVyLiRpbmplY3QgPSBbJyRjb21waWxlJ107XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvaW5wdXQvcmVzaXppbmcudGV4dGFyZWEuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9pbnB1dC9yZXNpemluZy50ZXh0YXJlYS5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPHRleHRhcmVhIG5nLXRyYW5zY2x1ZGUgY2xhc3M9XFxcIm1mUmVzaXppbmdUZXh0QXJlYVxcXCIgcm93cz1cXFwiM1xcXCIgbWluLXJvd3M9XFxcIjNcXFwiPjwvdGV4dGFyZWE+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvaW5wdXQvcmVzaXppbmcudGV4dGFyZWEuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSU5nTW9kZWxDb250cm9sbGVyLCBJU2NvcGUgfSBmcm9tICdhbmd1bGFyJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdAJ1xyXG4gICAgfSxcclxuICAgIHJlcXVpcmU6IHtcclxuICAgICAgICBuZ01vZGVsOiAnXm5nTW9kZWwnXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc2VhcmNoLWJveC5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEJveENvbXBvbmVudCB7XHJcbiAgICBuZ01vZGVsOiBJTmdNb2RlbENvbnRyb2xsZXI7XHJcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyRzY29wZScgXTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksIHByaXZhdGUgJHNjb3BlOiBJU2NvcGUpIHtcclxuICAgIH1cclxuXHJcbiAgICAkb25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFNldCBkZWZhdWx0c1xyXG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyIHx8ICdTZWFyY2gnO1xyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXplIG5nTW9kZWxcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5uZ01vZGVsLiRyZW5kZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYudmFsdWUgPSBzZWxmLm5nTW9kZWwuJHZpZXdWYWx1ZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLiRzY29wZS4kd2F0Y2goXHJcbiAgICAgICAgICAgICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYudmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChuZXdWYWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5nTW9kZWwuJHNldFZpZXdWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFySW5wdXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5wdXRLZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMjc6IC8vIEVTQ0FQRVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhcklucHV0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxkaXYgY2xhc3M9XFxcIm1mLXNlYXJjaC1ib3gtY29udGVudFxcXCI+XFxyXFxuICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIlxcclxcbiAgICAgICAgICAgYXV0b2NvbXBsZXRlPVxcXCJmYWxzZVxcXCJcXHJcXG4gICAgICAgICAgIG5nLW1vZGVsPVxcXCIkY3RybC52YWx1ZVxcXCJcXHJcXG4gICAgICAgICAgIG5nLWF0dHItcGxhY2Vob2xkZXI9XFxcInt7JGN0cmwucGxhY2Vob2xkZXJ9fVxcXCJcXHJcXG4gICAgICAgICAgIG5nLWtleWRvd249XFxcIiRjdHJsLm9uSW5wdXRLZXlEb3duKCRldmVudClcXFwiIC8+XFxyXFxuICAgIDxtZi1pY29uIGljb249XFxcInNlYXJjaF90aGlja1xcXCI+PC9tZi1pY29uPlxcclxcbiAgICA8bWYtYnV0dG9uIGNsYXNzPVxcXCJtZi1pY29uLWJ1dHRvblxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLmNsZWFySW5wdXQoKVxcXCI+XFxyXFxuICAgICAgICA8bWYtaWNvbiBpY29uPVxcXCJjbG9zZV90aGlja1xcXCI+PC9tZi1pY29uPlxcclxcbiAgICA8L21mLWJ1dHRvbj5cXHJcXG48L2Rpdj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XHJcbmltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnkgfSBmcm9tICdhbmd1bGFyJztcclxuaW1wb3J0IHsgSVRvZ2dsZWFibGUgfSBmcm9tICcuLi90b2dnbGUvdG9nZ2xlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCBUb2dnbGVTZXJ2aWNlIGZyb20gJy4uL3RvZ2dsZS90b2dnbGUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgbmFtZTogJ0AnXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc2lkZS1uYXYuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZU5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIElUb2dnbGVhYmxlIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIG9wZW46IGJvb2xlYW47XHJcblxyXG4gICAgc3RhdGljICRpbmplY3QgPSBbJyRlbGVtZW50JywgJ01mVG9nZ2xlU2VydmljZSddO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgcHJpdmF0ZSB0b2dnbGVTZXJ2aWNlOiBUb2dnbGVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgJG9uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZVNlcnZpY2UucmVnaXN0ZXIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgJG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLiRlbGVtZW50Lm9mZignY2xpY2snKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ21mLW9wZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoJ21mLW9wZW4nKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxkaXYgY2xhc3M9XFxcIm1mLXNjcmltXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwuaGlkZSgpXFxcIj48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtZi1zaWRlLW5hdi1jb250ZW50XFxcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5IH0gZnJvbSAnYW5ndWxhcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3RpbGUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZUNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JyBdO1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnkpIHtcclxuICAgICAgICAkZWxlbWVudC5hdHRyKCd0YWJpbmRleCcsIDApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvdGlsZS90aWxlLmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvdGlsZS90aWxlLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJtZi10aWxlLWNvbnRlbnRcXFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvdGlsZS90aWxlLmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJVHJhbnNjbHVkZUZ1bmN0aW9uIH0gZnJvbSAnYW5ndWxhcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZUdyaWRDb21wb25lbnQge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcclxuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xyXG4gICAgICAgICR0cmFuc2NsdWRlKChjbG9uZTogSUF1Z21lbnRlZEpRdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvdGlsZS1ncmlkL3RpbGUtZ3JpZC5jb21wb25lbnQudHNcbiAqKi8iLCJpbXBvcnQgeyBJQXR0cmlidXRlcywgSUF1Z21lbnRlZEpRdWVyeSwgSUNvbXBpbGVTZXJ2aWNlLCBJRGlyZWN0aXZlLCBJU2NvcGUgfSBmcm9tICdhbmd1bGFyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTb3J0RGlyZWN0aXZlQ29udHJvbGxlciB7XHJcbiAgICBzb3J0QmluZGluZzogc3RyaW5nO1xyXG4gICAgc29ydEV4cHJlc3Npb246IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsnJHNjb3BlJ107XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRzY29wZTogSVNjb3BlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgc29ydE9uKHNvcnRPblByb3BlcnR5OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5zb3J0RXhwcmVzc2lvbiA9PT0gc29ydE9uUHJvcGVydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5zb3J0RXhwcmVzc2lvbiA9ICctJyArIHNvcnRPblByb3BlcnR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zb3J0RXhwcmVzc2lvbiA9IHNvcnRPblByb3BlcnR5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kc2NvcGUuJGV2YWwodGhpcy5zb3J0QmluZGluZyArICc9XCInICsgdGhpcy5zb3J0RXhwcmVzc2lvbiArICdcIicpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU29ydERpcmVjdGl2ZSgpOiBJRGlyZWN0aXZlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY29udHJvbGxlcjogU29ydERpcmVjdGl2ZUNvbnRyb2xsZXIsXHJcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICBsaW5rOiAoc2NvcGU6IElTY29wZSxcclxuICAgICAgICAgICAgICAgZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSxcclxuICAgICAgICAgICAgICAgYXR0cmlidXRlczogSUF0dHJpYnV0ZXMsXHJcbiAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFNvcnREaXJlY3RpdmVDb250cm9sbGVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuc29ydEJpbmRpbmcgPSBhdHRyaWJ1dGVzWydtZlNvcnQnXTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSVNvcnRPblNjb3BlIGV4dGVuZHMgSVNjb3BlIHtcclxuICAgIGdldFNvcnRFeHByZXNzaW9uKCk6IHN0cmluZztcclxuICAgIHNvcnRPbjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU29ydE9uRGlyZWN0aXZlKCRjb21waWxlOiBJQ29tcGlsZVNlcnZpY2UpOiBJRGlyZWN0aXZlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVxdWlyZTogJ15tZlNvcnQnLFxyXG4gICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgJ3NvcnRPbic6ICc8bWZTb3J0T24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaW5rOiAoc2NvcGU6IElTb3J0T25TY29wZSxcclxuICAgICAgICAgICAgICAgZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSxcclxuICAgICAgICAgICAgICAgYXR0cmlidXRlczogSUF0dHJpYnV0ZXMsXHJcbiAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFNvcnREaXJlY3RpdmVDb250cm9sbGVyKSA9PiB7XHJcbiAgICAgICAgICAgIHNjb3BlLmdldFNvcnRFeHByZXNzaW9uID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udHJvbGxlci5zb3J0RXhwcmVzc2lvbjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBzb3J0IGljb25zXHJcbiAgICAgICAgICAgIGxldCBpY29uSHRtbCA9XHJcbiAgICAgICAgICAgICAgICAnPG1mLWljb24gaWNvbj1cImRvd25fdGhpY2tcIiBuZy1pZj1cImdldFNvcnRFeHByZXNzaW9uKCkgPT0gXFwnJyArIHNjb3BlLnNvcnRPbiArICdcXCdcIj48L21mLWljb24+JyArXHJcbiAgICAgICAgICAgICAgICAnPG1mLWljb24gaWNvbj1cInVwX3RoaWNrXCIgbmctaWY9XCJnZXRTb3J0RXhwcmVzc2lvbigpID09IFxcJy0nICsgc2NvcGUuc29ydE9uICsgJ1xcJ1wiPjwvbWYtaWNvbj4nO1xyXG4gICAgICAgICAgICBsZXQgaWNvbkVsZW1lbnQgPSAkY29tcGlsZShpY29uSHRtbCkoc2NvcGUpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZChpY29uRWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgbWYtc29ydGFibGUgY2xhc3NcclxuICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcygnbWYtc29ydGFibGUnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlZ2lzdGVyIGNsaWNrIGhhbmRsZXJcclxuICAgICAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzY29wZS4kYXBwbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuc29ydE9uKHNjb3BlWydzb3J0T24nXSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuU29ydE9uRGlyZWN0aXZlLiRpbmplY3QgPSBbJyRjb21waWxlJ107XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvdGFibGUvc29ydC5kaXJlY3RpdmUudHNcbiAqKi8iLCJpbXBvcnQgeyBJQXR0cmlidXRlcywgSUF1Z21lbnRlZEpRdWVyeSwgSURpcmVjdGl2ZSwgSVNjb3BlIH0gZnJvbSAnYW5ndWxhcic7XHJcbmltcG9ydCBUb2dnbGVTZXJ2aWNlIGZyb20gJy4vdG9nZ2xlLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVG9nZ2xlYWJsZSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBvcGVuOiBib29sZWFuO1xyXG5cclxuICAgIGhpZGUoKTogdm9pZDtcclxuICAgIHNob3coZWxlbWVudD86IElBdWdtZW50ZWRKUXVlcnkpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVG9nZ2xlRGlyZWN0aXZlKHRvZ2dsZVNlcnZpY2U6IFRvZ2dsZVNlcnZpY2UpOiBJRGlyZWN0aXZlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbGluazogKHNjb3BlOiBJU2NvcGUsIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksIGF0dHJzOiBJQXR0cmlidXRlcykgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsICgpID0+IHsgdG9nZ2xlU2VydmljZS50b2dnbGVDb21wb25lbnQoYXR0cnNbJ21mVG9nZ2xlJ10sIGVsZW1lbnQpOyB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc3RyaWN0OiAnQSdcclxuICAgIH07XHJcbn1cclxuXHJcblRvZ2dsZURpcmVjdGl2ZS4kaW5qZWN0ID0gWyAnTWZUb2dnbGVTZXJ2aWNlJyBdO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlLnRzXG4gKiovIiwiaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSB9IGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBJVG9nZ2xlYWJsZSB9IGZyb20gJy4vdG9nZ2xlLmRpcmVjdGl2ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2dnbGVTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgdG9nZ2xlYWJsZUNvbXBvbmVudHM6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZWFibGVDb21wb25lbnRzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIodG9nZ2xlYWJsZUNvbXBvbmVudDogSVRvZ2dsZWFibGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZWFibGVDb21wb25lbnRzW3RvZ2dsZWFibGVDb21wb25lbnQubmFtZV0gPSB0b2dnbGVhYmxlQ29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUNvbXBvbmVudChjb21wb25lbnRJZDogc3RyaW5nLCBlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHRvZ2dsZWFibGVFbGVtZW50OiBJVG9nZ2xlYWJsZSA9IHRoaXMudG9nZ2xlYWJsZUNvbXBvbmVudHNbY29tcG9uZW50SWRdO1xyXG5cclxuICAgICAgICBpZiAodG9nZ2xlYWJsZUVsZW1lbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRvZ2dsZWFibGVFbGVtZW50Lm9wZW4pIHtcclxuICAgICAgICAgICAgdG9nZ2xlYWJsZUVsZW1lbnQuc2hvdyhlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZWFibGVFbGVtZW50LmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy90b2dnbGUvdG9nZ2xlLnNlcnZpY2UudHNcbiAqKi8iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7O0FDcERBOzs7Ozs7Ozs7Ozs7OztBQ0FBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7QUNOQTtBQU1BO0FBVUE7QUFDQTtBQVhBOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFRQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRkE7QUFOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDRkE7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFKQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFEQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7OztBQ05BO0FBbUJBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBMUZBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBREE7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQVNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0ZBO0FBRUE7QUFHQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBTEE7QUFEQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJCQTtBQXVCQTs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDRkE7QUFFQTtBQUdBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFMQTtBQURBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbERBO0FBb0RBOzs7Ozs7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBREE7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFZQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFEQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFZQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFEQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFFQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBUUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQTdKQTtBQVBBO0FBUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUF5S0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBREE7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBWUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBREE7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDN01BO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDRkE7QUFFQTtBQUdBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFMQTtBQURBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBFQTtBQXNFQTs7Ozs7OztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQVdBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFsQ0E7QUFMQTtBQVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQVlBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFwQkE7QUFKQTtBQVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFEQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBREE7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7QUNKQTtBQUtBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFkQTtBQUpBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpDQTtBQW1DQTs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBOzs7Ozs7Ozs7QUNqQkE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=