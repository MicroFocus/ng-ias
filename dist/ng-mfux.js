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
	var html = "<i ng-if=\"$ctrl.icon\" ng-class=\"['mf-icon', 'mf-icon-' + $ctrl.icon]\"></i>\n<img ng-if=\"!$ctrl.icon\" class=\"svg-icon\" ng-src=\"{{$ctrl.svgIcon}}\" ng-attr-alt=\"{{$ctrl.svgIcon}}\"/>";
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
	var html = "<span class=\"mf-icon-input-container\">\n    <input type=\"text\" placeholder=\"{{placeholder}}\">\n    <mf-icon icon=\"{{icon}}\"></mf-icon>\n</span>";
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
	var html = "<input type=\"text\" class=\"mfIntInput\" ng-transclude>\n</input>";
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
	var html = "<div class=\"mf-search-box-content\">\n    <input type=\"text\"\n           autocomplete=\"false\"\n           ng-model=\"$ctrl.value\"\n           ng-attr-placeholder=\"{{$ctrl.placeholder}}\"\n           ng-keydown=\"$ctrl.onInputKeyDown($event)\" />\n    <mf-icon icon=\"search_thick\"></mf-icon>\n    <mf-button class=\"mf-icon-button\" ng-click=\"$ctrl.clearInput()\">\n        <mf-icon icon=\"close_thick\"></mf-icon>\n    </mf-button>\n</div>";
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
	var html = "<div class=\"mf-scrim\" ng-click=\"$ctrl.hide()\"></div>\n<div class=\"mf-side-nav-content\" ng-transclude></div>";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbWZ1eC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyOGMzY2FkZDIyYTcxODE1NjFkYSIsIndlYnBhY2s6Ly8vLi9zcmMvbmctbWZ1eC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC5kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaWNvbi5pbnB1dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaWNvbi5pbnB1dC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW50LmlucHV0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pbnQuaW5wdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC9yZXNpemluZy50ZXh0YXJlYS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvcmVzaXppbmcudGV4dGFyZWEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpbGUvdGlsZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGlsZS90aWxlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpbGUtZ3JpZC90aWxlLWdyaWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYmxlL3NvcnQuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDI4YzNjYWRkMjJhNzE4MTU2MWRhXG4gKiovIiwiaW1wb3J0IHsgbW9kdWxlIH0gZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgQXBwQmFyQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9hcHAtYmFyL2FwcC1iYXIuY29tcG9uZW50JztcbmltcG9ydCBBdmF0YXJDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50JztcbmltcG9ydCBCdXR0b25EaXJlY3RpdmUgZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcbmltcG9ydCBEaWFsb2dDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCBEaWFsb2dTZXJ2aWNlIGZyb20gJy4vY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IEhlYWRlckNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IEljb25Db21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL2ljb24vaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IEljb25JbnB1dCBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvaWNvbi5pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IElucHV0Q29udGFpbmVyQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IEludElucHV0IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9pbnQuaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RDb21wb25lbnQsIExpc3RIZWFkZXJDb21wb25lbnQsIExpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVudUNvbXBvbmVudCwgTWVudUZvb3RlckNvbXBvbmVudCwgTWVudUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50JztcbmltcG9ydCBOYXZDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50JztcbmltcG9ydCBSZXNpemluZ1RleHRhcmVhQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9yZXNpemluZy50ZXh0YXJlYS5jb21wb25lbnQnO1xuaW1wb3J0IFNlYXJjaEJveENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgU2lkZU5hdkNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50JztcbmltcG9ydCBUaWxlQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy90aWxlL3RpbGUuY29tcG9uZW50JztcbmltcG9ydCBUaWxlR3JpZENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvdGlsZS1ncmlkL3RpbGUtZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU29ydERpcmVjdGl2ZSwgU29ydE9uRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RhYmxlL3NvcnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4vY29tcG9uZW50cy90b2dnbGUvdG9nZ2xlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgVG9nZ2xlU2VydmljZSBmcm9tICcuL2NvbXBvbmVudHMvdG9nZ2xlL3RvZ2dsZS5zZXJ2aWNlJztcblxubW9kdWxlKCduZy1tZnV4JywgW10pXG4gICAgLmNvbnN0YW50KCdNRU5VX01BUkdJTicsIDI0KVxuICAgIC5jb21wb25lbnQoJ21mQXBwQmFyJywgQXBwQmFyQ29tcG9uZW50KVxuICAgIC5jb21wb25lbnQoJ21mQXZhdGFyJywgQXZhdGFyQ29tcG9uZW50KVxuICAgIC5kaXJlY3RpdmUoJ21mQnV0dG9uJywgQnV0dG9uRGlyZWN0aXZlKVxuICAgIC5kaXJlY3RpdmUoJ21mSW50SW5wdXQnLCBJbnRJbnB1dClcbiAgICAuZGlyZWN0aXZlKCdtZkljb25JbnB1dCcsIEljb25JbnB1dClcbiAgICAuY29tcG9uZW50KCdtZkRpYWxvZycsIERpYWxvZ0NvbXBvbmVudClcbiAgICAuY29tcG9uZW50KCdtZkhlYWRlcicsIEhlYWRlckNvbXBvbmVudClcbiAgICAuY29tcG9uZW50KCdtZkljb24nLCBJY29uQ29tcG9uZW50KVxuICAgIC5jb21wb25lbnQoJ21mSW5wdXRDb250YWluZXInLCBJbnB1dENvbnRhaW5lckNvbXBvbmVudClcbiAgICAuY29tcG9uZW50KCdtZkxpc3QnLCBMaXN0Q29tcG9uZW50KVxuICAgIC5jb21wb25lbnQoJ21mTGlzdEhlYWRlcicsIExpc3RIZWFkZXJDb21wb25lbnQpXG4gICAgLmNvbXBvbmVudCgnbWZMaXN0SXRlbScsIExpc3RJdGVtQ29tcG9uZW50KVxuICAgIC5jb21wb25lbnQoJ21mTWVudScsIE1lbnVDb21wb25lbnQpXG4gICAgLmNvbXBvbmVudCgnbWZGb290ZXJNZW51JywgTWVudUZvb3RlckNvbXBvbmVudClcbiAgICAuY29tcG9uZW50KCdtZkhlYWRlck1lbnUnLCBNZW51SGVhZGVyQ29tcG9uZW50KVxuICAgIC5jb21wb25lbnQoJ21mTmF2JywgTmF2Q29tcG9uZW50KVxuICAgIC5kaXJlY3RpdmUoJ21mUmVzaXppbmdUZXh0YXJlYScsIFJlc2l6aW5nVGV4dGFyZWFDb21wb25lbnQpXG4gICAgLmNvbXBvbmVudCgnbWZTZWFyY2hCb3gnLCBTZWFyY2hCb3hDb21wb25lbnQpXG4gICAgLmNvbXBvbmVudCgnbWZTaWRlTmF2JywgU2lkZU5hdkNvbXBvbmVudClcbiAgICAuY29tcG9uZW50KCdtZlRpbGUnLCBUaWxlQ29tcG9uZW50KVxuICAgIC5jb21wb25lbnQoJ21mVGlsZUdyaWQnLCBUaWxlR3JpZENvbXBvbmVudClcblxuICAgIC5kaXJlY3RpdmUoJ21mVG9nZ2xlJywgVG9nZ2xlRGlyZWN0aXZlKVxuICAgIC5kaXJlY3RpdmUoJ21mU29ydCcsIFNvcnREaXJlY3RpdmUpXG4gICAgLmRpcmVjdGl2ZSgnbWZTb3J0T24nLCBTb3J0T25EaXJlY3RpdmUpXG5cbiAgICAuc2VydmljZSgnTWZEaWFsb2dTZXJ2aWNlJywgRGlhbG9nU2VydmljZSlcbiAgICAuc2VydmljZSgnTWZUb2dnbGVTZXJ2aWNlJywgVG9nZ2xlU2VydmljZSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9uZy1tZnV4Lm1vZHVsZS50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYW5ndWxhclwiXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2FwcC1iYXIuY29tcG9uZW50Lmh0bWwnKSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwQmFyQ29tcG9uZW50IHt9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQudHNcbiAqKi8iLCJpbXBvcnQgeyBleHRlbmQsIElBdWdtZW50ZWRKUXVlcnksIElBdHRyaWJ1dGVzfSBmcm9tICdhbmd1bGFyJztcblxuZXhwb3J0IGludGVyZmFjZSBJQ29udGVudFRlbXBsYXRlRnVuY3Rpb24ge1xuICAgICgkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJGF0dHJzPzogSUF0dHJpYnV0ZXMpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb21wb25lbnQob3B0aW9uczoge1xuICAgIGJpbmRpbmdzPzogYW55LFxuICAgIGJpbmRUb0NvbnRyb2xsZXI/OiBib29sZWFuLFxuICAgIGNvbnRyb2xsZXJBcz86IHN0cmluZyxcbiAgICByZXF1aXJlPzogYW55O1xuICAgIHRlbXBsYXRlPzogKHN0cmluZyB8IGFueVtdIHwgSUNvbnRlbnRUZW1wbGF0ZUZ1bmN0aW9uKSxcbiAgICB0ZW1wbGF0ZVVybD86IHN0cmluZyxcbiAgICB0cmFuc2NsdWRlPzogKGJvb2xlYW4gfCBzdHJpbmcpLFxuICAgIHN0eWxlc2hlZXRVcmw/OiBzdHJpbmdcbn0pIHtcbiAgICByZXR1cm4gKGNvbnRyb2xsZXI6IEZ1bmN0aW9uKSA9PiBleHRlbmQob3B0aW9ucywgeyBjb250cm9sbGVyOiBjb250cm9sbGVyIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50LmRlY29yYXRvci50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJtZi1hcHAtYmFyLWNvbnRlbnRcXFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgICBiaW5kaW5nczoge1xuICAgICAgICAnc3JjJzogJzwnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9hdmF0YXIuY29tcG9uZW50Lmh0bWwnKVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF2YXRhckNvbXBvbmVudCB7XG4gICAgc3JjOiBzdHJpbmc7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJtZi1hdmF0YXItY29udGVudFxcXCIgbmctc3R5bGU9XFxcInsgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyAkY3RybC5zcmMgKyAnKScgfVxcXCI+PC9kaXY+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYXZhdGFyL2F2YXRhci5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnksIElDb21waWxlU2VydmljZSwgSURpcmVjdGl2ZSwgSVNjb3BlLCBJQXR0cmlidXRlcyB9IGZyb20gJ2FuZ3VsYXInO1xubGV0IHRlbXBsYXRlVXJsID0gcmVxdWlyZSgnY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sJyk7XG5cbmV4cG9ydCBjbGFzcyBCdXR0b25Db250cm9sbGVyIHtcbiAgICBzdGF0aWMgJGluamVjdCA9IFsnJHNjb3BlJ107XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkc2NvcGU6IElTY29wZSkge1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25EaXJlY3RpdmUoKTogSURpcmVjdGl2ZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29udHJvbGxlcjogQnV0dG9uQ29udHJvbGxlcixcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6IHRlbXBsYXRlVXJsLFxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICBsaW5rOiAoc2NvcGU6IElTY29wZSxcbiAgICAgICAgICAgICAgIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksXG4gICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBJQXR0cmlidXRlcyxcbiAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IEJ1dHRvbkNvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbkJ1dHRvbkRpcmVjdGl2ZS4kaW5qZWN0ID0gWyckY29tcGlsZSddO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGJ1dHRvbiBjbGFzcz1cXFwibWYtYnV0dG9uXFxcIiBuZy10cmFuc2NsdWRlPlxcbjwvYnV0dG9uPlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJVHJhbnNjbHVkZUZ1bmN0aW9uIH0gZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcblxuQENvbXBvbmVudCh7XG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYWxvZ0NvbXBvbmVudCB7XG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcbiAgICAgICAgJHRyYW5zY2x1ZGUoKGNsb25lOiBJQXVnbWVudGVkSlF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnRzXG4gKiovIiwiaW1wb3J0IHtcbiAgICBlbGVtZW50LFxuICAgIElDb21waWxlU2VydmljZSxcbiAgICBJQ29udHJvbGxlclNlcnZpY2UsXG4gICAgSURvY3VtZW50U2VydmljZSxcbiAgICBJUHJvbWlzZSxcbiAgICBJUVNlcnZpY2UsXG4gICAgSVJvb3RTY29wZVNlcnZpY2UsXG4gICAgSVRlbXBsYXRlQ2FjaGVTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcic7XG5cbmludGVyZmFjZSBEaWFsb2dPcHRpb25zIHtcbiAgICBjYW5jZWw6IHN0cmluZztcbiAgICBvazogc3RyaW5nO1xuICAgIHByb21wdDogYm9vbGVhbjtcbiAgICByZXNwb25zZTogc3RyaW5nO1xuICAgIHRleHRDb250ZW50OiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nU2VydmljZSB7XG4gICAgc3RhdGljICRpbmplY3QgPSBbICckY29tcGlsZScsICckY29udHJvbGxlcicsICckZG9jdW1lbnQnLCAnJHEnLCAnJHJvb3RTY29wZScsICckdGVtcGxhdGVDYWNoZScgXTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRjb21waWxlOiBJQ29tcGlsZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSAkY29udHJvbGxlcjogSUNvbnRyb2xsZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgJGRvY3VtZW50OiBJRG9jdW1lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgJHE6IElRU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlICRyb290U2NvcGU6IElSb290U2NvcGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgJHRlbXBsYXRlQ2FjaGU6IElUZW1wbGF0ZUNhY2hlU2VydmljZSkge1xuICAgIH1cblxuICAgIGFsZXJ0KG9wdGlvbnM6IERpYWxvZ09wdGlvbnMpOiBJUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgb3B0aW9ucy5jYW5jZWwgPSBudWxsO1xuICAgICAgICBvcHRpb25zLm9rID0gb3B0aW9ucy5vayB8fCAnT0snO1xuXG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4ob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgY29uZmlybShvcHRpb25zOiBEaWFsb2dPcHRpb25zKTogSVByb21pc2U8YW55PiB7XG4gICAgICAgIG9wdGlvbnMuY2FuY2VsID0gb3B0aW9ucy5jYW5jZWwgfHwgJ05vJztcbiAgICAgICAgb3B0aW9ucy5vayA9IG9wdGlvbnMub2sgfHwgJ1llcyc7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMub3BlbihvcHRpb25zKTtcbiAgICB9XG5cbiAgICBvcGVuKG9wdGlvbnM6IERpYWxvZ09wdGlvbnMpOiBJUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgbGV0IGRlZmVycmVkID0gdGhpcy4kcS5kZWZlcigpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhbmQgY29tcGlsZSBlbGVtZW50XG4gICAgICAgIGxldCBkaWFsb2dIdG1sID1cbiAgICAgICAgICAgICc8bWYtZGlhbG9nIG5nLWNsaWNrPVwib25TY3JpbUNsaWNrZWQoKVwiPicgK1xuICAgICAgICAgICAgJyAgIDxtZi1kaWFsb2ctY29udGVudCBuZy1jbGljaz1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPicgK1xuICAgICAgICAgICAgJyAgICAgICA8ZGl2IGNsYXNzPVwibWYtZGlhbG9nLWhlYWRlclwiPicgK1xuICAgICAgICAgICAgJyAgICAgICAgICAgPGRpdiBuZy1pZj1cIiEhdGl0bGVcIiBjbGFzcz1cIm1mLXRpdGxlXCI+e3t0aXRsZX19PC9kaXY+JyArXG4gICAgICAgICAgICAnICAgICAgIDwvZGl2PicgK1xuICAgICAgICAgICAgJyAgICAgICA8ZGl2IGNsYXNzPVwibWYtZGlhbG9nLWJvZHlcIj4nICtcbiAgICAgICAgICAgICcgICAgICAgICAgIDxkaXYgbmctaWY9XCIhcHJvbXB0XCI+e3t0ZXh0Q29udGVudH19PC9kaXY+JyArXG4gICAgICAgICAgICAnICAgICAgICAgICA8ZGl2IG5nLWlmPVwicHJvbXB0XCI+JyArXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgPG1mLWlucHV0LWNvbnRhaW5lcj4nICtcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlc3BvbnNlXCI+e3t0ZXh0Q29udGVudH19PC9sYWJlbD4nICtcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicmVzcG9uc2VcIiBuYW1lPVwicmVzcG9uc2VcIiB0eXBlPVwidGV4dFwiIG5nLW1vZGVsPVwiZGF0YS5yZXNwb25zZVwiPicgK1xuICAgICAgICAgICAgJyAgICAgICAgICAgICAgIDwvbWYtaW5wdXQtY29udGFpbmVyPicgK1xuICAgICAgICAgICAgJyAgICAgICAgICAgPC9kaXY+JyArXG4gICAgICAgICAgICAnICAgICAgIDwvZGl2PicgK1xuICAgICAgICAgICAgJyAgICAgICA8ZGl2IGNsYXNzPVwibWYtYWN0aW9uc1wiPicgK1xuICAgICAgICAgICAgJyAgICAgICAgICA8bWYtYnV0dG9uIG5nLWlmPVwiISFva1RleHRcIiBuZy1jbGljaz1cImNvbmZpcm0oKVwiPnt7b2tUZXh0fX08L21mLWJ1dHRvbj4nICtcbiAgICAgICAgICAgICcgICAgICAgICAgPG1mLWJ1dHRvbiBuZy1pZj1cIiEhY2FuY2VsVGV4dFwiIG5nLWNsaWNrPVwiY2FuY2VsKClcIj57e2NhbmNlbFRleHR9fTwvbWYtYnV0dG9uPicgK1xuICAgICAgICAgICAgJyAgICAgICA8L2Rpdj4nICtcbiAgICAgICAgICAgICcgICAgICAgPG1mLWJ1dHRvbiBjbGFzcz1cIm1mLWljb24tYnV0dG9uIG1mLWRpYWxvZy1jbG9zZS1idXR0b25cIiBuZy1jbGljaz1cImNhbmNlbCgpXCI+JyArXG4gICAgICAgICAgICAnICAgICAgICAgICA8bWYtaWNvbiBpY29uPVwiY2xvc2VfdGhpY2tcIj48L21mLWljb24+JyArXG4gICAgICAgICAgICAnICAgICAgIDwvbWYtYnV0dG9uPicgK1xuICAgICAgICAgICAgJyAgIDwvbWYtZGlhbG9nLWNvbnRlbnQ+JyArXG4gICAgICAgICAgICAnPC9tZi1kaWFsb2c+JztcblxuICAgICAgICBsZXQgc2NvcGUgPSB0aGlzLiRyb290U2NvcGUuJG5ldyh0cnVlKTtcblxuICAgICAgICBzY29wZVsnY2FuY2VsJ10gPSAoKSA9PiB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgICAgICAgIGNvbXBpbGVkRGlhbG9nRWxlbWVudC5kZXRhY2goKTtcbiAgICAgICAgfTtcbiAgICAgICAgc2NvcGVbJ2NvbmZpcm0nXSA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHNjb3BlWydkYXRhJ11bJ3Jlc3BvbnNlJ107XG5cbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgY29tcGlsZWREaWFsb2dFbGVtZW50LmRldGFjaCgpO1xuICAgICAgICB9O1xuICAgICAgICBzY29wZVsnZGVmZXJyZWQnXSA9IGRlZmVycmVkO1xuICAgICAgICBzY29wZVsnY2FuY2VsVGV4dCddID0gb3B0aW9ucy5jYW5jZWw7XG4gICAgICAgIHNjb3BlWydva1RleHQnXSA9IG9wdGlvbnMub2s7XG4gICAgICAgIHNjb3BlWydvblNjcmltQ2xpY2tlZCddID0gKCkgPT4ge1xuICAgICAgICAgICAgc2NvcGVbJ2NhbmNlbCddKCk7XG4gICAgICAgIH07XG4gICAgICAgIHNjb3BlWydwcm9tcHQnXSA9IG9wdGlvbnMucHJvbXB0O1xuICAgICAgICBzY29wZVsnZGF0YSddID0geyByZXNwb25zZTogb3B0aW9ucy5yZXNwb25zZSB9O1xuICAgICAgICBzY29wZVsndGV4dENvbnRlbnQnXSA9IG9wdGlvbnMudGV4dENvbnRlbnQ7XG4gICAgICAgIHNjb3BlWyd0aXRsZSddID0gb3B0aW9ucy50aXRsZTtcblxuICAgICAgICBsZXQgY29tcGlsZWREaWFsb2dFbGVtZW50ID0gdGhpcy4kY29tcGlsZShkaWFsb2dIdG1sKShzY29wZSk7XG5cbiAgICAgICAgLy8gSW5zZXJ0IGVsZW1lbnQgaW50byBET01cbiAgICAgICAgZWxlbWVudCh0aGlzLiRkb2N1bWVudC5maW5kKCdib2R5JykpLmFwcGVuZChjb21waWxlZERpYWxvZ0VsZW1lbnQpO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH1cblxuICAgIHByb21wdChvcHRpb25zOiBEaWFsb2dPcHRpb25zKTogSVByb21pc2U8YW55PiB7XG4gICAgICAgIG9wdGlvbnMuY2FuY2VsID0gb3B0aW9ucy5jYW5jZWwgfHwgJ0NhbmNlbCc7XG4gICAgICAgIG9wdGlvbnMub2sgPSBvcHRpb25zLm9rIHx8ICdPSyc7XG4gICAgICAgIG9wdGlvbnMucHJvbXB0ID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKG9wdGlvbnMpO1xuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5zZXJ2aWNlLnRzXG4gKiovIiwiaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSVRyYW5zY2x1ZGVGdW5jdGlvbiB9IGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHRyYW5zY2x1ZGU6IHRydWVcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnJHRyYW5zY2x1ZGUnIF07XG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksICR0cmFuc2NsdWRlOiBJVHJhbnNjbHVkZUZ1bmN0aW9uKSB7XG4gICAgICAgICR0cmFuc2NsdWRlKChjbG9uZTogSUF1Z21lbnRlZEpRdWVyeSkgPT4ge1xuICAgICAgICAgICAgJGVsZW1lbnQuYXBwZW5kKGNsb25lKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50c1xuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgICBiaW5kaW5nczoge1xuICAgICAgICBpY29uOiAnQCcsXG4gICAgICAgIHN2Z0ljb246ICdAJ1xuICAgIH0sXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vaWNvbi5jb21wb25lbnQuaHRtbCcpXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbkNvbXBvbmVudCB7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2ljb24vaWNvbi5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL2ljb24vaWNvbi5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGkgbmctaWY9XFxcIiRjdHJsLmljb25cXFwiIG5nLWNsYXNzPVxcXCJbJ21mLWljb24nLCAnbWYtaWNvbi0nICsgJGN0cmwuaWNvbl1cXFwiPjwvaT5cXG48aW1nIG5nLWlmPVxcXCIhJGN0cmwuaWNvblxcXCIgY2xhc3M9XFxcInN2Zy1pY29uXFxcIiBuZy1zcmM9XFxcInt7JGN0cmwuc3ZnSWNvbn19XFxcIiBuZy1hdHRyLWFsdD1cXFwie3skY3RybC5zdmdJY29ufX1cXFwiLz5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSUNvbXBpbGVTZXJ2aWNlLCBJRGlyZWN0aXZlLCBJU2NvcGUsIElBdHRyaWJ1dGVzIH0gZnJvbSAnYW5ndWxhcic7XG5sZXQgdGVtcGxhdGVVcmwgPSByZXF1aXJlKCdjb21wb25lbnRzL2lucHV0L2ljb24uaW5wdXQuY29tcG9uZW50Lmh0bWwnKTtcblxuZXhwb3J0IGNsYXNzIEljb25JbnB1dENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyckc2NvcGUnXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJHNjb3BlOiBJU2NvcGUpIHtcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBUaGlzIGRpcmVjdGl2ZSBzdXBwb3J0cyBzaG93aW5nIGEgdGV4dCBpbnB1dCBmaWVsZCB3aXRoIGFuIGljb24uICBUaGVzZSBmaWVsZHNcbiAqIGFyZSBwb3B1bGFyIGZvciBzZWFyY2ggYm94ZXMuICBUaGUgZGlyZWN0aXZlIHN0eWxlcyB0aGUgaWNvbiBzbyBpdCB3b24ndCBpbnRlcmZlcmVcbiAqIHdpdGggdGhlIHRleHQgZmllbGQgYW5kIG1ha2VzIHRoZSBzcGFjaW5nIGxvb2sgY29ycmVjdCBmb3IgdGhlIGNvbnRyb2wuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEljb25JbnB1dERpcmVjdGl2ZSgpOiBJRGlyZWN0aXZlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb250cm9sbGVyOiBJY29uSW5wdXRDb250cm9sbGVyLFxuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogdGVtcGxhdGVVcmwsXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICBtb2RlbDogJz1uZ01vZGVsJyxcbiAgICAgICAgICAgIG1pbjogJz0nLFxuICAgICAgICAgICAgbWF4OiAnPSdcbiAgICAgICAgfSxcbiAgICAgICAgbGluazogKHNjb3BlOiBJU2NvcGUsXG4gICAgICAgICAgICAgICBlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LFxuICAgICAgICAgICAgICAgYXR0cmlidXRlczogSUF0dHJpYnV0ZXMsXG4gICAgICAgICAgICAgICBjb250cm9sbGVyOiBJY29uSW5wdXRDb250cm9sbGVyKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICBzY29wZS5pY29uID0gZWxlbWVudC5hdHRyKCdpY29uJyk7XG4gICAgICAgICAgICAgICAgICAgc2NvcGUucGxhY2Vob2xkZXIgPSBlbGVtZW50LmF0dHIoJ3BsYWNlaG9sZGVyJyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5JY29uSW5wdXRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRjb21waWxlJ107XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2lucHV0L2ljb24uaW5wdXQuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9pbnB1dC9pY29uLmlucHV0LmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8c3BhbiBjbGFzcz1cXFwibWYtaWNvbi1pbnB1dC1jb250YWluZXJcXFwiPlxcbiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcInt7cGxhY2Vob2xkZXJ9fVxcXCI+XFxuICAgIDxtZi1pY29uIGljb249XFxcInt7aWNvbn19XFxcIj48L21mLWljb24+XFxuPC9zcGFuPlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2lucHV0L2ljb24uaW5wdXQuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XG5pbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJVHJhbnNjbHVkZUZ1bmN0aW9uIH0gZnJvbSAnYW5ndWxhcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2lucHV0LmNvbXBvbmVudC5odG1sJyksXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0Q29udGFpbmVyQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyR0cmFuc2NsdWRlJyBdO1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcbiAgICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiXCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSUNvbXBpbGVTZXJ2aWNlLCBJRGlyZWN0aXZlLCBJU2NvcGUsIElBdHRyaWJ1dGVzIH0gZnJvbSAnYW5ndWxhcic7XG5sZXQgdGVtcGxhdGVVcmwgPSByZXF1aXJlKCdjb21wb25lbnRzL2lucHV0L2ludC5pbnB1dC5jb21wb25lbnQuaHRtbCcpO1xuXG5leHBvcnQgY2xhc3MgSW50SW5wdXRDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgJGluamVjdCA9IFsnJHNjb3BlJ107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRzY29wZTogSVNjb3BlKSB7XG4gICAgfVxuXG59XG5cbi8qKlxuICogVGhpcyBkaXJlY3RpdmUgc3VwcG9ydHMgYW4gaW5wdXQgZmllbGQgd2hpY2ggYWRkcyB0aGUgY2xhc3MgaW5wdXRFcnJvclxuICogd2hlbiB0aGUgdmFsdWUgaXMgbm90IGEgbnVtYmVyLiAgSXQgd2F0Y2hlcyBjaGFuZ2VzIGZyb20gdXNlciBpbnB1dHMsIFxuICogdGhlIERPTSwgYW5kIHRoZSBtb2RlbC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50SW5wdXREaXJlY3RpdmUoKTogSURpcmVjdGl2ZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29udHJvbGxlcjogSW50SW5wdXRDb250cm9sbGVyLFxuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogdGVtcGxhdGVVcmwsXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICBtb2RlbDogJz1uZ01vZGVsJyxcbiAgICAgICAgICAgIG1pbjogJz0nLFxuICAgICAgICAgICAgbWF4OiAnPSdcbiAgICAgICAgfSxcbiAgICAgICAgbGluazogKHNjb3BlOiBJU2NvcGUsXG4gICAgICAgICAgICAgICBlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LFxuICAgICAgICAgICAgICAgYXR0cmlidXRlczogSUF0dHJpYnV0ZXMsXG4gICAgICAgICAgICAgICBjb250cm9sbGVyOiBJbnRJbnB1dENvbnRyb2xsZXIpID0+IHtcblxuICAgICAgICAgICAgICAgICAgIGlmICghY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgbGV0IGlzVmFsaWQgPSBmdW5jdGlvbih2YWw6IHN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiB2YWwgfHwgdmFsID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcygnaW5wdXRFcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKE51bWJlcih2YWwpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcygnaW5wdXRFcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3BlLm1heCAmJiB2YWwgPiBzY29wZS5tYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKCdpbnB1dEVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY29wZS5taW4gJiYgdmFsIDwgc2NvcGUubWluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcygnaW5wdXRFcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2lucHV0RXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICBzY29wZS4kd2F0Y2goJ21vZGVsJywgZnVuY3Rpb24obmV3VmFsdWU6IHN0cmluZywgb2xkVmFsdWU6IHN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYmluZCgnaW5wdXQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkKGVsZW1lbnQudmFsKCkpO1xuICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuSW50SW5wdXRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRjb21waWxlJ107XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2lucHV0L2ludC5pbnB1dC5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL2lucHV0L2ludC5pbnB1dC5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJtZkludElucHV0XFxcIiBuZy10cmFuc2NsdWRlPlxcbjwvaW5wdXQ+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW50LmlucHV0LmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xuaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSVRyYW5zY2x1ZGVGdW5jdGlvbiB9IGZyb20gJ2FuZ3VsYXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9saXN0LmNvbXBvbmVudC5odG1sJyksXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IHtcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyR0cmFuc2NsdWRlJyBdO1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcbiAgICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0SGVhZGVyQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyR0cmFuc2NsdWRlJyBdO1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcbiAgICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0SXRlbUNvbXBvbmVudCB7XG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcbiAgICAgICAgJHRyYW5zY2x1ZGUoKGNsb25lOiBJQXVnbWVudGVkSlF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiXCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xuaW1wb3J0IFRvZ2dsZVNlcnZpY2UgZnJvbSAnLi4vdG9nZ2xlL3RvZ2dsZS5zZXJ2aWNlJztcbmltcG9ydCB7IGVsZW1lbnQsIElBdWdtZW50ZWRKUXVlcnksIElEb2N1bWVudFNlcnZpY2UsIElUcmFuc2NsdWRlRnVuY3Rpb24sIElXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgeyBJVG9nZ2xlYWJsZSB9IGZyb20gJy4uL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlJztcblxuZXhwb3J0IGVudW0gSG9yaXpvbnRhbEFsaWdubWVudCB7XG4gICAgc3RhcnQsXG4gICAgY2VudGVyLFxuICAgIGVuZFxufVxuZXhwb3J0IGVudW0gVmVydGljYWxBbGlnbm1lbnQge1xuICAgIHRvcCxcbiAgICBjZW50ZXIsXG4gICAgYm90dG9tXG59XG5cbkBDb21wb25lbnQoe1xuICAgIGJpbmRpbmdzOiB7XG4gICAgICAgIGFsaWduOiAnQG1mQWxpZ24nLFxuICAgICAgICBuYW1lOiAnQCdcbiAgICB9LFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL21lbnUuY29tcG9uZW50Lmh0bWwnKSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBJVG9nZ2xlYWJsZSB7XG4gICAgYWxpZ246IHN0cmluZztcbiAgICBob3Jpem9udGFsQWxpZ25tZW50OiBIb3Jpem9udGFsQWxpZ25tZW50O1xuICAgIHZlcnRpY2FsQWxpZ25tZW50OiBWZXJ0aWNhbEFsaWdubWVudDtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgb3BlbjogYm9vbGVhbjtcblxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGRvY3VtZW50JywgJyRlbGVtZW50JywgJyR3aW5kb3cnLCAnTWZUb2dnbGVTZXJ2aWNlJywgJ01FTlVfTUFSR0lOJyBdO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJGRvY3VtZW50OiBJRG9jdW1lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSAkd2luZG93OiBJV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHRvZ2dsZVNlcnZpY2U6IFRvZ2dsZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBNRU5VX01BUkdJTjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgICAkZWxlbWVudC5kZXRhY2goKTtcbiAgICAgICAgZWxlbWVudCgkZG9jdW1lbnQuZmluZCgnYm9keScpKS5hcHBlbmQoJGVsZW1lbnQpO1xuXG4gICAgICAgICRlbGVtZW50Lm9uKCdjbGljaycsIHRoaXMuaGlkZS5iaW5kKHRoaXMpKTtcblxuICAgICAgICB0aGlzLmhvcml6b250YWxBbGlnbm1lbnQgPSBIb3Jpem9udGFsQWxpZ25tZW50LnN0YXJ0O1xuICAgICAgICB0aGlzLnZlcnRpY2FsQWxpZ25tZW50ID0gVmVydGljYWxBbGlnbm1lbnQudG9wO1xuICAgIH1cblxuICAgICRvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQub2ZmKCdjbGljaycpO1xuICAgIH1cblxuICAgICRvbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmFsaWduKSB7XG4gICAgICAgICAgICBsZXQgdG9rZW5zID0gdGhpcy5hbGlnbi5zcGxpdCgnICcpO1xuXG4gICAgICAgICAgICBsZXQgaG9yaXpvbnRhbEFsaWdubWVudCA9IEhvcml6b250YWxBbGlnbm1lbnRbdG9rZW5zWzBdXTtcbiAgICAgICAgICAgIGxldCB2ZXJ0aWNhbEFsaWdubWVudCA9IFZlcnRpY2FsQWxpZ25tZW50W3Rva2Vuc1sxXV07XG5cbiAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbEFsaWdubWVudCA9IGhvcml6b250YWxBbGlnbm1lbnQgfHwgSG9yaXpvbnRhbEFsaWdubWVudC5zdGFydDtcbiAgICAgICAgICAgIHRoaXMudmVydGljYWxBbGlnbm1lbnQgPSB2ZXJ0aWNhbEFsaWdubWVudCB8fCBWZXJ0aWNhbEFsaWdubWVudC50b3A7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRvZ2dsZVNlcnZpY2UucmVnaXN0ZXIodGhpcyk7XG4gICAgfVxuXG4gICAgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcygnbWYtb3BlbicpO1xuICAgIH1cblxuICAgIHNob3codGFyZ2V0RWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSk6IHZvaWQge1xuICAgICAgICAvLyBTZXQgb3BlbiBzdGF0ZSBvbiBjb21wb25lbnQgYW5kIG1lbnUgZWxlbWVudFxuICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLiRlbGVtZW50LmFkZENsYXNzKCdtZi1vcGVuJyk7XG5cbiAgICAgICAgdGhpcy5zaG93TWVudUNvbnRlbnQodGFyZ2V0RWxlbWVudFswXSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRMYXlvdXREaXJlY3Rpb24oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuJGVsZW1lbnRbMF0sIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ2RpcmVjdGlvbicpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbnVtYmVyVG9QaXhlbHMobnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKG51bSA9PT0gbnVsbCkgPyBudWxsIDogbnVtICsgJ3B4JztcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dNZW51Q29udGVudCh0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICBsZXQgbWVudUNvbnRlbnRFbGVtZW50ID0gdGhpcy4kZWxlbWVudC5maW5kKCdtZi1tZW51LWNvbnRlbnQnKVswXTtcblxuICAgICAgICBsZXQgaXNMdHJMYXlvdXQ6IGJvb2xlYW4gPSB0aGlzLmdldExheW91dERpcmVjdGlvbigpICE9PSAncnRsJztcblxuICAgICAgICAvLyBSZXNldCB0aGUgYm91bmRhcmllcyBvZiB0aGUgbWVudSBjb250ZW50IGVsZW1lbnRcbiAgICAgICAgbWVudUNvbnRlbnRFbGVtZW50LnN0eWxlLmJvdHRvbSA9XG4gICAgICAgICAgICBtZW51Q29udGVudEVsZW1lbnQuc3R5bGUubGVmdCA9XG4gICAgICAgICAgICBtZW51Q29udGVudEVsZW1lbnQuc3R5bGUucmlnaHQgPVxuICAgICAgICAgICAgbWVudUNvbnRlbnRFbGVtZW50LnN0eWxlLnRvcCA9IG51bGw7XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRvcCBhbmQgbGVmdCBvZmZzZXQgYmFzZWQgb24gdGhlIHBvc2l0aW9uIG9mIHRoZSB0YXJnZXQgZWxlbWVudFxuICAgICAgICBsZXQgbWVudUJvdW5kaW5nQm94ID0gdGhpcy4kZWxlbWVudFswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbGV0IG1lbnVDb250ZW50Qm91bmRpbmdCb3ggPSBtZW51Q29udGVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGxldCB0YXJnZXRFbGVtZW50Qm91bmRpbmdCb3ggPSB0YXJnZXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGxldCBib3R0b206IG51bWJlciA9IG51bGwsXG4gICAgICAgICAgICBsZWZ0OiBudW1iZXIgPSBudWxsLFxuICAgICAgICAgICAgcmlnaHQ6IG51bWJlciA9IG51bGwsXG4gICAgICAgICAgICB0b3A6IG51bWJlciA9IG51bGw7XG5cbiAgICAgICAgLy8gSWYgbWVudSBjb250ZW50IGlzIHdpZGVyIHRoYW4gbWVudSBjb250YWluZXIsIGNvbnN0cmFpbiB3aWR0aCB0byBtZW51IGNvbnRhaW5lclxuICAgICAgICBpZiAobWVudUNvbnRlbnRCb3VuZGluZ0JveC53aWR0aCArICgyICogdGhpcy5NRU5VX01BUkdJTikgPiBtZW51Qm91bmRpbmdCb3gud2lkdGgpIHtcbiAgICAgICAgICAgIGxlZnQgPSB0aGlzLk1FTlVfTUFSR0lOO1xuICAgICAgICAgICAgcmlnaHQgPSB0aGlzLk1FTlVfTUFSR0lOO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmhvcml6b250YWxBbGlnbm1lbnQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIEhvcml6b250YWxBbGlnbm1lbnQuc3RhcnQ6XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0x0ckxheW91dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC5yaWdodCAtIG1lbnVDb250ZW50Qm91bmRpbmdCb3gud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBIb3Jpem9udGFsQWxpZ25tZW50LmNlbnRlcjpcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC5sZWZ0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICgodGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LndpZHRoIC0gbWVudUNvbnRlbnRCb3VuZGluZ0JveC53aWR0aCkgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBIb3Jpem9udGFsQWxpZ25tZW50LmVuZDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTHRyTGF5b3V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gdGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LmxlZnQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0YXJnZXRFbGVtZW50Qm91bmRpbmdCb3gud2lkdGggLSBtZW51Q29udGVudEJvdW5kaW5nQm94LndpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSB0YXJnZXRFbGVtZW50Qm91bmRpbmdCb3gubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ29udmVydCB0byBjb29yZGluYXRlcyByZWxhdGl2ZSB0byBtZW51IGNvbnRhaW5lclxuICAgICAgICAgICAgbGVmdCAtPSBtZW51Qm91bmRpbmdCb3gubGVmdDtcblxuICAgICAgICAgICAgLy8gQ29uc3RyYWluIHRvIG1lbnUgY29udGFpbmVyIGJvdW5kYXJpZXNcbiAgICAgICAgICAgIGxlZnQgPSBNYXRoLm1heChsZWZ0LCB0aGlzLk1FTlVfTUFSR0lOKTtcbiAgICAgICAgICAgIGlmIChsZWZ0ICsgbWVudUNvbnRlbnRCb3VuZGluZ0JveC53aWR0aCA+IG1lbnVCb3VuZGluZ0JveC53aWR0aCkge1xuICAgICAgICAgICAgICAgIGxlZnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHJpZ2h0ID0gdGhpcy5NRU5VX01BUkdJTjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lbnVDb250ZW50RWxlbWVudC5zdHlsZS5sZWZ0ID0gdGhpcy5udW1iZXJUb1BpeGVscyhsZWZ0KTtcbiAgICAgICAgbWVudUNvbnRlbnRFbGVtZW50LnN0eWxlLnJpZ2h0ID0gdGhpcy5udW1iZXJUb1BpeGVscyhyaWdodCk7XG5cbiAgICAgICAgLy8gUmVjYWxjdWxhdGUgYm91bmRpbmcgYm94IHRvIGFjY291bnQgZm9yIGFueSBzaHJpbmtpbmcgY2F1c2VkIGJ5IGNvbnN0cmFpbmluZyB0aGUgbGVmdCBhbmQgcmlnaHQgb2Zmc2V0c1xuICAgICAgICBtZW51Q29udGVudEJvdW5kaW5nQm94ID0gbWVudUNvbnRlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIC8vIElmIG1lbnUgY29udGVudCBpcyB0YWxsZXIgdGhhbiBtZW51IGNvbnRhaW5lciwgY29uc3RyYWluIGhlaWdodCB0byBtZW51IGNvbnRhaW5lclxuICAgICAgICBpZiAobWVudUNvbnRlbnRCb3VuZGluZ0JveC5oZWlnaHQgKyAoMiAqIHRoaXMuTUVOVV9NQVJHSU4pID4gbWVudUJvdW5kaW5nQm94LmhlaWdodCkge1xuICAgICAgICAgICAgdG9wID0gdGhpcy5NRU5VX01BUkdJTjtcbiAgICAgICAgICAgIGJvdHRvbSA9IHRoaXMuTUVOVV9NQVJHSU47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMudmVydGljYWxBbGlnbm1lbnQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFZlcnRpY2FsQWxpZ25tZW50LnRvcDpcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gdGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LmJvdHRvbTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBWZXJ0aWNhbEFsaWdubWVudC5jZW50ZXI6XG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC50b3AgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKCh0YXJnZXRFbGVtZW50Qm91bmRpbmdCb3guaGVpZ2h0IC0gbWVudUNvbnRlbnRCb3VuZGluZ0JveC5oZWlnaHQpIC8gMik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgVmVydGljYWxBbGlnbm1lbnQuYm90dG9tOlxuICAgICAgICAgICAgICAgICAgICB0b3AgPSAodGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LnRvcCAtIG1lbnVDb250ZW50Qm91bmRpbmdCb3guaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENvbnZlcnQgdG8gY29vcmRpbmF0ZXMgcmVsYXRpdmUgdG8gbWVudSBjb250YWluZXJcbiAgICAgICAgICAgIHRvcCAtPSBtZW51Qm91bmRpbmdCb3gudG9wO1xuXG4gICAgICAgICAgICAvLyBDb25zdHJhaW4gdG8gbWVudSBjb250YWluZXIgYm91bmRhcmllc1xuICAgICAgICAgICAgdG9wID0gTWF0aC5tYXgodG9wLCB0aGlzLk1FTlVfTUFSR0lOKTtcbiAgICAgICAgICAgIGlmICh0b3AgKyBtZW51Q29udGVudEJvdW5kaW5nQm94LmhlaWdodCA+IG1lbnVCb3VuZGluZ0JveC5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB0b3AgPSBudWxsO1xuICAgICAgICAgICAgICAgIGJvdHRvbSA9IHRoaXMuTUVOVV9NQVJHSU47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZW51Q29udGVudEVsZW1lbnQuc3R5bGUudG9wID0gdGhpcy5udW1iZXJUb1BpeGVscyh0b3ApO1xuICAgICAgICBtZW51Q29udGVudEVsZW1lbnQuc3R5bGUuYm90dG9tID0gdGhpcy5udW1iZXJUb1BpeGVscyhib3R0b20pO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBNZW51Rm9vdGVyQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyR0cmFuc2NsdWRlJyBdO1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcbiAgICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBNZW51SGVhZGVyQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyR0cmFuc2NsdWRlJyBdO1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcbiAgICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8bWYtbWVudS1jb250ZW50IG5nLXRyYW5zY2x1ZGUgbmctY2xpY2s9XFxcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxcXCI+PC9tZi1tZW51LWNvbnRlbnQ+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9uYXYuY29tcG9uZW50Lmh0bWwnKSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2Q29tcG9uZW50IHt9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJtZi1uYXYtY29udGVudFxcXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnksIElDb21waWxlU2VydmljZSwgSURpcmVjdGl2ZSwgSVNjb3BlLCBJQXR0cmlidXRlcyB9IGZyb20gJ2FuZ3VsYXInO1xubGV0IHRlbXBsYXRlVXJsID0gcmVxdWlyZSgnY29tcG9uZW50cy9pbnB1dC9yZXNpemluZy50ZXh0YXJlYS5jb21wb25lbnQuaHRtbCcpO1xuXG5leHBvcnQgY2xhc3MgUmVzaXppbmdUZXh0YXJlYUNvbnRyb2xsZXIge1xuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyckc2NvcGUnXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJHNjb3BlOiBJU2NvcGUpIHtcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBUaGlzIGRpcmVjdGl2ZSBzdXBwb3J0cyBhIHRleHQgYXJlYSB0aGF0IHdpbGwgZ3JvdyBhbmQgc2hyaW5rIGJhc2VkIG9uIHRoZSBzaXplIG9mIHRoZSBcbiAqIGNvbnRlbnQgaW4gdGhlIHRleHQgYXJlYS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzaXppbmdUZXh0YXJlYURpcmVjdGl2ZSgpOiBJRGlyZWN0aXZlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb250cm9sbGVyOiBSZXNpemluZ1RleHRhcmVhQ29udHJvbGxlcixcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6IHRlbXBsYXRlVXJsLFxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgbW9kZWw6ICc9bmdNb2RlbCdcbiAgICAgICAgfSxcbiAgICAgICAgbGluazogKHNjb3BlOiBJU2NvcGUsXG4gICAgICAgICAgICAgICBlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LFxuICAgICAgICAgICAgICAgYXR0cmlidXRlczogSUF0dHJpYnV0ZXMsXG4gICAgICAgICAgICAgICBjb250cm9sbGVyOiBSZXNpemluZ1RleHRhcmVhQ29udHJvbGxlcikgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgaWYgKCFjb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5hdHRyKCdtaW4tcm93cycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIGxldCBtaW5Sb3dzID0gZWxlbWVudC5hdHRyKCdtaW4tcm93cycpO1xuICAgICAgICAgICAgICAgICAgICAgICBpZiAobWluUm93cy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFRoaXMgbWVhbnMgdGhhdCB0aGV5IHRyaWVkIHRvIG92ZXJyaWRlIHRoZSBtaW5pbXVtIG51bWJlciBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcm93cyBhbmQgdGhlIEFuZ3VsYXIgdHJhbnNjbHVkZSBjb21iaW5lZCB0aGUgYXR0cmlidXRlcyBpbnN0ZWFkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBvZiByZXBsYWNpbmcgdGhlbS4gIFdlIG5lZWQgdG8gZml4IHRoYXQgdXAuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmF0dHIoJ21pbi1yb3dzJywgbWluUm93cy5zbGljZSgwLCBtaW5Sb3dzLmluZGV4T2YoJyAnKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgKiBXZSBuZWVkIHRvIHN0YXJ0IGJ5IGdldHRpbmcgc29tZSBiYXNpYyBtZWFzdXJlbWVudHMuICBXZVxuICAgICAgICAgICAgICAgICAgICAqIHNldCB0aGUgZm9udCBzaXplIGJlY2F1c2Ugd2UgbmVlZCB0byBrbm93IHRoZSBjb3JyZWN0IGxpbmVcbiAgICAgICAgICAgICAgICAgICAgKiBoZWlnaHQgb3Igd2UgY2FuJ3QgcmVzaXplIHRoZSBib3ggcHJvcGVybHkuXG4gICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgbGV0IHRtcFZhbCA9IGVsZW1lbnQudmFsKCk7XG4gICAgICAgICAgICAgICAgICAgZWxlbWVudC52YWwoJycpO1xuICAgICAgICAgICAgICAgICAgIGxldCBiYXNlU2Nyb2xsSGVpZ2h0ID0gZWxlbWVudFswXS5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgZWxlbWVudC52YWwodG1wVmFsKTtcblxuICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY3NzKCdvdmVyZmxvdy15JywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY3NzKCdmb250LXNpemUnLCAnMTVweCcpO1xuXG4gICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICogVGhlIHJlc2l6ZSBmdW5jdGlvbiBoYW5kbGVzIGRldGVybWluaW5nIHRoZSBhY3R1YWxcbiAgICAgICAgICAgICAgICAgICAgKiBzaXplIG9mIHRoZSBib3guIFxuICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgIGxldCByZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1pblJvd3MgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5hdHRyKCdtaW4tcm93cycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5Sb3dzID0gTnVtYmVyKGVsZW1lbnQuYXR0cignbWluLXJvd3MnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmF0dHIoJ3Jvd3MnLCBtaW5Sb3dzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvd3MgPSBNYXRoLmNlaWwoKGVsZW1lbnRbMF0uc2Nyb2xsSGVpZ2h0IC0gYmFzZVNjcm9sbEhlaWdodCkgLyAxOCkgKyBtaW5Sb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmF0dHIoJ3Jvd3MnLCByb3dzKTtcbiAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKCdtb2RlbCcsIGZ1bmN0aW9uKG5ld1ZhbHVlOiBzdHJpbmcsIG9sZFZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplKCk7XG4gICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICBlbGVtZW50LmJpbmQoJ2lucHV0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplKCk7XG4gICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5SZXNpemluZ1RleHRhcmVhQ29udHJvbGxlci4kaW5qZWN0ID0gWyckY29tcGlsZSddO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9pbnB1dC9yZXNpemluZy50ZXh0YXJlYS5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL2lucHV0L3Jlc2l6aW5nLnRleHRhcmVhLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8dGV4dGFyZWEgbmctdHJhbnNjbHVkZSBjbGFzcz1cXFwibWZSZXNpemluZ1RleHRBcmVhXFxcIiByb3dzPVxcXCIzXFxcIiBtaW4tcm93cz1cXFwiM1xcXCI+PC90ZXh0YXJlYT5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9pbnB1dC9yZXNpemluZy50ZXh0YXJlYS5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJTmdNb2RlbENvbnRyb2xsZXIsIElTY29wZSB9IGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICAgIGJpbmRpbmdzOiB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiAnQCdcbiAgICB9LFxuICAgIHJlcXVpcmU6IHtcbiAgICAgICAgbmdNb2RlbDogJ15uZ01vZGVsJ1xuICAgIH0sXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc2VhcmNoLWJveC5jb21wb25lbnQuaHRtbCcpXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQm94Q29tcG9uZW50IHtcbiAgICBuZ01vZGVsOiBJTmdNb2RlbENvbnRyb2xsZXI7XG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICB2YWx1ZTogc3RyaW5nO1xuXG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckc2NvcGUnIF07XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgcHJpdmF0ZSAkc2NvcGU6IElTY29wZSkge1xuICAgIH1cblxuICAgICRvbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIFNldCBkZWZhdWx0c1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlciB8fCAnU2VhcmNoJztcblxuICAgICAgICAvLyBJbml0aWFsaXplIG5nTW9kZWxcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLm5nTW9kZWwuJHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHNlbGYudmFsdWUgPSBzZWxmLm5nTW9kZWwuJHZpZXdWYWx1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLiRzY29wZS4kd2F0Y2goXG4gICAgICAgICAgICAoKTogc3RyaW5nID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAobmV3VmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYubmdNb2RlbC4kc2V0Vmlld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFySW5wdXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICBvbklucHV0S2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMjc6IC8vIEVTQ0FQRVxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxkaXYgY2xhc3M9XFxcIm1mLXNlYXJjaC1ib3gtY29udGVudFxcXCI+XFxuICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgYXV0b2NvbXBsZXRlPVxcXCJmYWxzZVxcXCJcXG4gICAgICAgICAgIG5nLW1vZGVsPVxcXCIkY3RybC52YWx1ZVxcXCJcXG4gICAgICAgICAgIG5nLWF0dHItcGxhY2Vob2xkZXI9XFxcInt7JGN0cmwucGxhY2Vob2xkZXJ9fVxcXCJcXG4gICAgICAgICAgIG5nLWtleWRvd249XFxcIiRjdHJsLm9uSW5wdXRLZXlEb3duKCRldmVudClcXFwiIC8+XFxuICAgIDxtZi1pY29uIGljb249XFxcInNlYXJjaF90aGlja1xcXCI+PC9tZi1pY29uPlxcbiAgICA8bWYtYnV0dG9uIGNsYXNzPVxcXCJtZi1pY29uLWJ1dHRvblxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLmNsZWFySW5wdXQoKVxcXCI+XFxuICAgICAgICA8bWYtaWNvbiBpY29uPVxcXCJjbG9zZV90aGlja1xcXCI+PC9tZi1pY29uPlxcbiAgICA8L21mLWJ1dHRvbj5cXG48L2Rpdj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XG5pbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5IH0gZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgeyBJVG9nZ2xlYWJsZSB9IGZyb20gJy4uL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlJztcbmltcG9ydCBUb2dnbGVTZXJ2aWNlIGZyb20gJy4uL3RvZ2dsZS90b2dnbGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIGJpbmRpbmdzOiB7XG4gICAgICAgIG5hbWU6ICdAJ1xuICAgIH0sXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc2lkZS1uYXYuY29tcG9uZW50Lmh0bWwnKSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZU5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIElUb2dnbGVhYmxlIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgb3BlbjogYm9vbGVhbjtcblxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyckZWxlbWVudCcsICdNZlRvZ2dsZVNlcnZpY2UnXTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCBwcml2YXRlIHRvZ2dsZVNlcnZpY2U6IFRvZ2dsZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgJG9uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50b2dnbGVTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMpO1xuICAgIH1cblxuICAgICRvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQub2ZmKCdjbGljaycpO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ21mLW9wZW4nKTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLiRlbGVtZW50LmFkZENsYXNzKCdtZi1vcGVuJyk7XG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJtZi1zY3JpbVxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLmhpZGUoKVxcXCI+PC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwibWYtc2lkZS1uYXYtY29udGVudFxcXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcbmltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnkgfSBmcm9tICdhbmd1bGFyJztcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vdGlsZS5jb21wb25lbnQuaHRtbCcpLFxuICAgIHRyYW5zY2x1ZGU6IHRydWVcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JyBdO1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5KSB7XG4gICAgICAgICRlbGVtZW50LmF0dHIoJ3RhYmluZGV4JywgMCk7XG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy90aWxlL3RpbGUuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy90aWxlL3RpbGUuY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxkaXYgY2xhc3M9XFxcIm1mLXRpbGUtY29udGVudFxcXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy90aWxlL3RpbGUuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XG5pbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJVHJhbnNjbHVkZUZ1bmN0aW9uIH0gZnJvbSAnYW5ndWxhcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHRyYW5zY2x1ZGU6IHRydWVcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlR3JpZENvbXBvbmVudCB7XG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcbiAgICAgICAgJHRyYW5zY2x1ZGUoKGNsb25lOiBJQXVnbWVudGVkSlF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3RpbGUtZ3JpZC90aWxlLWdyaWQuY29tcG9uZW50LnRzXG4gKiovIiwiaW1wb3J0IHsgSUF0dHJpYnV0ZXMsIElBdWdtZW50ZWRKUXVlcnksIElDb21waWxlU2VydmljZSwgSURpcmVjdGl2ZSwgSVNjb3BlIH0gZnJvbSAnYW5ndWxhcic7XG5cbmV4cG9ydCBjbGFzcyBTb3J0RGlyZWN0aXZlQ29udHJvbGxlciB7XG4gICAgc29ydEJpbmRpbmc6IHN0cmluZztcbiAgICBzb3J0RXhwcmVzc2lvbjogc3RyaW5nO1xuXG4gICAgc3RhdGljICRpbmplY3QgPSBbJyRzY29wZSddO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJHNjb3BlOiBJU2NvcGUpIHtcbiAgICB9XG5cbiAgICBzb3J0T24oc29ydE9uUHJvcGVydHk6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5zb3J0RXhwcmVzc2lvbiA9PT0gc29ydE9uUHJvcGVydHkpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydEV4cHJlc3Npb24gPSAnLScgKyBzb3J0T25Qcm9wZXJ0eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc29ydEV4cHJlc3Npb24gPSBzb3J0T25Qcm9wZXJ0eTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJHNjb3BlLiRldmFsKHRoaXMuc29ydEJpbmRpbmcgKyAnPVwiJyArIHRoaXMuc29ydEV4cHJlc3Npb24gKyAnXCInKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTb3J0RGlyZWN0aXZlKCk6IElEaXJlY3RpdmUge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRyb2xsZXI6IFNvcnREaXJlY3RpdmVDb250cm9sbGVyLFxuICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICBsaW5rOiAoc2NvcGU6IElTY29wZSxcbiAgICAgICAgICAgICAgIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksXG4gICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBJQXR0cmlidXRlcyxcbiAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFNvcnREaXJlY3RpdmVDb250cm9sbGVyKSA9PiB7XG4gICAgICAgICAgICBjb250cm9sbGVyLnNvcnRCaW5kaW5nID0gYXR0cmlidXRlc1snbWZTb3J0J107XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5pbnRlcmZhY2UgSVNvcnRPblNjb3BlIGV4dGVuZHMgSVNjb3BlIHtcbiAgICBnZXRTb3J0RXhwcmVzc2lvbigpOiBzdHJpbmc7XG4gICAgc29ydE9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTb3J0T25EaXJlY3RpdmUoJGNvbXBpbGU6IElDb21waWxlU2VydmljZSk6IElEaXJlY3RpdmUge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlcXVpcmU6ICdebWZTb3J0JyxcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICdzb3J0T24nOiAnPG1mU29ydE9uJ1xuICAgICAgICB9LFxuICAgICAgICBsaW5rOiAoc2NvcGU6IElTb3J0T25TY29wZSxcbiAgICAgICAgICAgICAgIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksXG4gICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBJQXR0cmlidXRlcyxcbiAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFNvcnREaXJlY3RpdmVDb250cm9sbGVyKSA9PiB7XG4gICAgICAgICAgICBzY29wZS5nZXRTb3J0RXhwcmVzc2lvbiA9ICgpOiBzdHJpbmcgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250cm9sbGVyLnNvcnRFeHByZXNzaW9uO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gQWRkIHNvcnQgaWNvbnNcbiAgICAgICAgICAgIGxldCBpY29uSHRtbCA9XG4gICAgICAgICAgICAgICAgJzxtZi1pY29uIGljb249XCJkb3duX3RoaWNrXCIgbmctaWY9XCJnZXRTb3J0RXhwcmVzc2lvbigpID09IFxcJycgKyBzY29wZS5zb3J0T24gKyAnXFwnXCI+PC9tZi1pY29uPicgK1xuICAgICAgICAgICAgICAgICc8bWYtaWNvbiBpY29uPVwidXBfdGhpY2tcIiBuZy1pZj1cImdldFNvcnRFeHByZXNzaW9uKCkgPT0gXFwnLScgKyBzY29wZS5zb3J0T24gKyAnXFwnXCI+PC9tZi1pY29uPic7XG4gICAgICAgICAgICBsZXQgaWNvbkVsZW1lbnQgPSAkY29tcGlsZShpY29uSHRtbCkoc2NvcGUpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmQoaWNvbkVsZW1lbnQpO1xuXG4gICAgICAgICAgICAvLyBBZGQgbWYtc29ydGFibGUgY2xhc3NcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ21mLXNvcnRhYmxlJyk7XG5cbiAgICAgICAgICAgIC8vIFJlZ2lzdGVyIGNsaWNrIGhhbmRsZXJcbiAgICAgICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNjb3BlLiRhcHBseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuc29ydE9uKHNjb3BlWydzb3J0T24nXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cblNvcnRPbkRpcmVjdGl2ZS4kaW5qZWN0ID0gWyckY29tcGlsZSddO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy90YWJsZS9zb3J0LmRpcmVjdGl2ZS50c1xuICoqLyIsImltcG9ydCB7IElBdHRyaWJ1dGVzLCBJQXVnbWVudGVkSlF1ZXJ5LCBJRGlyZWN0aXZlLCBJU2NvcGUgfSBmcm9tICdhbmd1bGFyJztcbmltcG9ydCBUb2dnbGVTZXJ2aWNlIGZyb20gJy4vdG9nZ2xlLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUb2dnbGVhYmxlIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgb3BlbjogYm9vbGVhbjtcblxuICAgIGhpZGUoKTogdm9pZDtcbiAgICBzaG93KGVsZW1lbnQ/OiBJQXVnbWVudGVkSlF1ZXJ5KTogdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRvZ2dsZURpcmVjdGl2ZSh0b2dnbGVTZXJ2aWNlOiBUb2dnbGVTZXJ2aWNlKTogSURpcmVjdGl2ZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGluazogKHNjb3BlOiBJU2NvcGUsIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksIGF0dHJzOiBJQXR0cmlidXRlcykgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCAoKSA9PiB7IHRvZ2dsZVNlcnZpY2UudG9nZ2xlQ29tcG9uZW50KGF0dHJzWydtZlRvZ2dsZSddLCBlbGVtZW50KTsgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc3RyaWN0OiAnQSdcbiAgICB9O1xufVxuXG5Ub2dnbGVEaXJlY3RpdmUuJGluamVjdCA9IFsgJ01mVG9nZ2xlU2VydmljZScgXTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvdG9nZ2xlL3RvZ2dsZS5kaXJlY3RpdmUudHNcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5IH0gZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgeyBJVG9nZ2xlYWJsZSB9IGZyb20gJy4vdG9nZ2xlLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZ2dsZVNlcnZpY2Uge1xuICAgIHByaXZhdGUgdG9nZ2xlYWJsZUNvbXBvbmVudHM6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZWFibGVDb21wb25lbnRzID0ge307XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIodG9nZ2xlYWJsZUNvbXBvbmVudDogSVRvZ2dsZWFibGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50b2dnbGVhYmxlQ29tcG9uZW50c1t0b2dnbGVhYmxlQ29tcG9uZW50Lm5hbWVdID0gdG9nZ2xlYWJsZUNvbXBvbmVudDtcbiAgICB9XG5cbiAgICB0b2dnbGVDb21wb25lbnQoY29tcG9uZW50SWQ6IHN0cmluZywgZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSk6IHZvaWQge1xuICAgICAgICBsZXQgdG9nZ2xlYWJsZUVsZW1lbnQ6IElUb2dnbGVhYmxlID0gdGhpcy50b2dnbGVhYmxlQ29tcG9uZW50c1tjb21wb25lbnRJZF07XG5cbiAgICAgICAgaWYgKHRvZ2dsZWFibGVFbGVtZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdG9nZ2xlYWJsZUVsZW1lbnQub3Blbikge1xuICAgICAgICAgICAgdG9nZ2xlYWJsZUVsZW1lbnQuc2hvdyhlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvZ2dsZWFibGVFbGVtZW50LmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvdG9nZ2xlL3RvZ2dsZS5zZXJ2aWNlLnRzXG4gKiovIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7OztBQ3BEQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7O0FDTkE7QUFNQTtBQVVBO0FBQ0E7QUFYQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBUUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUZBO0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0ZBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBSkE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFiQTtBQWVBOzs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBREE7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7QUNOQTtBQW1CQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQTFGQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNGQTtBQUVBO0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUxBO0FBREE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQkE7QUF1QkE7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFEQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0ZBO0FBRUE7QUFHQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBTEE7QUFEQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxEQTtBQW9EQTs7Ozs7OztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBWUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBREE7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBWUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBREE7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBRUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUE3SkE7QUFQQTtBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBeUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQzdNQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0ZBO0FBRUE7QUFHQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBTEE7QUFEQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwRUE7QUFzRUE7Ozs7Ozs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFXQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBbENBO0FBTEE7QUFUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFZQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBcEJBO0FBSkE7QUFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBREE7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7O0FDSkE7QUFLQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBZEE7QUFKQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQ0E7QUFtQ0E7Ozs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTs7Ozs7Ozs7O0FDakJBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9