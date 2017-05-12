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
	var html = "<ias-dialog-content ng-click=\"$event.stopPropagation()\" ng-transclude>\r\n</ias-dialog-content>\r\n";
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
	var html = "<i ng-if=\"$ctrl.icon\" ng-class=\"['ias-icon', 'ias-icon-' + $ctrl.icon]\"></i>\r\n<img ng-if=\"!$ctrl.icon\" class=\"svg-icon\" ng-src=\"{{$ctrl.svgIcon}}\" ng-attr-alt=\"{{$ctrl.svgIcon}}\"/>";
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
	var html = "<span class=\"ias-icon-input-container\">\r\n    <input type=\"text\" placeholder=\"{{placeholder}}\">\r\n    <ias-icon icon=\"{{icon}}\"></ias-icon>\r\n</span>";
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
	var html = "<input type=\"text\" class=\"iasIntInput\" ng-transclude>\r\n</input>";
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
	var html = "<div class=\"ias-search-box-content\">\r\n    <input type=\"text\"\r\n           autocomplete=\"false\"\r\n           ng-model=\"$ctrl.value\"\r\n           ng-attr-placeholder=\"{{$ctrl.placeholder}}\"\r\n           ng-keydown=\"$ctrl.onInputKeyDown($event)\" />\r\n    <ias-icon icon=\"search_thick\"></ias-icon>\r\n    <ias-button class=\"ias-icon-button\" ng-click=\"$ctrl.clearInput()\">\r\n        <ias-icon icon=\"close_thick\"></ias-icon>\r\n    </ias-button>\r\n</div>";
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
	        templateUrl: __webpack_require__(32),
	        transclude: true
	    })
	], SideNavComponent);
	exports.default = SideNavComponent;
	

