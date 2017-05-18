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
	var menu_component_1 = __webpack_require__(23);
	var nav_component_1 = __webpack_require__(25);
	var resizing_textarea_component_1 = __webpack_require__(27);
	var search_box_component_1 = __webpack_require__(29);
	var side_nav_component_1 = __webpack_require__(31);
	var tile_component_1 = __webpack_require__(33);
	var tile_grid_component_1 = __webpack_require__(35);
	var sort_directive_1 = __webpack_require__(36);
	var toggle_directive_1 = __webpack_require__(37);
	var toggle_service_1 = __webpack_require__(38);
	var panel_component_1 = __webpack_require__(39);
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
	        templateUrl: __webpack_require__(22),
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
/***/ function(module, exports) {

	var path = 'components/list/list.component.html';
	var html = "";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 23 */
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
	        templateUrl: __webpack_require__(24),
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
/* 24 */
/***/ function(module, exports) {

	var path = 'components/menu/menu.component.html';
	var html = "<ias-menu-content ng-transclude ng-click=\"$event.stopPropagation()\"></ias-menu-content>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 25 */
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
	        templateUrl: __webpack_require__(26),
	        transclude: true
	    })
	], NavComponent);
	exports.default = NavComponent;
	

/***/ },
/* 26 */
/***/ function(module, exports) {

	var path = 'components/nav/nav.component.html';
	var html = "<div class=\"ias-nav-content\" ng-transclude></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var templateUrl = __webpack_require__(28);
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
/* 28 */
/***/ function(module, exports) {

	var path = 'components/input/resizing.textarea.component.html';
	var html = "<textarea ng-transclude class=\"iasResizingTextArea\" rows=\"3\" min-rows=\"3\"></textarea>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 29 */
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
	        templateUrl: __webpack_require__(30)
	    })
	], SearchBoxComponent);
	exports.default = SearchBoxComponent;
	

/***/ },
/* 30 */
/***/ function(module, exports) {

	var path = 'components/search-box/search-box.component.html';
	var html = "<div class=\"ias-search-box-content\">\n    <input type=\"text\"\n           autocomplete=\"false\"\n           ng-model=\"$ctrl.value\"\n           ng-attr-placeholder=\"{{$ctrl.placeholder}}\"\n           ng-keydown=\"$ctrl.onInputKeyDown($event)\" />\n    <ias-icon icon=\"search_thick\"></ias-icon>\n    <ias-button class=\"ias-icon-button\" ng-click=\"$ctrl.clearInput()\">\n        <ias-icon icon=\"close_thick\"></ias-icon>\n    </ias-button>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 31 */
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
	        templateUrl: __webpack_require__(32),
	        transclude: true
	    })
	], SideNavComponent);
	exports.default = SideNavComponent;
	

/***/ },
/* 32 */
/***/ function(module, exports) {

	var path = 'components/side-nav/side-nav.component.html';
	var html = "<div class=\"ias-scrim\" ng-click=\"$ctrl.hide()\"></div>\n<div class=\"ias-side-nav-content\">\n    <div class=\"ias-side-nav-body\" ng-transclude></div>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 33 */
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
	        templateUrl: __webpack_require__(34),
	        transclude: true
	    })
	], TileComponent);
	exports.default = TileComponent;
	

/***/ },
/* 34 */
/***/ function(module, exports) {

	var path = 'components/tile/tile.component.html';
	var html = "<div class=\"ias-tile-content\" ng-transclude></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 35 */
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
/* 36 */
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
/* 37 */
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
/* 38 */
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
/* 39 */
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
	        templateUrl: __webpack_require__(40),
	        transclude: true
	    })
	], PanelComponent);
	exports.default = PanelComponent;
	

