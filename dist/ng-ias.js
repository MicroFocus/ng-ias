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
	var dialog_service_1 = __webpack_require__(11);
	var header_component_1 = __webpack_require__(12);
	var icon_component_1 = __webpack_require__(13);
	var icon_input_component_1 = __webpack_require__(15);
	var input_component_1 = __webpack_require__(17);
	var int_input_component_1 = __webpack_require__(19);
	var list_component_1 = __webpack_require__(21);
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
	var panel_component_1 = __webpack_require__(38);
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
	    .component('iasPanel', panel_component_1.default)
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
	var html = "<button class=\"ias-button\" ng-transclude>\n</button>";
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
	    function DialogComponent($element, dialogService) {
	        this.$element = $element;
	        this.dialogService = dialogService;
	    }
	    DialogComponent.prototype.$destroy = function () {
	    };
	    DialogComponent.prototype.cancel = function () {
	        this.dialogService.cancel();
	    };
	    DialogComponent.prototype.close = function () {
	        this.dialogService.close();
	    };
	    return DialogComponent;
	}());
	DialogComponent.$inject = ['$element', 'IasDialogService'];
	DialogComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(10),
	        transclude: true
	    })
	], DialogComponent);
	exports.default = DialogComponent;
	

/***/ },
/* 10 */
/***/ function(module, exports) {

	var path = 'components/dialog/dialog.component.html';
	var html = "<ias-dialog-content ng-click=\"$event.stopPropagation()\" ng-transclude>\n</ias-dialog-content>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var angular_1 = __webpack_require__(1);
	var DialogService = (function () {
	    function DialogService($compile, $controller, $document, $http, $q, $rootScope, $templateCache) {
	        this.$compile = $compile;
	        this.$controller = $controller;
	        this.$document = $document;
	        this.$http = $http;
	        this.$q = $q;
	        this.$rootScope = $rootScope;
	        this.$templateCache = $templateCache;
	    }
	    DialogService.prototype.alert = function (options) {
	        options.cancel = null;
	        options.ok = options.ok || 'OK';
	        return this.open(options);
	    };
	    DialogService.prototype.cancel = function (response) {
	        this.dialogDeferred.reject(response);
	        this.destroy();
	    };
	    DialogService.prototype.close = function (response) {
	        this.dialogDeferred.resolve(response);
	        this.destroy();
	    };
	    DialogService.prototype.confirm = function (options) {
	        options.cancel = options.cancel || 'No';
	        options.ok = options.ok || 'Yes';
	        return this.open(options);
	    };
	    DialogService.prototype.destroy = function () {
	        this.compiledDialogElement.detach();
	        this.dialogController = null;
	        this.dialogDeferred = null;
	    };
	    DialogService.prototype.open = function (options) {
	        var self = this;
	        var scope = options.scope ? options.scope.$new(false) : (this.$rootScope.$new(true));
	        scope.cancel = function () { self.cancel(); };
	        scope.cancelText = options.cancel;
	        scope.close = function () { self.close(scope.data.response); };
	        scope.okText = options.ok;
	        scope.prompt = options.prompt;
	        scope.data = { response: options.response };
	        scope.textContent = options.textContent;
	        scope.title = options.title;
	        if (options.controller) {
	            this.dialogController = this.$controller(options.controller, { $scope: scope });
	        }
	        this.loadTemplate(options)
	            .then(function (template) {
	            self.compiledDialogElement = self.$compile(template)(scope);
	            angular_1.element(self.$document.find('body')).append(self.compiledDialogElement);
	        });
	        this.dialogDeferred = this.$q.defer();
	        return this.dialogDeferred.promise;
	    };
	    DialogService.prototype.prompt = function (options) {
	        options.cancel = options.cancel || 'Cancel';
	        options.ok = options.ok || 'OK';
	        options.prompt = true;
	        return this.open(options);
	    };
	    DialogService.prototype.loadTemplate = function (options) {
	        if (options.template) {
	            return this.$q.resolve(options.template);
	        }
	        else if (options.templateUrl) {
	            var template = this.$templateCache.get(options.templateUrl);
	            if (template) {
	                return this.$q.resolve(template);
	            }
	            return this.$http
	                .get(options.templateUrl, { cache: this.$templateCache })
	                .then(function (response) {
	                return response.data;
	            });
	        }
	        else {
	            return this.$q.resolve('<ias-dialog>' +
	                '   <div class="ias-dialog-header">' +
	                '       <div ng-if="!!title" class="ias-title">{{title}}</div>' +
	                '   </div>' +
	                '   <div class="ias-dialog-body">' +
	                '       <div ng-if="!prompt">{{textContent}}</div>' +
	                '       <div ng-if="prompt">' +
	                '           <ias-input-container>' +
	                '               <label for="response">{{textContent}}</label>' +
	                '               <input id="response" name="response" type="text" ng-model="data.response">' +
	                '           </ias-input-container>' +
	                '       </div>' +
	                '   </div>' +
	                '   <div class="ias-actions">' +
	                '      <ias-button ng-if="!!okText" ng-click="close()">{{okText}}</ias-button>' +
	                '      <ias-button ng-if="!!cancelText" ng-click="cancel()">{{cancelText}}</ias-button>' +
	                '   </div>' +
	                '   <ias-button class="ias-icon-button ias-dialog-close-button" ng-click="cancel()">' +
	                '       <ias-icon icon="close_thick"></ias-icon>' +
	                '   </ias-button>' +
	                '</ias-dialog>');
	        }
	    };
	    return DialogService;
	}());
	DialogService.$inject = ['$compile', '$controller', '$document', '$http', '$q', '$rootScope', '$templateCache'];
	exports.default = DialogService;


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
/* 13 */
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
	        templateUrl: __webpack_require__(14)
	    })
	], IconComponent);
	exports.default = IconComponent;
	

/***/ },
/* 14 */
/***/ function(module, exports) {

	var path = 'components/icon/icon.component.html';
	var html = "<i ng-if=\"$ctrl.icon\" ng-class=\"['ias-icon', 'ias-icon-' + $ctrl.icon]\"></i>\n<img ng-if=\"!$ctrl.icon\" class=\"svg-icon\" ng-src=\"{{$ctrl.svgIcon}}\" ng-attr-alt=\"{{$ctrl.svgIcon}}\"/>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var templateUrl = __webpack_require__(16);
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
/* 16 */
/***/ function(module, exports) {

	var path = 'components/input/icon.input.component.html';
	var html = "<span class=\"ias-icon-input-container\">\n    <input type=\"text\" placeholder=\"{{placeholder}}\">\n    <ias-icon icon=\"{{icon}}\"></ias-icon>\n</span>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 17 */
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
	        templateUrl: __webpack_require__(18),
	        transclude: true
	    })
	], InputContainerComponent);
	exports.default = InputContainerComponent;
	

/***/ },
/* 18 */
/***/ function(module, exports) {

	var path = 'components/input/input.component.html';
	var html = "";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var templateUrl = __webpack_require__(20);
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
/* 20 */
/***/ function(module, exports) {

	var path = 'components/input/int.input.component.html';
	var html = "<input type=\"text\" class=\"iasIntInput\" ng-transclude>\n</input>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 21 */
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
	var html = "<div class=\"ias-search-box-content\">\n    <input type=\"text\"\n           autocomplete=\"false\"\n           ng-model=\"$ctrl.value\"\n           ng-attr-placeholder=\"{{$ctrl.placeholder}}\"\n           ng-keydown=\"$ctrl.onInputKeyDown($event)\" />\n    <ias-icon icon=\"search_thick\"></ias-icon>\n    <ias-button class=\"ias-icon-button\" ng-click=\"$ctrl.clearInput()\">\n        <ias-icon icon=\"close_thick\"></ias-icon>\n    </ias-button>\n</div>";
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
	        this.open = false;
	    };
	    SideNavComponent.prototype.show = function () {
	        this.$element.addClass('ias-open');
	        this.open = true;
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
	var html = "<div class=\"ias-scrim\" ng-click=\"$ctrl.hide()\"></div>\n<div class=\"ias-side-nav-content\">\n    <div class=\"ias-side-nav-body\" ng-transclude></div>\n</div>";
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
	    ToggleService.prototype.hideComponent = function (componentId) {
	        var toggleableElement = this.toggleableComponents[componentId];
	        if (toggleableElement == null) {
	            return;
	        }
	        toggleableElement.hide();
	    };
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


/***/ },
/* 38 */
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
	var PanelComponent = (function () {
	    function PanelComponent() {
	    }
	    return PanelComponent;
	}());
	PanelComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(39),
	        transclude: true
	    })
	], PanelComponent);
	exports.default = PanelComponent;
	

