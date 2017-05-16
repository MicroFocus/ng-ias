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