/***/ },
/* 32 */
/***/ function(module, exports) {

	var path = 'components/side-nav/side-nav.component.html';
	var html = "<div class=\"ias-scrim\" ng-click=\"$ctrl.hide()\"></div>\r\n<div class=\"ias-side-nav-content\">\r\n    <div class=\"ias-side-nav-body\" ng-transclude></div>\r\n</div>";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctaWFzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGZjNjIwMTM4MWFjZjNmMTE0YjdmIiwid2VicGFjazovLy8uL3NyYy9uZy1pYXMubW9kdWxlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAtYmFyL2FwcC1iYXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQuZGVjb3JhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaWNvbi5pbnB1dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaWNvbi5pbnB1dC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW50LmlucHV0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pbnQuaW5wdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC9yZXNpemluZy50ZXh0YXJlYS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvcmVzaXppbmcudGV4dGFyZWEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpbGUvdGlsZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGlsZS90aWxlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpbGUtZ3JpZC90aWxlLWdyaWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYmxlL3NvcnQuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYW5lbC9wYW5lbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwuY29tcG9uZW50Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBmYzYyMDEzODFhY2YzZjExNGI3ZlxuICoqLyIsImltcG9ydCB7IG1vZHVsZSB9IGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgQXBwQmFyQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9hcHAtYmFyL2FwcC1iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IEF2YXRhckNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvYXZhdGFyL2F2YXRhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgQnV0dG9uRGlyZWN0aXZlIGZyb20gJy4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCBEaWFsb2dDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IERpYWxvZ1NlcnZpY2UgZnJvbSAnLi9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuc2VydmljZSc7XHJcbmltcG9ydCBIZWFkZXJDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IEljb25Db21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL2ljb24vaWNvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgSWNvbklucHV0IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9pY29uLmlucHV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCBJbnB1dENvbnRhaW5lckNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IEludElucHV0IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9pbnQuaW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlzdENvbXBvbmVudCwgTGlzdEhlYWRlckNvbXBvbmVudCwgTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1lbnVDb21wb25lbnQsIE1lbnVGb290ZXJDb21wb25lbnQsIE1lbnVIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCBOYXZDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50JztcclxuaW1wb3J0IFJlc2l6aW5nVGV4dGFyZWFDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L3Jlc2l6aW5nLnRleHRhcmVhLmNvbXBvbmVudCc7XHJcbmltcG9ydCBTZWFyY2hCb3hDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgU2lkZU5hdkNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50JztcclxuaW1wb3J0IFRpbGVDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL3RpbGUvdGlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgVGlsZUdyaWRDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL3RpbGUtZ3JpZC90aWxlLWdyaWQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU29ydERpcmVjdGl2ZSwgU29ydE9uRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RhYmxlL3NvcnQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVG9nZ2xlRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IFRvZ2dsZVNlcnZpY2UgZnJvbSAnLi9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuc2VydmljZSc7XHJcbmltcG9ydCBQYW5lbENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwuY29tcG9uZW50JztcclxuXHJcbm1vZHVsZSgnbmctaWFzJywgW10pXHJcbiAgICAuY29uc3RhbnQoJ01FTlVfTUFSR0lOJywgMjQpXHJcbiAgICAuY29tcG9uZW50KCdpYXNBcHBCYXInLCBBcHBCYXJDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdpYXNBdmF0YXInLCBBdmF0YXJDb21wb25lbnQpXHJcbiAgICAuZGlyZWN0aXZlKCdpYXNCdXR0b24nLCBCdXR0b25EaXJlY3RpdmUpXHJcbiAgICAuZGlyZWN0aXZlKCdpYXNJbnRJbnB1dCcsIEludElucHV0KVxyXG4gICAgLmRpcmVjdGl2ZSgnaWFzSWNvbklucHV0JywgSWNvbklucHV0KVxyXG4gICAgLmNvbXBvbmVudCgnaWFzRGlhbG9nJywgRGlhbG9nQ29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnaWFzSGVhZGVyJywgSGVhZGVyQ29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnaWFzSWNvbicsIEljb25Db21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdpYXNJbnB1dENvbnRhaW5lcicsIElucHV0Q29udGFpbmVyQ29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnaWFzTGlzdCcsIExpc3RDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdpYXNMaXN0SGVhZGVyJywgTGlzdEhlYWRlckNvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ2lhc0xpc3RJdGVtJywgTGlzdEl0ZW1Db21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdpYXNNZW51JywgTWVudUNvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ2lhc0Zvb3Rlck1lbnUnLCBNZW51Rm9vdGVyQ29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnaWFzSGVhZGVyTWVudScsIE1lbnVIZWFkZXJDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdpYXNOYXYnLCBOYXZDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdpYXNQYW5lbCcsIFBhbmVsQ29tcG9uZW50KVxyXG4gICAgLmRpcmVjdGl2ZSgnaWFzUmVzaXppbmdUZXh0YXJlYScsIFJlc2l6aW5nVGV4dGFyZWFDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdpYXNTZWFyY2hCb3gnLCBTZWFyY2hCb3hDb21wb25lbnQpXHJcbiAgICAuY29tcG9uZW50KCdpYXNTaWRlTmF2JywgU2lkZU5hdkNvbXBvbmVudClcclxuICAgIC5jb21wb25lbnQoJ2lhc1RpbGUnLCBUaWxlQ29tcG9uZW50KVxyXG4gICAgLmNvbXBvbmVudCgnaWFzVGlsZUdyaWQnLCBUaWxlR3JpZENvbXBvbmVudClcclxuXHJcbiAgICAuZGlyZWN0aXZlKCdpYXNUb2dnbGUnLCBUb2dnbGVEaXJlY3RpdmUpXHJcbiAgICAuZGlyZWN0aXZlKCdpYXNTb3J0JywgU29ydERpcmVjdGl2ZSlcclxuICAgIC5kaXJlY3RpdmUoJ2lhc1NvcnRPbicsIFNvcnRPbkRpcmVjdGl2ZSlcclxuXHJcbiAgICAuc2VydmljZSgnSWFzRGlhbG9nU2VydmljZScsIERpYWxvZ1NlcnZpY2UpXHJcbiAgICAuc2VydmljZSgnSWFzVG9nZ2xlU2VydmljZScsIFRvZ2dsZVNlcnZpY2UpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9uZy1pYXMubW9kdWxlLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhbmd1bGFyXCJcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vYXBwLWJhci5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBCYXJDb21wb25lbnQge31cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9hcHAtYmFyL2FwcC1iYXIuY29tcG9uZW50LnRzXG4gKiovIiwiaW1wb3J0IHsgZXh0ZW5kLCBJQXVnbWVudGVkSlF1ZXJ5LCBJQXR0cmlidXRlc30gZnJvbSAnYW5ndWxhcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb250ZW50VGVtcGxhdGVGdW5jdGlvbiB7XHJcbiAgICAoJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksICRhdHRycz86IElBdHRyaWJ1dGVzKTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ29tcG9uZW50KG9wdGlvbnM6IHtcclxuICAgIGJpbmRpbmdzPzogYW55LFxyXG4gICAgYmluZFRvQ29udHJvbGxlcj86IGJvb2xlYW4sXHJcbiAgICBjb250cm9sbGVyQXM/OiBzdHJpbmcsXHJcbiAgICByZXF1aXJlPzogYW55O1xyXG4gICAgdGVtcGxhdGU/OiAoc3RyaW5nIHwgYW55W10gfCBJQ29udGVudFRlbXBsYXRlRnVuY3Rpb24pLFxyXG4gICAgdGVtcGxhdGVVcmw/OiBzdHJpbmcsXHJcbiAgICB0cmFuc2NsdWRlPzogKGJvb2xlYW4gfCBzdHJpbmcpLFxyXG4gICAgc3R5bGVzaGVldFVybD86IHN0cmluZ1xyXG59KSB7XHJcbiAgICByZXR1cm4gKGNvbnRyb2xsZXI6IEZ1bmN0aW9uKSA9PiBleHRlbmQob3B0aW9ucywgeyBjb250cm9sbGVyOiBjb250cm9sbGVyIH0pO1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudC5kZWNvcmF0b3IudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwiaWFzLWFwcC1iYXItY29udGVudFxcXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9hcHAtYmFyL2FwcC1iYXIuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgJ3NyYyc6ICc8J1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2F2YXRhci5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF2YXRhckNvbXBvbmVudCB7XHJcbiAgICBzcmM6IHN0cmluZztcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJpYXMtYXZhdGFyLWNvbnRlbnRcXFwiIG5nLXN0eWxlPVxcXCJ7ICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgJGN0cmwuc3JjICsgJyknIH1cXFwiPjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJQ29tcGlsZVNlcnZpY2UsIElEaXJlY3RpdmUsIElTY29wZSwgSUF0dHJpYnV0ZXMgfSBmcm9tICdhbmd1bGFyJztcclxubGV0IHRlbXBsYXRlVXJsID0gcmVxdWlyZSgnY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sJyk7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29udHJvbGxlciB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsnJHNjb3BlJ107XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRzY29wZTogSVNjb3BlKSB7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25EaXJlY3RpdmUoKTogSURpcmVjdGl2ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnRyb2xsZXI6IEJ1dHRvbkNvbnRyb2xsZXIsXHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogdGVtcGxhdGVVcmwsXHJcbiAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcclxuICAgICAgICByZXBsYWNlOiB0cnVlLFxyXG4gICAgICAgIGxpbms6IChzY29wZTogSVNjb3BlLFxyXG4gICAgICAgICAgICAgICBlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LFxyXG4gICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBJQXR0cmlidXRlcyxcclxuICAgICAgICAgICAgICAgY29udHJvbGxlcjogQnV0dG9uQ29udHJvbGxlcikgPT4ge1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbkJ1dHRvbkRpcmVjdGl2ZS4kaW5qZWN0ID0gWyckY29tcGlsZSddO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8YnV0dG9uIGNsYXNzPVxcXCJpYXMtYnV0dG9uXFxcIiBuZy10cmFuc2NsdWRlPlxcclxcbjwvYnV0dG9uPlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5LCBJVHJhbnNjbHVkZUZ1bmN0aW9uIH0gZnJvbSAnYW5ndWxhcic7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5pbXBvcnQgRGlhbG9nU2VydmljZSBmcm9tICcuL2RpYWxvZy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vZGlhbG9nLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYWxvZ0NvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJ0lhc0RpYWxvZ1NlcnZpY2UnIF07XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IERpYWxvZ1NlcnZpY2UpIHtcclxuICAgICAgICAvLyAkZWxlbWVudC5vbignY2xpY2snLCB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAkZGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLiRlbGVtZW50Lm9mZigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpYWxvZ1NlcnZpY2UuY2FuY2VsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGlhcy1kaWFsb2ctY29udGVudCBuZy1jbGljaz1cXFwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXFxcIiBuZy10cmFuc2NsdWRlPlxcclxcbjwvaWFzLWRpYWxvZy1jb250ZW50PlxcclxcblwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHtcclxuICAgIGVsZW1lbnQsXHJcbiAgICBJQXVnbWVudGVkSlF1ZXJ5LFxyXG4gICAgSUNvbXBpbGVTZXJ2aWNlLFxyXG4gICAgSUNvbnRyb2xsZXJTZXJ2aWNlLFxyXG4gICAgSURlZmVycmVkLFxyXG4gICAgSURvY3VtZW50U2VydmljZSxcclxuICAgIElIdHRwU2VydmljZSxcclxuICAgIElQcm9taXNlLFxyXG4gICAgSVFTZXJ2aWNlLFxyXG4gICAgSVJvb3RTY29wZVNlcnZpY2UsXHJcbiAgICBJU2NvcGUsXHJcbiAgICBJVGVtcGxhdGVDYWNoZVNlcnZpY2VcclxufSBmcm9tICdhbmd1bGFyJztcclxuaW1wb3J0IERpYWxvZ0NvbXBvbmVudCBmcm9tICcuL2RpYWxvZy5jb21wb25lbnQnO1xyXG5cclxuaW50ZXJmYWNlIElEaWFsb2dTY29wZSBleHRlbmRzIElTY29wZSB7XHJcbiAgICAkY3RybDogRGlhbG9nQ29tcG9uZW50O1xyXG4gICAgY2FuY2VsOiAoKSA9PiB2b2lkO1xyXG4gICAgY2FuY2VsVGV4dDogc3RyaW5nO1xyXG4gICAgY2xvc2U6ICgpID0+IHZvaWQ7XHJcbiAgICBva1RleHQ6IHN0cmluZztcclxuICAgIHByb21wdDogYm9vbGVhbjtcclxuICAgIGRhdGE6IGFueTtcclxuICAgIHRleHRDb250ZW50OiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSURpYWxvZ09wdGlvbnMge1xyXG4gICAgY2FuY2VsOiBzdHJpbmc7XHJcbiAgICBjb250cm9sbGVyOiBhbnk7XHJcbiAgICBvazogc3RyaW5nO1xyXG4gICAgcHJvbXB0OiBib29sZWFuO1xyXG4gICAgcmVzcG9uc2U6IHN0cmluZztcclxuICAgIHNjb3BlOiBJU2NvcGU7XHJcbiAgICB0ZW1wbGF0ZTogc3RyaW5nO1xyXG4gICAgdGVtcGxhdGVVcmw6IHN0cmluZztcclxuICAgIHRleHRDb250ZW50OiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2dTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgY29tcGlsZWREaWFsb2dFbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5O1xyXG4gICAgcHJpdmF0ZSBkaWFsb2dDb250cm9sbGVyOiBhbnk7XHJcbiAgICBwcml2YXRlIGRpYWxvZ0RlZmVycmVkOiBJRGVmZXJyZWQ8YW55PjtcclxuXHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRjb21waWxlJywgJyRjb250cm9sbGVyJywgJyRkb2N1bWVudCcsICckaHR0cCcsICckcScsICckcm9vdFNjb3BlJywgJyR0ZW1wbGF0ZUNhY2hlJyBdO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkY29tcGlsZTogSUNvbXBpbGVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSAkY29udHJvbGxlcjogSUNvbnRyb2xsZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSAkZG9jdW1lbnQ6IElEb2N1bWVudFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlICRodHRwOiBJSHR0cFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlICRxOiBJUVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlICRyb290U2NvcGU6IElSb290U2NvcGVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSAkdGVtcGxhdGVDYWNoZTogSVRlbXBsYXRlQ2FjaGVTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYWxlcnQob3B0aW9uczogSURpYWxvZ09wdGlvbnMpOiBJUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBvcHRpb25zLmNhbmNlbCA9IG51bGw7XHJcbiAgICAgICAgb3B0aW9ucy5vayA9IG9wdGlvbnMub2sgfHwgJ09LJztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3BlbihvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWwocmVzcG9uc2U/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpYWxvZ0RlZmVycmVkLnJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UocmVzcG9uc2U/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpYWxvZ0RlZmVycmVkLnJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpcm0ob3B0aW9uczogSURpYWxvZ09wdGlvbnMpOiBJUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBvcHRpb25zLmNhbmNlbCA9IG9wdGlvbnMuY2FuY2VsIHx8ICdObyc7XHJcbiAgICAgICAgb3B0aW9ucy5vayA9IG9wdGlvbnMub2sgfHwgJ1llcyc7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4ob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuY29tcGlsZWREaWFsb2dFbGVtZW50LmRldGFjaCgpO1xyXG4gICAgICAgIHRoaXMuZGlhbG9nQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dEZWZlcnJlZCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbihvcHRpb25zOiBJRGlhbG9nT3B0aW9ucyk6IElQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBzY29wZVxyXG4gICAgICAgIGxldCBzY29wZSA9IG9wdGlvbnMuc2NvcGUgPyBvcHRpb25zLnNjb3BlLiRuZXcoZmFsc2UpIDogPElEaWFsb2dTY29wZT4odGhpcy4kcm9vdFNjb3BlLiRuZXcodHJ1ZSkpO1xyXG4gICAgICAgIHNjb3BlLmNhbmNlbCA9ICgpID0+IHsgc2VsZi5jYW5jZWwoKTsgfTtcclxuICAgICAgICBzY29wZS5jYW5jZWxUZXh0ID0gb3B0aW9ucy5jYW5jZWw7XHJcbiAgICAgICAgc2NvcGUuY2xvc2UgPSAoKSA9PiB7IHNlbGYuY2xvc2Uoc2NvcGUuZGF0YS5yZXNwb25zZSk7IH07XHJcbiAgICAgICAgc2NvcGUub2tUZXh0ID0gb3B0aW9ucy5vaztcclxuICAgICAgICBzY29wZS5wcm9tcHQgPSBvcHRpb25zLnByb21wdDtcclxuICAgICAgICBzY29wZS5kYXRhID0geyByZXNwb25zZTogb3B0aW9ucy5yZXNwb25zZSB9O1xyXG4gICAgICAgIHNjb3BlLnRleHRDb250ZW50ID0gb3B0aW9ucy50ZXh0Q29udGVudDtcclxuICAgICAgICBzY29wZS50aXRsZSA9IG9wdGlvbnMudGl0bGU7XHJcblxyXG4gICAgICAgIC8vIEluc3RhbnRpYXRlIGNvbnRyb2xsZXIgaWYgcHJvdmlkZWRcclxuICAgICAgICBpZiAob3B0aW9ucy5jb250cm9sbGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nQ29udHJvbGxlciA9IHRoaXMuJGNvbnRyb2xsZXIob3B0aW9ucy5jb250cm9sbGVyLCB7ICRzY29wZTogc2NvcGUgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb21waWxlIHRlbXBsYXRlXHJcbiAgICAgICAgdGhpcy5sb2FkVGVtcGxhdGUob3B0aW9ucylcclxuICAgICAgICAgICAgLnRoZW4oKHRlbXBsYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbXBpbGVkRGlhbG9nRWxlbWVudCA9IHNlbGYuJGNvbXBpbGUodGVtcGxhdGUpKHNjb3BlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJbnNlcnQgZWxlbWVudCBpbnRvIERPTVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudChzZWxmLiRkb2N1bWVudC5maW5kKCdib2R5JykpLmFwcGVuZChzZWxmLmNvbXBpbGVkRGlhbG9nRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmRpYWxvZ0RlZmVycmVkID0gdGhpcy4kcS5kZWZlcigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpYWxvZ0RlZmVycmVkLnByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvbXB0KG9wdGlvbnM6IElEaWFsb2dPcHRpb25zKTogSVByb21pc2U8YW55PiB7XHJcbiAgICAgICAgb3B0aW9ucy5jYW5jZWwgPSBvcHRpb25zLmNhbmNlbCB8fCAnQ2FuY2VsJztcclxuICAgICAgICBvcHRpb25zLm9rID0gb3B0aW9ucy5vayB8fCAnT0snO1xyXG4gICAgICAgIG9wdGlvbnMucHJvbXB0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3BlbihvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRUZW1wbGF0ZShvcHRpb25zOiBJRGlhbG9nT3B0aW9ucyk6IElQcm9taXNlPHN0cmluZz4ge1xyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy50ZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kcS5yZXNvbHZlKG9wdGlvbnMudGVtcGxhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSBpZiAob3B0aW9ucy50ZW1wbGF0ZVVybCkge1xyXG4gICAgICAgICAgICBsZXQgdGVtcGxhdGU6IHN0cmluZyA9IHRoaXMuJHRlbXBsYXRlQ2FjaGUuZ2V0PHN0cmluZz4ob3B0aW9ucy50ZW1wbGF0ZVVybCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRxLnJlc29sdmUodGVtcGxhdGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kaHR0cFxyXG4gICAgICAgICAgICAgICAgLmdldChvcHRpb25zLnRlbXBsYXRlVXJsLCB7IGNhY2hlOiB0aGlzLiR0ZW1wbGF0ZUNhY2hlIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRxLnJlc29sdmUoXHJcbiAgICAgICAgICAgICAgICAnPGlhcy1kaWFsb2c+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgPGRpdiBjbGFzcz1cImlhcy1kaWFsb2ctaGVhZGVyXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgIDxkaXYgbmctaWY9XCIhIXRpdGxlXCIgY2xhc3M9XCJpYXMtdGl0bGVcIj57e3RpdGxlfX08L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICA8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICA8ZGl2IGNsYXNzPVwiaWFzLWRpYWxvZy1ib2R5XCI+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgIDxkaXYgbmctaWY9XCIhcHJvbXB0XCI+e3t0ZXh0Q29udGVudH19PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgIDxkaXYgbmctaWY9XCJwcm9tcHRcIj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgIDxpYXMtaW5wdXQtY29udGFpbmVyPicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZXNwb25zZVwiPnt7dGV4dENvbnRlbnR9fTwvbGFiZWw+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicmVzcG9uc2VcIiBuYW1lPVwicmVzcG9uc2VcIiB0eXBlPVwidGV4dFwiIG5nLW1vZGVsPVwiZGF0YS5yZXNwb25zZVwiPicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgPC9pYXMtaW5wdXQtY29udGFpbmVyPicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICA8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICA8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICA8ZGl2IGNsYXNzPVwiaWFzLWFjdGlvbnNcIj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICA8aWFzLWJ1dHRvbiBuZy1pZj1cIiEhb2tUZXh0XCIgbmctY2xpY2s9XCJjbG9zZSgpXCI+e3tva1RleHR9fTwvaWFzLWJ1dHRvbj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICA8aWFzLWJ1dHRvbiBuZy1pZj1cIiEhY2FuY2VsVGV4dFwiIG5nLWNsaWNrPVwiY2FuY2VsKClcIj57e2NhbmNlbFRleHR9fTwvaWFzLWJ1dHRvbj4nICtcclxuICAgICAgICAgICAgICAgICcgICA8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICA8aWFzLWJ1dHRvbiBjbGFzcz1cImlhcy1pY29uLWJ1dHRvbiBpYXMtZGlhbG9nLWNsb3NlLWJ1dHRvblwiIG5nLWNsaWNrPVwiY2FuY2VsKClcIj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgPGlhcy1pY29uIGljb249XCJjbG9zZV90aGlja1wiPjwvaWFzLWljb24+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgPC9pYXMtYnV0dG9uPicgK1xyXG4gICAgICAgICAgICAgICAgJzwvaWFzLWRpYWxvZz4nXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5zZXJ2aWNlLnRzXG4gKiovIiwiaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSVRyYW5zY2x1ZGVGdW5jdGlvbiB9IGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcclxuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xyXG4gICAgICAgICR0cmFuc2NsdWRlKChjbG9uZTogSUF1Z21lbnRlZEpRdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHNcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBpY29uOiAnQCcsXHJcbiAgICAgICAgc3ZnSWNvbjogJ0AnXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vaWNvbi5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb25Db21wb25lbnQge1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8aSBuZy1pZj1cXFwiJGN0cmwuaWNvblxcXCIgbmctY2xhc3M9XFxcIlsnaWFzLWljb24nLCAnaWFzLWljb24tJyArICRjdHJsLmljb25dXFxcIj48L2k+XFxyXFxuPGltZyBuZy1pZj1cXFwiISRjdHJsLmljb25cXFwiIGNsYXNzPVxcXCJzdmctaWNvblxcXCIgbmctc3JjPVxcXCJ7eyRjdHJsLnN2Z0ljb259fVxcXCIgbmctYXR0ci1hbHQ9XFxcInt7JGN0cmwuc3ZnSWNvbn19XFxcIi8+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnksIElDb21waWxlU2VydmljZSwgSURpcmVjdGl2ZSwgSVNjb3BlLCBJQXR0cmlidXRlcyB9IGZyb20gJ2FuZ3VsYXInO1xyXG5sZXQgdGVtcGxhdGVVcmwgPSByZXF1aXJlKCdjb21wb25lbnRzL2lucHV0L2ljb24uaW5wdXQuY29tcG9uZW50Lmh0bWwnKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJY29uSW5wdXRDb250cm9sbGVyIHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyckc2NvcGUnXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRzY29wZTogSVNjb3BlKSB7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBkaXJlY3RpdmUgc3VwcG9ydHMgc2hvd2luZyBhIHRleHQgaW5wdXQgZmllbGQgd2l0aCBhbiBpY29uLiAgVGhlc2UgZmllbGRzXHJcbiAqIGFyZSBwb3B1bGFyIGZvciBzZWFyY2ggYm94ZXMuICBUaGUgZGlyZWN0aXZlIHN0eWxlcyB0aGUgaWNvbiBzbyBpdCB3b24ndCBpbnRlcmZlcmVcclxuICogd2l0aCB0aGUgdGV4dCBmaWVsZCBhbmQgbWFrZXMgdGhlIHNwYWNpbmcgbG9vayBjb3JyZWN0IGZvciB0aGUgY29udHJvbC5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEljb25JbnB1dERpcmVjdGl2ZSgpOiBJRGlyZWN0aXZlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY29udHJvbGxlcjogSWNvbklucHV0Q29udHJvbGxlcixcclxuICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiB0ZW1wbGF0ZVVybCxcclxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxyXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgbW9kZWw6ICc9bmdNb2RlbCcsXHJcbiAgICAgICAgICAgIG1pbjogJz0nLFxyXG4gICAgICAgICAgICBtYXg6ICc9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGluazogKHNjb3BlOiBJU2NvcGUsXHJcbiAgICAgICAgICAgICAgIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksXHJcbiAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IElBdHRyaWJ1dGVzLFxyXG4gICAgICAgICAgICAgICBjb250cm9sbGVyOiBJY29uSW5wdXRDb250cm9sbGVyKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgc2NvcGUuaWNvbiA9IGVsZW1lbnQuYXR0cignaWNvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgc2NvcGUucGxhY2Vob2xkZXIgPSBlbGVtZW50LmF0dHIoJ3BsYWNlaG9sZGVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuSWNvbklucHV0Q29udHJvbGxlci4kaW5qZWN0ID0gWyckY29tcGlsZSddO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2lucHV0L2ljb24uaW5wdXQuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9pbnB1dC9pY29uLmlucHV0LmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8c3BhbiBjbGFzcz1cXFwiaWFzLWljb24taW5wdXQtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7e3BsYWNlaG9sZGVyfX1cXFwiPlxcclxcbiAgICA8aWFzLWljb24gaWNvbj1cXFwie3tpY29ufX1cXFwiPjwvaWFzLWljb24+XFxyXFxuPC9zcGFuPlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2lucHV0L2ljb24uaW5wdXQuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XHJcbmltcG9ydCB7IElBdWdtZW50ZWRKUXVlcnksIElUcmFuc2NsdWRlRnVuY3Rpb24gfSBmcm9tICdhbmd1bGFyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vaW5wdXQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRDb250YWluZXJDb21wb25lbnQge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcclxuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xyXG4gICAgICAgICR0cmFuc2NsdWRlKChjbG9uZTogSUF1Z21lbnRlZEpRdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiXCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSUNvbXBpbGVTZXJ2aWNlLCBJRGlyZWN0aXZlLCBJU2NvcGUsIElBdHRyaWJ1dGVzIH0gZnJvbSAnYW5ndWxhcic7XHJcbmxldCB0ZW1wbGF0ZVVybCA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvaW5wdXQvaW50LmlucHV0LmNvbXBvbmVudC5odG1sJyk7XHJcblxyXG5leHBvcnQgY2xhc3MgSW50SW5wdXRDb250cm9sbGVyIHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyckc2NvcGUnXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRzY29wZTogSVNjb3BlKSB7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBkaXJlY3RpdmUgc3VwcG9ydHMgYW4gaW5wdXQgZmllbGQgd2hpY2ggYWRkcyB0aGUgY2xhc3MgaW5wdXRFcnJvclxyXG4gKiB3aGVuIHRoZSB2YWx1ZSBpcyBub3QgYSBudW1iZXIuICBJdCB3YXRjaGVzIGNoYW5nZXMgZnJvbSB1c2VyIGlucHV0cywgXHJcbiAqIHRoZSBET00sIGFuZCB0aGUgbW9kZWwuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRJbnB1dERpcmVjdGl2ZSgpOiBJRGlyZWN0aXZlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY29udHJvbGxlcjogSW50SW5wdXRDb250cm9sbGVyLFxyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6IHRlbXBsYXRlVXJsLFxyXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXHJcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICBtb2RlbDogJz1uZ01vZGVsJyxcclxuICAgICAgICAgICAgbWluOiAnPScsXHJcbiAgICAgICAgICAgIG1heDogJz0nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaW5rOiAoc2NvcGU6IElTY29wZSxcclxuICAgICAgICAgICAgICAgZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSxcclxuICAgICAgICAgICAgICAgYXR0cmlidXRlczogSUF0dHJpYnV0ZXMsXHJcbiAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IEludElucHV0Q29udHJvbGxlcikgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgIGlmICghY29udHJvbGxlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICBsZXQgaXNWYWxpZCA9IGZ1bmN0aW9uKHZhbDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgaWYgKCd1bmRlZmluZWQnID09PSB0eXBlb2YgdmFsIHx8IHZhbCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcygnaW5wdXRFcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4oTnVtYmVyKHZhbCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ2lucHV0RXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcGUubWF4ICYmIHZhbCA+IHNjb3BlLm1heCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcygnaW5wdXRFcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNjb3BlLm1pbiAmJiB2YWwgPCBzY29wZS5taW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ2lucHV0RXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKCdpbnB1dEVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICBzY29wZS4kd2F0Y2goJ21vZGVsJywgZnVuY3Rpb24obmV3VmFsdWU6IHN0cmluZywgb2xkVmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgZWxlbWVudC5iaW5kKCdpbnB1dCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZChlbGVtZW50LnZhbCgpKTtcclxuICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbkludElucHV0Q29udHJvbGxlci4kaW5qZWN0ID0gWyckY29tcGlsZSddO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2lucHV0L2ludC5pbnB1dC5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL2lucHV0L2ludC5pbnB1dC5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJpYXNJbnRJbnB1dFxcXCIgbmctdHJhbnNjbHVkZT5cXHJcXG48L2lucHV0PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2lucHV0L2ludC5pbnB1dC5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSVRyYW5zY2x1ZGVGdW5jdGlvbiB9IGZyb20gJ2FuZ3VsYXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9saXN0LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnJHRyYW5zY2x1ZGUnIF07XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcclxuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuYXBwZW5kKGNsb25lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0SGVhZGVyQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnJHRyYW5zY2x1ZGUnIF07XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcclxuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuYXBwZW5kKGNsb25lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0SXRlbUNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyR0cmFuc2NsdWRlJyBdO1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksICR0cmFuc2NsdWRlOiBJVHJhbnNjbHVkZUZ1bmN0aW9uKSB7XHJcbiAgICAgICAgJHRyYW5zY2x1ZGUoKGNsb25lOiBJQXVnbWVudGVkSlF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuaW1wb3J0IFRvZ2dsZVNlcnZpY2UgZnJvbSAnLi4vdG9nZ2xlL3RvZ2dsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgZWxlbWVudCwgSUF1Z21lbnRlZEpRdWVyeSwgSURvY3VtZW50U2VydmljZSwgSVRyYW5zY2x1ZGVGdW5jdGlvbiwgSVdpbmRvd1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyJztcclxuaW1wb3J0IHsgSVRvZ2dsZWFibGUgfSBmcm9tICcuLi90b2dnbGUvdG9nZ2xlLmRpcmVjdGl2ZSc7XHJcblxyXG5leHBvcnQgZW51bSBIb3Jpem9udGFsQWxpZ25tZW50IHtcclxuICAgIHN0YXJ0LFxyXG4gICAgY2VudGVyLFxyXG4gICAgZW5kXHJcbn1cclxuZXhwb3J0IGVudW0gVmVydGljYWxBbGlnbm1lbnQge1xyXG4gICAgdG9wLFxyXG4gICAgY2VudGVyLFxyXG4gICAgYm90dG9tXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBhbGlnbjogJ0BpYXNBbGlnbicsXHJcbiAgICAgICAgbmFtZTogJ0AnXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vbWVudS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIElUb2dnbGVhYmxlIHtcclxuICAgIGFsaWduOiBzdHJpbmc7XHJcbiAgICBob3Jpem9udGFsQWxpZ25tZW50OiBIb3Jpem9udGFsQWxpZ25tZW50O1xyXG4gICAgdmVydGljYWxBbGlnbm1lbnQ6IFZlcnRpY2FsQWxpZ25tZW50O1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgb3BlbjogYm9vbGVhbjtcclxuXHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRkb2N1bWVudCcsICckZWxlbWVudCcsICckd2luZG93JywgJ0lhc1RvZ2dsZVNlcnZpY2UnLCAnTUVOVV9NQVJHSU4nIF07XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRkb2N1bWVudDogSURvY3VtZW50U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlICR3aW5kb3c6IElXaW5kb3dTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB0b2dnbGVTZXJ2aWNlOiBUb2dnbGVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBNRU5VX01BUkdJTjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XHJcbiAgICAgICAgJGVsZW1lbnQuZGV0YWNoKCk7XHJcbiAgICAgICAgZWxlbWVudCgkZG9jdW1lbnQuZmluZCgnYm9keScpKS5hcHBlbmQoJGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAkZWxlbWVudC5vbignY2xpY2snLCB0aGlzLmhpZGUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbEFsaWdubWVudCA9IEhvcml6b250YWxBbGlnbm1lbnQuc3RhcnQ7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbEFsaWdubWVudCA9IFZlcnRpY2FsQWxpZ25tZW50LnRvcDtcclxuICAgIH1cclxuXHJcbiAgICAkb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQub2ZmKCdjbGljaycpO1xyXG4gICAgfVxyXG5cclxuICAgICRvbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWxpZ24pIHtcclxuICAgICAgICAgICAgbGV0IHRva2VucyA9IHRoaXMuYWxpZ24uc3BsaXQoJyAnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBob3Jpem9udGFsQWxpZ25tZW50ID0gSG9yaXpvbnRhbEFsaWdubWVudFt0b2tlbnNbMF1dO1xyXG4gICAgICAgICAgICBsZXQgdmVydGljYWxBbGlnbm1lbnQgPSBWZXJ0aWNhbEFsaWdubWVudFt0b2tlbnNbMV1dO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ob3Jpem9udGFsQWxpZ25tZW50ID0gaG9yaXpvbnRhbEFsaWdubWVudCB8fCBIb3Jpem9udGFsQWxpZ25tZW50LnN0YXJ0O1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsQWxpZ25tZW50ID0gdmVydGljYWxBbGlnbm1lbnQgfHwgVmVydGljYWxBbGlnbm1lbnQudG9wO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50b2dnbGVTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2lhcy1vcGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdyh0YXJnZXRFbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5KTogdm9pZCB7XHJcbiAgICAgICAgLy8gU2V0IG9wZW4gc3RhdGUgb24gY29tcG9uZW50IGFuZCBtZW51IGVsZW1lbnRcclxuICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoJ2lhcy1vcGVuJyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd01lbnVDb250ZW50KHRhcmdldEVsZW1lbnRbMF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TGF5b3V0RGlyZWN0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuJGVsZW1lbnRbMF0sIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ2RpcmVjdGlvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbnVtYmVyVG9QaXhlbHMobnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAobnVtID09PSBudWxsKSA/IG51bGwgOiBudW0gKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd01lbnVDb250ZW50KHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgbGV0IG1lbnVDb250ZW50RWxlbWVudCA9IHRoaXMuJGVsZW1lbnQuZmluZCgnaWFzLW1lbnUtY29udGVudCcpWzBdO1xyXG5cclxuICAgICAgICBsZXQgaXNMdHJMYXlvdXQ6IGJvb2xlYW4gPSB0aGlzLmdldExheW91dERpcmVjdGlvbigpICE9PSAncnRsJztcclxuXHJcbiAgICAgICAgLy8gUmVzZXQgdGhlIGJvdW5kYXJpZXMgb2YgdGhlIG1lbnUgY29udGVudCBlbGVtZW50XHJcbiAgICAgICAgbWVudUNvbnRlbnRFbGVtZW50LnN0eWxlLmJvdHRvbSA9XHJcbiAgICAgICAgICAgIG1lbnVDb250ZW50RWxlbWVudC5zdHlsZS5sZWZ0ID1cclxuICAgICAgICAgICAgbWVudUNvbnRlbnRFbGVtZW50LnN0eWxlLnJpZ2h0ID1cclxuICAgICAgICAgICAgbWVudUNvbnRlbnRFbGVtZW50LnN0eWxlLnRvcCA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0b3AgYW5kIGxlZnQgb2Zmc2V0IGJhc2VkIG9uIHRoZSBwb3NpdGlvbiBvZiB0aGUgdGFyZ2V0IGVsZW1lbnRcclxuICAgICAgICBsZXQgbWVudUJvdW5kaW5nQm94ID0gdGhpcy4kZWxlbWVudFswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBsZXQgbWVudUNvbnRlbnRCb3VuZGluZ0JveCA9IG1lbnVDb250ZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBsZXQgdGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94ID0gdGFyZ2V0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgbGV0IGJvdHRvbTogbnVtYmVyID0gbnVsbCxcclxuICAgICAgICAgICAgbGVmdDogbnVtYmVyID0gbnVsbCxcclxuICAgICAgICAgICAgcmlnaHQ6IG51bWJlciA9IG51bGwsXHJcbiAgICAgICAgICAgIHRvcDogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gSWYgbWVudSBjb250ZW50IGlzIHdpZGVyIHRoYW4gbWVudSBjb250YWluZXIsIGNvbnN0cmFpbiB3aWR0aCB0byBtZW51IGNvbnRhaW5lclxyXG4gICAgICAgIGlmIChtZW51Q29udGVudEJvdW5kaW5nQm94LndpZHRoICsgKDIgKiB0aGlzLk1FTlVfTUFSR0lOKSA+IG1lbnVCb3VuZGluZ0JveC53aWR0aCkge1xyXG4gICAgICAgICAgICBsZWZ0ID0gdGhpcy5NRU5VX01BUkdJTjtcclxuICAgICAgICAgICAgcmlnaHQgPSB0aGlzLk1FTlVfTUFSR0lOO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmhvcml6b250YWxBbGlnbm1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgSG9yaXpvbnRhbEFsaWdubWVudC5zdGFydDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNMdHJMYXlvdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC5yaWdodCAtIG1lbnVDb250ZW50Qm91bmRpbmdCb3gud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBIb3Jpem9udGFsQWxpZ25tZW50LmNlbnRlcjpcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gdGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LmxlZnQgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC53aWR0aCAtIG1lbnVDb250ZW50Qm91bmRpbmdCb3gud2lkdGgpIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEhvcml6b250YWxBbGlnbm1lbnQuZW5kOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0x0ckxheW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gdGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LmxlZnQgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC53aWR0aCAtIG1lbnVDb250ZW50Qm91bmRpbmdCb3gud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ29udmVydCB0byBjb29yZGluYXRlcyByZWxhdGl2ZSB0byBtZW51IGNvbnRhaW5lclxyXG4gICAgICAgICAgICBsZWZ0IC09IG1lbnVCb3VuZGluZ0JveC5sZWZ0O1xyXG5cclxuICAgICAgICAgICAgLy8gQ29uc3RyYWluIHRvIG1lbnUgY29udGFpbmVyIGJvdW5kYXJpZXNcclxuICAgICAgICAgICAgbGVmdCA9IE1hdGgubWF4KGxlZnQsIHRoaXMuTUVOVV9NQVJHSU4pO1xyXG4gICAgICAgICAgICBpZiAobGVmdCArIG1lbnVDb250ZW50Qm91bmRpbmdCb3gud2lkdGggPiBtZW51Qm91bmRpbmdCb3gud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIGxlZnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQgPSB0aGlzLk1FTlVfTUFSR0lOO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZW51Q29udGVudEVsZW1lbnQuc3R5bGUubGVmdCA9IHRoaXMubnVtYmVyVG9QaXhlbHMobGVmdCk7XHJcbiAgICAgICAgbWVudUNvbnRlbnRFbGVtZW50LnN0eWxlLnJpZ2h0ID0gdGhpcy5udW1iZXJUb1BpeGVscyhyaWdodCk7XHJcblxyXG4gICAgICAgIC8vIFJlY2FsY3VsYXRlIGJvdW5kaW5nIGJveCB0byBhY2NvdW50IGZvciBhbnkgc2hyaW5raW5nIGNhdXNlZCBieSBjb25zdHJhaW5pbmcgdGhlIGxlZnQgYW5kIHJpZ2h0IG9mZnNldHNcclxuICAgICAgICBtZW51Q29udGVudEJvdW5kaW5nQm94ID0gbWVudUNvbnRlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICAvLyBJZiBtZW51IGNvbnRlbnQgaXMgdGFsbGVyIHRoYW4gbWVudSBjb250YWluZXIsIGNvbnN0cmFpbiBoZWlnaHQgdG8gbWVudSBjb250YWluZXJcclxuICAgICAgICBpZiAobWVudUNvbnRlbnRCb3VuZGluZ0JveC5oZWlnaHQgKyAoMiAqIHRoaXMuTUVOVV9NQVJHSU4pID4gbWVudUJvdW5kaW5nQm94LmhlaWdodCkge1xyXG4gICAgICAgICAgICB0b3AgPSB0aGlzLk1FTlVfTUFSR0lOO1xyXG4gICAgICAgICAgICBib3R0b20gPSB0aGlzLk1FTlVfTUFSR0lOO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnZlcnRpY2FsQWxpZ25tZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFZlcnRpY2FsQWxpZ25tZW50LnRvcDpcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSB0YXJnZXRFbGVtZW50Qm91bmRpbmdCb3guYm90dG9tO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBWZXJ0aWNhbEFsaWdubWVudC5jZW50ZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gdGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LnRvcCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgodGFyZ2V0RWxlbWVudEJvdW5kaW5nQm94LmhlaWdodCAtIG1lbnVDb250ZW50Qm91bmRpbmdCb3guaGVpZ2h0KSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBWZXJ0aWNhbEFsaWdubWVudC5ib3R0b206XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gKHRhcmdldEVsZW1lbnRCb3VuZGluZ0JveC50b3AgLSBtZW51Q29udGVudEJvdW5kaW5nQm94LmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdG8gY29vcmRpbmF0ZXMgcmVsYXRpdmUgdG8gbWVudSBjb250YWluZXJcclxuICAgICAgICAgICAgdG9wIC09IG1lbnVCb3VuZGluZ0JveC50b3A7XHJcblxyXG4gICAgICAgICAgICAvLyBDb25zdHJhaW4gdG8gbWVudSBjb250YWluZXIgYm91bmRhcmllc1xyXG4gICAgICAgICAgICB0b3AgPSBNYXRoLm1heCh0b3AsIHRoaXMuTUVOVV9NQVJHSU4pO1xyXG4gICAgICAgICAgICBpZiAodG9wICsgbWVudUNvbnRlbnRCb3VuZGluZ0JveC5oZWlnaHQgPiBtZW51Qm91bmRpbmdCb3guaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0b3AgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tID0gdGhpcy5NRU5VX01BUkdJTjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWVudUNvbnRlbnRFbGVtZW50LnN0eWxlLnRvcCA9IHRoaXMubnVtYmVyVG9QaXhlbHModG9wKTtcclxuICAgICAgICBtZW51Q29udGVudEVsZW1lbnQuc3R5bGUuYm90dG9tID0gdGhpcy5udW1iZXJUb1BpeGVscyhib3R0b20pO1xyXG4gICAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lbnVGb290ZXJDb21wb25lbnQge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcclxuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xyXG4gICAgICAgICR0cmFuc2NsdWRlKChjbG9uZTogSUF1Z21lbnRlZEpRdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lbnVIZWFkZXJDb21wb25lbnQge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbICckZWxlbWVudCcsICckdHJhbnNjbHVkZScgXTtcclxuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCAkdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbikge1xyXG4gICAgICAgICR0cmFuc2NsdWRlKChjbG9uZTogSUF1Z21lbnRlZEpRdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8aWFzLW1lbnUtY29udGVudCBuZy10cmFuc2NsdWRlIG5nLWNsaWNrPVxcXCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcXFwiPjwvaWFzLW1lbnUtY29udGVudD5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL25hdi5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZDb21wb25lbnQge31cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwiaWFzLW5hdi1jb250ZW50XFxcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSUNvbXBpbGVTZXJ2aWNlLCBJRGlyZWN0aXZlLCBJU2NvcGUsIElBdHRyaWJ1dGVzIH0gZnJvbSAnYW5ndWxhcic7XHJcbmxldCB0ZW1wbGF0ZVVybCA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvaW5wdXQvcmVzaXppbmcudGV4dGFyZWEuY29tcG9uZW50Lmh0bWwnKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXNpemluZ1RleHRhcmVhQ29udHJvbGxlciB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsnJHNjb3BlJ107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkc2NvcGU6IElTY29wZSkge1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZGlyZWN0aXZlIHN1cHBvcnRzIGEgdGV4dCBhcmVhIHRoYXQgd2lsbCBncm93IGFuZCBzaHJpbmsgYmFzZWQgb24gdGhlIHNpemUgb2YgdGhlIFxyXG4gKiBjb250ZW50IGluIHRoZSB0ZXh0IGFyZWEuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXNpemluZ1RleHRhcmVhRGlyZWN0aXZlKCk6IElEaXJlY3RpdmUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb250cm9sbGVyOiBSZXNpemluZ1RleHRhcmVhQ29udHJvbGxlcixcclxuICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiB0ZW1wbGF0ZVVybCxcclxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxyXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgbW9kZWw6ICc9bmdNb2RlbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpbms6IChzY29wZTogSVNjb3BlLFxyXG4gICAgICAgICAgICAgICBlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LFxyXG4gICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBJQXR0cmlidXRlcyxcclxuICAgICAgICAgICAgICAgY29udHJvbGxlcjogUmVzaXppbmdUZXh0YXJlYUNvbnRyb2xsZXIpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRyb2xsZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuYXR0cignbWluLXJvd3MnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGxldCBtaW5Sb3dzID0gZWxlbWVudC5hdHRyKCdtaW4tcm93cycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGlmIChtaW5Sb3dzLmluZGV4T2YoJyAnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFRoaXMgbWVhbnMgdGhhdCB0aGV5IHRyaWVkIHRvIG92ZXJyaWRlIHRoZSBtaW5pbXVtIG51bWJlciBvZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKiByb3dzIGFuZCB0aGUgQW5ndWxhciB0cmFuc2NsdWRlIGNvbWJpbmVkIHRoZSBhdHRyaWJ1dGVzIGluc3RlYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICogb2YgcmVwbGFjaW5nIHRoZW0uICBXZSBuZWVkIHRvIGZpeCB0aGF0IHVwLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXR0cignbWluLXJvd3MnLCBtaW5Sb3dzLnNsaWNlKDAsIG1pblJvd3MuaW5kZXhPZignICcpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgKiBXZSBuZWVkIHRvIHN0YXJ0IGJ5IGdldHRpbmcgc29tZSBiYXNpYyBtZWFzdXJlbWVudHMuICBXZVxyXG4gICAgICAgICAgICAgICAgICAgICogc2V0IHRoZSBmb250IHNpemUgYmVjYXVzZSB3ZSBuZWVkIHRvIGtub3cgdGhlIGNvcnJlY3QgbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICogaGVpZ2h0IG9yIHdlIGNhbid0IHJlc2l6ZSB0aGUgYm94IHByb3Blcmx5LlxyXG4gICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICBsZXQgdG1wVmFsID0gZWxlbWVudC52YWwoKTtcclxuICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgICAgIGxldCBiYXNlU2Nyb2xsSGVpZ2h0ID0gZWxlbWVudFswXS5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICBlbGVtZW50LnZhbCh0bXBWYWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY3NzKCdvdmVyZmxvdy15JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgZWxlbWVudC5jc3MoJ2ZvbnQtc2l6ZScsICcxNXB4Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgKiBUaGUgcmVzaXplIGZ1bmN0aW9uIGhhbmRsZXMgZGV0ZXJtaW5pbmcgdGhlIGFjdHVhbFxyXG4gICAgICAgICAgICAgICAgICAgICogc2l6ZSBvZiB0aGUgYm94LiBcclxuICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgbGV0IHJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGxldCBtaW5Sb3dzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5hdHRyKCdtaW4tcm93cycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblJvd3MgPSBOdW1iZXIoZWxlbWVudC5hdHRyKCdtaW4tcm93cycpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXR0cigncm93cycsIG1pblJvd3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGxldCByb3dzID0gTWF0aC5jZWlsKChlbGVtZW50WzBdLnNjcm9sbEhlaWdodCAtIGJhc2VTY3JvbGxIZWlnaHQpIC8gMTgpICsgbWluUm93cztcclxuICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmF0dHIoJ3Jvd3MnLCByb3dzKTtcclxuICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKCdtb2RlbCcsIGZ1bmN0aW9uKG5ld1ZhbHVlOiBzdHJpbmcsIG9sZFZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXNpemUoKTtcclxuICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYmluZCgnaW5wdXQnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuUmVzaXppbmdUZXh0YXJlYUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGNvbXBpbGUnXTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9pbnB1dC9yZXNpemluZy50ZXh0YXJlYS5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL2lucHV0L3Jlc2l6aW5nLnRleHRhcmVhLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8dGV4dGFyZWEgbmctdHJhbnNjbHVkZSBjbGFzcz1cXFwiaWFzUmVzaXppbmdUZXh0QXJlYVxcXCIgcm93cz1cXFwiM1xcXCIgbWluLXJvd3M9XFxcIjNcXFwiPjwvdGV4dGFyZWE+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvaW5wdXQvcmVzaXppbmcudGV4dGFyZWEuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSU5nTW9kZWxDb250cm9sbGVyLCBJU2NvcGUgfSBmcm9tICdhbmd1bGFyJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50LmRlY29yYXRvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdAJ1xyXG4gICAgfSxcclxuICAgIHJlcXVpcmU6IHtcclxuICAgICAgICBuZ01vZGVsOiAnXm5nTW9kZWwnXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc2VhcmNoLWJveC5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEJveENvbXBvbmVudCB7XHJcbiAgICBuZ01vZGVsOiBJTmdNb2RlbENvbnRyb2xsZXI7XHJcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JywgJyRzY29wZScgXTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksIHByaXZhdGUgJHNjb3BlOiBJU2NvcGUpIHtcclxuICAgIH1cclxuXHJcbiAgICAkb25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFNldCBkZWZhdWx0c1xyXG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyIHx8ICdTZWFyY2gnO1xyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXplIG5nTW9kZWxcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5uZ01vZGVsLiRyZW5kZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYudmFsdWUgPSBzZWxmLm5nTW9kZWwuJHZpZXdWYWx1ZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLiRzY29wZS4kd2F0Y2goXHJcbiAgICAgICAgICAgICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYudmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChuZXdWYWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5nTW9kZWwuJHNldFZpZXdWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFySW5wdXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5wdXRLZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMjc6IC8vIEVTQ0FQRVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhcklucHV0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxkaXYgY2xhc3M9XFxcImlhcy1zZWFyY2gtYm94LWNvbnRlbnRcXFwiPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCJcXHJcXG4gICAgICAgICAgIGF1dG9jb21wbGV0ZT1cXFwiZmFsc2VcXFwiXFxyXFxuICAgICAgICAgICBuZy1tb2RlbD1cXFwiJGN0cmwudmFsdWVcXFwiXFxyXFxuICAgICAgICAgICBuZy1hdHRyLXBsYWNlaG9sZGVyPVxcXCJ7eyRjdHJsLnBsYWNlaG9sZGVyfX1cXFwiXFxyXFxuICAgICAgICAgICBuZy1rZXlkb3duPVxcXCIkY3RybC5vbklucHV0S2V5RG93bigkZXZlbnQpXFxcIiAvPlxcclxcbiAgICA8aWFzLWljb24gaWNvbj1cXFwic2VhcmNoX3RoaWNrXFxcIj48L2lhcy1pY29uPlxcclxcbiAgICA8aWFzLWJ1dHRvbiBjbGFzcz1cXFwiaWFzLWljb24tYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwuY2xlYXJJbnB1dCgpXFxcIj5cXHJcXG4gICAgICAgIDxpYXMtaWNvbiBpY29uPVxcXCJjbG9zZV90aGlja1xcXCI+PC9pYXMtaWNvbj5cXHJcXG4gICAgPC9pYXMtYnV0dG9uPlxcclxcbjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSB9IGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBJVG9nZ2xlYWJsZSB9IGZyb20gJy4uL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IFRvZ2dsZVNlcnZpY2UgZnJvbSAnLi4vdG9nZ2xlL3RvZ2dsZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBuYW1lOiAnQCdcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9zaWRlLW5hdi5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlTmF2Q29tcG9uZW50IGltcGxlbWVudHMgSVRvZ2dsZWFibGUge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgb3BlbjogYm9vbGVhbjtcclxuXHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsnJGVsZW1lbnQnLCAnSWFzVG9nZ2xlU2VydmljZSddO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgcHJpdmF0ZSB0b2dnbGVTZXJ2aWNlOiBUb2dnbGVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgJG9uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZVNlcnZpY2UucmVnaXN0ZXIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgJG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLiRlbGVtZW50Lm9mZignY2xpY2snKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2lhcy1vcGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICB0aGlzLiRlbGVtZW50LmFkZENsYXNzKCdpYXMtb3BlbicpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzXG4gKiovIiwidmFyIHBhdGggPSAnY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwiaWFzLXNjcmltXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwuaGlkZSgpXFxcIj48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJpYXMtc2lkZS1uYXYtY29udGVudFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImlhcy1zaWRlLW5hdi1ib2R5XFxcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlxcclxcbjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC5kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBJQXVnbWVudGVkSlF1ZXJ5IH0gZnJvbSAnYW5ndWxhcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3RpbGUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZUNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsgJyRlbGVtZW50JyBdO1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnkpIHtcclxuICAgICAgICAkZWxlbWVudC5hdHRyKCd0YWJpbmRleCcsIDApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvdGlsZS90aWxlLmNvbXBvbmVudC50c1xuICoqLyIsInZhciBwYXRoID0gJ2NvbXBvbmVudHMvdGlsZS90aWxlLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJpYXMtdGlsZS1jb250ZW50XFxcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL3RpbGUvdGlsZS5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSwgSVRyYW5zY2x1ZGVGdW5jdGlvbiB9IGZyb20gJ2FuZ3VsYXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0cmFuc2NsdWRlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGVHcmlkQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyAnJGVsZW1lbnQnLCAnJHRyYW5zY2x1ZGUnIF07XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgJHRyYW5zY2x1ZGU6IElUcmFuc2NsdWRlRnVuY3Rpb24pIHtcclxuICAgICAgICAkdHJhbnNjbHVkZSgoY2xvbmU6IElBdWdtZW50ZWRKUXVlcnkpID0+IHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuYXBwZW5kKGNsb25lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3RpbGUtZ3JpZC90aWxlLWdyaWQuY29tcG9uZW50LnRzXG4gKiovIiwiaW1wb3J0IHsgSUF0dHJpYnV0ZXMsIElBdWdtZW50ZWRKUXVlcnksIElDb21waWxlU2VydmljZSwgSURpcmVjdGl2ZSwgSVNjb3BlIH0gZnJvbSAnYW5ndWxhcic7XHJcblxyXG5leHBvcnQgY2xhc3MgU29ydERpcmVjdGl2ZUNvbnRyb2xsZXIge1xyXG4gICAgc29ydEJpbmRpbmc6IHN0cmluZztcclxuICAgIHNvcnRFeHByZXNzaW9uOiBzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljICRpbmplY3QgPSBbJyRzY29wZSddO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkc2NvcGU6IElTY29wZSkge1xyXG4gICAgfVxyXG5cclxuICAgIHNvcnRPbihzb3J0T25Qcm9wZXJ0eTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc29ydEV4cHJlc3Npb24gPT09IHNvcnRPblByb3BlcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ydEV4cHJlc3Npb24gPSAnLScgKyBzb3J0T25Qcm9wZXJ0eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ydEV4cHJlc3Npb24gPSBzb3J0T25Qcm9wZXJ0eTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJHNjb3BlLiRldmFsKHRoaXMuc29ydEJpbmRpbmcgKyAnPVwiJyArIHRoaXMuc29ydEV4cHJlc3Npb24gKyAnXCInKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNvcnREaXJlY3RpdmUoKTogSURpcmVjdGl2ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnRyb2xsZXI6IFNvcnREaXJlY3RpdmVDb250cm9sbGVyLFxyXG4gICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgbGluazogKHNjb3BlOiBJU2NvcGUsXHJcbiAgICAgICAgICAgICAgIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksXHJcbiAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IElBdHRyaWJ1dGVzLFxyXG4gICAgICAgICAgICAgICBjb250cm9sbGVyOiBTb3J0RGlyZWN0aXZlQ29udHJvbGxlcikgPT4ge1xyXG4gICAgICAgICAgICBjb250cm9sbGVyLnNvcnRCaW5kaW5nID0gYXR0cmlidXRlc1snaWFzU29ydCddO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBJU29ydE9uU2NvcGUgZXh0ZW5kcyBJU2NvcGUge1xyXG4gICAgZ2V0U29ydEV4cHJlc3Npb24oKTogc3RyaW5nO1xyXG4gICAgc29ydE9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTb3J0T25EaXJlY3RpdmUoJGNvbXBpbGU6IElDb21waWxlU2VydmljZSk6IElEaXJlY3RpdmUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXF1aXJlOiAnXmlhc1NvcnQnLFxyXG4gICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgJ3NvcnRPbic6ICc8aWFzU29ydE9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGluazogKHNjb3BlOiBJU29ydE9uU2NvcGUsXHJcbiAgICAgICAgICAgICAgIGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksXHJcbiAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IElBdHRyaWJ1dGVzLFxyXG4gICAgICAgICAgICAgICBjb250cm9sbGVyOiBTb3J0RGlyZWN0aXZlQ29udHJvbGxlcikgPT4ge1xyXG4gICAgICAgICAgICBzY29wZS5nZXRTb3J0RXhwcmVzc2lvbiA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2xsZXIuc29ydEV4cHJlc3Npb247XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgc29ydCBpY29uc1xyXG4gICAgICAgICAgICBsZXQgaWNvbkh0bWwgPVxyXG4gICAgICAgICAgICAgICAgJzxpYXMtaWNvbiBpY29uPVwiZG93bl90aGlja1wiIG5nLWlmPVwiZ2V0U29ydEV4cHJlc3Npb24oKSA9PSBcXCcnICsgc2NvcGUuc29ydE9uICsgJ1xcJ1wiPjwvaWFzLWljb24+JyArXHJcbiAgICAgICAgICAgICAgICAnPGlhcy1pY29uIGljb249XCJ1cF90aGlja1wiIG5nLWlmPVwiZ2V0U29ydEV4cHJlc3Npb24oKSA9PSBcXCctJyArIHNjb3BlLnNvcnRPbiArICdcXCdcIj48L2lhcy1pY29uPic7XHJcbiAgICAgICAgICAgIGxldCBpY29uRWxlbWVudCA9ICRjb21waWxlKGljb25IdG1sKShzY29wZSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKGljb25FbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBpYXMtc29ydGFibGUgY2xhc3NcclxuICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcygnaWFzLXNvcnRhYmxlJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZWdpc3RlciBjbGljayBoYW5kbGVyXHJcbiAgICAgICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuJGFwcGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNvcnRPbihzY29wZVsnc29ydE9uJ10pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcblNvcnRPbkRpcmVjdGl2ZS4kaW5qZWN0ID0gWyckY29tcGlsZSddO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3RhYmxlL3NvcnQuZGlyZWN0aXZlLnRzXG4gKiovIiwiaW1wb3J0IHsgSUF0dHJpYnV0ZXMsIElBdWdtZW50ZWRKUXVlcnksIElEaXJlY3RpdmUsIElTY29wZSB9IGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgVG9nZ2xlU2VydmljZSBmcm9tICcuL3RvZ2dsZS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRvZ2dsZWFibGUge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgb3BlbjogYm9vbGVhbjtcclxuXHJcbiAgICBoaWRlKCk6IHZvaWQ7XHJcbiAgICBzaG93KGVsZW1lbnQ/OiBJQXVnbWVudGVkSlF1ZXJ5KTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRvZ2dsZURpcmVjdGl2ZSh0b2dnbGVTZXJ2aWNlOiBUb2dnbGVTZXJ2aWNlKTogSURpcmVjdGl2ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxpbms6IChzY29wZTogSVNjb3BlLCBlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCBhdHRyczogSUF0dHJpYnV0ZXMpID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCAoKSA9PiB7IHRvZ2dsZVNlcnZpY2UudG9nZ2xlQ29tcG9uZW50KGF0dHJzWydpYXNUb2dnbGUnXSwgZWxlbWVudCk7IH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzdHJpY3Q6ICdBJ1xyXG4gICAgfTtcclxufVxyXG5cclxuVG9nZ2xlRGlyZWN0aXZlLiRpbmplY3QgPSBbICdJYXNUb2dnbGVTZXJ2aWNlJyBdO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlLnRzXG4gKiovIiwiaW1wb3J0IHsgSUF1Z21lbnRlZEpRdWVyeSB9IGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBJVG9nZ2xlYWJsZSB9IGZyb20gJy4vdG9nZ2xlLmRpcmVjdGl2ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2dnbGVTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgdG9nZ2xlYWJsZUNvbXBvbmVudHM6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZWFibGVDb21wb25lbnRzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIodG9nZ2xlYWJsZUNvbXBvbmVudDogSVRvZ2dsZWFibGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZWFibGVDb21wb25lbnRzW3RvZ2dsZWFibGVDb21wb25lbnQubmFtZV0gPSB0b2dnbGVhYmxlQ29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUNvbXBvbmVudChjb21wb25lbnRJZDogc3RyaW5nLCBlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHRvZ2dsZWFibGVFbGVtZW50OiBJVG9nZ2xlYWJsZSA9IHRoaXMudG9nZ2xlYWJsZUNvbXBvbmVudHNbY29tcG9uZW50SWRdO1xyXG5cclxuICAgICAgICBpZiAodG9nZ2xlYWJsZUVsZW1lbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRvZ2dsZWFibGVFbGVtZW50Lm9wZW4pIHtcclxuICAgICAgICAgICAgdG9nZ2xlYWJsZUVsZW1lbnQuc2hvdyhlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZWFibGVFbGVtZW50LmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy90b2dnbGUvdG9nZ2xlLnNlcnZpY2UudHNcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQuZGVjb3JhdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vcGFuZWwuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHRyYW5zY2x1ZGU6IHRydWVcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWxDb21wb25lbnQge31cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9wYW5lbC9wYW5lbC5jb21wb25lbnQudHNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdjb21wb25lbnRzL3BhbmVsL3BhbmVsLmNvbXBvbmVudC5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJpYXMtcGFuZWwtY29udGVudFxcXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9wYW5lbC9wYW5lbC5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7OztBQ3REQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7O0FDTkE7QUFNQTtBQVVBO0FBQ0E7QUFYQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBUUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUZBO0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0ZBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBSkE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFiQTtBQWVBOzs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBT0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBaEJBO0FBREE7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNIQTtBQXlDQTtBQU1BO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUE5SEE7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFEQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBU0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDRkE7QUFFQTtBQUdBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFMQTtBQURBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBdUJBOzs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBREE7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNGQTtBQUVBO0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUxBO0FBREE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsREE7QUFvREE7Ozs7Ozs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFEQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQURBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUVBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBN0pBO0FBUEE7QUFSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQXlLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFEQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFZQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFEQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUM3TUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNGQTtBQUVBO0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUxBO0FBREE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEVBO0FBc0VBOzs7Ozs7O0FDckZBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBV0E7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWxDQTtBQUxBO0FBVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBWUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQXBCQTtBQUpBO0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQURBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFEQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7OztBQ0pBO0FBS0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQWRBO0FBSkE7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakNBO0FBbUNBOzs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7Ozs7Ozs7OztBQ2pCQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==