/***/ },
/* 39 */
/***/ function(module, exports) {

	var path = 'components/panel/panel.component.html';
	var html = "<div class=\"ias-panel-content\" ng-transclude></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctaWFzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGE2NGUyMzg2MzU0ZWQxZWFkZTgxIiwid2VicGFjazovLy8uL3NyYy9uZy1pYXMubW9kdWxlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAtYmFyL2FwcC1iYXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQuZGVjb3JhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaWNvbi5pbnB1dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaWNvbi5pbnB1dC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW50LmlucHV0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pbnQuaW5wdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0L3Jlc2l6aW5nLnRleHRhcmVhLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC9yZXNpemluZy50ZXh0YXJlYS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGlsZS90aWxlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90aWxlL3RpbGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGlsZS1ncmlkL3RpbGUtZ3JpZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFibGUvc29ydC5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdG9nZ2xlL3RvZ2dsZS5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdG9nZ2xlL3RvZ2dsZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhbmVsL3BhbmVsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYW5lbC9wYW5lbC5jb21wb25lbnQuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGE2NGUyMzg2MzU0ZWQxZWFkZTgxXG4gKiovIiwiaW1wb3J0IHsgbW9kdWxlIH0gZnJvbSAnYW5ndWxhcic7XHJcbmltcG9ydCBBcHBCYXJDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgQXZhdGFyQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCBCdXR0b25EaXJlY3RpdmUgZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IERpYWxvZ0NvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgRGlhbG9nU2VydmljZSBmcm9tICcuL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5zZXJ2aWNlJztcclxuaW1wb3J0IEhlYWRlckNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgSWNvbkNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudCc7XHJcbmltcG9ydCBJY29uSW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L2ljb24uaW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IElucHV0Q29udGFpbmVyQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgSW50SW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L2ludC5pbnB1dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50LCBMaXN0SGVhZGVyQ29tcG9uZW50LCBMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWVudUNvbXBvbmVudCwgTWVudUZvb3RlckNvbXBvbmVudCwgTWVudUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IE5hdkNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQnO1xyXG5pbXBvcnQgUmVzaXppbmdUZXh0YXJlYUNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvcmVzaXppbmcudGV4dGFyZWEuY29tcG9uZW50JztcclxuaW1wb3J0IFNlYXJjaEJveENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCBTaWRlTmF2Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQnO1xyXG5pbXBvcnQgVGlsZUNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvdGlsZS90aWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCBUaWxlR3JpZENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvdGlsZS1ncmlkL3RpbGUtZ3JpZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3J0RGlyZWN0aXZlLCBTb3J0T25EaXJlY3RpdmUgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUvc29ydC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUb2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL2NvbXBvbmVudHMvdG9nZ2xlL3RvZ2dsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgVG9nZ2xlU2VydmljZSBmcm9tICcuL2NvbXBvbmVudHMvdG9nZ2xlL3RvZ2dsZS5zZXJ2aWNlJztcclxuaW1wb3J0IFBhbmVsQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9wYW5lbC9wYW5lbC5jb21wb25lbnQnO1xyXG5cclxubW9kdWxlKCduZy1pYXMnLCBbXSlcclxuICAgIC5jb25zdGFudCgnTUVOVV9NQVJHSU4nLCAyNClcclxuICAgIC5jb21wb25lbnQoJ2lhc0FwcEJhcicsIEFwcEJhckNvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ2lhc0F2YXRhcicsIEF2YXRhckNvbXBvbmVudClcclxuICAgIC5kaXJlY3RpdmUoJ2lhc0J1dHRvbicsIEJ1dHRvbkRpcmVjdGl2ZSlcclxuICAgIC5kaXJlY3RpdmUoJ2lhc0ludElucHV0JywgSW50SW5wdXQpXHJcbiAgICAuZGlyZWN0aXZlKCdpYXNJY29uSW5wdXQnLCBJY29uSW5wdXQpXHJcbiAgICAuY29tcG9uZW50KCdpYXNEaWFsb2cnLCBEaWFsb2dDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdpYXNIZWFkZXInLCBIZWFkZXJDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdpYXNJY29uJywgSWNvbkNvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ2lhc0lucHV0Q29udGFpbmVyJywgSW5wdXRDb250YWluZXJDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdpYXNMaXN0JywgTGlzdENvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ2lhc0xpc3RIZWFkZXInLCBMaXN0SGVhZGVyQ29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnaWFzTGlzdEl0ZW0nLCBMaXN0SXRlbUNvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ2lhc01lbnUnLCBNZW51Q29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnaWFzRm9vdGVyTWVudScsIE1lbnVGb290ZXJDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdpYXNIZWFkZXJNZW51JywgTWVudUhlYWRlckNvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ2lhc05hdicsIE5hdkNvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ2lhc1BhbmVsJywgUGFuZWxDb21wb25lbnQpXHJcbiAgICAuZGlyZWN0aXZlKCdpYXNSZXNpemluZ1RleHRhcmVhJywgUmVzaXppbmdUZXh0YXJlYUNvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ2lhc1NlYXJjaEJveCcsIFNlYXJjaEJveENvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ2lhc1NpZGVOYXYnLCBTaWRlTmF2Q29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnaWFzVGlsZScsIFRpbGVDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdpYXNUaWxlR3JpZCcsIFRpbGVHcmlkQ29tcG9uZW50KVxyXG5cclxuICAgIC5kaXJlY3RpdmUoJ2lhc1RvZ2dsZScsIFRvZ2dsZURpcmVjdGl2ZSlcclxuICAgIC5kaXJlY3RpdmUoJ2lhc1NvcnQnLCBTb3J0RGlyZWN0aXZlKVxyXG4gICAgLmRpcmVjdGl2ZSgnaWFzU29ydE9uJywgU29ydE9uRGlyZWN0aXZlKVxyXG5cclxuICAgIC5zZXJ2aWNlKCdJYXNEaWFsb2dTZXJ2aWNlJywgRGlhbG9nU2VydmljZSlcclxuICAgIC5zZXJ2aWNlKCdJYXNUb2dnbGVTZXJ2aWNlJywgVG9nZ2xlU2VydmljZSk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL25nLWlhcy5tb2R1bGUudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImFuZ3VsYXJcIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9hcHAtYmFyLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcEJhckNvbXBvbmVudCB7fVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQudHNcbiAqKi8iLCJpbXBvcnQgeyBleHRlbmQsIElBdWdtZW50ZWRKUXVlcnksIElBdHRyaWJ1dGVzfSBmcm9tICdhbmd1bGFyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRlbnRUZW1wbGF0ZUZ1bmN0aW9uIHtcclxuICAgICgkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJGF0dHJzPzogSUF0dHJpYnV0ZXMpOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb21wb25lbnQob3B0aW9uczoge1xyXG4gICAgYmluZGluZ3M/OiBhbnksXHJcbiAgICBiaW5kVG9Db250cm9sbGVyPzogYm9vbGVhbixcclxuICAgIGNvbnRyb2xsZXJBcz86IHN0cmluZyxcclxuICAgIHJlcXVpcmU/OiBhbnk7XHJcbiAgICB0ZW1wbGF0ZT86IChzdHJpbmcgfCBhbnlbXSB8IElDb250ZW50VGVtcGxhdGVGdW5jdGlvbiksXHJcbiAgICB0ZW1wbGF0ZVVybD86IHN0cmluZyxcclxuICAgIHRyYW5zY2x1ZGU/OiAoYm9vbGVhbiB8IHN0cmluZyksXHJcbiAgICBzdHlsZXNoZWV0VXJsPzogc3RyaW5nXHJcbn0pIHtcclxuICAgIHJldHVybiAoY29udHJvbGxlcjogRnVuY3Rpb24pID0+IGV4dGVuZChvcHRpb25zLCB7IGNvbnRyb2xsZXI6IGNvbnRyb2xsZXIgfSk7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50LmRlY29yYXRvci50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJpYXMtYXBwLWJhci1jb250ZW50XFxcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICAnc3JjJzogJzwnXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vYXZhdGFyLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXZhdGFyQ29tcG9uZW50IHtcclxuICAgIHNyYzogc3RyaW5nO1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvYXZhdGFyL2F2YXRhci5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxkaXYgY2xhc3M9XFxcImlhcy1hdmF0YXItY29udGVudFxcXCIgbmctc3R5bGU9XFxcInsgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyAkY3RybC5zcmMgKyAnKScgfVxcXCI+PC9kaXY+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYXZhdGFyL2F2YXRhci5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnksIElDb21waWxlU2VydmljZSwgSURpcmVjdGl2ZSwgSVNjb3BlLCBJQXR0cmlidXRlcyB9IGZyb20gJ2FuZ3VsYXInO1xyXG5sZXQgdGVtcGxhdGVVcmwgPSByZXF1aXJlKCdjb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmh0bWwnKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25Db250cm9sbGVyIHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyckc2NvcGUnXTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJHNjb3BlOiBJU2NvcGUpIHtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbkRpcmVjdGl2ZSgpOiBJRGlyZWN0aXZlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY29udHJvbGxlcjogQnV0dG9uQ29udHJvbGxlcixcclxuICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiB0ZW1wbGF0ZVVybCxcclxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxyXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgbGluazogKHNjb3BlOiBJU2NvcGUsXHJcbiAgICAgICAgICAgICAgIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksXHJcbiAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IElBdHRyaWJ1dGVzLFxyXG4gICAgICAgICAgICAgICBjb250cm9sbGVyOiBCdXR0b25Db250cm9sbGVyKSA9PiB7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuQnV0dG9uRGlyZWN0aXZlLiRpbmplY3QgPSBbJyRjb21waWxlJ107XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxidXR0b24gY2xhc3M9XFxcImlhcy1idXR0b25cXFwiIG5nLXRyYW5zY2x1ZGU+XFxyXFxuPC9idXR0b24+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnksIElUcmFuc2NsdWRlRnVuY3Rpb24gfSBmcm9tICdhbmd1bGFyJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XHJcbmltcG9ydCBEaWFsb2dTZXJ2aWNlIGZyb20gJy4vZGlhbG9nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9kaWFsb2cuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnSWFzRGlhbG9nU2VydmljZScgXTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksIHByaXZhdGUgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSkge1xyXG4gICAgICAgIC8vICRlbGVtZW50Lm9uKCdjbGljaycsIHRoaXMuY2FuY2VsLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgICRkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMuJGVsZW1lbnQub2ZmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuY2VsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nU2VydmljZS5jYW5jZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpYWxvZ1NlcnZpY2UuY2xvc2UoKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8aWFzLWRpYWxvZy1jb250ZW50IG5nLWNsaWNrPVxcXCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcXFwiIG5nLXRyYW5zY2x1ZGU+XFxyXFxuPC9pYXMtZGlhbG9nLWNvbnRlbnQ+XFxyXFxuXCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQge1xyXG4gICAgZWxlbWVudCxcclxuICAgIElBdWdtZW50ZWRKUXVlcnksXHJcbiAgICBJQ29tcGlsZVNlcnZpY2UsXHJcbiAgICBJQ29udHJvbGxlclNlcnZpY2UsXHJcbiAgICBJRGVmZXJyZWQsXHJcbiAgICBJRG9jdW1lbnRTZXJ2aWNlLFxyXG4gICAgSUh0dHBTZXJ2aWNlLFxyXG4gICAgSVByb21pc2UsXHJcbiAgICBJUVNlcnZpY2UsXHJcbiAgICBJUm9vdFNjb3BlU2VydmljZSxcclxuICAgIElTY29wZSxcclxuICAgIElUZW1wbGF0ZUNhY2hlU2VydmljZVxyXG59IGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgRGlhbG9nQ29tcG9uZW50IGZyb20gJy4vZGlhbG9nLmNvbXBvbmVudCc7XHJcblxyXG5pbnRlcmZhY2UgSURpYWxvZ1Njb3BlIGV4dGVuZHMgSVNjb3BlIHtcclxuICAgICRjdHJsOiBEaWFsb2dDb21wb25lbnQ7XHJcbiAgICBjYW5jZWw6ICgpID0+IHZvaWQ7XHJcbiAgICBjYW5jZWxUZXh0OiBzdHJpbmc7XHJcbiAgICBjbG9zZTogKCkgPT4gdm9pZDtcclxuICAgIG9rVGV4dDogc3RyaW5nO1xyXG4gICAgcHJvbXB0OiBib29sZWFuO1xyXG4gICAgZGF0YTogYW55O1xyXG4gICAgdGV4dENvbnRlbnQ6IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJRGlhbG9nT3B0aW9ucyB7XHJcbiAgICBjYW5jZWw6IHN0cmluZztcclxuICAgIGNvbnRyb2xsZXI6IGFueTtcclxuICAgIG9rOiBzdHJpbmc7XHJcbiAgICBwcm9tcHQ6IGJvb2xlYW47XHJcbiAgICByZXNwb25zZTogc3RyaW5nO1xyXG4gICAgc2NvcGU6IElTY29wZTtcclxuICAgIHRlbXBsYXRlOiBzdHJpbmc7XHJcbiAgICB0ZW1wbGF0ZVVybDogc3RyaW5nO1xyXG4gICAgdGV4dENvbnRlbnQ6IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYWxvZ1NlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBjb21waWxlZERpYWxvZ0VsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnk7XHJcbiAgICBwcml2YXRlIGRpYWxvZ0NvbnRyb2xsZXI6IGFueTtcclxuICAgIHByaXZhdGUgZGlhbG9nRGVmZXJyZWQ6IElEZWZlcnJlZDxhbnk+O1xyXG5cclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGNvbXBpbGUnLCAnJGNvbnRyb2xsZXInLCAnJGRvY3VtZW50JywgJyRodHRwJywgJyRxJywgJyRyb290U2NvcGUnLCAnJHRlbXBsYXRlQ2FjaGUnIF07XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRjb21waWxlOiBJQ29tcGlsZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlICRjb250cm9sbGVyOiBJQ29udHJvbGxlclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlICRkb2N1bWVudDogSURvY3VtZW50U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgJGh0dHA6IElIdHRwU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgJHE6IElRU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgJHJvb3RTY29wZTogSVJvb3RTY29wZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlICR0ZW1wbGF0ZUNhY2hlOiBJVGVtcGxhdGVDYWNoZVNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBhbGVydChvcHRpb25zOiBJRGlhbG9nT3B0aW9ucyk6IElQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIG9wdGlvbnMuY2FuY2VsID0gbnVsbDtcclxuICAgICAgICBvcHRpb25zLm9rID0gb3B0aW9ucy5vayB8fCAnT0snO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbChyZXNwb25zZT86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nRGVmZXJyZWQucmVqZWN0KHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZShyZXNwb25zZT86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nRGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlybShvcHRpb25zOiBJRGlhbG9nT3B0aW9ucyk6IElQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIG9wdGlvbnMuY2FuY2VsID0gb3B0aW9ucy5jYW5jZWwgfHwgJ05vJztcclxuICAgICAgICBvcHRpb25zLm9rID0gb3B0aW9ucy5vayB8fCAnWWVzJztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3BlbihvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5jb21waWxlZERpYWxvZ0VsZW1lbnQuZGV0YWNoKCk7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dDb250cm9sbGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRpYWxvZ0RlZmVycmVkID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKG9wdGlvbnM6IElEaWFsb2dPcHRpb25zKTogSVByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXplIHNjb3BlXHJcbiAgICAgICAgbGV0IHNjb3BlID0gb3B0aW9ucy5zY29wZSA/IG9wdGlvbnMuc2NvcGUuJG5ldyhmYWxzZSkgOiA8SURpYWxvZ1Njb3BlPih0aGlzLiRyb290U2NvcGUuJG5ldyh0cnVlKSk7XHJcbiAgICAgICAgc2NvcGUuY2FuY2VsID0gKCkgPT4geyBzZWxmLmNhbmNlbCgpOyB9O1xyXG4gICAgICAgIHNjb3BlLmNhbmNlbFRleHQgPSBvcHRpb25zLmNhbmNlbDtcclxuICAgICAgICBzY29wZS5jbG9zZSA9ICgpID0+IHsgc2VsZi5jbG9zZShzY29wZS5kYXRhLnJlc3BvbnNlKTsgfTtcclxuICAgICAgICBzY29wZS5va1RleHQgPSBvcHRpb25zLm9rO1xyXG4gICAgICAgIHNjb3BlLnByb21wdCA9IG9wdGlvbnMucHJvbXB0O1xyXG4gICAgICAgIHNjb3BlLmRhdGEgPSB7IHJlc3BvbnNlOiBvcHRpb25zLnJlc3BvbnNlIH07XHJcbiAgICAgICAgc2NvcGUudGV4dENvbnRlbnQgPSBvcHRpb25zLnRleHRDb250ZW50O1xyXG4gICAgICAgIHNjb3BlLnRpdGxlID0gb3B0aW9ucy50aXRsZTtcclxuXHJcbiAgICAgICAgLy8gSW5zdGFudGlhdGUgY29udHJvbGxlciBpZiBwcm92aWRlZFxyXG4gICAgICAgIGlmIChvcHRpb25zLmNvbnRyb2xsZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2dDb250cm9sbGVyID0gdGhpcy4kY29udHJvbGxlcihvcHRpb25zLmNvbnRyb2xsZXIsIHsgJHNjb3BlOiBzY29wZSB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvbXBpbGUgdGVtcGxhdGVcclxuICAgICAgICB0aGlzLmxvYWRUZW1wbGF0ZShvcHRpb25zKVxyXG4gICAgICAgICAgICAudGhlbigodGVtcGxhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY29tcGlsZWREaWFsb2dFbGVtZW50ID0gc2VsZi4kY29tcGlsZSh0ZW1wbGF0ZSkoc2NvcGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEluc2VydCBlbGVtZW50IGludG8gRE9NXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50KHNlbGYuJGRvY3VtZW50LmZpbmQoJ2JvZHknKSkuYXBwZW5kKHNlbGYuY29tcGlsZWREaWFsb2dFbGVtZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlhbG9nRGVmZXJyZWQgPSB0aGlzLiRxLmRlZmVyKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlhbG9nRGVmZXJyZWQucHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9tcHQob3B0aW9uczogSURpYWxvZ09wdGlvbnMpOiBJUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBvcHRpb25zLmNhbmNlbCA9IG9wdGlvbnMuY2FuY2VsIHx8ICdDYW5jZWwnO1xyXG4gICAgICAgIG9wdGlvbnMub2sgPSBvcHRpb25zLm9rIHx8ICdPSyc7XHJcbiAgICAgICAgb3B0aW9ucy5wcm9tcHQgPSB0cnVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZFRlbXBsYXRlKG9wdGlvbnM6IElEaWFsb2dPcHRpb25zKTogSVByb21pc2U8c3RyaW5nPiB7XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zLnRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRxLnJlc29sdmUob3B0aW9ucy50ZW1wbGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIGlmIChvcHRpb25zLnRlbXBsYXRlVXJsKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wbGF0ZTogc3RyaW5nID0gdGhpcy4kdGVtcGxhdGVDYWNoZS5nZXQ8c3RyaW5nPihvcHRpb25zLnRlbXBsYXRlVXJsKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0ZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHEucmVzb2x2ZSh0ZW1wbGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRodHRwXHJcbiAgICAgICAgICAgICAgICAuZ2V0KG9wdGlvbnMudGVtcGxhdGVVcmwsIHsgY2FjaGU6IHRoaXMuJHRlbXBsYXRlQ2FjaGUgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHEucmVzb2x2ZShcclxuICAgICAgICAgICAgICAgICc8aWFzLWRpYWxvZz4nICtcclxuICAgICAgICAgICAgICAgICcgICA8ZGl2IGNsYXNzPVwiaWFzLWRpYWxvZy1oZWFkZXJcIj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgPGRpdiBuZy1pZj1cIiEhdGl0bGVcIiBjbGFzcz1cImlhcy10aXRsZVwiPnt7dGl0bGV9fTwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJyAgIDwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJyAgIDxkaXYgY2xhc3M9XCJpYXMtZGlhbG9nLWJvZHlcIj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgPGRpdiBuZy1pZj1cIiFwcm9tcHRcIj57e3RleHRDb250ZW50fX08L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgPGRpdiBuZy1pZj1cInByb21wdFwiPicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgPGlhcy1pbnB1dC1jb250YWluZXI+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlc3BvbnNlXCI+e3t0ZXh0Q29udGVudH19PC9sYWJlbD4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJyZXNwb25zZVwiIG5hbWU9XCJyZXNwb25zZVwiIHR5cGU9XCJ0ZXh0XCIgbmctbW9kZWw9XCJkYXRhLnJlc3BvbnNlXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICA8L2lhcy1pbnB1dC1jb250YWluZXI+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgIDwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJyAgIDwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJyAgIDxkaXYgY2xhc3M9XCJpYXMtYWN0aW9uc1wiPicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgIDxpYXMtYnV0dG9uIG5nLWlmPVwiISFva1RleHRcIiBuZy1jbGljaz1cImNsb3NlKClcIj57e29rVGV4dH19PC9pYXMtYnV0dG9uPicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgIDxpYXMtYnV0dG9uIG5nLWlmPVwiISFjYW5jZWxUZXh0XCIgbmctY2xpY2s9XCJjYW5jZWwoKVwiPnt7Y2FuY2VsVGV4dH19PC9pYXMtYnV0dG9uPicgK1xyXG4gICAgICAgICAgICAgICAgJyAgIDwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJyAgIDxpYXMtYnV0dG9uIGNsYXNzPVwiaWFzLWljb24tYnV0dG9uIGlhcy1kaWFsb2ctY2xvc2UtYnV0dG9uXCIgbmctY2xpY2s9XCJjYW5jZWwoKVwiPicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICA8aWFzLWljb24gaWNvbj1cImNsb3NlX3RoaWNrXCI+PC9pYXMtaWNvbj4nICtcclxuICAgICAgICAgICAgICAgICcgICA8L2lhcy1idXR0b24+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9pYXMtZGlhbG9nPidcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLnNlcnZpY2UudHNcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJVHJhbnNjbHVkZUZ1bmN0aW9uIH0gZnJvbSAnYW5ndWxhcic7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyR0cmFuc2NsdWRlJyBdO1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksICR0cmFuc2NsdWRlOiBJVHJhbnNjbHVkZUZ1bmN0aW9uKSB7XHJcbiAgICAgICAgJHRyYW5zY2x1ZGUoKGNsb25lOiBJQXVnbWVudGVkSlF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50c1xuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIGljb246ICdAJyxcclxuICAgICAgICBzdmdJY29uOiAnQCdcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9pY29uLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbkNvbXBvbmVudCB7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxpIG5nLWlmPVxcXCIkY3RybC5pY29uXFxcIiBuZy1jbGFzcz1cXFwiWydpYXMtaWNvbicsICdpYXMtaWNvbi0nICsgJGN0cmwuaWNvbl1cXFwiPjwvaT5cXHJcXG48aW1nIG5nLWlmPVxcXCIhJGN0cmwuaWNvblxcXCIgY2xhc3M9XFxcInN2Zy1pY29uXFxcIiBuZy1zcmM9XFxcInt7JGN0cmwuc3ZnSWNvbn19XFxcIiBuZy1hdHRyLWFsdD1cXFwie3skY3RybC5zdmdJY29ufX1cXFwiLz5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSUNvbXBpbGVTZXJ2aWNlLCBJRGlyZWN0aXZlLCBJU2NvcGUsIElBdHRyaWJ1dGVzIH0gZnJvbSAnYW5ndWxhcic7XHJcbmxldCB0ZW1wbGF0ZVVybCA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvaW5wdXQvaWNvbi5pbnB1dC5jb21wb25lbnQuaHRtbCcpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEljb25JbnB1dENvbnRyb2xsZXIge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbJyRzY29wZSddO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJHNjb3BlOiBJU2NvcGUpIHtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGRpcmVjdGl2ZSBzdXBwb3J0cyBzaG93aW5nIGEgdGV4dCBpbnB1dCBmaWVsZCB3aXRoIGFuIGljb24uICBUaGVzZSBmaWVsZHNcclxuICogYXJlIHBvcHVsYXIgZm9yIHNlYXJjaCBib3hlcy4gIFRoZSBkaXJlY3RpdmUgc3R5bGVzIHRoZSBpY29uIHNvIGl0IHdvbid0IGludGVyZmVyZVxyXG4gKiB3aXRoIHRoZSB0ZXh0IGZpZWxkIGFuZCBtYWtlcyB0aGUgc3BhY2luZyBsb29rIGNvcnJlY3QgZm9yIHRoZSBjb250cm9sLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSWNvbklucHV0RGlyZWN0aXZlKCk6IElEaXJlY3RpdmUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb250cm9sbGVyOiBJY29uSW5wdXRDb250cm9sbGVyLFxyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6IHRlbXBsYXRlVXJsLFxyXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXHJcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICBtb2RlbDogJz1uZ01vZGVsJyxcclxuICAgICAgICAgICAgbWluOiAnPScsXHJcbiAgICAgICAgICAgIG1heDogJz0nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaW5rOiAoc2NvcGU6IElTY29wZSxcclxuICAgICAgICAgICAgICAgZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSxcclxuICAgICAgICAgICAgICAgYXR0cmlidXRlczogSUF0dHJpYnV0ZXMsXHJcbiAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IEljb25JbnB1dENvbnRyb2xsZXIpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICBzY29wZS5pY29uID0gZWxlbWVudC5hdHRyKCdpY29uJyk7XHJcbiAgICAgICAgICAgICAgICAgICBzY29wZS5wbGFjZWhvbGRlciA9IGVsZW1lbnQuYXR0cigncGxhY2Vob2xkZXInKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5JY29uSW5wdXRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRjb21waWxlJ107XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaWNvbi5pbnB1dC5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL2lucHV0L2ljb24uaW5wdXQuY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxzcGFuIGNsYXNzPVxcXCJpYXMtaWNvbi1pbnB1dC1jb250YWluZXJcXFwiPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcInt7cGxhY2Vob2xkZXJ9fVxcXCI+XFxyXFxuICAgIDxpYXMtaWNvbiBpY29uPVxcXCJ7e2ljb259fVxcXCI+PC9pYXMtaWNvbj5cXHJcXG48L3NwYW4+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaWNvbi5pbnB1dC5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSVRyYW5zY2x1ZGVGdW5jdGlvbiB9IGZyb20gJ2FuZ3VsYXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9pbnB1dC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dENvbnRhaW5lckNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyR0cmFuc2NsdWRlJyBdO1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksICR0cmFuc2NsdWRlOiBJVHJhbnNjbHVkZUZ1bmN0aW9uKSB7XHJcbiAgICAgICAgJHRyYW5zY2x1ZGUoKGNsb25lOiBJQXVnbWVudGVkSlF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCJcIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJQ29tcGlsZVNlcnZpY2UsIElEaXJlY3RpdmUsIElTY29wZSwgSUF0dHJpYnV0ZXMgfSBmcm9tICdhbmd1bGFyJztcclxubGV0IHRlbXBsYXRlVXJsID0gcmVxdWlyZSgnY29tcG9uZW50cy9pbnB1dC9pbnQuaW5wdXQuY29tcG9uZW50Lmh0bWwnKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRJbnB1dENvbnRyb2xsZXIge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbJyRzY29wZSddO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJHNjb3BlOiBJU2NvcGUpIHtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGRpcmVjdGl2ZSBzdXBwb3J0cyBhbiBpbnB1dCBmaWVsZCB3aGljaCBhZGRzIHRoZSBjbGFzcyBpbnB1dEVycm9yXHJcbiAqIHdoZW4gdGhlIHZhbHVlIGlzIG5vdCBhIG51bWJlci4gIEl0IHdhdGNoZXMgY2hhbmdlcyBmcm9tIHVzZXIgaW5wdXRzLCBcclxuICogdGhlIERPTSwgYW5kIHRoZSBtb2RlbC5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludElucHV0RGlyZWN0aXZlKCk6IElEaXJlY3RpdmUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb250cm9sbGVyOiBJbnRJbnB1dENvbnRyb2xsZXIsXHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogdGVtcGxhdGVVcmwsXHJcbiAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcclxuICAgICAgICByZXBsYWNlOiB0cnVlLFxyXG4gICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgIG1vZGVsOiAnPW5nTW9kZWwnLFxyXG4gICAgICAgICAgICBtaW46ICc9JyxcclxuICAgICAgICAgICAgbWF4OiAnPSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpbms6IChzY29wZTogSVNjb3BlLFxyXG4gICAgICAgICAgICAgICBlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LFxyXG4gICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBJQXR0cmlidXRlcyxcclxuICAgICAgICAgICAgICAgY29udHJvbGxlcjogSW50SW5wdXRDb250cm9sbGVyKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgaWYgKCFjb250cm9sbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgIGxldCBpc1ZhbGlkID0gZnVuY3Rpb24odmFsOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiB2YWwgfHwgdmFsID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKCdpbnB1dEVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihOdW1iZXIodmFsKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcygnaW5wdXRFcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY29wZS5tYXggJiYgdmFsID4gc2NvcGUubWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKCdpbnB1dEVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2NvcGUubWluICYmIHZhbCA8IHNjb3BlLm1pbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcygnaW5wdXRFcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2lucHV0RXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgIHNjb3BlLiR3YXRjaCgnbW9kZWwnLCBmdW5jdGlvbihuZXdWYWx1ZTogc3RyaW5nLCBvbGRWYWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZChuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICBlbGVtZW50LmJpbmQoJ2lucHV0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkKGVsZW1lbnQudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuSW50SW5wdXRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRjb21waWxlJ107XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW50LmlucHV0LmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvaW5wdXQvaW50LmlucHV0LmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImlhc0ludElucHV0XFxcIiBuZy10cmFuc2NsdWRlPlxcclxcbjwvaW5wdXQ+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW50LmlucHV0LmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJVHJhbnNjbHVkZUZ1bmN0aW9uIH0gZnJvbSAnYW5ndWxhcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcclxuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xyXG4gICAgICAgICR0cmFuc2NsdWRlKChjbG9uZTogSUF1Z21lbnRlZEpRdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RIZWFkZXJDb21wb25lbnQge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcclxuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xyXG4gICAgICAgICR0cmFuc2NsdWRlKChjbG9uZTogSUF1Z21lbnRlZEpRdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RJdGVtQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnJHRyYW5zY2x1ZGUnIF07XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcclxuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuYXBwZW5kKGNsb25lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQudHNcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuaW1wb3J0IFRvZ2dsZVNlcnZpY2UgZnJvbSAnLi4vdG9nZ2xlL3RvZ2dsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgZWxlbWVudCwgSUF1Z21lbnRlZEpRdWVyeSwgSURvY3VtZW50U2VydmljZSwgSVRyYW5zY2x1ZGVGdW5jdGlvbiwgSVdpbmRvd1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyJztcclxuaW1wb3J0IHsgSVRvZ2dsZWFibGUgfSBmcm9tICcuLi90b2dnbGUvdG9nZ2xlLmRpcmVjdGl2ZSc7XHJcblxyXG5leHBvcnQgZW51bSBIb3Jpem9udGFsQWxpZ25tZW50IHtcclxuICAgIHN0YXJ0LFxyXG4gICAgY2VudGVyLFxyXG4gICAgZW5kXHJcbn1cclxuZXhwb3J0IGVudW0gVmVydGljYWxBbGlnbm1lbnQge1xyXG4gICAgdG9wLFxyXG4gICAgY2VudGVyLFxyXG4gICAgYm90dG9tXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBhbGlnbjogJ0BpYXNBbGlnbicsXHJcbiAgICAgICAgbmFtZTogJ0AnXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vbWVudS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIElUb2dnbGVhYmxlIHtcclxuICAgIGFsaWduOiBzdHJpbmc7XHJcbiAgICBob3Jpem9udGFsQWxpZ25tZW50OiBIb3Jpem9udGFsQWxpZ25tZW50O1xyXG4gICAgdmVydGljYWxBbGlnbm1lbnQ6IFZlcnRpY2FsQWxpZ25tZW50O1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgb3BlbjogYm9vbGVhbjtcclxuXHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRkb2N1bWVudCcsICckZWxlbWVudCcsICckd2luZG93JywgJ0lhc1RvZ2dsZVNlcnZpY2UnLCAnTUVOVV9NQVJHSU4nIF07XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRkb2N1bWVudDogSURvY3VtZW50U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlICR3aW5kb3c6IElXaW5kb3dTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB0b2dnbGVTZXJ2aWNlOiBUb2dnbGVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBNRU5VX01BUkdJTjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XHJcbiAgICAgICAgJGVsZW1lbnQuZGV0YWNoKCk7XHJcbiAgICAgICAgZWxlbWVudCgkZG9jdW1lbnQuZmluZCgnYm9keScpKS5hcHBlbmQoJGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAkZWxlbWVudC5vbignY2xpY2snLCB0aGlzLmhpZGUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbEFsaWdubWVudCA9IEhvcml6b250YWxBbGlnbm1lbnQuc3RhcnQ7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbEFsaWdubWVudCA9IFZlcnRpY2FsQWxpZ25tZW50LnRvcDtcclxuICAgIH1cclxuXHJcbiAgICAkb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQub2ZmKCdjbGljaycpO1xyXG4gICAgfVxyXG5cclxuICAgICRvbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWxpZ24pIHtcclxuICAgICAgICAgICAgbGV0IHRva2VucyA9IHRoaXMuYWxpZ24uc3BsaXQoJyAnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBob3Jpem9udGFsQWxpZ25tZW50ID0gSG9yaXpvbnRhbEFsaWdubWVudFt0b2tlbnNbMF1dO1xyXG4gICAgICAgICAgICBsZXQgdmVydGljYWxBbGlnbm1lbnQgPSBWZXJ0aWNhbEFsaWdubWVudFt0b2tlbnNbMV1dO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ob3Jpem9udGFsQWxpZ25tZW50ID0gaG9yaXpvbnRhbEFsaWdubWVudCB8fCBIb3Jpem9udGFsQWxpZ25tZW50LnN0YXJ0O1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsQWxpZ25tZW50ID0gdmVydGljYWxBbGlnbm1lbnQgfHwgVmVydGljYWxBbGlnbm1lbnQudG9wO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50b2dnbGVTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2lhcy1vcGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdyh0YXJnZXRFbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5KTogdm9pZCB7XHJcbiAgICAgICAgLy8gU2V0IG9wZW4gc3RhdGUgb24gY29tcG9uZW50IGFuZCBtZW51IGVsZW1lbnRcclxuICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoJ2lhcy1vcGVuJyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd01lbnVDb250ZW50KHRhcmdldEVsZW1lbnRbMF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TGF5b3V0RGlyZWN0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuJGVsZW1lbnRbMF0sIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ2RpcmVjdGlvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbnVtYmVyVG9QaXhlbHMobnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAobnVtID09PSBudWxsKSA/IG51bGwgOiBudW0gKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd01lbnVDb250ZW50KHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgbGV0IG1lbnVDb250ZW50RWxlbWVudCA9IHRoaXMuJGVsZW1lbnQuZmluZCgnaWFzLW1lbnUtY29udGVudCcpWzBdO1xyXG5cclxuICAgICAgICBsZXQgaXNMdHJMYXlvdXQ6IGJvb2xlYW4gPSB0aGlzLmdldExheW91dERpcmVjdGlvbigpICE9PSAncnRsJztcclxuXHJcbiAgICAgICAgLy8gUmVzZXQgdGhlIGJvdW5kYXJpZXMgb2YgdGhlIG1lbnUgY29udGVudCBlbGVtZW50XHJcbiAgICAgICAgbWVudUNvbnRlbnRFbGVtZW50LnN0eWxlLmJvdHRvbSA9XHJcbiAgICAgICAgICAgIG1lbnVDb250ZW50RWxlbWVudC5zdHlsZS5sZWZ0ID1cclxuICAgICAgICAgICAgbWVudUNvbnRlbnRFbGVtZW50LnN0eWxlLnJpZ2h0ID1cclxuICAgICAgICAgICAgbWVudUNvbnRlbnRFbGVtZW50LnN0eWxlLnRvcCA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0b3AgYW5kIGxlZnQgb2Zmc2V0IGJhc2VkIG9uIHRoZSBwb3NpdGlvbiBvZiB0aGUgdGFyZ2V0IGVsZW1lbnRcclxuICAgICAgICBsZXQgbWVudUJvdW5kaW5nQm94ID0gdGhpcy4kZWxlbWVudFswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBsZXQgbWVudUNvbnRlbnRCb3VuZGluZ0JveCA9IG1lbnVDb250ZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBsZXQgdGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94ID0gdGFyZ2V0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgbGV0IGJvdHRvbTogbnVtYmVyID0gbnVsbCxcclxuICAgICAgICAgICAgbGVmdDogbnVtYmVyID0gbnVsbCxcclxuICAgICAgICAgICAgcmlnaHQ6IG51bWJlciA9IG51bGwsXHJcbiAgICAgICAgICAgIHRvcDogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gSWYgbWVudSBjb250ZW50IGlzIHdpZGVyIHRoYW4gbWVudSBjb250YWluZXIsIGNvbnN0cmFpbiB3aWR0aCB0byBtZW51IGNvbnRhaW5lclxyXG4gICAgICAgIGlmIChtZW51Q29udGVudEJvdW5kaW5nQm94LndpZHRoICsgKDIgKiB0aGlzLk1FTlVfTUFSR0lOKSA+IG1lbnVCb3VuZGluZ0JveC53aWR0aCkge1xyXG4gICAgICAgICAgICBsZWZ0ID0gdGhpcy5NRU5VX01BUkdJTjtcclxuICAgICAgICAgICAgcmlnaHQgPSB0aGlzLk1FTlVfTUFSR0lOO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmhvcml6b250YWxBbGlnbm1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgSG9yaXpvbnRhbEFsaWdubWVudC5zdGFydDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNMdHJMYXlvdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC5yaWdodCAtIG1lbnVDb250ZW50Qm91bmRpbmdCb3gud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBIb3Jpem9udGFsQWxpZ25tZW50LmNlbnRlcjpcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gdGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LmxlZnQgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC53aWR0aCAtIG1lbnVDb250ZW50Qm91bmRpbmdCb3gud2lkdGgpIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEhvcml6b250YWxBbGlnbm1lbnQuZW5kOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0x0ckxheW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gdGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LmxlZnQgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC53aWR0aCAtIG1lbnVDb250ZW50Qm91bmRpbmdCb3gud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ29udmVydCB0byBjb29yZGluYXRlcyByZWxhdGl2ZSB0byBtZW51IGNvbnRhaW5lclxyXG4gICAgICAgICAgICBsZWZ0IC09IG1lbnVCb3VuZGluZ0JveC5sZWZ0O1xyXG5cclxuICAgICAgICAgICAgLy8gQ29uc3RyYWluIHRvIG1lbnUgY29udGFpbmVyIGJvdW5kYXJpZXNcclxuICAgICAgICAgICAgbGVmdCA9IE1hdGgubWF4KGxlZnQsIHRoaXMuTUVOVV9NQVJHSU4pO1xyXG4gICAgICAgICAgICBpZiAobGVmdCArIG1lbnVDb250ZW50Qm91bmRpbmdCb3gud2lkdGggPiBtZW51Qm91bmRpbmdCb3gud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIGxlZnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQgPSB0aGlzLk1FTlVfTUFSR0lOO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZW51Q29udGVudEVsZW1lbnQuc3R5bGUubGVmdCA9IHRoaXMubnVtYmVyVG9QaXhlbHMobGVmdCk7XHJcbiAgICAgICAgbWVudUNvbnRlbnRFbGVtZW50LnN0eWxlLnJpZ2h0ID0gdGhpcy5udW1iZXJUb1BpeGVscyhyaWdodCk7XHJcblxyXG4gICAgICAgIC8vIFJlY2FsY3VsYXRlIGJvdW5kaW5nIGJveCB0byBhY2NvdW50IGZvciBhbnkgc2hyaW5raW5nIGNhdXNlZCBieSBjb25zdHJhaW5pbmcgdGhlIGxlZnQgYW5kIHJpZ2h0IG9mZnNldHNcclxuICAgICAgICBtZW51Q29udGVudEJvdW5kaW5nQm94ID0gbWVudUNvbnRlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICAvLyBJZiBtZW51IGNvbnRlbnQgaXMgdGFsbGVyIHRoYW4gbWVudSBjb250YWluZXIsIGNvbnN0cmFpbiBoZWlnaHQgdG8gbWVudSBjb250YWluZXJcclxuICAgICAgICBpZiAobWVudUNvbnRlbnRCb3VuZGluZ0JveC5oZWlnaHQgKyAoMiAqIHRoaXMuTUVOVV9NQVJHSU4pID4gbWVudUJvdW5kaW5nQm94LmhlaWdodCkge1xyXG4gICAgICAgICAgICB0b3AgPSB0aGlzLk1FTlVfTUFSR0lOO1xyXG4gICAgICAgICAgICBib3R0b20gPSB0aGlzLk1FTlVfTUFSR0lOO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnZlcnRpY2FsQWxpZ25tZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFZlcnRpY2FsQWxpZ25tZW50LnRvcDpcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSB0YXJnZXRFbGVtZW50Qm91bmRpbmdCb3guYm90dG9tO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBWZXJ0aWNhbEFsaWdubWVudC5jZW50ZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gdGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LnRvcCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgodGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LmhlaWdodCAtIG1lbnVDb250ZW50Qm91bmRpbmdCb3guaGVpZ2h0KSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBWZXJ0aWNhbEFsaWdubWVudC5ib3R0b206XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gKHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC50b3AgLSBtZW51Q29udGVudEJvdW5kaW5nQm94LmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdG8gY29vcmRpbmF0ZXMgcmVsYXRpdmUgdG8gbWVudSBjb250YWluZXJcclxuICAgICAgICAgICAgdG9wIC09IG1lbnVCb3VuZGluZ0JveC50b3A7XHJcblxyXG4gICAgICAgICAgICAvLyBDb25zdHJhaW4gdG8gbWVudSBjb250YWluZXIgYm91bmRhcmllc1xyXG4gICAgICAgICAgICB0b3AgPSBNYXRoLm1heCh0b3AsIHRoaXMuTUVOVV9NQVJHSU4pO1xyXG4gICAgICAgICAgICBpZiAodG9wICsgbWVudUNvbnRlbnRCb3VuZGluZ0JveC5oZWlnaHQgPiBtZW51Qm91bmRpbmdCb3guaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0b3AgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tID0gdGhpcy5NRU5VX01BUkdJTjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWVudUNvbnRlbnRFbGVtZW50LnN0eWxlLnRvcCA9IHRoaXMubnVtYmVyVG9QaXhlbHModG9wKTtcclxuICAgICAgICBtZW51Q29udGVudEVsZW1lbnQuc3R5bGUuYm90dG9tID0gdGhpcy5udW1iZXJUb1BpeGVscyhib3R0b20pO1xyXG4gICAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lbnVGb290ZXJDb21wb25lbnQge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcclxuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xyXG4gICAgICAgICR0cmFuc2NsdWRlKChjbG9uZTogSUF1Z21lbnRlZEpRdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lbnVIZWFkZXJDb21wb25lbnQge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcclxuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xyXG4gICAgICAgICR0cmFuc2NsdWRlKChjbG9uZTogSUF1Z21lbnRlZEpRdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8aWFzLW1lbnUtY29udGVudCBuZy10cmFuc2NsdWRlIG5nLWNsaWNrPVxcXCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcXFwiPjwvaWFzLW1lbnUtY29udGVudD5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL25hdi5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZDb21wb25lbnQge31cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwiaWFzLW5hdi1jb250ZW50XFxcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSUNvbXBpbGVTZXJ2aWNlLCBJRGlyZWN0aXZlLCBJU2NvcGUsIElBdHRyaWJ1dGVzIH0gZnJvbSAnYW5ndWxhcic7XHJcbmxldCB0ZW1wbGF0ZVVybCA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvaW5wdXQvcmVzaXppbmcudGV4dGFyZWEuY29tcG9uZW50Lmh0bWwnKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXNpemluZ1RleHRhcmVhQ29udHJvbGxlciB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsnJHNjb3BlJ107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkc2NvcGU6IElTY29wZSkge1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZGlyZWN0aXZlIHN1cHBvcnRzIGEgdGV4dCBhcmVhIHRoYXQgd2lsbCBncm93IGFuZCBzaHJpbmsgYmFzZWQgb24gdGhlIHNpemUgb2YgdGhlIFxyXG4gKiBjb250ZW50IGluIHRoZSB0ZXh0IGFyZWEuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXNpemluZ1RleHRhcmVhRGlyZWN0aXZlKCk6IElEaXJlY3RpdmUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb250cm9sbGVyOiBSZXNpemluZ1RleHRhcmVhQ29udHJvbGxlcixcclxuICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiB0ZW1wbGF0ZVVybCxcclxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxyXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgbW9kZWw6ICc9bmdNb2RlbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpbms6IChzY29wZTogSVNjb3BlLFxyXG4gICAgICAgICAgICAgICBlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LFxyXG4gICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBJQXR0cmlidXRlcyxcclxuICAgICAgICAgICAgICAgY29udHJvbGxlcjogUmVzaXppbmdUZXh0YXJlYUNvbnRyb2xsZXIpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRyb2xsZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuYXR0cignbWluLXJvd3MnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGxldCBtaW5Sb3dzID0gZWxlbWVudC5hdHRyKCdtaW4tcm93cycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGlmIChtaW5Sb3dzLmluZGV4T2YoJyAnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFRoaXMgbWVhbnMgdGhhdCB0aGV5IHRyaWVkIHRvIG92ZXJyaWRlIHRoZSBtaW5pbXVtIG51bWJlciBvZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKiByb3dzIGFuZCB0aGUgQW5ndWxhciB0cmFuc2NsdWRlIGNvbWJpbmVkIHRoZSBhdHRyaWJ1dGVzIGluc3RlYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICogb2YgcmVwbGFjaW5nIHRoZW0uICBXZSBuZWVkIHRvIGZpeCB0aGF0IHVwLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXR0cignbWluLXJvd3MnLCBtaW5Sb3dzLnNsaWNlKDAsIG1pblJvd3MuaW5kZXhPZignICcpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgKiBXZSBuZWVkIHRvIHN0YXJ0IGJ5IGdldHRpbmcgc29tZSBiYXNpYyBtZWFzdXJlbWVudHMuICBXZVxyXG4gICAgICAgICAgICAgICAgICAgICogc2V0IHRoZSBmb250IHNpemUgYmVjYXVzZSB3ZSBuZWVkIHRvIGtub3cgdGhlIGNvcnJlY3QgbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICogaGVpZ2h0IG9yIHdlIGNhbid0IHJlc2l6ZSB0aGUgYm94IHByb3Blcmx5LlxyXG4gICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICBsZXQgdG1wVmFsID0gZWxlbWVudC52YWwoKTtcclxuICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgICAgIGxldCBiYXNlU2Nyb2xsSGVpZ2h0ID0gZWxlbWVudFswXS5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICBlbGVtZW50LnZhbCh0bXBWYWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY3NzKCdvdmVyZmxvdy15JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgZWxlbWVudC5jc3MoJ2ZvbnQtc2l6ZScsICcxNXB4Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgKiBUaGUgcmVzaXplIGZ1bmN0aW9uIGhhbmRsZXMgZGV0ZXJtaW5pbmcgdGhlIGFjdHVhbFxyXG4gICAgICAgICAgICAgICAgICAgICogc2l6ZSBvZiB0aGUgYm94LiBcclxuICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgbGV0IHJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGxldCBtaW5Sb3dzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5hdHRyKCdtaW4tcm93cycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblJvd3MgPSBOdW1iZXIoZWxlbWVudC5hdHRyKCdtaW4tcm93cycpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXR0cigncm93cycsIG1pblJvd3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGxldCByb3dzID0gTWF0aC5jZWlsKChlbGVtZW50WzBdLnNjcm9sbEhlaWdodCAtIGJhc2VTY3JvbGxIZWlnaHQpIC8gMTgpICsgbWluUm93cztcclxuICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmF0dHIoJ3Jvd3MnLCByb3dzKTtcclxuICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKCdtb2RlbCcsIGZ1bmN0aW9uKG5ld1ZhbHVlOiBzdHJpbmcsIG9sZFZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXNpemUoKTtcclxuICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYmluZCgnaW5wdXQnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuUmVzaXppbmdUZXh0YXJlYUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGNvbXBpbGUnXTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9pbnB1dC9yZXNpemluZy50ZXh0YXJlYS5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL2lucHV0L3Jlc2l6aW5nLnRleHRhcmVhLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8dGV4dGFyZWEgbmctdHJhbnNjbHVkZSBjbGFzcz1cXFwiaWFzUmVzaXppbmdUZXh0QXJlYVxcXCIgcm93cz1cXFwiM1xcXCIgbWluLXJvd3M9XFxcIjNcXFwiPjwvdGV4dGFyZWE+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvaW5wdXQvcmVzaXppbmcudGV4dGFyZWEuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSU5nTW9kZWxDb250cm9sbGVyLCBJU2NvcGUgfSBmcm9tICdhbmd1bGFyJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdAJ1xyXG4gICAgfSxcclxuICAgIHJlcXVpcmU6IHtcclxuICAgICAgICBuZ01vZGVsOiAnXm5nTW9kZWwnXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc2VhcmNoLWJveC5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEJveENvbXBvbmVudCB7XHJcbiAgICBuZ01vZGVsOiBJTmdNb2RlbENvbnRyb2xsZXI7XHJcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyRzY29wZScgXTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksIHByaXZhdGUgJHNjb3BlOiBJU2NvcGUpIHtcclxuICAgIH1cclxuXHJcbiAgICAkb25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFNldCBkZWZhdWx0c1xyXG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyIHx8ICdTZWFyY2gnO1xyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXplIG5nTW9kZWxcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5uZ01vZGVsLiRyZW5kZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYudmFsdWUgPSBzZWxmLm5nTW9kZWwuJHZpZXdWYWx1ZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLiRzY29wZS4kd2F0Y2goXHJcbiAgICAgICAgICAgICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYudmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChuZXdWYWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5nTW9kZWwuJHNldFZpZXdWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFySW5wdXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5wdXRLZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMjc6IC8vIEVTQ0FQRVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhcklucHV0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxkaXYgY2xhc3M9XFxcImlhcy1zZWFyY2gtYm94LWNvbnRlbnRcXFwiPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCJcXHJcXG4gICAgICAgICAgIGF1dG9jb21wbGV0ZT1cXFwiZmFsc2VcXFwiXFxyXFxuICAgICAgICAgICBuZy1tb2RlbD1cXFwiJGN0cmwudmFsdWVcXFwiXFxyXFxuICAgICAgICAgICBuZy1hdHRyLXBsYWNlaG9sZGVyPVxcXCJ7eyRjdHJsLnBsYWNlaG9sZGVyfX1cXFwiXFxyXFxuICAgICAgICAgICBuZy1rZXlkb3duPVxcXCIkY3RybC5vbklucHV0S2V5RG93bigkZXZlbnQpXFxcIiAvPlxcclxcbiAgICA8aWFzLWljb24gaWNvbj1cXFwic2VhcmNoX3RoaWNrXFxcIj48L2lhcy1pY29uPlxcclxcbiAgICA8aWFzLWJ1dHRvbiBjbGFzcz1cXFwiaWFzLWljb24tYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwuY2xlYXJJbnB1dCgpXFxcIj5cXHJcXG4gICAgICAgIDxpYXMtaWNvbiBpY29uPVxcXCJjbG9zZV90aGlja1xcXCI+PC9pYXMtaWNvbj5cXHJcXG4gICAgPC9pYXMtYnV0dG9uPlxcclxcbjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSB9IGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBJVG9nZ2xlYWJsZSB9IGZyb20gJy4uL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IFRvZ2dsZVNlcnZpY2UgZnJvbSAnLi4vdG9nZ2xlL3RvZ2dsZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBuYW1lOiAnQCdcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9zaWRlLW5hdi5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlTmF2Q29tcG9uZW50IGltcGxlbWVudHMgSVRvZ2dsZWFibGUge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgb3BlbjogYm9vbGVhbjtcclxuXHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsnJGVsZW1lbnQnLCAnSWFzVG9nZ2xlU2VydmljZSddO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgcHJpdmF0ZSB0b2dnbGVTZXJ2aWNlOiBUb2dnbGVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgJG9uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZVNlcnZpY2UucmVnaXN0ZXIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgJG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLiRlbGVtZW50Lm9mZignY2xpY2snKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2lhcy1vcGVuJyk7XHJcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICB0aGlzLiRlbGVtZW50LmFkZENsYXNzKCdpYXMtb3BlbicpO1xyXG4gICAgICAgIHRoaXMub3BlbiA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJpYXMtc2NyaW1cXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5oaWRlKClcXFwiPjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcImlhcy1zaWRlLW5hdi1jb250ZW50XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiaWFzLXNpZGUtbmF2LWJvZHlcXFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XFxyXFxuPC9kaXY+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XHJcbmltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnkgfSBmcm9tICdhbmd1bGFyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vdGlsZS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnIF07XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSkge1xyXG4gICAgICAgICRlbGVtZW50LmF0dHIoJ3RhYmluZGV4JywgMCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy90aWxlL3RpbGUuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy90aWxlL3RpbGUuY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxkaXYgY2xhc3M9XFxcImlhcy10aWxlLWNvbnRlbnRcXFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvdGlsZS90aWxlLmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJVHJhbnNjbHVkZUZ1bmN0aW9uIH0gZnJvbSAnYW5ndWxhcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZUdyaWRDb21wb25lbnQge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcclxuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xyXG4gICAgICAgICR0cmFuc2NsdWRlKChjbG9uZTogSUF1Z21lbnRlZEpRdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvdGlsZS1ncmlkL3RpbGUtZ3JpZC5jb21wb25lbnQudHNcbiAqKi8iLCJpbXBvcnQgeyBJQXR0cmlidXRlcywgSUF1Z21lbnRlZEpRdWVyeSwgSUNvbXBpbGVTZXJ2aWNlLCBJRGlyZWN0aXZlLCBJU2NvcGUgfSBmcm9tICdhbmd1bGFyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTb3J0RGlyZWN0aXZlQ29udHJvbGxlciB7XHJcbiAgICBzb3J0QmluZGluZzogc3RyaW5nO1xyXG4gICAgc29ydEV4cHJlc3Npb246IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsnJHNjb3BlJ107XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRzY29wZTogSVNjb3BlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgc29ydE9uKHNvcnRPblByb3BlcnR5OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5zb3J0RXhwcmVzc2lvbiA9PT0gc29ydE9uUHJvcGVydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5zb3J0RXhwcmVzc2lvbiA9ICctJyArIHNvcnRPblByb3BlcnR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zb3J0RXhwcmVzc2lvbiA9IHNvcnRPblByb3BlcnR5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kc2NvcGUuJGV2YWwodGhpcy5zb3J0QmluZGluZyArICc9XCInICsgdGhpcy5zb3J0RXhwcmVzc2lvbiArICdcIicpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU29ydERpcmVjdGl2ZSgpOiBJRGlyZWN0aXZlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY29udHJvbGxlcjogU29ydERpcmVjdGl2ZUNvbnRyb2xsZXIsXHJcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICBsaW5rOiAoc2NvcGU6IElTY29wZSxcclxuICAgICAgICAgICAgICAgZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSxcclxuICAgICAgICAgICAgICAgYXR0cmlidXRlczogSUF0dHJpYnV0ZXMsXHJcbiAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFNvcnREaXJlY3RpdmVDb250cm9sbGVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuc29ydEJpbmRpbmcgPSBhdHRyaWJ1dGVzWydpYXNTb3J0J107XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElTb3J0T25TY29wZSBleHRlbmRzIElTY29wZSB7XHJcbiAgICBnZXRTb3J0RXhwcmVzc2lvbigpOiBzdHJpbmc7XHJcbiAgICBzb3J0T246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNvcnRPbkRpcmVjdGl2ZSgkY29tcGlsZTogSUNvbXBpbGVTZXJ2aWNlKTogSURpcmVjdGl2ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlcXVpcmU6ICdeaWFzU29ydCcsXHJcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICAnc29ydE9uJzogJzxpYXNTb3J0T24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaW5rOiAoc2NvcGU6IElTb3J0T25TY29wZSxcclxuICAgICAgICAgICAgICAgZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSxcclxuICAgICAgICAgICAgICAgYXR0cmlidXRlczogSUF0dHJpYnV0ZXMsXHJcbiAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFNvcnREaXJlY3RpdmVDb250cm9sbGVyKSA9PiB7XHJcbiAgICAgICAgICAgIHNjb3BlLmdldFNvcnRFeHByZXNzaW9uID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udHJvbGxlci5zb3J0RXhwcmVzc2lvbjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBzb3J0IGljb25zXHJcbiAgICAgICAgICAgIGxldCBpY29uSHRtbCA9XHJcbiAgICAgICAgICAgICAgICAnPGlhcy1pY29uIGljb249XCJkb3duX3RoaWNrXCIgbmctaWY9XCJnZXRTb3J0RXhwcmVzc2lvbigpID09IFxcJycgKyBzY29wZS5zb3J0T24gKyAnXFwnXCI+PC9pYXMtaWNvbj4nICtcclxuICAgICAgICAgICAgICAgICc8aWFzLWljb24gaWNvbj1cInVwX3RoaWNrXCIgbmctaWY9XCJnZXRTb3J0RXhwcmVzc2lvbigpID09IFxcJy0nICsgc2NvcGUuc29ydE9uICsgJ1xcJ1wiPjwvaWFzLWljb24+JztcclxuICAgICAgICAgICAgbGV0IGljb25FbGVtZW50ID0gJGNvbXBpbGUoaWNvbkh0bWwpKHNjb3BlKTtcclxuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmQoaWNvbkVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIGlhcy1zb3J0YWJsZSBjbGFzc1xyXG4gICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKCdpYXMtc29ydGFibGUnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlZ2lzdGVyIGNsaWNrIGhhbmRsZXJcclxuICAgICAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzY29wZS4kYXBwbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuc29ydE9uKHNjb3BlWydzb3J0T24nXSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuU29ydE9uRGlyZWN0aXZlLiRpbmplY3QgPSBbJyRjb21waWxlJ107XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvdGFibGUvc29ydC5kaXJlY3RpdmUudHNcbiAqKi8iLCJpbXBvcnQgeyBJQXR0cmlidXRlcywgSUF1Z21lbnRlZEpRdWVyeSwgSURpcmVjdGl2ZSwgSVNjb3BlIH0gZnJvbSAnYW5ndWxhcic7XHJcbmltcG9ydCBUb2dnbGVTZXJ2aWNlIGZyb20gJy4vdG9nZ2xlLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVG9nZ2xlYWJsZSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBvcGVuOiBib29sZWFuO1xyXG5cclxuICAgIGhpZGUoKTogdm9pZDtcclxuICAgIHNob3coZWxlbWVudD86IElBdWdtZW50ZWRKUXVlcnkpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVG9nZ2xlRGlyZWN0aXZlKHRvZ2dsZVNlcnZpY2U6IFRvZ2dsZVNlcnZpY2UpOiBJRGlyZWN0aXZlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbGluazogKHNjb3BlOiBJU2NvcGUsIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksIGF0dHJzOiBJQXR0cmlidXRlcykgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsICgpID0+IHsgdG9nZ2xlU2VydmljZS50b2dnbGVDb21wb25lbnQoYXR0cnNbJ2lhc1RvZ2dsZSddLCBlbGVtZW50KTsgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXN0cmljdDogJ0EnXHJcbiAgICB9O1xyXG59XHJcblxyXG5Ub2dnbGVEaXJlY3RpdmUuJGluamVjdCA9IFsgJ0lhc1RvZ2dsZVNlcnZpY2UnIF07XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvdG9nZ2xlL3RvZ2dsZS5kaXJlY3RpdmUudHNcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5IH0gZnJvbSAnYW5ndWxhcic7XHJcbmltcG9ydCB7IElUb2dnbGVhYmxlIH0gZnJvbSAnLi90b2dnbGUuZGlyZWN0aXZlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZ2dsZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSB0b2dnbGVhYmxlQ29tcG9uZW50czogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlYWJsZUNvbXBvbmVudHMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlQ29tcG9uZW50KGNvbXBvbmVudElkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBsZXQgdG9nZ2xlYWJsZUVsZW1lbnQ6IElUb2dnbGVhYmxlID0gdGhpcy50b2dnbGVhYmxlQ29tcG9uZW50c1tjb21wb25lbnRJZF07XHJcblxyXG4gICAgICAgIGlmICh0b2dnbGVhYmxlRWxlbWVudCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRvZ2dsZWFibGVFbGVtZW50LmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlcih0b2dnbGVhYmxlQ29tcG9uZW50OiBJVG9nZ2xlYWJsZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlYWJsZUNvbXBvbmVudHNbdG9nZ2xlYWJsZUNvbXBvbmVudC5uYW1lXSA9IHRvZ2dsZWFibGVDb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQ29tcG9uZW50KGNvbXBvbmVudElkOiBzdHJpbmcsIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgdG9nZ2xlYWJsZUVsZW1lbnQ6IElUb2dnbGVhYmxlID0gdGhpcy50b2dnbGVhYmxlQ29tcG9uZW50c1tjb21wb25lbnRJZF07XHJcblxyXG4gICAgICAgIGlmICh0b2dnbGVhYmxlRWxlbWVudCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdG9nZ2xlYWJsZUVsZW1lbnQub3Blbikge1xyXG4gICAgICAgICAgICB0b2dnbGVhYmxlRWxlbWVudC5zaG93KGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdG9nZ2xlYWJsZUVsZW1lbnQuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuc2VydmljZS50c1xuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9wYW5lbC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lbENvbXBvbmVudCB7fVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3BhbmVsL3BhbmVsLmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvcGFuZWwvcGFuZWwuY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxkaXYgY2xhc3M9XFxcImlhcy1wYW5lbC1jb250ZW50XFxcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL3BhbmVsL3BhbmVsLmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7O0FDdERBOzs7Ozs7Ozs7Ozs7OztBQ0FBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7QUNOQTtBQU1BO0FBVUE7QUFDQTtBQVhBOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFRQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRkE7QUFOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDRkE7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFKQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFPQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFoQkE7QUFEQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0hBO0FBeUNBO0FBTUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQTlIQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNGQTtBQUVBO0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUxBO0FBREE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQkE7QUF1QkE7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFEQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0ZBO0FBRUE7QUFHQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBTEE7QUFEQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxEQTtBQW9EQTs7Ozs7OztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBRUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUE3SkE7QUFQQTtBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBeUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQzdNQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0ZBO0FBRUE7QUFHQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBTEE7QUFEQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwRUE7QUFzRUE7Ozs7Ozs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFXQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBbENBO0FBTEE7QUFUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFZQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQXRCQTtBQUpBO0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQURBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFEQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7OztBQ0pBO0FBS0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQWRBO0FBSkE7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakNBO0FBbUNBOzs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7Ozs7Ozs7OztBQ2pCQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOzs7Iiwic291cmNlUm9vdCI6IiJ9