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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbWZ1eC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5MGM4YTNhZDA4MzkwMTE3YzIwMyIsIndlYnBhY2s6Ly8vLi9zcmMvbmctbWZ1eC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC5kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaWNvbi5pbnB1dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaWNvbi5pbnB1dC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW50LmlucHV0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pbnQuaW5wdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC9yZXNpemluZy50ZXh0YXJlYS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvcmVzaXppbmcudGV4dGFyZWEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpbGUvdGlsZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGlsZS90aWxlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpbGUtZ3JpZC90aWxlLWdyaWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYmxlL3NvcnQuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDkwYzhhM2FkMDgzOTAxMTdjMjAzXG4gKiovIiwiaW1wb3J0IHsgbW9kdWxlIH0gZnJvbSAnYW5ndWxhcic7XHJcbmltcG9ydCBBcHBCYXJDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgQXZhdGFyQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCBCdXR0b25EaXJlY3RpdmUgZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IERpYWxvZ0NvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgRGlhbG9nU2VydmljZSBmcm9tICcuL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5zZXJ2aWNlJztcclxuaW1wb3J0IEhlYWRlckNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgSWNvbkNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudCc7XHJcbmltcG9ydCBJY29uSW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L2ljb24uaW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IElucHV0Q29udGFpbmVyQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgSW50SW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L2ludC5pbnB1dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50LCBMaXN0SGVhZGVyQ29tcG9uZW50LCBMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWVudUNvbXBvbmVudCwgTWVudUZvb3RlckNvbXBvbmVudCwgTWVudUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IE5hdkNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQnO1xyXG5pbXBvcnQgUmVzaXppbmdUZXh0YXJlYUNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvcmVzaXppbmcudGV4dGFyZWEuY29tcG9uZW50JztcclxuaW1wb3J0IFNlYXJjaEJveENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCBTaWRlTmF2Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQnO1xyXG5pbXBvcnQgVGlsZUNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvdGlsZS90aWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCBUaWxlR3JpZENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvdGlsZS1ncmlkL3RpbGUtZ3JpZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3J0RGlyZWN0aXZlLCBTb3J0T25EaXJlY3RpdmUgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUvc29ydC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUb2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL2NvbXBvbmVudHMvdG9nZ2xlL3RvZ2dsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgVG9nZ2xlU2VydmljZSBmcm9tICcuL2NvbXBvbmVudHMvdG9nZ2xlL3RvZ2dsZS5zZXJ2aWNlJztcclxuXHJcbm1vZHVsZSgnbmctbWZ1eCcsIFtdKVxyXG4gICAgLmNvbXBvbmVudCgnbWZBcHBCYXInLCBBcHBCYXJDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdtZkF2YXRhcicsIEF2YXRhckNvbXBvbmVudClcclxuICAgIC5kaXJlY3RpdmUoJ21mQnV0dG9uJywgQnV0dG9uRGlyZWN0aXZlKVxyXG4gICAgLmRpcmVjdGl2ZSgnbWZJbnRJbnB1dCcsIEludElucHV0KVxyXG4gICAgLmRpcmVjdGl2ZSgnbWZJY29uSW5wdXQnLCBJY29uSW5wdXQpXHJcbiAgICAuY29tcG9uZW50KCdtZkRpYWxvZycsIERpYWxvZ0NvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ21mSGVhZGVyJywgSGVhZGVyQ29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnbWZJY29uJywgSWNvbkNvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ21mSW5wdXRDb250YWluZXInLCBJbnB1dENvbnRhaW5lckNvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ21mTGlzdCcsIExpc3RDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdtZkxpc3RIZWFkZXInLCBMaXN0SGVhZGVyQ29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnbWZMaXN0SXRlbScsIExpc3RJdGVtQ29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnbWZNZW51JywgTWVudUNvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ21mRm9vdGVyTWVudScsIE1lbnVGb290ZXJDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdtZkhlYWRlck1lbnUnLCBNZW51SGVhZGVyQ29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnbWZOYXYnLCBOYXZDb21wb25lbnQpXHJcbiAgICAuZGlyZWN0aXZlKCdtZlJlc2l6aW5nVGV4dGFyZWEnLCBSZXNpemluZ1RleHRhcmVhQ29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnbWZTZWFyY2hCb3gnLCBTZWFyY2hCb3hDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdtZlNpZGVOYXYnLCBTaWRlTmF2Q29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnbWZUaWxlJywgVGlsZUNvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ21mVGlsZUdyaWQnLCBUaWxlR3JpZENvbXBvbmVudClcclxuXHJcbiAgICAuZGlyZWN0aXZlKCdtZlRvZ2dsZScsIFRvZ2dsZURpcmVjdGl2ZSlcclxuICAgIC5kaXJlY3RpdmUoJ21mU29ydCcsIFNvcnREaXJlY3RpdmUpXHJcbiAgICAuZGlyZWN0aXZlKCdtZlNvcnRPbicsIFNvcnRPbkRpcmVjdGl2ZSlcclxuXHJcbiAgICAuc2VydmljZSgnTWZEaWFsb2dTZXJ2aWNlJywgRGlhbG9nU2VydmljZSlcclxuICAgIC5zZXJ2aWNlKCdNZlRvZ2dsZVNlcnZpY2UnLCBUb2dnbGVTZXJ2aWNlKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbmctbWZ1eC5tb2R1bGUudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImFuZ3VsYXJcIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9hcHAtYmFyLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcEJhckNvbXBvbmVudCB7fVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQudHNcbiAqKi8iLCJpbXBvcnQgeyBleHRlbmQsIElBdWdtZW50ZWRKUXVlcnksIElBdHRyaWJ1dGVzfSBmcm9tICdhbmd1bGFyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRlbnRUZW1wbGF0ZUZ1bmN0aW9uIHtcclxuICAgICgkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJGF0dHJzPzogSUF0dHJpYnV0ZXMpOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb21wb25lbnQob3B0aW9uczoge1xyXG4gICAgYmluZGluZ3M/OiBhbnksXHJcbiAgICBiaW5kVG9Db250cm9sbGVyPzogYm9vbGVhbixcclxuICAgIGNvbnRyb2xsZXJBcz86IHN0cmluZyxcclxuICAgIHJlcXVpcmU/OiBhbnk7XHJcbiAgICB0ZW1wbGF0ZT86IChzdHJpbmcgfCBhbnlbXSB8IElDb250ZW50VGVtcGxhdGVGdW5jdGlvbiksXHJcbiAgICB0ZW1wbGF0ZVVybD86IHN0cmluZyxcclxuICAgIHRyYW5zY2x1ZGU/OiAoYm9vbGVhbiB8IHN0cmluZyksXHJcbiAgICBzdHlsZXNoZWV0VXJsPzogc3RyaW5nXHJcbn0pIHtcclxuICAgIHJldHVybiAoY29udHJvbGxlcjogRnVuY3Rpb24pID0+IGV4dGVuZChvcHRpb25zLCB7IGNvbnRyb2xsZXI6IGNvbnRyb2xsZXIgfSk7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50LmRlY29yYXRvci50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJtZi1hcHAtYmFyLWNvbnRlbnRcXFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgICdzcmMnOiAnPCdcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9hdmF0YXIuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdmF0YXJDb21wb25lbnQge1xyXG4gICAgc3JjOiBzdHJpbmc7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvYXZhdGFyL2F2YXRhci5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwibWYtYXZhdGFyLWNvbnRlbnRcXFwiIG5nLXN0eWxlPVxcXCJ7ICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgJGN0cmwuc3JjICsgJyknIH1cXFwiPjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJQ29tcGlsZVNlcnZpY2UsIElEaXJlY3RpdmUsIElTY29wZSwgSUF0dHJpYnV0ZXMgfSBmcm9tICdhbmd1bGFyJztcclxubGV0IHRlbXBsYXRlVXJsID0gcmVxdWlyZSgnY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sJyk7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29udHJvbGxlciB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsnJHNjb3BlJ107XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRzY29wZTogSVNjb3BlKSB7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25EaXJlY3RpdmUoKTogSURpcmVjdGl2ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnRyb2xsZXI6IEJ1dHRvbkNvbnRyb2xsZXIsXHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogdGVtcGxhdGVVcmwsXHJcbiAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcclxuICAgICAgICByZXBsYWNlOiB0cnVlLFxyXG4gICAgICAgIGxpbms6IChzY29wZTogSVNjb3BlLFxyXG4gICAgICAgICAgICAgICBlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LFxyXG4gICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBJQXR0cmlidXRlcyxcclxuICAgICAgICAgICAgICAgY29udHJvbGxlcjogQnV0dG9uQ29udHJvbGxlcikgPT4ge1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbkJ1dHRvbkRpcmVjdGl2ZS4kaW5qZWN0ID0gWyckY29tcGlsZSddO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8YnV0dG9uIGNsYXNzPVxcXCJtZi1idXR0b25cXFwiIG5nLXRyYW5zY2x1ZGU+XFxyXFxuPC9idXR0b24+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnksIElUcmFuc2NsdWRlRnVuY3Rpb24gfSBmcm9tICdhbmd1bGFyJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnJHRyYW5zY2x1ZGUnIF07XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcclxuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuYXBwZW5kKGNsb25lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnRzXG4gKiovIiwiaW1wb3J0IHtcclxuICAgIGVsZW1lbnQsXHJcbiAgICBJQ29tcGlsZVNlcnZpY2UsXHJcbiAgICBJQ29udHJvbGxlclNlcnZpY2UsXHJcbiAgICBJRG9jdW1lbnRTZXJ2aWNlLFxyXG4gICAgSVByb21pc2UsXHJcbiAgICBJUVNlcnZpY2UsXHJcbiAgICBJUm9vdFNjb3BlU2VydmljZSxcclxuICAgIElUZW1wbGF0ZUNhY2hlU2VydmljZSB9IGZyb20gJ2FuZ3VsYXInO1xyXG5cclxuaW50ZXJmYWNlIERpYWxvZ09wdGlvbnMge1xyXG4gICAgY2FuY2VsOiBzdHJpbmc7XHJcbiAgICBvazogc3RyaW5nO1xyXG4gICAgcHJvbXB0OiBib29sZWFuO1xyXG4gICAgcmVzcG9uc2U6IHN0cmluZztcclxuICAgIHRleHRDb250ZW50OiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2dTZXJ2aWNlIHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGNvbXBpbGUnLCAnJGNvbnRyb2xsZXInLCAnJGRvY3VtZW50JywgJyRxJywgJyRyb290U2NvcGUnLCAnJHRlbXBsYXRlQ2FjaGUnIF07XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRjb21waWxlOiBJQ29tcGlsZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlICRjb250cm9sbGVyOiBJQ29udHJvbGxlclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlICRkb2N1bWVudDogSURvY3VtZW50U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgJHE6IElRU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgJHJvb3RTY29wZTogSVJvb3RTY29wZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlICR0ZW1wbGF0ZUNhY2hlOiBJVGVtcGxhdGVDYWNoZVNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBhbGVydChvcHRpb25zOiBEaWFsb2dPcHRpb25zKTogSVByb21pc2U8YW55PiB7XHJcbiAgICAgICAgb3B0aW9ucy5jYW5jZWwgPSBudWxsO1xyXG4gICAgICAgIG9wdGlvbnMub2sgPSBvcHRpb25zLm9rIHx8ICdPSyc7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4ob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlybShvcHRpb25zOiBEaWFsb2dPcHRpb25zKTogSVByb21pc2U8YW55PiB7XHJcbiAgICAgICAgb3B0aW9ucy5jYW5jZWwgPSBvcHRpb25zLmNhbmNlbCB8fCAnTm8nO1xyXG4gICAgICAgIG9wdGlvbnMub2sgPSBvcHRpb25zLm9rIHx8ICdZZXMnO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4ob3B0aW9uczogRGlhbG9nT3B0aW9ucyk6IElQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCBkZWZlcnJlZCA9IHRoaXMuJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGFuZCBjb21waWxlIGVsZW1lbnRcclxuICAgICAgICBsZXQgZGlhbG9nSHRtbCA9XHJcbiAgICAgICAgICAgICc8bWYtZGlhbG9nIG5nLWNsaWNrPVwib25TY3JpbUNsaWNrZWQoKVwiPicgK1xyXG4gICAgICAgICAgICAnICAgPG1mLWRpYWxvZy1jb250ZW50IG5nLWNsaWNrPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgPGRpdiBjbGFzcz1cIm1mLWRpYWxvZy1oZWFkZXJcIj4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgPGRpdiBuZy1pZj1cIiEhdGl0bGVcIiBjbGFzcz1cIm1mLXRpdGxlXCI+e3t0aXRsZX19PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgPGRpdiBjbGFzcz1cIm1mLWRpYWxvZy1ib2R5XCI+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgIDxkaXYgbmctaWY9XCIhcHJvbXB0XCI+e3t0ZXh0Q29udGVudH19PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgIDxkaXYgbmctaWY9XCJwcm9tcHRcIj4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgIDxtZi1pbnB1dC1jb250YWluZXI+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlc3BvbnNlXCI+e3t0ZXh0Q29udGVudH19PC9sYWJlbD4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJyZXNwb25zZVwiIG5hbWU9XCJyZXNwb25zZVwiIHR5cGU9XCJ0ZXh0XCIgbmctbW9kZWw9XCJkYXRhLnJlc3BvbnNlXCI+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICA8L21mLWlucHV0LWNvbnRhaW5lcj4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgPGRpdiBjbGFzcz1cIm1mLWFjdGlvbnNcIj4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICA8bWYtYnV0dG9uIG5nLWlmPVwiISFva1RleHRcIiBuZy1jbGljaz1cImNvbmZpcm0oKVwiPnt7b2tUZXh0fX08L21mLWJ1dHRvbj4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICA8bWYtYnV0dG9uIG5nLWlmPVwiISFjYW5jZWxUZXh0XCIgbmctY2xpY2s9XCJjYW5jZWwoKVwiPnt7Y2FuY2VsVGV4dH19PC9tZi1idXR0b24+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgPG1mLWJ1dHRvbiBjbGFzcz1cIm1mLWljb24tYnV0dG9uIG1mLWRpYWxvZy1jbG9zZS1idXR0b25cIiBuZy1jbGljaz1cImNhbmNlbCgpXCI+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgIDxtZi1pY29uIGljb249XCJjbG9zZV90aGlja1wiPjwvbWYtaWNvbj4nICtcclxuICAgICAgICAgICAgJyAgICAgICA8L21mLWJ1dHRvbj4nICtcclxuICAgICAgICAgICAgJyAgIDwvbWYtZGlhbG9nLWNvbnRlbnQ+JyArXHJcbiAgICAgICAgICAgICc8L21mLWRpYWxvZz4nO1xyXG5cclxuICAgICAgICBsZXQgc2NvcGUgPSB0aGlzLiRyb290U2NvcGUuJG5ldyh0cnVlKTtcclxuXHJcbiAgICAgICAgc2NvcGVbJ2NhbmNlbCddID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgY29tcGlsZWREaWFsb2dFbGVtZW50LmRldGFjaCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2NvcGVbJ2NvbmZpcm0nXSA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gc2NvcGVbJ2RhdGEnXVsncmVzcG9uc2UnXTtcclxuXHJcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBjb21waWxlZERpYWxvZ0VsZW1lbnQuZGV0YWNoKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzY29wZVsnZGVmZXJyZWQnXSA9IGRlZmVycmVkO1xyXG4gICAgICAgIHNjb3BlWydjYW5jZWxUZXh0J10gPSBvcHRpb25zLmNhbmNlbDtcclxuICAgICAgICBzY29wZVsnb2tUZXh0J10gPSBvcHRpb25zLm9rO1xyXG4gICAgICAgIHNjb3BlWydvblNjcmltQ2xpY2tlZCddID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzY29wZVsnY2FuY2VsJ10oKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNjb3BlWydwcm9tcHQnXSA9IG9wdGlvbnMucHJvbXB0O1xyXG4gICAgICAgIHNjb3BlWydkYXRhJ10gPSB7IHJlc3BvbnNlOiBvcHRpb25zLnJlc3BvbnNlIH07XHJcbiAgICAgICAgc2NvcGVbJ3RleHRDb250ZW50J10gPSBvcHRpb25zLnRleHRDb250ZW50O1xyXG4gICAgICAgIHNjb3BlWyd0aXRsZSddID0gb3B0aW9ucy50aXRsZTtcclxuXHJcbiAgICAgICAgbGV0IGNvbXBpbGVkRGlhbG9nRWxlbWVudCA9IHRoaXMuJGNvbXBpbGUoZGlhbG9nSHRtbCkoc2NvcGUpO1xyXG5cclxuICAgICAgICAvLyBJbnNlcnQgZWxlbWVudCBpbnRvIERPTVxyXG4gICAgICAgIGVsZW1lbnQodGhpcy4kZG9jdW1lbnQuZmluZCgnYm9keScpKS5hcHBlbmQoY29tcGlsZWREaWFsb2dFbGVtZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvbXB0KG9wdGlvbnM6IERpYWxvZ09wdGlvbnMpOiBJUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBvcHRpb25zLmNhbmNlbCA9IG9wdGlvbnMuY2FuY2VsIHx8ICdDYW5jZWwnO1xyXG4gICAgICAgIG9wdGlvbnMub2sgPSBvcHRpb25zLm9rIHx8ICdPSyc7XHJcbiAgICAgICAgb3B0aW9ucy5wcm9tcHQgPSB0cnVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKG9wdGlvbnMpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5zZXJ2aWNlLnRzXG4gKiovIiwiaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSVRyYW5zY2x1ZGVGdW5jdGlvbiB9IGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcclxuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xyXG4gICAgICAgICR0cmFuc2NsdWRlKChjbG9uZTogSUF1Z21lbnRlZEpRdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHNcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBpY29uOiAnQCcsXHJcbiAgICAgICAgc3ZnSWNvbjogJ0AnXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vaWNvbi5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb25Db21wb25lbnQge1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8aSBuZy1pZj1cXFwiJGN0cmwuaWNvblxcXCIgbmctY2xhc3M9XFxcIlsnbWYtaWNvbicsICdtZi1pY29uLScgKyAkY3RybC5pY29uXVxcXCI+PC9pPlxcclxcbjxpbWcgbmctaWY9XFxcIiEkY3RybC5pY29uXFxcIiBjbGFzcz1cXFwic3ZnLWljb25cXFwiIG5nLXNyYz1cXFwie3skY3RybC5zdmdJY29ufX1cXFwiIG5nLWF0dHItYWx0PVxcXCJ7eyRjdHJsLnN2Z0ljb259fVxcXCIvPlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2ljb24vaWNvbi5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJQ29tcGlsZVNlcnZpY2UsIElEaXJlY3RpdmUsIElTY29wZSwgSUF0dHJpYnV0ZXMgfSBmcm9tICdhbmd1bGFyJztcclxubGV0IHRlbXBsYXRlVXJsID0gcmVxdWlyZSgnY29tcG9uZW50cy9pbnB1dC9pY29uLmlucHV0LmNvbXBvbmVudC5odG1sJyk7XHJcblxyXG5leHBvcnQgY2xhc3MgSWNvbklucHV0Q29udHJvbGxlciB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsnJHNjb3BlJ107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkc2NvcGU6IElTY29wZSkge1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZGlyZWN0aXZlIHN1cHBvcnRzIHNob3dpbmcgYSB0ZXh0IGlucHV0IGZpZWxkIHdpdGggYW4gaWNvbi4gIFRoZXNlIGZpZWxkc1xyXG4gKiBhcmUgcG9wdWxhciBmb3Igc2VhcmNoIGJveGVzLiAgVGhlIGRpcmVjdGl2ZSBzdHlsZXMgdGhlIGljb24gc28gaXQgd29uJ3QgaW50ZXJmZXJlXHJcbiAqIHdpdGggdGhlIHRleHQgZmllbGQgYW5kIG1ha2VzIHRoZSBzcGFjaW5nIGxvb2sgY29ycmVjdCBmb3IgdGhlIGNvbnRyb2wuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJY29uSW5wdXREaXJlY3RpdmUoKTogSURpcmVjdGl2ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnRyb2xsZXI6IEljb25JbnB1dENvbnRyb2xsZXIsXHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogdGVtcGxhdGVVcmwsXHJcbiAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcclxuICAgICAgICByZXBsYWNlOiB0cnVlLFxyXG4gICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgIG1vZGVsOiAnPW5nTW9kZWwnLFxyXG4gICAgICAgICAgICBtaW46ICc9JyxcclxuICAgICAgICAgICAgbWF4OiAnPSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpbms6IChzY29wZTogSVNjb3BlLFxyXG4gICAgICAgICAgICAgICBlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LFxyXG4gICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBJQXR0cmlidXRlcyxcclxuICAgICAgICAgICAgICAgY29udHJvbGxlcjogSWNvbklucHV0Q29udHJvbGxlcikgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgIHNjb3BlLmljb24gPSBlbGVtZW50LmF0dHIoJ2ljb24nKTtcclxuICAgICAgICAgICAgICAgICAgIHNjb3BlLnBsYWNlaG9sZGVyID0gZWxlbWVudC5hdHRyKCdwbGFjZWhvbGRlcicpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbkljb25JbnB1dENvbnRyb2xsZXIuJGluamVjdCA9IFsnJGNvbXBpbGUnXTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pY29uLmlucHV0LmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvaW5wdXQvaWNvbi5pbnB1dC5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPHNwYW4gY2xhc3M9XFxcIm1mLWljb24taW5wdXQtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7e3BsYWNlaG9sZGVyfX1cXFwiPlxcclxcbiAgICA8bWYtaWNvbiBpY29uPVxcXCJ7e2ljb259fVxcXCI+PC9tZi1pY29uPlxcclxcbjwvc3Bhbj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pY29uLmlucHV0LmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJVHJhbnNjbHVkZUZ1bmN0aW9uIH0gZnJvbSAnYW5ndWxhcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2lucHV0LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0Q29udGFpbmVyQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnJHRyYW5zY2x1ZGUnIF07XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcclxuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuYXBwZW5kKGNsb25lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnksIElDb21waWxlU2VydmljZSwgSURpcmVjdGl2ZSwgSVNjb3BlLCBJQXR0cmlidXRlcyB9IGZyb20gJ2FuZ3VsYXInO1xyXG5sZXQgdGVtcGxhdGVVcmwgPSByZXF1aXJlKCdjb21wb25lbnRzL2lucHV0L2ludC5pbnB1dC5jb21wb25lbnQuaHRtbCcpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEludElucHV0Q29udHJvbGxlciB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsnJHNjb3BlJ107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkc2NvcGU6IElTY29wZSkge1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZGlyZWN0aXZlIHN1cHBvcnRzIGFuIGlucHV0IGZpZWxkIHdoaWNoIGFkZHMgdGhlIGNsYXNzIGlucHV0RXJyb3JcclxuICogd2hlbiB0aGUgdmFsdWUgaXMgbm90IGEgbnVtYmVyLiAgSXQgd2F0Y2hlcyBjaGFuZ2VzIGZyb20gdXNlciBpbnB1dHMsIFxyXG4gKiB0aGUgRE9NLCBhbmQgdGhlIG1vZGVsLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50SW5wdXREaXJlY3RpdmUoKTogSURpcmVjdGl2ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnRyb2xsZXI6IEludElucHV0Q29udHJvbGxlcixcclxuICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiB0ZW1wbGF0ZVVybCxcclxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxyXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgbW9kZWw6ICc9bmdNb2RlbCcsXHJcbiAgICAgICAgICAgIG1pbjogJz0nLFxyXG4gICAgICAgICAgICBtYXg6ICc9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGluazogKHNjb3BlOiBJU2NvcGUsXHJcbiAgICAgICAgICAgICAgIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksXHJcbiAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IElBdHRyaWJ1dGVzLFxyXG4gICAgICAgICAgICAgICBjb250cm9sbGVyOiBJbnRJbnB1dENvbnRyb2xsZXIpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRyb2xsZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgbGV0IGlzVmFsaWQgPSBmdW5jdGlvbih2YWw6IHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGlmICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIHZhbCB8fCB2YWwgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2lucHV0RXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKE51bWJlcih2YWwpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKCdpbnB1dEVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3BlLm1heCAmJiB2YWwgPiBzY29wZS5tYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ2lucHV0RXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY29wZS5taW4gJiYgdmFsIDwgc2NvcGUubWluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKCdpbnB1dEVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcygnaW5wdXRFcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKCdtb2RlbCcsIGZ1bmN0aW9uKG5ld1ZhbHVlOiBzdHJpbmcsIG9sZFZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYmluZCgnaW5wdXQnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQoZWxlbWVudC52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5JbnRJbnB1dENvbnRyb2xsZXIuJGluamVjdCA9IFsnJGNvbXBpbGUnXTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pbnQuaW5wdXQuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9pbnB1dC9pbnQuaW5wdXQuY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwibWZJbnRJbnB1dFxcXCIgbmctdHJhbnNjbHVkZT5cXHJcXG48L2lucHV0PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2lucHV0L2ludC5pbnB1dC5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSVRyYW5zY2x1ZGVGdW5jdGlvbiB9IGZyb20gJ2FuZ3VsYXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9saXN0LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnJHRyYW5zY2x1ZGUnIF07XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcclxuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuYXBwZW5kKGNsb25lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0SGVhZGVyQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnJHRyYW5zY2x1ZGUnIF07XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcclxuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuYXBwZW5kKGNsb25lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0SXRlbUNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyR0cmFuc2NsdWRlJyBdO1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksICR0cmFuc2NsdWRlOiBJVHJhbnNjbHVkZUZ1bmN0aW9uKSB7XHJcbiAgICAgICAgJHRyYW5zY2x1ZGUoKGNsb25lOiBJQXVnbWVudGVkSlF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuaW1wb3J0IFRvZ2dsZVNlcnZpY2UgZnJvbSAnLi4vdG9nZ2xlL3RvZ2dsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgZWxlbWVudCwgSUF1Z21lbnRlZEpRdWVyeSwgSURvY3VtZW50U2VydmljZSwgSVRyYW5zY2x1ZGVGdW5jdGlvbiB9IGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBJVG9nZ2xlYWJsZSB9IGZyb20gJy4uL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlJztcclxuXHJcbmV4cG9ydCBlbnVtIE1lbnVBbGlnbm1lbnQge1xyXG4gICAgc3RhcnQsXHJcbiAgICBjZW50ZXIsXHJcbiAgICBlbmRcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIGFsaWduOiAnQCcsXHJcbiAgICAgICAgbmFtZTogJ0AnXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vbWVudS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIElUb2dnbGVhYmxlIHtcclxuICAgIGFsaWduOiBzdHJpbmc7XHJcbiAgICBob3Jpem9udGFsQWxpZ25tZW50OiBNZW51QWxpZ25tZW50O1xyXG4gICAgdmVydGljYWxBbGlnbm1lbnQ6IE1lbnVBbGlnbm1lbnQ7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBvcGVuOiBib29sZWFuO1xyXG5cclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGRvY3VtZW50JywgJyRlbGVtZW50JywgJ01mVG9nZ2xlU2VydmljZScgXTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJGRvY3VtZW50OiBJRG9jdW1lbnRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSAkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgdG9nZ2xlU2VydmljZTogVG9nZ2xlU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICRlbGVtZW50LmRldGFjaCgpO1xyXG4gICAgICAgIGVsZW1lbnQoJGRvY3VtZW50LmZpbmQoJ2JvZHknKSkuYXBwZW5kKCRlbGVtZW50KTtcclxuXHJcbiAgICAgICAgJGVsZW1lbnQub24oJ2NsaWNrJywgdGhpcy5oaWRlLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLmhvcml6b250YWxBbGlnbm1lbnQgPSBNZW51QWxpZ25tZW50LnN0YXJ0O1xyXG4gICAgICAgIHRoaXMudmVydGljYWxBbGlnbm1lbnQgPSBNZW51QWxpZ25tZW50LnN0YXJ0O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hbGlnbikge1xyXG4gICAgICAgICAgICBsZXQgdG9rZW5zID0gdGhpcy5hbGlnbi5zcGxpdCgnICcpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGhvcml6b250YWxBbGlnbm1lbnQgPSBNZW51QWxpZ25tZW50W3Rva2Vuc1swXV07XHJcbiAgICAgICAgICAgIGxldCB2ZXJ0aWNhbEFsaWdubWVudCA9IE1lbnVBbGlnbm1lbnRbdG9rZW5zWzFdXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbEFsaWdubWVudCA9IGhvcml6b250YWxBbGlnbm1lbnQgfHwgTWVudUFsaWdubWVudC5zdGFydDtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbEFsaWdubWVudCA9IHZlcnRpY2FsQWxpZ25tZW50IHx8IE1lbnVBbGlnbm1lbnQuc3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICRvbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudC5vZmYoJ2NsaWNrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgJG9uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZVNlcnZpY2UucmVnaXN0ZXIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcygnbWYtb3BlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3coZWw6IElBdWdtZW50ZWRKUXVlcnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgYm91bmRpbmdDbGllbnRSZWN0ID0gZWxbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICAgIC8vIFRPRE86IGRvIHNvbWUgbWF0aFxyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnbWYtbWVudS1jb250ZW50JylbMF0uc3R5bGUubGVmdCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0ICsgJ3B4JztcclxuICAgICAgICB0aGlzLiRlbGVtZW50LmZpbmQoJ21mLW1lbnUtY29udGVudCcpWzBdLnN0eWxlLnRvcCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5ib3R0b20gKyAncHgnO1xyXG5cclxuICAgICAgICB0aGlzLiRlbGVtZW50LmFkZENsYXNzKCdtZi1vcGVuJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVudUZvb3RlckNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyR0cmFuc2NsdWRlJyBdO1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksICR0cmFuc2NsdWRlOiBJVHJhbnNjbHVkZUZ1bmN0aW9uKSB7XHJcbiAgICAgICAgJHRyYW5zY2x1ZGUoKGNsb25lOiBJQXVnbWVudGVkSlF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVudUhlYWRlckNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyR0cmFuc2NsdWRlJyBdO1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksICR0cmFuc2NsdWRlOiBJVHJhbnNjbHVkZUZ1bmN0aW9uKSB7XHJcbiAgICAgICAgJHRyYW5zY2x1ZGUoKGNsb25lOiBJQXVnbWVudGVkSlF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxtZi1tZW51LWNvbnRlbnQgbmctdHJhbnNjbHVkZSBuZy1jbGljaz1cXFwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXFxcIj48L21mLW1lbnUtY29udGVudD5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL25hdi5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZDb21wb25lbnQge31cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwibWYtbmF2LWNvbnRlbnRcXFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJQ29tcGlsZVNlcnZpY2UsIElEaXJlY3RpdmUsIElTY29wZSwgSUF0dHJpYnV0ZXMgfSBmcm9tICdhbmd1bGFyJztcclxubGV0IHRlbXBsYXRlVXJsID0gcmVxdWlyZSgnY29tcG9uZW50cy9pbnB1dC9yZXNpemluZy50ZXh0YXJlYS5jb21wb25lbnQuaHRtbCcpO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlc2l6aW5nVGV4dGFyZWFDb250cm9sbGVyIHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyckc2NvcGUnXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRzY29wZTogSVNjb3BlKSB7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBkaXJlY3RpdmUgc3VwcG9ydHMgYSB0ZXh0IGFyZWEgdGhhdCB3aWxsIGdyb3cgYW5kIHNocmluayBiYXNlZCBvbiB0aGUgc2l6ZSBvZiB0aGUgXHJcbiAqIGNvbnRlbnQgaW4gdGhlIHRleHQgYXJlYS5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc2l6aW5nVGV4dGFyZWFEaXJlY3RpdmUoKTogSURpcmVjdGl2ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnRyb2xsZXI6IFJlc2l6aW5nVGV4dGFyZWFDb250cm9sbGVyLFxyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6IHRlbXBsYXRlVXJsLFxyXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXHJcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICBtb2RlbDogJz1uZ01vZGVsJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGluazogKHNjb3BlOiBJU2NvcGUsXHJcbiAgICAgICAgICAgICAgIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksXHJcbiAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IElBdHRyaWJ1dGVzLFxyXG4gICAgICAgICAgICAgICBjb250cm9sbGVyOiBSZXNpemluZ1RleHRhcmVhQ29udHJvbGxlcikgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgIGlmICghY29udHJvbGxlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5hdHRyKCdtaW4tcm93cycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1pblJvd3MgPSBlbGVtZW50LmF0dHIoJ21pbi1yb3dzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1pblJvd3MuaW5kZXhPZignICcpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICogVGhpcyBtZWFucyB0aGF0IHRoZXkgdHJpZWQgdG8gb3ZlcnJpZGUgdGhlIG1pbmltdW0gbnVtYmVyIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHJvd3MgYW5kIHRoZSBBbmd1bGFyIHRyYW5zY2x1ZGUgY29tYmluZWQgdGhlIGF0dHJpYnV0ZXMgaW5zdGVhZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBvZiByZXBsYWNpbmcgdGhlbS4gIFdlIG5lZWQgdG8gZml4IHRoYXQgdXAuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hdHRyKCdtaW4tcm93cycsIG1pblJvd3Muc2xpY2UoMCwgbWluUm93cy5pbmRleE9mKCcgJykpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICAqIFdlIG5lZWQgdG8gc3RhcnQgYnkgZ2V0dGluZyBzb21lIGJhc2ljIG1lYXN1cmVtZW50cy4gIFdlXHJcbiAgICAgICAgICAgICAgICAgICAgKiBzZXQgdGhlIGZvbnQgc2l6ZSBiZWNhdXNlIHdlIG5lZWQgdG8ga25vdyB0aGUgY29ycmVjdCBsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgKiBoZWlnaHQgb3Igd2UgY2FuJ3QgcmVzaXplIHRoZSBib3ggcHJvcGVybHkuXHJcbiAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgIGxldCB0bXBWYWwgPSBlbGVtZW50LnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgZWxlbWVudC52YWwoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgbGV0IGJhc2VTY3JvbGxIZWlnaHQgPSBlbGVtZW50WzBdLnNjcm9sbEhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudmFsKHRtcFZhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgZWxlbWVudC5jc3MoJ292ZXJmbG93LXknLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNzcygnZm9udC1zaXplJywgJzE1cHgnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAqIFRoZSByZXNpemUgZnVuY3Rpb24gaGFuZGxlcyBkZXRlcm1pbmluZyB0aGUgYWN0dWFsXHJcbiAgICAgICAgICAgICAgICAgICAgKiBzaXplIG9mIHRoZSBib3guIFxyXG4gICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICBsZXQgcmVzaXplID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1pblJvd3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmF0dHIoJ21pbi1yb3dzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluUm93cyA9IE51bWJlcihlbGVtZW50LmF0dHIoJ21pbi1yb3dzJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hdHRyKCdyb3dzJywgbWluUm93cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvd3MgPSBNYXRoLmNlaWwoKGVsZW1lbnRbMF0uc2Nyb2xsSGVpZ2h0IC0gYmFzZVNjcm9sbEhlaWdodCkgLyAxOCkgKyBtaW5Sb3dzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXR0cigncm93cycsIHJvd3MpO1xyXG4gICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICBzY29wZS4kd2F0Y2goJ21vZGVsJywgZnVuY3Rpb24obmV3VmFsdWU6IHN0cmluZywgb2xkVmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgZWxlbWVudC5iaW5kKCdpbnB1dCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5SZXNpemluZ1RleHRhcmVhQ29udHJvbGxlci4kaW5qZWN0ID0gWyckY29tcGlsZSddO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2lucHV0L3Jlc2l6aW5nLnRleHRhcmVhLmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvaW5wdXQvcmVzaXppbmcudGV4dGFyZWEuY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjx0ZXh0YXJlYSBuZy10cmFuc2NsdWRlIGNsYXNzPVxcXCJtZlJlc2l6aW5nVGV4dEFyZWFcXFwiIHJvd3M9XFxcIjNcXFwiIG1pbi1yb3dzPVxcXCIzXFxcIj48L3RleHRhcmVhPlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2lucHV0L3Jlc2l6aW5nLnRleHRhcmVhLmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnksIElOZ01vZGVsQ29udHJvbGxlciwgSVNjb3BlIH0gZnJvbSAnYW5ndWxhcic7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnQCdcclxuICAgIH0sXHJcbiAgICByZXF1aXJlOiB7XHJcbiAgICAgICAgbmdNb2RlbDogJ15uZ01vZGVsJ1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hCb3hDb21wb25lbnQge1xyXG4gICAgbmdNb2RlbDogSU5nTW9kZWxDb250cm9sbGVyO1xyXG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckc2NvcGUnIF07XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCBwcml2YXRlICRzY29wZTogSVNjb3BlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgJG9uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBTZXQgZGVmYXVsdHNcclxuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlciB8fCAnU2VhcmNoJztcclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBuZ01vZGVsXHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubmdNb2RlbC4kcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLnZhbHVlID0gc2VsZi5uZ01vZGVsLiR2aWV3VmFsdWU7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy4kc2NvcGUuJHdhdGNoKFxyXG4gICAgICAgICAgICAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAobmV3VmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5uZ01vZGVsLiRzZXRWaWV3VmFsdWUobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcklucHV0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBvbklucHV0S2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIDI3OiAvLyBFU0NBUEVcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJtZi1zZWFyY2gtYm94LWNvbnRlbnRcXFwiPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCJcXHJcXG4gICAgICAgICAgIGF1dG9jb21wbGV0ZT1cXFwiZmFsc2VcXFwiXFxyXFxuICAgICAgICAgICBuZy1tb2RlbD1cXFwiJGN0cmwudmFsdWVcXFwiXFxyXFxuICAgICAgICAgICBuZy1hdHRyLXBsYWNlaG9sZGVyPVxcXCJ7eyRjdHJsLnBsYWNlaG9sZGVyfX1cXFwiXFxyXFxuICAgICAgICAgICBuZy1rZXlkb3duPVxcXCIkY3RybC5vbklucHV0S2V5RG93bigkZXZlbnQpXFxcIiAvPlxcclxcbiAgICA8bWYtaWNvbiBpY29uPVxcXCJzZWFyY2hfdGhpY2tcXFwiPjwvbWYtaWNvbj5cXHJcXG4gICAgPG1mLWJ1dHRvbiBjbGFzcz1cXFwibWYtaWNvbi1idXR0b25cXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5jbGVhcklucHV0KClcXFwiPlxcclxcbiAgICAgICAgPG1mLWljb24gaWNvbj1cXFwiY2xvc2VfdGhpY2tcXFwiPjwvbWYtaWNvbj5cXHJcXG4gICAgPC9tZi1idXR0b24+XFxyXFxuPC9kaXY+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5IH0gZnJvbSAnYW5ndWxhcic7XHJcbmltcG9ydCB7IElUb2dnbGVhYmxlIH0gZnJvbSAnLi4vdG9nZ2xlL3RvZ2dsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgVG9nZ2xlU2VydmljZSBmcm9tICcuLi90b2dnbGUvdG9nZ2xlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIG5hbWU6ICdAJ1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3NpZGUtbmF2LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVOYXZDb21wb25lbnQgaW1wbGVtZW50cyBJVG9nZ2xlYWJsZSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBvcGVuOiBib29sZWFuO1xyXG5cclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyckZWxlbWVudCcsICdNZlRvZ2dsZVNlcnZpY2UnXTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksIHByaXZhdGUgdG9nZ2xlU2VydmljZTogVG9nZ2xlU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgICRvbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgICRvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudC5vZmYoJ2NsaWNrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKCdtZi1vcGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICB0aGlzLiRlbGVtZW50LmFkZENsYXNzKCdtZi1vcGVuJyk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJtZi1zY3JpbVxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLmhpZGUoKVxcXCI+PC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwibWYtc2lkZS1uYXYtY29udGVudFxcXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSB9IGZyb20gJ2FuZ3VsYXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi90aWxlLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGVDb21wb25lbnQge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcgXTtcclxuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5KSB7XHJcbiAgICAgICAgJGVsZW1lbnQuYXR0cigndGFiaW5kZXgnLCAwKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3RpbGUvdGlsZS5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL3RpbGUvdGlsZS5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwibWYtdGlsZS1jb250ZW50XFxcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL3RpbGUvdGlsZS5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSVRyYW5zY2x1ZGVGdW5jdGlvbiB9IGZyb20gJ2FuZ3VsYXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGVHcmlkQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnJHRyYW5zY2x1ZGUnIF07XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcclxuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuYXBwZW5kKGNsb25lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3RpbGUtZ3JpZC90aWxlLWdyaWQuY29tcG9uZW50LnRzXG4gKiovIiwiaW1wb3J0IHsgSUF0dHJpYnV0ZXMsIElBdWdtZW50ZWRKUXVlcnksIElDb21waWxlU2VydmljZSwgSURpcmVjdGl2ZSwgSVNjb3BlIH0gZnJvbSAnYW5ndWxhcic7XHJcblxyXG5leHBvcnQgY2xhc3MgU29ydERpcmVjdGl2ZUNvbnRyb2xsZXIge1xyXG4gICAgc29ydEJpbmRpbmc6IHN0cmluZztcclxuICAgIHNvcnRFeHByZXNzaW9uOiBzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljICRpbmplY3QgPSBbJyRzY29wZSddO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkc2NvcGU6IElTY29wZSkge1xyXG4gICAgfVxyXG5cclxuICAgIHNvcnRPbihzb3J0T25Qcm9wZXJ0eTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc29ydEV4cHJlc3Npb24gPT09IHNvcnRPblByb3BlcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ydEV4cHJlc3Npb24gPSAnLScgKyBzb3J0T25Qcm9wZXJ0eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ydEV4cHJlc3Npb24gPSBzb3J0T25Qcm9wZXJ0eTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJHNjb3BlLiRldmFsKHRoaXMuc29ydEJpbmRpbmcgKyAnPVwiJyArIHRoaXMuc29ydEV4cHJlc3Npb24gKyAnXCInKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNvcnREaXJlY3RpdmUoKTogSURpcmVjdGl2ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnRyb2xsZXI6IFNvcnREaXJlY3RpdmVDb250cm9sbGVyLFxyXG4gICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgbGluazogKHNjb3BlOiBJU2NvcGUsXHJcbiAgICAgICAgICAgICAgIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksXHJcbiAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IElBdHRyaWJ1dGVzLFxyXG4gICAgICAgICAgICAgICBjb250cm9sbGVyOiBTb3J0RGlyZWN0aXZlQ29udHJvbGxlcikgPT4ge1xyXG4gICAgICAgICAgICBjb250cm9sbGVyLnNvcnRCaW5kaW5nID0gYXR0cmlidXRlc1snbWZTb3J0J107XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElTb3J0T25TY29wZSBleHRlbmRzIElTY29wZSB7XHJcbiAgICBnZXRTb3J0RXhwcmVzc2lvbigpOiBzdHJpbmc7XHJcbiAgICBzb3J0T246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNvcnRPbkRpcmVjdGl2ZSgkY29tcGlsZTogSUNvbXBpbGVTZXJ2aWNlKTogSURpcmVjdGl2ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlcXVpcmU6ICdebWZTb3J0JyxcclxuICAgICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgICdzb3J0T24nOiAnPG1mU29ydE9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGluazogKHNjb3BlOiBJU29ydE9uU2NvcGUsXHJcbiAgICAgICAgICAgICAgIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksXHJcbiAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IElBdHRyaWJ1dGVzLFxyXG4gICAgICAgICAgICAgICBjb250cm9sbGVyOiBTb3J0RGlyZWN0aXZlQ29udHJvbGxlcikgPT4ge1xyXG4gICAgICAgICAgICBzY29wZS5nZXRTb3J0RXhwcmVzc2lvbiA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2xsZXIuc29ydEV4cHJlc3Npb247XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgc29ydCBpY29uc1xyXG4gICAgICAgICAgICBsZXQgaWNvbkh0bWwgPVxyXG4gICAgICAgICAgICAgICAgJzxtZi1pY29uIGljb249XCJkb3duX3RoaWNrXCIgbmctaWY9XCJnZXRTb3J0RXhwcmVzc2lvbigpID09IFxcJycgKyBzY29wZS5zb3J0T24gKyAnXFwnXCI+PC9tZi1pY29uPicgK1xyXG4gICAgICAgICAgICAgICAgJzxtZi1pY29uIGljb249XCJ1cF90aGlja1wiIG5nLWlmPVwiZ2V0U29ydEV4cHJlc3Npb24oKSA9PSBcXCctJyArIHNjb3BlLnNvcnRPbiArICdcXCdcIj48L21mLWljb24+JztcclxuICAgICAgICAgICAgbGV0IGljb25FbGVtZW50ID0gJGNvbXBpbGUoaWNvbkh0bWwpKHNjb3BlKTtcclxuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmQoaWNvbkVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIG1mLXNvcnRhYmxlIGNsYXNzXHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ21mLXNvcnRhYmxlJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZWdpc3RlciBjbGljayBoYW5kbGVyXHJcbiAgICAgICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuJGFwcGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNvcnRPbihzY29wZVsnc29ydE9uJ10pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcblNvcnRPbkRpcmVjdGl2ZS4kaW5qZWN0ID0gWyckY29tcGlsZSddO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3RhYmxlL3NvcnQuZGlyZWN0aXZlLnRzXG4gKiovIiwiaW1wb3J0IHsgSUF0dHJpYnV0ZXMsIElBdWdtZW50ZWRKUXVlcnksIElEaXJlY3RpdmUsIElTY29wZSB9IGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgVG9nZ2xlU2VydmljZSBmcm9tICcuL3RvZ2dsZS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRvZ2dsZWFibGUge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgb3BlbjogYm9vbGVhbjtcclxuXHJcbiAgICBoaWRlKCk6IHZvaWQ7XHJcbiAgICBzaG93KGVsZW1lbnQ/OiBJQXVnbWVudGVkSlF1ZXJ5KTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRvZ2dsZURpcmVjdGl2ZSh0b2dnbGVTZXJ2aWNlOiBUb2dnbGVTZXJ2aWNlKTogSURpcmVjdGl2ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxpbms6IChzY29wZTogSVNjb3BlLCBlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCBhdHRyczogSUF0dHJpYnV0ZXMpID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCAoKSA9PiB7IHRvZ2dsZVNlcnZpY2UudG9nZ2xlQ29tcG9uZW50KGF0dHJzWydtZlRvZ2dsZSddLCBlbGVtZW50KTsgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXN0cmljdDogJ0EnXHJcbiAgICB9O1xyXG59XHJcblxyXG5Ub2dnbGVEaXJlY3RpdmUuJGluamVjdCA9IFsgJ01mVG9nZ2xlU2VydmljZScgXTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy90b2dnbGUvdG9nZ2xlLmRpcmVjdGl2ZS50c1xuICoqLyIsImltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnkgfSBmcm9tICdhbmd1bGFyJztcclxuaW1wb3J0IHsgSVRvZ2dsZWFibGUgfSBmcm9tICcuL3RvZ2dsZS5kaXJlY3RpdmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9nZ2xlU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHRvZ2dsZWFibGVDb21wb25lbnRzOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVhYmxlQ29tcG9uZW50cyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKHRvZ2dsZWFibGVDb21wb25lbnQ6IElUb2dnbGVhYmxlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVhYmxlQ29tcG9uZW50c1t0b2dnbGVhYmxlQ29tcG9uZW50Lm5hbWVdID0gdG9nZ2xlYWJsZUNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVDb21wb25lbnQoY29tcG9uZW50SWQ6IHN0cmluZywgZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSk6IHZvaWQge1xyXG4gICAgICAgIGxldCB0b2dnbGVhYmxlRWxlbWVudDogSVRvZ2dsZWFibGUgPSB0aGlzLnRvZ2dsZWFibGVDb21wb25lbnRzW2NvbXBvbmVudElkXTtcclxuXHJcbiAgICAgICAgaWYgKHRvZ2dsZWFibGVFbGVtZW50ID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0b2dnbGVhYmxlRWxlbWVudC5vcGVuKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZWFibGVFbGVtZW50LnNob3coZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0b2dnbGVhYmxlRWxlbWVudC5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvdG9nZ2xlL3RvZ2dsZS5zZXJ2aWNlLnRzXG4gKiovIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7QUNuREE7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7OztBQ05BO0FBTUE7QUFVQTtBQUNBO0FBWEE7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQVFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFGQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNGQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUpBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBYkE7QUFlQTs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7O0FDTkE7QUFtQkE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUExRkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFEQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBU0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDRkE7QUFFQTtBQUdBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFMQTtBQURBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBdUJBOzs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBREE7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNGQTtBQUVBO0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUxBO0FBREE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsREE7QUFvREE7Ozs7Ozs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFEQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUVBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQWpEQTtBQVBBO0FBUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUE2REE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBREE7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBWUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBREE7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDRkE7QUFFQTtBQUdBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFMQTtBQURBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBFQTtBQXNFQTs7Ozs7OztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQVdBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFsQ0E7QUFMQTtBQVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQVlBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFwQkE7QUFKQTtBQVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFEQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBREE7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7QUNKQTtBQUtBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFkQTtBQUpBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpDQTtBQW1DQTs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBOzs7Ozs7Ozs7QUNqQkE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=