/***/ },
/* 40 */
/***/ function(module, exports) {

	var path = 'components/panel/panel.component.html';
	var html = "<div class=\"ias-panel-content\" ng-transclude></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctaWFzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGM3NGYwYzFjNjBjMWRhNWViMTMyIiwid2VicGFjazovLy8uL3NyYy9uZy1pYXMubW9kdWxlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAtYmFyL2FwcC1iYXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQuZGVjb3JhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaWNvbi5pbnB1dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaWNvbi5pbnB1dC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW50LmlucHV0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pbnQuaW5wdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC9yZXNpemluZy50ZXh0YXJlYS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvcmVzaXppbmcudGV4dGFyZWEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpbGUvdGlsZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGlsZS90aWxlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpbGUtZ3JpZC90aWxlLWdyaWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYmxlL3NvcnQuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYW5lbC9wYW5lbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwuY29tcG9uZW50Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBjNzRmMGMxYzYwYzFkYTVlYjEzMlxuICoqLyIsImltcG9ydCB7IG1vZHVsZSB9IGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IEFwcEJhckNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgQXZhdGFyQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgQnV0dG9uRGlyZWN0aXZlIGZyb20gJy4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgRGlhbG9nQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgRGlhbG9nU2VydmljZSBmcm9tICcuL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCBIZWFkZXJDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCBJY29uQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50JztcbmltcG9ydCBJY29uSW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L2ljb24uaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCBJbnB1dENvbnRhaW5lckNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCBJbnRJbnB1dCBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvaW50LmlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50LCBMaXN0SGVhZGVyQ29tcG9uZW50LCBMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IE1lbnVDb21wb25lbnQsIE1lbnVGb290ZXJDb21wb25lbnQsIE1lbnVIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgTmF2Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgUmVzaXppbmdUZXh0YXJlYUNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvcmVzaXppbmcudGV4dGFyZWEuY29tcG9uZW50JztcbmltcG9ydCBTZWFyY2hCb3hDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQnO1xuaW1wb3J0IFNpZGVOYXZDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgVGlsZUNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvdGlsZS90aWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgVGlsZUdyaWRDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL3RpbGUtZ3JpZC90aWxlLWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IFNvcnREaXJlY3RpdmUsIFNvcnRPbkRpcmVjdGl2ZSB9IGZyb20gJy4vY29tcG9uZW50cy90YWJsZS9zb3J0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUb2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL2NvbXBvbmVudHMvdG9nZ2xlL3RvZ2dsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IFRvZ2dsZVNlcnZpY2UgZnJvbSAnLi9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuc2VydmljZSc7XG5pbXBvcnQgUGFuZWxDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL3BhbmVsL3BhbmVsLmNvbXBvbmVudCc7XG5cbm1vZHVsZSgnbmctaWFzJywgW10pXG4gICAgLmNvbnN0YW50KCdNRU5VX01BUkdJTicsIDI0KVxuICAgIC5jb21wb25lbnQoJ2lhc0FwcEJhcicsIEFwcEJhckNvbXBvbmVudClcbiAgICAuY29tcG9uZW50KCdpYXNBdmF0YXInLCBBdmF0YXJDb21wb25lbnQpXG4gICAgLmRpcmVjdGl2ZSgnaWFzQnV0dG9uJywgQnV0dG9uRGlyZWN0aXZlKVxuICAgIC5kaXJlY3RpdmUoJ2lhc0ludElucHV0JywgSW50SW5wdXQpXG4gICAgLmRpcmVjdGl2ZSgnaWFzSWNvbklucHV0JywgSWNvbklucHV0KVxuICAgIC5jb21wb25lbnQoJ2lhc0RpYWxvZycsIERpYWxvZ0NvbXBvbmVudClcbiAgICAuY29tcG9uZW50KCdpYXNIZWFkZXInLCBIZWFkZXJDb21wb25lbnQpXG4gICAgLmNvbXBvbmVudCgnaWFzSWNvbicsIEljb25Db21wb25lbnQpXG4gICAgLmNvbXBvbmVudCgnaWFzSW5wdXRDb250YWluZXInLCBJbnB1dENvbnRhaW5lckNvbXBvbmVudClcbiAgICAuY29tcG9uZW50KCdpYXNMaXN0JywgTGlzdENvbXBvbmVudClcbiAgICAuY29tcG9uZW50KCdpYXNMaXN0SGVhZGVyJywgTGlzdEhlYWRlckNvbXBvbmVudClcbiAgICAuY29tcG9uZW50KCdpYXNMaXN0SXRlbScsIExpc3RJdGVtQ29tcG9uZW50KVxuICAgIC5jb21wb25lbnQoJ2lhc01lbnUnLCBNZW51Q29tcG9uZW50KVxuICAgIC5jb21wb25lbnQoJ2lhc0Zvb3Rlck1lbnUnLCBNZW51Rm9vdGVyQ29tcG9uZW50KVxuICAgIC5jb21wb25lbnQoJ2lhc0hlYWRlck1lbnUnLCBNZW51SGVhZGVyQ29tcG9uZW50KVxuICAgIC5jb21wb25lbnQoJ2lhc05hdicsIE5hdkNvbXBvbmVudClcbiAgICAuY29tcG9uZW50KCdpYXNQYW5lbCcsIFBhbmVsQ29tcG9uZW50KVxuICAgIC5kaXJlY3RpdmUoJ2lhc1Jlc2l6aW5nVGV4dGFyZWEnLCBSZXNpemluZ1RleHRhcmVhQ29tcG9uZW50KVxuICAgIC5jb21wb25lbnQoJ2lhc1NlYXJjaEJveCcsIFNlYXJjaEJveENvbXBvbmVudClcbiAgICAuY29tcG9uZW50KCdpYXNTaWRlTmF2JywgU2lkZU5hdkNvbXBvbmVudClcbiAgICAuY29tcG9uZW50KCdpYXNUaWxlJywgVGlsZUNvbXBvbmVudClcbiAgICAuY29tcG9uZW50KCdpYXNUaWxlR3JpZCcsIFRpbGVHcmlkQ29tcG9uZW50KVxuXG4gICAgLmRpcmVjdGl2ZSgnaWFzVG9nZ2xlJywgVG9nZ2xlRGlyZWN0aXZlKVxuICAgIC5kaXJlY3RpdmUoJ2lhc1NvcnQnLCBTb3J0RGlyZWN0aXZlKVxuICAgIC5kaXJlY3RpdmUoJ2lhc1NvcnRPbicsIFNvcnRPbkRpcmVjdGl2ZSlcblxuICAgIC5zZXJ2aWNlKCdJYXNEaWFsb2dTZXJ2aWNlJywgRGlhbG9nU2VydmljZSlcbiAgICAuc2VydmljZSgnSWFzVG9nZ2xlU2VydmljZScsIFRvZ2dsZVNlcnZpY2UpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbmctaWFzLm1vZHVsZS50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYW5ndWxhclwiXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2FwcC1iYXIuY29tcG9uZW50Lmh0bWwnKSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwQmFyQ29tcG9uZW50IHt9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQudHNcbiAqKi8iLCJpbXBvcnQgeyBleHRlbmQsIElBdWdtZW50ZWRKUXVlcnksIElBdHRyaWJ1dGVzfSBmcm9tICdhbmd1bGFyJztcblxuZXhwb3J0IGludGVyZmFjZSBJQ29udGVudFRlbXBsYXRlRnVuY3Rpb24ge1xuICAgICgkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJGF0dHJzPzogSUF0dHJpYnV0ZXMpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb21wb25lbnQob3B0aW9uczoge1xuICAgIGJpbmRpbmdzPzogYW55LFxuICAgIGJpbmRUb0NvbnRyb2xsZXI/OiBib29sZWFuLFxuICAgIGNvbnRyb2xsZXJBcz86IHN0cmluZyxcbiAgICByZXF1aXJlPzogYW55O1xuICAgIHRlbXBsYXRlPzogKHN0cmluZyB8IGFueVtdIHwgSUNvbnRlbnRUZW1wbGF0ZUZ1bmN0aW9uKSxcbiAgICB0ZW1wbGF0ZVVybD86IHN0cmluZyxcbiAgICB0cmFuc2NsdWRlPzogKGJvb2xlYW4gfCBzdHJpbmcpLFxuICAgIHN0eWxlc2hlZXRVcmw/OiBzdHJpbmdcbn0pIHtcbiAgICByZXR1cm4gKGNvbnRyb2xsZXI6IEZ1bmN0aW9uKSA9PiBleHRlbmQob3B0aW9ucywgeyBjb250cm9sbGVyOiBjb250cm9sbGVyIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50LmRlY29yYXRvci50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJpYXMtYXBwLWJhci1jb250ZW50XFxcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcblxuQENvbXBvbmVudCh7XG4gICAgYmluZGluZ3M6IHtcbiAgICAgICAgJ3NyYyc6ICc8J1xuICAgIH0sXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vYXZhdGFyLmNvbXBvbmVudC5odG1sJylcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdmF0YXJDb21wb25lbnQge1xuICAgIHNyYzogc3RyaW5nO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvYXZhdGFyL2F2YXRhci5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwiaWFzLWF2YXRhci1jb250ZW50XFxcIiBuZy1zdHlsZT1cXFwieyAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJyArICRjdHJsLnNyYyArICcpJyB9XFxcIj48L2Rpdj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSUNvbXBpbGVTZXJ2aWNlLCBJRGlyZWN0aXZlLCBJU2NvcGUsIElBdHRyaWJ1dGVzIH0gZnJvbSAnYW5ndWxhcic7XG5sZXQgdGVtcGxhdGVVcmwgPSByZXF1aXJlKCdjb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmh0bWwnKTtcblxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbnRyb2xsZXIge1xuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyckc2NvcGUnXTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRzY29wZTogSVNjb3BlKSB7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbkRpcmVjdGl2ZSgpOiBJRGlyZWN0aXZlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb250cm9sbGVyOiBCdXR0b25Db250cm9sbGVyLFxuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogdGVtcGxhdGVVcmwsXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIGxpbms6IChzY29wZTogSVNjb3BlLFxuICAgICAgICAgICAgICAgZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSxcbiAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IElBdHRyaWJ1dGVzLFxuICAgICAgICAgICAgICAgY29udHJvbGxlcjogQnV0dG9uQ29udHJvbGxlcikgPT4ge1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuQnV0dG9uRGlyZWN0aXZlLiRpbmplY3QgPSBbJyRjb21waWxlJ107XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8YnV0dG9uIGNsYXNzPVxcXCJpYXMtYnV0dG9uXFxcIiBuZy10cmFuc2NsdWRlPlxcbjwvYnV0dG9uPlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJVHJhbnNjbHVkZUZ1bmN0aW9uIH0gZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcbmltcG9ydCBEaWFsb2dTZXJ2aWNlIGZyb20gJy4vZGlhbG9nLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9kaWFsb2cuY29tcG9uZW50Lmh0bWwnKSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJ0lhc0RpYWxvZ1NlcnZpY2UnIF07XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlKSB7XG4gICAgICAgIC8vICRlbGVtZW50Lm9uKCdjbGljaycsIHRoaXMuY2FuY2VsLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgICRkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICAvLyB0aGlzLiRlbGVtZW50Lm9mZigpO1xuICAgIH1cblxuICAgIGNhbmNlbCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaWFsb2dTZXJ2aWNlLmNhbmNlbCgpO1xuICAgIH1cblxuICAgIGNsb3NlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRpYWxvZ1NlcnZpY2UuY2xvc2UoKTtcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8aWFzLWRpYWxvZy1jb250ZW50IG5nLWNsaWNrPVxcXCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcXFwiIG5nLXRyYW5zY2x1ZGU+XFxuPC9pYXMtZGlhbG9nLWNvbnRlbnQ+XFxuXCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQge1xuICAgIGVsZW1lbnQsXG4gICAgSUF1Z21lbnRlZEpRdWVyeSxcbiAgICBJQ29tcGlsZVNlcnZpY2UsXG4gICAgSUNvbnRyb2xsZXJTZXJ2aWNlLFxuICAgIElEZWZlcnJlZCxcbiAgICBJRG9jdW1lbnRTZXJ2aWNlLFxuICAgIElIdHRwU2VydmljZSxcbiAgICBJUHJvbWlzZSxcbiAgICBJUVNlcnZpY2UsXG4gICAgSVJvb3RTY29wZVNlcnZpY2UsXG4gICAgSVNjb3BlLFxuICAgIElUZW1wbGF0ZUNhY2hlU2VydmljZVxufSBmcm9tICdhbmd1bGFyJztcbmltcG9ydCBEaWFsb2dDb21wb25lbnQgZnJvbSAnLi9kaWFsb2cuY29tcG9uZW50JztcblxuaW50ZXJmYWNlIElEaWFsb2dTY29wZSBleHRlbmRzIElTY29wZSB7XG4gICAgJGN0cmw6IERpYWxvZ0NvbXBvbmVudDtcbiAgICBjYW5jZWw6ICgpID0+IHZvaWQ7XG4gICAgY2FuY2VsVGV4dDogc3RyaW5nO1xuICAgIGNsb3NlOiAoKSA9PiB2b2lkO1xuICAgIG9rVGV4dDogc3RyaW5nO1xuICAgIHByb21wdDogYm9vbGVhbjtcbiAgICBkYXRhOiBhbnk7XG4gICAgdGV4dENvbnRlbnQ6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSURpYWxvZ09wdGlvbnMge1xuICAgIGNhbmNlbDogc3RyaW5nO1xuICAgIGNvbnRyb2xsZXI6IGFueTtcbiAgICBvazogc3RyaW5nO1xuICAgIHByb21wdDogYm9vbGVhbjtcbiAgICByZXNwb25zZTogc3RyaW5nO1xuICAgIHNjb3BlOiBJU2NvcGU7XG4gICAgdGVtcGxhdGU6IHN0cmluZztcbiAgICB0ZW1wbGF0ZVVybDogc3RyaW5nO1xuICAgIHRleHRDb250ZW50OiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nU2VydmljZSB7XG4gICAgcHJpdmF0ZSBjb21waWxlZERpYWxvZ0VsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnk7XG4gICAgcHJpdmF0ZSBkaWFsb2dDb250cm9sbGVyOiBhbnk7XG4gICAgcHJpdmF0ZSBkaWFsb2dEZWZlcnJlZDogSURlZmVycmVkPGFueT47XG5cbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRjb21waWxlJywgJyRjb250cm9sbGVyJywgJyRkb2N1bWVudCcsICckaHR0cCcsICckcScsICckcm9vdFNjb3BlJywgJyR0ZW1wbGF0ZUNhY2hlJyBdO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJGNvbXBpbGU6IElDb21waWxlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlICRjb250cm9sbGVyOiBJQ29udHJvbGxlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSAkZG9jdW1lbnQ6IElEb2N1bWVudFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSAkaHR0cDogSUh0dHBTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgJHE6IElRU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlICRyb290U2NvcGU6IElSb290U2NvcGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgJHRlbXBsYXRlQ2FjaGU6IElUZW1wbGF0ZUNhY2hlU2VydmljZSkge1xuICAgIH1cblxuICAgIGFsZXJ0KG9wdGlvbnM6IElEaWFsb2dPcHRpb25zKTogSVByb21pc2U8YW55PiB7XG4gICAgICAgIG9wdGlvbnMuY2FuY2VsID0gbnVsbDtcbiAgICAgICAgb3B0aW9ucy5vayA9IG9wdGlvbnMub2sgfHwgJ09LJztcblxuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGNhbmNlbChyZXNwb25zZT86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmRpYWxvZ0RlZmVycmVkLnJlamVjdChyZXNwb25zZSk7XG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGNsb3NlKHJlc3BvbnNlPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlhbG9nRGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGNvbmZpcm0ob3B0aW9uczogSURpYWxvZ09wdGlvbnMpOiBJUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgb3B0aW9ucy5jYW5jZWwgPSBvcHRpb25zLmNhbmNlbCB8fCAnTm8nO1xuICAgICAgICBvcHRpb25zLm9rID0gb3B0aW9ucy5vayB8fCAnWWVzJztcblxuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5jb21waWxlZERpYWxvZ0VsZW1lbnQuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZGlhbG9nQ29udHJvbGxlciA9IG51bGw7XG4gICAgICAgIHRoaXMuZGlhbG9nRGVmZXJyZWQgPSBudWxsO1xuICAgIH1cblxuICAgIG9wZW4ob3B0aW9uczogSURpYWxvZ09wdGlvbnMpOiBJUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgc2NvcGVcbiAgICAgICAgbGV0IHNjb3BlID0gb3B0aW9ucy5zY29wZSA/IG9wdGlvbnMuc2NvcGUuJG5ldyhmYWxzZSkgOiA8SURpYWxvZ1Njb3BlPih0aGlzLiRyb290U2NvcGUuJG5ldyh0cnVlKSk7XG4gICAgICAgIHNjb3BlLmNhbmNlbCA9ICgpID0+IHsgc2VsZi5jYW5jZWwoKTsgfTtcbiAgICAgICAgc2NvcGUuY2FuY2VsVGV4dCA9IG9wdGlvbnMuY2FuY2VsO1xuICAgICAgICBzY29wZS5jbG9zZSA9ICgpID0+IHsgc2VsZi5jbG9zZShzY29wZS5kYXRhLnJlc3BvbnNlKTsgfTtcbiAgICAgICAgc2NvcGUub2tUZXh0ID0gb3B0aW9ucy5vaztcbiAgICAgICAgc2NvcGUucHJvbXB0ID0gb3B0aW9ucy5wcm9tcHQ7XG4gICAgICAgIHNjb3BlLmRhdGEgPSB7IHJlc3BvbnNlOiBvcHRpb25zLnJlc3BvbnNlIH07XG4gICAgICAgIHNjb3BlLnRleHRDb250ZW50ID0gb3B0aW9ucy50ZXh0Q29udGVudDtcbiAgICAgICAgc2NvcGUudGl0bGUgPSBvcHRpb25zLnRpdGxlO1xuXG4gICAgICAgIC8vIEluc3RhbnRpYXRlIGNvbnRyb2xsZXIgaWYgcHJvdmlkZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuY29udHJvbGxlcikge1xuICAgICAgICAgICAgdGhpcy5kaWFsb2dDb250cm9sbGVyID0gdGhpcy4kY29udHJvbGxlcihvcHRpb25zLmNvbnRyb2xsZXIsIHsgJHNjb3BlOiBzY29wZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvbXBpbGUgdGVtcGxhdGVcbiAgICAgICAgdGhpcy5sb2FkVGVtcGxhdGUob3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKCh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuY29tcGlsZWREaWFsb2dFbGVtZW50ID0gc2VsZi4kY29tcGlsZSh0ZW1wbGF0ZSkoc2NvcGUpO1xuXG4gICAgICAgICAgICAgICAgLy8gSW5zZXJ0IGVsZW1lbnQgaW50byBET01cbiAgICAgICAgICAgICAgICBlbGVtZW50KHNlbGYuJGRvY3VtZW50LmZpbmQoJ2JvZHknKSkuYXBwZW5kKHNlbGYuY29tcGlsZWREaWFsb2dFbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZGlhbG9nRGVmZXJyZWQgPSB0aGlzLiRxLmRlZmVyKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmRpYWxvZ0RlZmVycmVkLnByb21pc2U7XG4gICAgfVxuXG4gICAgcHJvbXB0KG9wdGlvbnM6IElEaWFsb2dPcHRpb25zKTogSVByb21pc2U8YW55PiB7XG4gICAgICAgIG9wdGlvbnMuY2FuY2VsID0gb3B0aW9ucy5jYW5jZWwgfHwgJ0NhbmNlbCc7XG4gICAgICAgIG9wdGlvbnMub2sgPSBvcHRpb25zLm9rIHx8ICdPSyc7XG4gICAgICAgIG9wdGlvbnMucHJvbXB0ID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZFRlbXBsYXRlKG9wdGlvbnM6IElEaWFsb2dPcHRpb25zKTogSVByb21pc2U8c3RyaW5nPiB7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRxLnJlc29sdmUob3B0aW9ucy50ZW1wbGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChvcHRpb25zLnRlbXBsYXRlVXJsKSB7XG4gICAgICAgICAgICBsZXQgdGVtcGxhdGU6IHN0cmluZyA9IHRoaXMuJHRlbXBsYXRlQ2FjaGUuZ2V0PHN0cmluZz4ob3B0aW9ucy50ZW1wbGF0ZVVybCk7XG5cbiAgICAgICAgICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRxLnJlc29sdmUodGVtcGxhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kaHR0cFxuICAgICAgICAgICAgICAgIC5nZXQob3B0aW9ucy50ZW1wbGF0ZVVybCwgeyBjYWNoZTogdGhpcy4kdGVtcGxhdGVDYWNoZSB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHEucmVzb2x2ZShcbiAgICAgICAgICAgICAgICAnPGlhcy1kaWFsb2c+JyArXG4gICAgICAgICAgICAgICAgJyAgIDxkaXYgY2xhc3M9XCJpYXMtZGlhbG9nLWhlYWRlclwiPicgK1xuICAgICAgICAgICAgICAgICcgICAgICAgPGRpdiBuZy1pZj1cIiEhdGl0bGVcIiBjbGFzcz1cImlhcy10aXRsZVwiPnt7dGl0bGV9fTwvZGl2PicgK1xuICAgICAgICAgICAgICAgICcgICA8L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAnICAgPGRpdiBjbGFzcz1cImlhcy1kaWFsb2ctYm9keVwiPicgK1xuICAgICAgICAgICAgICAgICcgICAgICAgPGRpdiBuZy1pZj1cIiFwcm9tcHRcIj57e3RleHRDb250ZW50fX08L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAnICAgICAgIDxkaXYgbmctaWY9XCJwcm9tcHRcIj4nICtcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICA8aWFzLWlucHV0LWNvbnRhaW5lcj4nICtcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlc3BvbnNlXCI+e3t0ZXh0Q29udGVudH19PC9sYWJlbD4nICtcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicmVzcG9uc2VcIiBuYW1lPVwicmVzcG9uc2VcIiB0eXBlPVwidGV4dFwiIG5nLW1vZGVsPVwiZGF0YS5yZXNwb25zZVwiPicgK1xuICAgICAgICAgICAgICAgICcgICAgICAgICAgIDwvaWFzLWlucHV0LWNvbnRhaW5lcj4nICtcbiAgICAgICAgICAgICAgICAnICAgICAgIDwvZGl2PicgK1xuICAgICAgICAgICAgICAgICcgICA8L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAnICAgPGRpdiBjbGFzcz1cImlhcy1hY3Rpb25zXCI+JyArXG4gICAgICAgICAgICAgICAgJyAgICAgIDxpYXMtYnV0dG9uIG5nLWlmPVwiISFva1RleHRcIiBuZy1jbGljaz1cImNsb3NlKClcIj57e29rVGV4dH19PC9pYXMtYnV0dG9uPicgK1xuICAgICAgICAgICAgICAgICcgICAgICA8aWFzLWJ1dHRvbiBuZy1pZj1cIiEhY2FuY2VsVGV4dFwiIG5nLWNsaWNrPVwiY2FuY2VsKClcIj57e2NhbmNlbFRleHR9fTwvaWFzLWJ1dHRvbj4nICtcbiAgICAgICAgICAgICAgICAnICAgPC9kaXY+JyArXG4gICAgICAgICAgICAgICAgJyAgIDxpYXMtYnV0dG9uIGNsYXNzPVwiaWFzLWljb24tYnV0dG9uIGlhcy1kaWFsb2ctY2xvc2UtYnV0dG9uXCIgbmctY2xpY2s9XCJjYW5jZWwoKVwiPicgK1xuICAgICAgICAgICAgICAgICcgICAgICAgPGlhcy1pY29uIGljb249XCJjbG9zZV90aGlja1wiPjwvaWFzLWljb24+JyArXG4gICAgICAgICAgICAgICAgJyAgIDwvaWFzLWJ1dHRvbj4nICtcbiAgICAgICAgICAgICAgICAnPC9pYXMtZGlhbG9nPidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuc2VydmljZS50c1xuICoqLyIsImltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnksIElUcmFuc2NsdWRlRnVuY3Rpb24gfSBmcm9tICdhbmd1bGFyJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0cmFuc2NsdWRlOiB0cnVlXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyR0cmFuc2NsdWRlJyBdO1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcbiAgICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHNcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcblxuQENvbXBvbmVudCh7XG4gICAgYmluZGluZ3M6IHtcbiAgICAgICAgaWNvbjogJ0AnLFxuICAgICAgICBzdmdJY29uOiAnQCdcbiAgICB9LFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2ljb24uY29tcG9uZW50Lmh0bWwnKVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb25Db21wb25lbnQge1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxpIG5nLWlmPVxcXCIkY3RybC5pY29uXFxcIiBuZy1jbGFzcz1cXFwiWydpYXMtaWNvbicsICdpYXMtaWNvbi0nICsgJGN0cmwuaWNvbl1cXFwiPjwvaT5cXG48aW1nIG5nLWlmPVxcXCIhJGN0cmwuaWNvblxcXCIgY2xhc3M9XFxcInN2Zy1pY29uXFxcIiBuZy1zcmM9XFxcInt7JGN0cmwuc3ZnSWNvbn19XFxcIiBuZy1hdHRyLWFsdD1cXFwie3skY3RybC5zdmdJY29ufX1cXFwiLz5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSUNvbXBpbGVTZXJ2aWNlLCBJRGlyZWN0aXZlLCBJU2NvcGUsIElBdHRyaWJ1dGVzIH0gZnJvbSAnYW5ndWxhcic7XG5sZXQgdGVtcGxhdGVVcmwgPSByZXF1aXJlKCdjb21wb25lbnRzL2lucHV0L2ljb24uaW5wdXQuY29tcG9uZW50Lmh0bWwnKTtcblxuZXhwb3J0IGNsYXNzIEljb25JbnB1dENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyckc2NvcGUnXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJHNjb3BlOiBJU2NvcGUpIHtcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBUaGlzIGRpcmVjdGl2ZSBzdXBwb3J0cyBzaG93aW5nIGEgdGV4dCBpbnB1dCBmaWVsZCB3aXRoIGFuIGljb24uICBUaGVzZSBmaWVsZHNcbiAqIGFyZSBwb3B1bGFyIGZvciBzZWFyY2ggYm94ZXMuICBUaGUgZGlyZWN0aXZlIHN0eWxlcyB0aGUgaWNvbiBzbyBpdCB3b24ndCBpbnRlcmZlcmVcbiAqIHdpdGggdGhlIHRleHQgZmllbGQgYW5kIG1ha2VzIHRoZSBzcGFjaW5nIGxvb2sgY29ycmVjdCBmb3IgdGhlIGNvbnRyb2wuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEljb25JbnB1dERpcmVjdGl2ZSgpOiBJRGlyZWN0aXZlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb250cm9sbGVyOiBJY29uSW5wdXRDb250cm9sbGVyLFxuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogdGVtcGxhdGVVcmwsXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICBtb2RlbDogJz1uZ01vZGVsJyxcbiAgICAgICAgICAgIG1pbjogJz0nLFxuICAgICAgICAgICAgbWF4OiAnPSdcbiAgICAgICAgfSxcbiAgICAgICAgbGluazogKHNjb3BlOiBJU2NvcGUsXG4gICAgICAgICAgICAgICBlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LFxuICAgICAgICAgICAgICAgYXR0cmlidXRlczogSUF0dHJpYnV0ZXMsXG4gICAgICAgICAgICAgICBjb250cm9sbGVyOiBJY29uSW5wdXRDb250cm9sbGVyKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICBzY29wZS5pY29uID0gZWxlbWVudC5hdHRyKCdpY29uJyk7XG4gICAgICAgICAgICAgICAgICAgc2NvcGUucGxhY2Vob2xkZXIgPSBlbGVtZW50LmF0dHIoJ3BsYWNlaG9sZGVyJyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5JY29uSW5wdXRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRjb21waWxlJ107XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2lucHV0L2ljb24uaW5wdXQuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9pbnB1dC9pY29uLmlucHV0LmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8c3BhbiBjbGFzcz1cXFwiaWFzLWljb24taW5wdXQtY29udGFpbmVyXFxcIj5cXG4gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7e3BsYWNlaG9sZGVyfX1cXFwiPlxcbiAgICA8aWFzLWljb24gaWNvbj1cXFwie3tpY29ufX1cXFwiPjwvaWFzLWljb24+XFxuPC9zcGFuPlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2lucHV0L2ljb24uaW5wdXQuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XG5pbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJVHJhbnNjbHVkZUZ1bmN0aW9uIH0gZnJvbSAnYW5ndWxhcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2lucHV0LmNvbXBvbmVudC5odG1sJyksXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0Q29udGFpbmVyQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyR0cmFuc2NsdWRlJyBdO1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcbiAgICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiXCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSUNvbXBpbGVTZXJ2aWNlLCBJRGlyZWN0aXZlLCBJU2NvcGUsIElBdHRyaWJ1dGVzIH0gZnJvbSAnYW5ndWxhcic7XG5sZXQgdGVtcGxhdGVVcmwgPSByZXF1aXJlKCdjb21wb25lbnRzL2lucHV0L2ludC5pbnB1dC5jb21wb25lbnQuaHRtbCcpO1xuXG5leHBvcnQgY2xhc3MgSW50SW5wdXRDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgJGluamVjdCA9IFsnJHNjb3BlJ107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRzY29wZTogSVNjb3BlKSB7XG4gICAgfVxuXG59XG5cbi8qKlxuICogVGhpcyBkaXJlY3RpdmUgc3VwcG9ydHMgYW4gaW5wdXQgZmllbGQgd2hpY2ggYWRkcyB0aGUgY2xhc3MgaW5wdXRFcnJvclxuICogd2hlbiB0aGUgdmFsdWUgaXMgbm90IGEgbnVtYmVyLiAgSXQgd2F0Y2hlcyBjaGFuZ2VzIGZyb20gdXNlciBpbnB1dHMsIFxuICogdGhlIERPTSwgYW5kIHRoZSBtb2RlbC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50SW5wdXREaXJlY3RpdmUoKTogSURpcmVjdGl2ZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29udHJvbGxlcjogSW50SW5wdXRDb250cm9sbGVyLFxuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogdGVtcGxhdGVVcmwsXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICBtb2RlbDogJz1uZ01vZGVsJyxcbiAgICAgICAgICAgIG1pbjogJz0nLFxuICAgICAgICAgICAgbWF4OiAnPSdcbiAgICAgICAgfSxcbiAgICAgICAgbGluazogKHNjb3BlOiBJU2NvcGUsXG4gICAgICAgICAgICAgICBlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LFxuICAgICAgICAgICAgICAgYXR0cmlidXRlczogSUF0dHJpYnV0ZXMsXG4gICAgICAgICAgICAgICBjb250cm9sbGVyOiBJbnRJbnB1dENvbnRyb2xsZXIpID0+IHtcblxuICAgICAgICAgICAgICAgICAgIGlmICghY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgbGV0IGlzVmFsaWQgPSBmdW5jdGlvbih2YWw6IHN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiB2YWwgfHwgdmFsID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcygnaW5wdXRFcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKE51bWJlcih2YWwpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcygnaW5wdXRFcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3BlLm1heCAmJiB2YWwgPiBzY29wZS5tYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKCdpbnB1dEVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY29wZS5taW4gJiYgdmFsIDwgc2NvcGUubWluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcygnaW5wdXRFcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2lucHV0RXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICBzY29wZS4kd2F0Y2goJ21vZGVsJywgZnVuY3Rpb24obmV3VmFsdWU6IHN0cmluZywgb2xkVmFsdWU6IHN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYmluZCgnaW5wdXQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkKGVsZW1lbnQudmFsKCkpO1xuICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuSW50SW5wdXRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRjb21waWxlJ107XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2lucHV0L2ludC5pbnB1dC5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL2lucHV0L2ludC5pbnB1dC5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJpYXNJbnRJbnB1dFxcXCIgbmctdHJhbnNjbHVkZT5cXG48L2lucHV0PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2lucHV0L2ludC5pbnB1dC5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcbmltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnksIElUcmFuc2NsdWRlRnVuY3Rpb24gfSBmcm9tICdhbmd1bGFyJztcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vbGlzdC5jb21wb25lbnQuaHRtbCcpLFxuICAgIHRyYW5zY2x1ZGU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCB7XG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcbiAgICAgICAgJHRyYW5zY2x1ZGUoKGNsb25lOiBJQXVnbWVudGVkSlF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHRyYW5zY2x1ZGU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgTGlzdEhlYWRlckNvbXBvbmVudCB7XG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcbiAgICAgICAgJHRyYW5zY2x1ZGUoKGNsb25lOiBJQXVnbWVudGVkSlF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHRyYW5zY2x1ZGU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgTGlzdEl0ZW1Db21wb25lbnQge1xuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnJHRyYW5zY2x1ZGUnIF07XG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksICR0cmFuc2NsdWRlOiBJVHJhbnNjbHVkZUZ1bmN0aW9uKSB7XG4gICAgICAgICR0cmFuc2NsdWRlKChjbG9uZTogSUF1Z21lbnRlZEpRdWVyeSkgPT4ge1xuICAgICAgICAgICAgJGVsZW1lbnQuYXBwZW5kKGNsb25lKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcbmltcG9ydCBUb2dnbGVTZXJ2aWNlIGZyb20gJy4uL3RvZ2dsZS90b2dnbGUuc2VydmljZSc7XG5pbXBvcnQgeyBlbGVtZW50LCBJQXVnbWVudGVkSlF1ZXJ5LCBJRG9jdW1lbnRTZXJ2aWNlLCBJVHJhbnNjbHVkZUZ1bmN0aW9uLCBJV2luZG93U2VydmljZSB9IGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHsgSVRvZ2dsZWFibGUgfSBmcm9tICcuLi90b2dnbGUvdG9nZ2xlLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBlbnVtIEhvcml6b250YWxBbGlnbm1lbnQge1xuICAgIHN0YXJ0LFxuICAgIGNlbnRlcixcbiAgICBlbmRcbn1cbmV4cG9ydCBlbnVtIFZlcnRpY2FsQWxpZ25tZW50IHtcbiAgICB0b3AsXG4gICAgY2VudGVyLFxuICAgIGJvdHRvbVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBiaW5kaW5nczoge1xuICAgICAgICBhbGlnbjogJ0BpYXNBbGlnbicsXG4gICAgICAgIG5hbWU6ICdAJ1xuICAgIH0sXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vbWVudS5jb21wb25lbnQuaHRtbCcpLFxuICAgIHRyYW5zY2x1ZGU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIElUb2dnbGVhYmxlIHtcbiAgICBhbGlnbjogc3RyaW5nO1xuICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IEhvcml6b250YWxBbGlnbm1lbnQ7XG4gICAgdmVydGljYWxBbGlnbm1lbnQ6IFZlcnRpY2FsQWxpZ25tZW50O1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBvcGVuOiBib29sZWFuO1xuXG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZG9jdW1lbnQnLCAnJGVsZW1lbnQnLCAnJHdpbmRvdycsICdJYXNUb2dnbGVTZXJ2aWNlJywgJ01FTlVfTUFSR0lOJyBdO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJGRvY3VtZW50OiBJRG9jdW1lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSAkd2luZG93OiBJV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHRvZ2dsZVNlcnZpY2U6IFRvZ2dsZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBNRU5VX01BUkdJTjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgICAkZWxlbWVudC5kZXRhY2goKTtcbiAgICAgICAgZWxlbWVudCgkZG9jdW1lbnQuZmluZCgnYm9keScpKS5hcHBlbmQoJGVsZW1lbnQpO1xuXG4gICAgICAgICRlbGVtZW50Lm9uKCdjbGljaycsIHRoaXMuaGlkZS5iaW5kKHRoaXMpKTtcblxuICAgICAgICB0aGlzLmhvcml6b250YWxBbGlnbm1lbnQgPSBIb3Jpem9udGFsQWxpZ25tZW50LnN0YXJ0O1xuICAgICAgICB0aGlzLnZlcnRpY2FsQWxpZ25tZW50ID0gVmVydGljYWxBbGlnbm1lbnQudG9wO1xuICAgIH1cblxuICAgICRvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQub2ZmKCdjbGljaycpO1xuICAgIH1cblxuICAgICRvbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmFsaWduKSB7XG4gICAgICAgICAgICBsZXQgdG9rZW5zID0gdGhpcy5hbGlnbi5zcGxpdCgnICcpO1xuXG4gICAgICAgICAgICBsZXQgaG9yaXpvbnRhbEFsaWdubWVudCA9IEhvcml6b250YWxBbGlnbm1lbnRbdG9rZW5zWzBdXTtcbiAgICAgICAgICAgIGxldCB2ZXJ0aWNhbEFsaWdubWVudCA9IFZlcnRpY2FsQWxpZ25tZW50W3Rva2Vuc1sxXV07XG5cbiAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbEFsaWdubWVudCA9IGhvcml6b250YWxBbGlnbm1lbnQgfHwgSG9yaXpvbnRhbEFsaWdubWVudC5zdGFydDtcbiAgICAgICAgICAgIHRoaXMudmVydGljYWxBbGlnbm1lbnQgPSB2ZXJ0aWNhbEFsaWdubWVudCB8fCBWZXJ0aWNhbEFsaWdubWVudC50b3A7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRvZ2dsZVNlcnZpY2UucmVnaXN0ZXIodGhpcyk7XG4gICAgfVxuXG4gICAgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcygnaWFzLW9wZW4nKTtcbiAgICB9XG5cbiAgICBzaG93KHRhcmdldEVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnkpOiB2b2lkIHtcbiAgICAgICAgLy8gU2V0IG9wZW4gc3RhdGUgb24gY29tcG9uZW50IGFuZCBtZW51IGVsZW1lbnRcbiAgICAgICAgdGhpcy5vcGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5hZGRDbGFzcygnaWFzLW9wZW4nKTtcblxuICAgICAgICB0aGlzLnNob3dNZW51Q29udGVudCh0YXJnZXRFbGVtZW50WzBdKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldExheW91dERpcmVjdGlvbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy4kZWxlbWVudFswXSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBudW1iZXJUb1BpeGVscyhudW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAobnVtID09PSBudWxsKSA/IG51bGwgOiBudW0gKyAncHgnO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvd01lbnVDb250ZW50KHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGxldCBtZW51Q29udGVudEVsZW1lbnQgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ2lhcy1tZW51LWNvbnRlbnQnKVswXTtcblxuICAgICAgICBsZXQgaXNMdHJMYXlvdXQ6IGJvb2xlYW4gPSB0aGlzLmdldExheW91dERpcmVjdGlvbigpICE9PSAncnRsJztcblxuICAgICAgICAvLyBSZXNldCB0aGUgYm91bmRhcmllcyBvZiB0aGUgbWVudSBjb250ZW50IGVsZW1lbnRcbiAgICAgICAgbWVudUNvbnRlbnRFbGVtZW50LnN0eWxlLmJvdHRvbSA9XG4gICAgICAgICAgICBtZW51Q29udGVudEVsZW1lbnQuc3R5bGUubGVmdCA9XG4gICAgICAgICAgICBtZW51Q29udGVudEVsZW1lbnQuc3R5bGUucmlnaHQgPVxuICAgICAgICAgICAgbWVudUNvbnRlbnRFbGVtZW50LnN0eWxlLnRvcCA9IG51bGw7XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRvcCBhbmQgbGVmdCBvZmZzZXQgYmFzZWQgb24gdGhlIHBvc2l0aW9uIG9mIHRoZSB0YXJnZXQgZWxlbWVudFxuICAgICAgICBsZXQgbWVudUJvdW5kaW5nQm94ID0gdGhpcy4kZWxlbWVudFswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbGV0IG1lbnVDb250ZW50Qm91bmRpbmdCb3ggPSBtZW51Q29udGVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGxldCB0YXJnZXRFbGVtZW50Qm91bmRpbmdCb3ggPSB0YXJnZXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGxldCBib3R0b206IG51bWJlciA9IG51bGwsXG4gICAgICAgICAgICBsZWZ0OiBudW1iZXIgPSBudWxsLFxuICAgICAgICAgICAgcmlnaHQ6IG51bWJlciA9IG51bGwsXG4gICAgICAgICAgICB0b3A6IG51bWJlciA9IG51bGw7XG5cbiAgICAgICAgLy8gSWYgbWVudSBjb250ZW50IGlzIHdpZGVyIHRoYW4gbWVudSBjb250YWluZXIsIGNvbnN0cmFpbiB3aWR0aCB0byBtZW51IGNvbnRhaW5lclxuICAgICAgICBpZiAobWVudUNvbnRlbnRCb3VuZGluZ0JveC53aWR0aCArICgyICogdGhpcy5NRU5VX01BUkdJTikgPiBtZW51Qm91bmRpbmdCb3gud2lkdGgpIHtcbiAgICAgICAgICAgIGxlZnQgPSB0aGlzLk1FTlVfTUFSR0lOO1xuICAgICAgICAgICAgcmlnaHQgPSB0aGlzLk1FTlVfTUFSR0lOO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmhvcml6b250YWxBbGlnbm1lbnQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIEhvcml6b250YWxBbGlnbm1lbnQuc3RhcnQ6XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0x0ckxheW91dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC5yaWdodCAtIG1lbnVDb250ZW50Qm91bmRpbmdCb3gud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBIb3Jpem9udGFsQWxpZ25tZW50LmNlbnRlcjpcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC5sZWZ0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICgodGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LndpZHRoIC0gbWVudUNvbnRlbnRCb3VuZGluZ0JveC53aWR0aCkgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBIb3Jpem9udGFsQWxpZ25tZW50LmVuZDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTHRyTGF5b3V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gdGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LmxlZnQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0YXJnZXRFbGVtZW50Qm91bmRpbmdCb3gud2lkdGggLSBtZW51Q29udGVudEJvdW5kaW5nQm94LndpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSB0YXJnZXRFbGVtZW50Qm91bmRpbmdCb3gubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ29udmVydCB0byBjb29yZGluYXRlcyByZWxhdGl2ZSB0byBtZW51IGNvbnRhaW5lclxuICAgICAgICAgICAgbGVmdCAtPSBtZW51Qm91bmRpbmdCb3gubGVmdDtcblxuICAgICAgICAgICAgLy8gQ29uc3RyYWluIHRvIG1lbnUgY29udGFpbmVyIGJvdW5kYXJpZXNcbiAgICAgICAgICAgIGxlZnQgPSBNYXRoLm1heChsZWZ0LCB0aGlzLk1FTlVfTUFSR0lOKTtcbiAgICAgICAgICAgIGlmIChsZWZ0ICsgbWVudUNvbnRlbnRCb3VuZGluZ0JveC53aWR0aCA+IG1lbnVCb3VuZGluZ0JveC53aWR0aCkge1xuICAgICAgICAgICAgICAgIGxlZnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHJpZ2h0ID0gdGhpcy5NRU5VX01BUkdJTjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lbnVDb250ZW50RWxlbWVudC5zdHlsZS5sZWZ0ID0gdGhpcy5udW1iZXJUb1BpeGVscyhsZWZ0KTtcbiAgICAgICAgbWVudUNvbnRlbnRFbGVtZW50LnN0eWxlLnJpZ2h0ID0gdGhpcy5udW1iZXJUb1BpeGVscyhyaWdodCk7XG5cbiAgICAgICAgLy8gUmVjYWxjdWxhdGUgYm91bmRpbmcgYm94IHRvIGFjY291bnQgZm9yIGFueSBzaHJpbmtpbmcgY2F1c2VkIGJ5IGNvbnN0cmFpbmluZyB0aGUgbGVmdCBhbmQgcmlnaHQgb2Zmc2V0c1xuICAgICAgICBtZW51Q29udGVudEJvdW5kaW5nQm94ID0gbWVudUNvbnRlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIC8vIElmIG1lbnUgY29udGVudCBpcyB0YWxsZXIgdGhhbiBtZW51IGNvbnRhaW5lciwgY29uc3RyYWluIGhlaWdodCB0byBtZW51IGNvbnRhaW5lclxuICAgICAgICBpZiAobWVudUNvbnRlbnRCb3VuZGluZ0JveC5oZWlnaHQgKyAoMiAqIHRoaXMuTUVOVV9NQVJHSU4pID4gbWVudUJvdW5kaW5nQm94LmhlaWdodCkge1xuICAgICAgICAgICAgdG9wID0gdGhpcy5NRU5VX01BUkdJTjtcbiAgICAgICAgICAgIGJvdHRvbSA9IHRoaXMuTUVOVV9NQVJHSU47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMudmVydGljYWxBbGlnbm1lbnQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFZlcnRpY2FsQWxpZ25tZW50LnRvcDpcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gdGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LmJvdHRvbTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBWZXJ0aWNhbEFsaWdubWVudC5jZW50ZXI6XG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC50b3AgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKCh0YXJnZXRFbGVtZW50Qm91bmRpbmdCb3guaGVpZ2h0IC0gbWVudUNvbnRlbnRCb3VuZGluZ0JveC5oZWlnaHQpIC8gMik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgVmVydGljYWxBbGlnbm1lbnQuYm90dG9tOlxuICAgICAgICAgICAgICAgICAgICB0b3AgPSAodGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LnRvcCAtIG1lbnVDb250ZW50Qm91bmRpbmdCb3guaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENvbnZlcnQgdG8gY29vcmRpbmF0ZXMgcmVsYXRpdmUgdG8gbWVudSBjb250YWluZXJcbiAgICAgICAgICAgIHRvcCAtPSBtZW51Qm91bmRpbmdCb3gudG9wO1xuXG4gICAgICAgICAgICAvLyBDb25zdHJhaW4gdG8gbWVudSBjb250YWluZXIgYm91bmRhcmllc1xuICAgICAgICAgICAgdG9wID0gTWF0aC5tYXgodG9wLCB0aGlzLk1FTlVfTUFSR0lOKTtcbiAgICAgICAgICAgIGlmICh0b3AgKyBtZW51Q29udGVudEJvdW5kaW5nQm94LmhlaWdodCA+IG1lbnVCb3VuZGluZ0JveC5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB0b3AgPSBudWxsO1xuICAgICAgICAgICAgICAgIGJvdHRvbSA9IHRoaXMuTUVOVV9NQVJHSU47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZW51Q29udGVudEVsZW1lbnQuc3R5bGUudG9wID0gdGhpcy5udW1iZXJUb1BpeGVscyh0b3ApO1xuICAgICAgICBtZW51Q29udGVudEVsZW1lbnQuc3R5bGUuYm90dG9tID0gdGhpcy5udW1iZXJUb1BpeGVscyhib3R0b20pO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBNZW51Rm9vdGVyQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyR0cmFuc2NsdWRlJyBdO1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcbiAgICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBNZW51SGVhZGVyQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyR0cmFuc2NsdWRlJyBdO1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcbiAgICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8aWFzLW1lbnUtY29udGVudCBuZy10cmFuc2NsdWRlIG5nLWNsaWNrPVxcXCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcXFwiPjwvaWFzLW1lbnUtY29udGVudD5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL25hdi5jb21wb25lbnQuaHRtbCcpLFxuICAgIHRyYW5zY2x1ZGU6IHRydWVcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZDb21wb25lbnQge31cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxkaXYgY2xhc3M9XFxcImlhcy1uYXYtY29udGVudFxcXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnksIElDb21waWxlU2VydmljZSwgSURpcmVjdGl2ZSwgSVNjb3BlLCBJQXR0cmlidXRlcyB9IGZyb20gJ2FuZ3VsYXInO1xubGV0IHRlbXBsYXRlVXJsID0gcmVxdWlyZSgnY29tcG9uZW50cy9pbnB1dC9yZXNpemluZy50ZXh0YXJlYS5jb21wb25lbnQuaHRtbCcpO1xuXG5leHBvcnQgY2xhc3MgUmVzaXppbmdUZXh0YXJlYUNvbnRyb2xsZXIge1xuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyckc2NvcGUnXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJHNjb3BlOiBJU2NvcGUpIHtcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBUaGlzIGRpcmVjdGl2ZSBzdXBwb3J0cyBhIHRleHQgYXJlYSB0aGF0IHdpbGwgZ3JvdyBhbmQgc2hyaW5rIGJhc2VkIG9uIHRoZSBzaXplIG9mIHRoZSBcbiAqIGNvbnRlbnQgaW4gdGhlIHRleHQgYXJlYS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzaXppbmdUZXh0YXJlYURpcmVjdGl2ZSgpOiBJRGlyZWN0aXZlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb250cm9sbGVyOiBSZXNpemluZ1RleHRhcmVhQ29udHJvbGxlcixcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6IHRlbXBsYXRlVXJsLFxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgbW9kZWw6ICc9bmdNb2RlbCdcbiAgICAgICAgfSxcbiAgICAgICAgbGluazogKHNjb3BlOiBJU2NvcGUsXG4gICAgICAgICAgICAgICBlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LFxuICAgICAgICAgICAgICAgYXR0cmlidXRlczogSUF0dHJpYnV0ZXMsXG4gICAgICAgICAgICAgICBjb250cm9sbGVyOiBSZXNpemluZ1RleHRhcmVhQ29udHJvbGxlcikgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgaWYgKCFjb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5hdHRyKCdtaW4tcm93cycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIGxldCBtaW5Sb3dzID0gZWxlbWVudC5hdHRyKCdtaW4tcm93cycpO1xuICAgICAgICAgICAgICAgICAgICAgICBpZiAobWluUm93cy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFRoaXMgbWVhbnMgdGhhdCB0aGV5IHRyaWVkIHRvIG92ZXJyaWRlIHRoZSBtaW5pbXVtIG51bWJlciBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcm93cyBhbmQgdGhlIEFuZ3VsYXIgdHJhbnNjbHVkZSBjb21iaW5lZCB0aGUgYXR0cmlidXRlcyBpbnN0ZWFkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBvZiByZXBsYWNpbmcgdGhlbS4gIFdlIG5lZWQgdG8gZml4IHRoYXQgdXAuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmF0dHIoJ21pbi1yb3dzJywgbWluUm93cy5zbGljZSgwLCBtaW5Sb3dzLmluZGV4T2YoJyAnKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgKiBXZSBuZWVkIHRvIHN0YXJ0IGJ5IGdldHRpbmcgc29tZSBiYXNpYyBtZWFzdXJlbWVudHMuICBXZVxuICAgICAgICAgICAgICAgICAgICAqIHNldCB0aGUgZm9udCBzaXplIGJlY2F1c2Ugd2UgbmVlZCB0byBrbm93IHRoZSBjb3JyZWN0IGxpbmVcbiAgICAgICAgICAgICAgICAgICAgKiBoZWlnaHQgb3Igd2UgY2FuJ3QgcmVzaXplIHRoZSBib3ggcHJvcGVybHkuXG4gICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgbGV0IHRtcFZhbCA9IGVsZW1lbnQudmFsKCk7XG4gICAgICAgICAgICAgICAgICAgZWxlbWVudC52YWwoJycpO1xuICAgICAgICAgICAgICAgICAgIGxldCBiYXNlU2Nyb2xsSGVpZ2h0ID0gZWxlbWVudFswXS5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgZWxlbWVudC52YWwodG1wVmFsKTtcblxuICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY3NzKCdvdmVyZmxvdy15JywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY3NzKCdmb250LXNpemUnLCAnMTVweCcpO1xuXG4gICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICogVGhlIHJlc2l6ZSBmdW5jdGlvbiBoYW5kbGVzIGRldGVybWluaW5nIHRoZSBhY3R1YWxcbiAgICAgICAgICAgICAgICAgICAgKiBzaXplIG9mIHRoZSBib3guIFxuICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgIGxldCByZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1pblJvd3MgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5hdHRyKCdtaW4tcm93cycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5Sb3dzID0gTnVtYmVyKGVsZW1lbnQuYXR0cignbWluLXJvd3MnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmF0dHIoJ3Jvd3MnLCBtaW5Sb3dzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvd3MgPSBNYXRoLmNlaWwoKGVsZW1lbnRbMF0uc2Nyb2xsSGVpZ2h0IC0gYmFzZVNjcm9sbEhlaWdodCkgLyAxOCkgKyBtaW5Sb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmF0dHIoJ3Jvd3MnLCByb3dzKTtcbiAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKCdtb2RlbCcsIGZ1bmN0aW9uKG5ld1ZhbHVlOiBzdHJpbmcsIG9sZFZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplKCk7XG4gICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICBlbGVtZW50LmJpbmQoJ2lucHV0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplKCk7XG4gICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5SZXNpemluZ1RleHRhcmVhQ29udHJvbGxlci4kaW5qZWN0ID0gWyckY29tcGlsZSddO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9pbnB1dC9yZXNpemluZy50ZXh0YXJlYS5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL2lucHV0L3Jlc2l6aW5nLnRleHRhcmVhLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8dGV4dGFyZWEgbmctdHJhbnNjbHVkZSBjbGFzcz1cXFwiaWFzUmVzaXppbmdUZXh0QXJlYVxcXCIgcm93cz1cXFwiM1xcXCIgbWluLXJvd3M9XFxcIjNcXFwiPjwvdGV4dGFyZWE+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvaW5wdXQvcmVzaXppbmcudGV4dGFyZWEuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSU5nTW9kZWxDb250cm9sbGVyLCBJU2NvcGUgfSBmcm9tICdhbmd1bGFyJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgICBiaW5kaW5nczoge1xuICAgICAgICBwbGFjZWhvbGRlcjogJ0AnXG4gICAgfSxcbiAgICByZXF1aXJlOiB7XG4gICAgICAgIG5nTW9kZWw6ICdebmdNb2RlbCdcbiAgICB9LFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWwnKVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEJveENvbXBvbmVudCB7XG4gICAgbmdNb2RlbDogSU5nTW9kZWxDb250cm9sbGVyO1xuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgdmFsdWU6IHN0cmluZztcblxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnJHNjb3BlJyBdO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksIHByaXZhdGUgJHNjb3BlOiBJU2NvcGUpIHtcbiAgICB9XG5cbiAgICAkb25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBTZXQgZGVmYXVsdHNcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXIgfHwgJ1NlYXJjaCc7XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBuZ01vZGVsXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5uZ01vZGVsLiRyZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLnZhbHVlID0gc2VsZi5uZ01vZGVsLiR2aWV3VmFsdWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy4kc2NvcGUuJHdhdGNoKFxuICAgICAgICAgICAgKCk6IHN0cmluZyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKG5ld1ZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLm5nTW9kZWwuJHNldFZpZXdWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGVhcklucHV0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgb25JbnB1dEtleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgc3dpdGNoIChldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDI3OiAvLyBFU0NBUEVcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJpYXMtc2VhcmNoLWJveC1jb250ZW50XFxcIj5cXG4gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICBhdXRvY29tcGxldGU9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgICAgbmctbW9kZWw9XFxcIiRjdHJsLnZhbHVlXFxcIlxcbiAgICAgICAgICAgbmctYXR0ci1wbGFjZWhvbGRlcj1cXFwie3skY3RybC5wbGFjZWhvbGRlcn19XFxcIlxcbiAgICAgICAgICAgbmcta2V5ZG93bj1cXFwiJGN0cmwub25JbnB1dEtleURvd24oJGV2ZW50KVxcXCIgLz5cXG4gICAgPGlhcy1pY29uIGljb249XFxcInNlYXJjaF90aGlja1xcXCI+PC9pYXMtaWNvbj5cXG4gICAgPGlhcy1idXR0b24gY2xhc3M9XFxcImlhcy1pY29uLWJ1dHRvblxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLmNsZWFySW5wdXQoKVxcXCI+XFxuICAgICAgICA8aWFzLWljb24gaWNvbj1cXFwiY2xvc2VfdGhpY2tcXFwiPjwvaWFzLWljb24+XFxuICAgIDwvaWFzLWJ1dHRvbj5cXG48L2Rpdj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XG5pbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5IH0gZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgeyBJVG9nZ2xlYWJsZSB9IGZyb20gJy4uL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlJztcbmltcG9ydCBUb2dnbGVTZXJ2aWNlIGZyb20gJy4uL3RvZ2dsZS90b2dnbGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIGJpbmRpbmdzOiB7XG4gICAgICAgIG5hbWU6ICdAJ1xuICAgIH0sXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc2lkZS1uYXYuY29tcG9uZW50Lmh0bWwnKSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZU5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIElUb2dnbGVhYmxlIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgb3BlbjogYm9vbGVhbjtcblxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyckZWxlbWVudCcsICdJYXNUb2dnbGVTZXJ2aWNlJ107XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgcHJpdmF0ZSB0b2dnbGVTZXJ2aWNlOiBUb2dnbGVTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIH1cblxuICAgICRvbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudG9nZ2xlU2VydmljZS5yZWdpc3Rlcih0aGlzKTtcbiAgICB9XG5cbiAgICAkb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLiRlbGVtZW50Lm9mZignY2xpY2snKTtcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKCdpYXMtb3BlbicpO1xuICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLiRlbGVtZW50LmFkZENsYXNzKCdpYXMtb3BlbicpO1xuICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwiaWFzLXNjcmltXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwuaGlkZSgpXFxcIj48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJpYXMtc2lkZS1uYXYtY29udGVudFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImlhcy1zaWRlLW5hdi1ib2R5XFxcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlxcbjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xuaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSB9IGZyb20gJ2FuZ3VsYXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi90aWxlLmNvbXBvbmVudC5odG1sJyksXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGVDb21wb25lbnQge1xuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnIF07XG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnkpIHtcbiAgICAgICAgJGVsZW1lbnQuYXR0cigndGFiaW5kZXgnLCAwKTtcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3RpbGUvdGlsZS5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL3RpbGUvdGlsZS5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwiaWFzLXRpbGUtY29udGVudFxcXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy90aWxlL3RpbGUuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XG5pbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJVHJhbnNjbHVkZUZ1bmN0aW9uIH0gZnJvbSAnYW5ndWxhcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHRyYW5zY2x1ZGU6IHRydWVcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlR3JpZENvbXBvbmVudCB7XG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcbiAgICAgICAgJHRyYW5zY2x1ZGUoKGNsb25lOiBJQXVnbWVudGVkSlF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3RpbGUtZ3JpZC90aWxlLWdyaWQuY29tcG9uZW50LnRzXG4gKiovIiwiaW1wb3J0IHsgSUF0dHJpYnV0ZXMsIElBdWdtZW50ZWRKUXVlcnksIElDb21waWxlU2VydmljZSwgSURpcmVjdGl2ZSwgSVNjb3BlIH0gZnJvbSAnYW5ndWxhcic7XG5cbmV4cG9ydCBjbGFzcyBTb3J0RGlyZWN0aXZlQ29udHJvbGxlciB7XG4gICAgc29ydEJpbmRpbmc6IHN0cmluZztcbiAgICBzb3J0RXhwcmVzc2lvbjogc3RyaW5nO1xuXG4gICAgc3RhdGljICRpbmplY3QgPSBbJyRzY29wZSddO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJHNjb3BlOiBJU2NvcGUpIHtcbiAgICB9XG5cbiAgICBzb3J0T24oc29ydE9uUHJvcGVydHk6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5zb3J0RXhwcmVzc2lvbiA9PT0gc29ydE9uUHJvcGVydHkpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydEV4cHJlc3Npb24gPSAnLScgKyBzb3J0T25Qcm9wZXJ0eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc29ydEV4cHJlc3Npb24gPSBzb3J0T25Qcm9wZXJ0eTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJHNjb3BlLiRldmFsKHRoaXMuc29ydEJpbmRpbmcgKyAnPVwiJyArIHRoaXMuc29ydEV4cHJlc3Npb24gKyAnXCInKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTb3J0RGlyZWN0aXZlKCk6IElEaXJlY3RpdmUge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRyb2xsZXI6IFNvcnREaXJlY3RpdmVDb250cm9sbGVyLFxuICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICBsaW5rOiAoc2NvcGU6IElTY29wZSxcbiAgICAgICAgICAgICAgIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksXG4gICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBJQXR0cmlidXRlcyxcbiAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFNvcnREaXJlY3RpdmVDb250cm9sbGVyKSA9PiB7XG4gICAgICAgICAgICBjb250cm9sbGVyLnNvcnRCaW5kaW5nID0gYXR0cmlidXRlc1snaWFzU29ydCddO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuaW50ZXJmYWNlIElTb3J0T25TY29wZSBleHRlbmRzIElTY29wZSB7XG4gICAgZ2V0U29ydEV4cHJlc3Npb24oKTogc3RyaW5nO1xuICAgIHNvcnRPbjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU29ydE9uRGlyZWN0aXZlKCRjb21waWxlOiBJQ29tcGlsZVNlcnZpY2UpOiBJRGlyZWN0aXZlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXF1aXJlOiAnXmlhc1NvcnQnLFxuICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgJ3NvcnRPbic6ICc8aWFzU29ydE9uJ1xuICAgICAgICB9LFxuICAgICAgICBsaW5rOiAoc2NvcGU6IElTb3J0T25TY29wZSxcbiAgICAgICAgICAgICAgIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksXG4gICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBJQXR0cmlidXRlcyxcbiAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFNvcnREaXJlY3RpdmVDb250cm9sbGVyKSA9PiB7XG4gICAgICAgICAgICBzY29wZS5nZXRTb3J0RXhwcmVzc2lvbiA9ICgpOiBzdHJpbmcgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250cm9sbGVyLnNvcnRFeHByZXNzaW9uO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gQWRkIHNvcnQgaWNvbnNcbiAgICAgICAgICAgIGxldCBpY29uSHRtbCA9XG4gICAgICAgICAgICAgICAgJzxpYXMtaWNvbiBpY29uPVwiZG93bl90aGlja1wiIG5nLWlmPVwiZ2V0U29ydEV4cHJlc3Npb24oKSA9PSBcXCcnICsgc2NvcGUuc29ydE9uICsgJ1xcJ1wiPjwvaWFzLWljb24+JyArXG4gICAgICAgICAgICAgICAgJzxpYXMtaWNvbiBpY29uPVwidXBfdGhpY2tcIiBuZy1pZj1cImdldFNvcnRFeHByZXNzaW9uKCkgPT0gXFwnLScgKyBzY29wZS5zb3J0T24gKyAnXFwnXCI+PC9pYXMtaWNvbj4nO1xuICAgICAgICAgICAgbGV0IGljb25FbGVtZW50ID0gJGNvbXBpbGUoaWNvbkh0bWwpKHNjb3BlKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKGljb25FbGVtZW50KTtcblxuICAgICAgICAgICAgLy8gQWRkIGlhcy1zb3J0YWJsZSBjbGFzc1xuICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcygnaWFzLXNvcnRhYmxlJyk7XG5cbiAgICAgICAgICAgIC8vIFJlZ2lzdGVyIGNsaWNrIGhhbmRsZXJcbiAgICAgICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNjb3BlLiRhcHBseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuc29ydE9uKHNjb3BlWydzb3J0T24nXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cblNvcnRPbkRpcmVjdGl2ZS4kaW5qZWN0ID0gWyckY29tcGlsZSddO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy90YWJsZS9zb3J0LmRpcmVjdGl2ZS50c1xuICoqLyIsImltcG9ydCB7IElBdHRyaWJ1dGVzLCBJQXVnbWVudGVkSlF1ZXJ5LCBJRGlyZWN0aXZlLCBJU2NvcGUgfSBmcm9tICdhbmd1bGFyJztcbmltcG9ydCBUb2dnbGVTZXJ2aWNlIGZyb20gJy4vdG9nZ2xlLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUb2dnbGVhYmxlIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgb3BlbjogYm9vbGVhbjtcblxuICAgIGhpZGUoKTogdm9pZDtcbiAgICBzaG93KGVsZW1lbnQ/OiBJQXVnbWVudGVkSlF1ZXJ5KTogdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRvZ2dsZURpcmVjdGl2ZSh0b2dnbGVTZXJ2aWNlOiBUb2dnbGVTZXJ2aWNlKTogSURpcmVjdGl2ZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGluazogKHNjb3BlOiBJU2NvcGUsIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksIGF0dHJzOiBJQXR0cmlidXRlcykgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCAoKSA9PiB7IHRvZ2dsZVNlcnZpY2UudG9nZ2xlQ29tcG9uZW50KGF0dHJzWydpYXNUb2dnbGUnXSwgZWxlbWVudCk7IH0pO1xuICAgICAgICB9LFxuICAgICAgICByZXN0cmljdDogJ0EnXG4gICAgfTtcbn1cblxuVG9nZ2xlRGlyZWN0aXZlLiRpbmplY3QgPSBbICdJYXNUb2dnbGVTZXJ2aWNlJyBdO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy90b2dnbGUvdG9nZ2xlLmRpcmVjdGl2ZS50c1xuICoqLyIsImltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnkgfSBmcm9tICdhbmd1bGFyJztcbmltcG9ydCB7IElUb2dnbGVhYmxlIH0gZnJvbSAnLi90b2dnbGUuZGlyZWN0aXZlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9nZ2xlU2VydmljZSB7XG4gICAgcHJpdmF0ZSB0b2dnbGVhYmxlQ29tcG9uZW50czogYW55O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlYWJsZUNvbXBvbmVudHMgPSB7fTtcbiAgICB9XG5cbiAgICBoaWRlQ29tcG9uZW50KGNvbXBvbmVudElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgbGV0IHRvZ2dsZWFibGVFbGVtZW50OiBJVG9nZ2xlYWJsZSA9IHRoaXMudG9nZ2xlYWJsZUNvbXBvbmVudHNbY29tcG9uZW50SWRdO1xuXG4gICAgICAgIGlmICh0b2dnbGVhYmxlRWxlbWVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0b2dnbGVhYmxlRWxlbWVudC5oaWRlKCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIodG9nZ2xlYWJsZUNvbXBvbmVudDogSVRvZ2dsZWFibGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50b2dnbGVhYmxlQ29tcG9uZW50c1t0b2dnbGVhYmxlQ29tcG9uZW50Lm5hbWVdID0gdG9nZ2xlYWJsZUNvbXBvbmVudDtcbiAgICB9XG5cbiAgICB0b2dnbGVDb21wb25lbnQoY29tcG9uZW50SWQ6IHN0cmluZywgZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSk6IHZvaWQge1xuICAgICAgICBsZXQgdG9nZ2xlYWJsZUVsZW1lbnQ6IElUb2dnbGVhYmxlID0gdGhpcy50b2dnbGVhYmxlQ29tcG9uZW50c1tjb21wb25lbnRJZF07XG5cbiAgICAgICAgaWYgKHRvZ2dsZWFibGVFbGVtZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdG9nZ2xlYWJsZUVsZW1lbnQub3Blbikge1xuICAgICAgICAgICAgdG9nZ2xlYWJsZUVsZW1lbnQuc2hvdyhlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvZ2dsZWFibGVFbGVtZW50LmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvdG9nZ2xlL3RvZ2dsZS5zZXJ2aWNlLnRzXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3BhbmVsLmNvbXBvbmVudC5odG1sJyksXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsQ29tcG9uZW50IHt9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3BhbmVsL3BhbmVsLmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvcGFuZWwvcGFuZWwuY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxkaXYgY2xhc3M9XFxcImlhcy1wYW5lbC1jb250ZW50XFxcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL3BhbmVsL3BhbmVsLmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7O0FDdERBOzs7Ozs7Ozs7Ozs7OztBQ0FBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7QUNOQTtBQU1BO0FBVUE7QUFDQTtBQVhBOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFRQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRkE7QUFOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDRkE7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFKQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFPQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFoQkE7QUFEQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0hBO0FBeUNBO0FBTUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQTlIQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNGQTtBQUVBO0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUxBO0FBREE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQkE7QUF1QkE7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFEQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0ZBO0FBRUE7QUFHQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBTEE7QUFEQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxEQTtBQW9EQTs7Ozs7OztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBWUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBREE7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBWUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBREE7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBRUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUE3SkE7QUFQQTtBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBeUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQzdNQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0ZBO0FBRUE7QUFHQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBTEE7QUFEQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwRUE7QUFzRUE7Ozs7Ozs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFXQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBbENBO0FBTEE7QUFUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFZQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQXRCQTtBQUpBO0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQURBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFEQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7OztBQ0pBO0FBS0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQWRBO0FBSkE7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakNBO0FBbUNBOzs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7Ozs7Ozs7OztBQ2pCQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOzs7Iiwic291cmNlUm9vdCI6IiJ9