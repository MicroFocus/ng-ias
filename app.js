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
	var config_1 = __webpack_require__(2);
	var routes_1 = __webpack_require__(3);
	var application_component_1 = __webpack_require__(4);
	var components_component_1 = __webpack_require__(7);
	var project_component_1 = __webpack_require__(9);
	var accordion_component_1 = __webpack_require__(11);
	var button_component_1 = __webpack_require__(13);
	var demo_content_component_1 = __webpack_require__(15);
	var date_picker_component_1 = __webpack_require__(17);
	var dialog_component_1 = __webpack_require__(19);
	var form_field_component_1 = __webpack_require__(22);
	var form_validation_component_1 = __webpack_require__(24);
	var icon_component_1 = __webpack_require__(26);
	var menu_component_1 = __webpack_require__(28);
	var side_nav_component_1 = __webpack_require__(30);
	var table_component_1 = __webpack_require__(32);
	var tabs_component_1 = __webpack_require__(34);
	var validator_directives_1 = __webpack_require__(36);
	angular_1.module('app', [
	    'ngAria',
	    'ngMessages',
	    'ng-ias',
	    'ng-prism',
	    'ui.router',
	])
	    .config(routes_1.default)
	    .config([
	    '$qProvider',
	    function ($qProvider) {
	        $qProvider.errorOnUnhandledRejections(false);
	    }
	])
	    .constant('config', config_1.default)
	    .component('application', application_component_1.default)
	    .component('components', components_component_1.default)
	    .component('project', project_component_1.default)
	    .component('accordionDocumentation', accordion_component_1.default)
	    .component('buttonDocumentation', button_component_1.default)
	    .component('dialogDocumentation', dialog_component_1.default)
	    .component('datePickerDocumentation', date_picker_component_1.default)
	    .component('demoContent', demo_content_component_1.default)
	    .component('formFieldDocumentation', form_field_component_1.default)
	    .component('formValidationDocumentation', form_validation_component_1.default)
	    .component('iconDocumentation', icon_component_1.default)
	    .component('menuDocumentation', menu_component_1.default)
	    .component('sideNavDocumentation', side_nav_component_1.default)
	    .component('tableDocumentation', table_component_1.default)
	    .component('tabsDocumentation', tabs_component_1.default)
	    .directive('asynchronousValidator', validator_directives_1.AsynchronousValidatorDirective)
	    .run(['$transitions', 'IasToggleService',
	    function ($transitions, toggleService) {
	        $transitions.onStart({
	            to: 'app.component.**',
	            from: 'app.component.**'
	        }, function () {
	            toggleService.hideComponent('componentSideNav');
	            document.getElementsByClassName('components-body')[0].scrollTop = 0;
	        });
	    }
	]);
	angular_1.bootstrap(document, ['app']);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = angular;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    companyName: 'Micro Focus',
	    projectName: 'ng-ias',
	    teamName: 'Micro Focus Identity, Access, and Security Group'
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	routes.$inject = ['$stateProvider', '$urlRouterProvider'];
	function routes($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.otherwise('/');
	    $stateProvider
	        .state('app', { url: '/?dir&theme', abstract: true, component: 'application' })
	        .state('app.project', { url: '', component: 'project' })
	        .state('app.kitchenSink', { url: 'kitchen-sink', component: 'kitchenSink' })
	        .state('app.component', { url: 'component/', abstract: true, component: 'components' })
	        .state('app.component.accordion', { url: 'accordion', component: 'accordionDocumentation' })
	        .state('app.component.button', { url: 'button', component: 'buttonDocumentation' })
	        .state('app.component.datePicker', { url: 'datePicker', component: 'datePickerDocumentation' })
	        .state('app.component.dialog', { url: 'dialog', component: 'dialogDocumentation' })
	        .state('app.component.formField', { url: 'form-field', component: 'formFieldDocumentation' })
	        .state('app.component.formValidation', { url: 'form-validation', component: 'formValidationDocumentation' })
	        .state('app.component.icon', { url: 'icon', component: 'iconDocumentation' })
	        .state('app.component.menu', { url: 'menu', component: 'menuDocumentation' })
	        .state('app.component.sideNav', { url: 'side-nav', component: 'sideNavDocumentation' })
	        .state('app.component.table', { url: 'table', component: 'tableDocumentation' })
	        .state('app.component.tabs', { url: 'tabs', component: 'tabsDocumentation' });
	}
	exports.default = routes;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var ApplicationComponent = (function () {
	    function ApplicationComponent($document, $state, $stateParams, config) {
	        this.$document = $document;
	        this.$state = $state;
	        this.$stateParams = $stateParams;
	        this.projectName = config.projectName;
	    }
	    ApplicationComponent.prototype.goToComponentsView = function ($event) {
	        $event.preventDefault();
	        this.$state.go('app.component.button');
	    };
	    ;
	    ApplicationComponent.prototype.isComponentsView = function () {
	        return /^app.component/.test(this.$state.current.name);
	    };
	    return ApplicationComponent;
	}());
	ApplicationComponent.$inject = ['$document', '$state', '$stateParams', 'config'];
	ApplicationComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(6)
	    })
	], ApplicationComponent);
	exports.default = ApplicationComponent;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var angular = __webpack_require__(1);
	function Component(options) {
	    return function (controller) { return angular.extend(options, { controller: controller }); };
	}
	exports.Component = Component;


/***/ },
/* 6 */
/***/ function(module, exports) {

	var path = 'components/application/application.component.html';
	var html = "<header>\n    <div class=\"ias-app-bar\">\n        <div class=\"ias-avatar\">\n            <img class=\"micro-logo\" src=\"images/IAS_UX_100.png\" alt=\"UX\">\n        </div>\n        <h3 class=\"ias-heading\" ng-bind=\"$ctrl.projectName\"></h3>\n    </div>\n    <div class=\"ias-nav\">\n        <ias-button id=\"componentsSideNavToggle\" class=\"ias-icon-button\" ng-if=\"$ctrl.isComponentsView()\"\n                    ias-toggle=\"componentSideNav\">\n            <ias-icon icon=\"hamburger_menu_thick\"></ias-icon>\n        </ias-button>\n        <a ui-sref=\"app.project\" ui-sref-active=\"ias-active\">Project</a>\n        <a ui-sref=\"app.component\" ui-sref-active=\"ias-active\" ng-click=\"$ctrl.goToComponentsView($event)\">\n            Components\n        </a>\n        <a ui-sref=\"app.layout\" ui-sref-active=\"ias-active\" class=\"ias-disabled\" title=\"Coming soon\">Layout</a>\n    </div>\n</header>\n\n<main>\n    <div ui-view></div>\n</main>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var ComponentsComponent = (function () {
	    function ComponentsComponent() {
	    }
	    return ComponentsComponent;
	}());
	ComponentsComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(8)
	    })
	], ComponentsComponent);
	exports.default = ComponentsComponent;


/***/ },
/* 8 */
/***/ function(module, exports) {

	var path = 'components/components/components.component.html';
	var html = "<ias-side-nav name=\"componentSideNav\">\n    <a ui-sref=\"app.component.accordion\" ui-sref-active=\"ias-active\">Accordion</a>\n    <a ui-sref=\"app.component.button\" ui-sref-active=\"ias-active\">Button</a>\n    <a ui-sref=\"app.component.datePicker\" ui-sref-active=\"ias-active\">Date Picker</a>\n    <a ui-sref=\"app.component.dialog\" ui-sref-active=\"ias-active\">Dialog</a>\n    <a ui-sref=\"app.component.formField\" ui-sref-active=\"ias-active\">Form Field</a>\n    <a ui-sref=\"app.component.formValidation\" ui-sref-active=\"ias-active\">Form Validation</a>\n    <a ui-sref=\"app.component.icon\" ui-sref-active=\"ias-active\">Icon</a>\n    <a ui-sref=\"app.component.menu\" ui-sref-active=\"ias-active\">Menu</a>\n    <a ui-sref=\"app.component.sideNav\" ui-sref-active=\"ias-active\">Side Nav</a>\n    <a ui-sref=\"app.component.table\" ui-sref-active=\"ias-active\">Table</a>\n    <a ui-sref=\"app.component.tabs\" ui-sref-active=\"ias-active\">Tabs</a>\n</ias-side-nav>\n\n<div class=\"components-body\">\n    <div ui-view class=\"ias-content-padding\"></div>\n</div>";
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
	var component_decorator_1 = __webpack_require__(5);
	var ProjectComponent = (function () {
	    function ProjectComponent(config) {
	        this.projectName = config.projectName;
	        this.teamName = config.teamName;
	    }
	    return ProjectComponent;
	}());
	ProjectComponent.$inject = ['config'];
	ProjectComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(10)
	    })
	], ProjectComponent);
	exports.default = ProjectComponent;


/***/ },
/* 10 */
/***/ function(module, exports) {

	var path = 'components/project/project.component.html';
	var html = "<div class=\"ias-content-padding\">\n    <section id=\"introduction\">\n        <h1 ng-bind=\"$ctrl.projectName\"></h1>\n        <p>\n            This project is the AngularJS UX library for Micro Focus Identity, Access, and Security products\n            (<span ng-bind=\"$ctrl.projectName\"></span>), the official CSS/JS framework for AngularJS web applications\n            built by Micro Focus Identity, Access, and Security Group. These guidelines help establish a consistent\n            look and feel among common user interface elements throughout Identity, Access, and Security Group\n            products. This documentation contains several interactive components in addition to providing guidelines\n            about components, user experience (UX) patterns, and application layout.\n    </section>\n\n    <section id=\"installation\">\n        <h2>Installation</h2>\n\n        <section>\n            <h3>Manual Installation</h3>\n\n            <p>\n                Download <a href=\"./ng-ias.css\" target=\"_blank\">ng-ias.css</a>\n                and <a href=\"./ng-ias.js\" target=\"_blank\">ng-ias.js</a>.\n                If you are using <a href=\"https://github.com/microfocus/ias-icons\" target=\"_blank\">ias-icons</a>,\n                add <a href=\"https://microfocus.github.io/ias-icons/ias-icons.css\" target=\"_blank\">ias-icons.css</a>\n                and the ias-icons\n                <a href=\"https://github.com/microfocus/ias-icons/tree/gh-pages/fonts\" target=\"_blank\">fonts\n                    directory</a> as well. Add the stylesheets to your HTML page:\n            </p>\n            <pre><code highlight=\"markup\">\n                &lt;link rel=\"stylesheet\" href=\"ng-ias.css\" /&gt;\n                &lt;link rel=\"stylesheet\" href=\"ias-icons.css\" /&gt;\n                &lt;script src=\"ng-ias.js\"&gt;&lt;/script&gt;\n            </code></pre>\n        </section>\n\n        <section>\n            <h3>NPM</h3>\n            <pre><code highlight=\"clike\">\n                npm install --save --save-exact git@github.com:microfocus/ng-ias\n            </code></pre>\n        </section>\n    </section>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

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
	var component_decorator_1 = __webpack_require__(5);
	var AccordionComponent = (function () {
	    function AccordionComponent(toggleService) {
	        this.toggleService = toggleService;
	        this.items = new Array(10);
	    }
	    AccordionComponent.prototype.anyOpen = function (groupId) {
	        return this.toggleService.anyOpen(groupId);
	    };
	    AccordionComponent.prototype.toggleAll = function (groupId) {
	        this.toggleService.toggleGroup(groupId);
	    };
	    return AccordionComponent;
	}());
	AccordionComponent.$inject = ['IasToggleService'];
	AccordionComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(12)
	    })
	], AccordionComponent);
	exports.default = AccordionComponent;


/***/ },
/* 12 */
/***/ function(module, exports) {

	var path = 'components/docs/accordion/accordion.component.html';
	var html = "<h1 class=\"ias-page-title\">Accordion</h1>\n\n<div class=\"demo-section\">\n    <ias-accordion toggle-repeat-code>\n        <ias-accordion-item toggle-mutex-group=\"accordion1\" name=\"acc1\">\n            <ias-accordion-header ias-toggle=\"acc1\" >Personal Information</ias-accordion-header>\n            <div class=\"ias-accordion-content\">\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos facilis repellendus\n                    voluptatibus? Ad aperiam cupiditate deleniti molestiae perspiciatis sapiente! Amet aspernatur\n                    deleniti dignissimos doloremque fuga hic laborum sapiente voluptatem!</p>\n            </div>\n        </ias-accordion-item>\n        <ias-accordion-item toggle-mutex-group=\"accordion1\" name=\"acc2\">\n            <ias-accordion-header ias-toggle=\"acc2\">Account <ias-icon icon=\"message_error_thick\" class=\"ias-error\"></ias-icon></ias-accordion-header>\n            <div class=\"ias-accordion-content\">\n                <p>Ab accusantium consequuntur dolor impedit natus nobis placeat rem sunt voluptates. Adipisci aperiam\n                    doloremque earum facere impedit laudantium ratione repellendus sunt voluptatem? Alias distinctio\n                    excepturi fuga id nobis quia tenetur.</p>\n            </div>\n        </ias-accordion-item>\n    </ias-accordion>\n</div>\n\n<div class=\"demo-section\">\n    <h3>Different start item</h3>\n    <p class=\"ias-page-instructions\">By default, [toggle-mutex-groups] show the first component on start. Use the\n        [toggle-start-open] directive to toggle a specific item on start. If toggle-start-open is used on multiple\n        accordion items, the last one declared will be used.</p>\n\n    <ias-accordion toggle-repeat-code>\n        <ias-accordion-item toggle-mutex-group=\"accordion2\" name=\"item1\">\n            <ias-accordion-header ias-toggle=\"item1\">Accordion Item 1</ias-accordion-header>\n            <div class=\"ias-accordion-content\">\n                <p>Accordion Item 1 content</p>\n            </div>\n        </ias-accordion-item>\n        <ias-accordion-item toggle-mutex-group=\"accordion2\" name=\"item2\" toggle-start-open=\"true\">\n            <ias-accordion-header ias-toggle=\"item2\">Accordion Item 2</ias-accordion-header>\n            <div class=\"ias-accordion-content\">\n                <p>Accordion Item 2 content</p>\n            </div>\n        </ias-accordion-item>\n    </ias-accordion>\n</div>\n\n<div class=\"demo-section\">\n    <h3>[toggle-group]</h3>\n    <p class=\"ias-page-instructions\">[toggle-mutex-groups require that one and only one component is showing at all\n        times and are the IAS preferred method for accordions. Use the [toggle-group] attribute instead of\n        [toggle-mutex-group] to allow multiple accordion items to show or collapse simultaneously.</p>\n\n    <ias-accordion toggle-repeat-code>\n        <ias-accordion-item toggle-group=\"accordion3\" name=\"item3\">\n            <ias-accordion-header ias-toggle=\"item3\">Accordion Item 3</ias-accordion-header>\n            <div class=\"ias-accordion-content\">\n                <p>Accordion Item 3 content</p>\n            </div>\n        </ias-accordion-item>\n        <ias-accordion-item toggle-group=\"accordion3\" name=\"item4\">\n            <ias-accordion-header ias-toggle=\"item4\">Accordion Item 4</ias-accordion-header>\n            <div class=\"ias-accordion-content\">\n                <p>Accordion Item 4 content</p>\n            </div>\n        </ias-accordion-item>\n    </ias-accordion>\n</div>\n\n<div class=\"demo-section\">\n    <h3>Open/Close all</h3>\n    <p class=\"ias-page-instructions\">When a [toggle-group] has many accordion items, it may be desirable to provide\n        a way to open or close all items simultaneously. The IasToggleService provides additional methods to facilitate\n        this interaction.</p>\n\n    <ias-accordion repeat-as-code prism-insert-id=\"accordionCode\">\n        <div class=\"ias-accordion-link\">\n            <a ng-click=\"$ctrl.toggleAll('accordion4')\"\n               ng-bind=\"$ctrl.anyOpen('accordion4') ? 'Close All' : 'Open All'\"></a>\n        </div>\n        <ias-accordion-item toggle-group=\"accordion4\" name=\"{{'groupItem' + $index}}\"\n                            ng-repeat=\"item in $ctrl.items track by $index\">\n            <ias-accordion-header ias-toggle=\"{{'groupItem' + $index}}\">Accordion Item {{$index}}</ias-accordion-header>\n            <div class=\"ias-accordion-content\">\n                <p>Accordion Item {{$index}} content</p>\n            </div>\n        </ias-accordion-item>\n    </ias-accordion>\n\n    <toggleable-code id=\"accordionCode\">\n        <pre><code highlight>\n            anyOpen(groupId): boolean {\n                return this.toggleService.anyOpen(groupId);\n            }\n\n            toggleAll(groupId): void {\n                this.toggleService.toggleGroup(groupId);\n            }\n        </code></pre>\n    </toggleable-code>\n</div>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

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
	var component_decorator_1 = __webpack_require__(5);
	var ButtonComponent = (function () {
	    function ButtonComponent() {
	    }
	    ButtonComponent.prototype.simpleButton = function () {
	        alert('You pressed the simple button');
	    };
	    ButtonComponent.prototype.iconButton = function () {
	        alert('You pressed an icon button');
	    };
	    return ButtonComponent;
	}());
	ButtonComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(14)
	    })
	], ButtonComponent);
	exports.default = ButtonComponent;


/***/ },
/* 14 */
/***/ function(module, exports) {

	var path = 'components/docs/button/button.component.html';
	var html = "<h1 class=\"ias-page-title\">Button</h1>\n\n<p class=\"ias-page-instructions\">These button types provide simple interaction and styling to a standard HTML button and\n    icon button. Icon buttons show an icon without a border instead of a button.\n</p>\n\n<div class=\"demo-section\">\n    <h4>Text button</h4>\n    <div toggle-repeat-code=\"inner\">\n        <ias-button ng-click=\"$ctrl.simpleButton()\">Simple button</ias-button>\n\n        <ias-button ng-click=\"$ctrl.simpleButton()\" class=\"ias-cta\">Special Button</ias-button>\n\n        <ias-button ng-click=\"$ctrl.simpleButton()\" ng-disabled=\"true\">Disabled button</ias-button>\n    </div>\n</div>\n\n<div class=\"demo-section\">\n    <h4 class=\"ias-page-heading-4\">Icon button</h4>\n\n    <div toggle-repeat-code=\"inner\">\n        <ias-button ng-click=\"$ctrl.iconButton()\" class=\"ias-icon-button\" title=\"Help button\">\n            <ias-icon icon=\"help_thick\"></ias-icon>\n        </ias-button>\n\n        <ias-button ng-click=\"$ctrl.iconButton()\" class=\"ias-icon-button\" title=\"Favorite button\">\n            <ias-icon icon=\"favorite_outline_thin\"></ias-icon>\n        </ias-button>\n\n        <ias-button ng-click=\"$ctrl.iconButton()\" class=\"ias-icon-button\" title=\"Search button\">\n            <ias-icon icon=\"search_thick\"></ias-icon>\n        </ias-button>\n\n        <ias-button ng-click=\"$ctrl.iconButton()\" class=\"ias-icon-button\" title=\"Close button\">\n            <ias-icon icon=\"close_thick\"></ias-icon>\n        </ias-button>\n    </div>\n</div>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var DemoContentComponent = (function () {
	    function DemoContentComponent() {
	    }
	    return DemoContentComponent;
	}());
	DemoContentComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(16),
	        transclude: true
	    })
	], DemoContentComponent);
	exports.default = DemoContentComponent;


/***/ },
/* 16 */
/***/ function(module, exports) {

	var path = 'components/components/demo-content.component.html';
	var html = "<div ng-transclude></div>\n<table class=\"ias-table\">\n    <thead>\n    <tr>\n        <th>Name</th>\n        <th>Title</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n        <td>\n            <ias-icon icon=\"favorite_outline_thin\"></ias-icon>\n            <a ui-sref=\".\">Antonio Barboni</a>\n        </td>\n        <td>UX Director</td>\n    </tr>\n    <tr>\n        <td>\n            <ias-icon icon=\"favorite_outline_thin\"></ias-icon>\n            <a ui-sref=\".\">Camelot Rinkus</a>\n        </td>\n        <td>Assistant to the UX Director</td>\n    </tr>\n    <tr>\n        <td>\n            <ias-icon icon=\"favorite_outline_thin\"></ias-icon>\n            <a ui-sref=\".\">Christian Pledger</a>\n        </td>\n        <td>Secret assistant to the UX Director</td>\n    </tr>\n    </tbody>\n</table>";
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
	var component_decorator_1 = __webpack_require__(5);
	var DatePickerComponent = (function () {
	    function DatePickerComponent() {
	    }
	    return DatePickerComponent;
	}());
	DatePickerComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(18)
	    })
	], DatePickerComponent);
	exports.default = DatePickerComponent;


/***/ },
/* 18 */
/***/ function(module, exports) {

	var path = 'components/docs/date-picker/date-picker.component.html';
	var html = "<h1 class=\"ias-page-title\">Date Picker</h1>\n\n<div class=\"ias-input-container\">\n    <label for=\"birthday\">Date of Birth <span class=\"ias-required\">*</span></label>\n    <input id=\"birthday\" name=\"birthday\" type=\"date\" ng-model=\"$ctrl.birthday\" novalidate>\n    <!--<ias-button class=\"ias-icon-button\">-->\n        <!--<ias-icon icon=\"date_thick\"></ias-icon>-->\n    <!--</ias-button>-->\n</div>\n<ias-date-picker ng-model=\"$ctrl.birthday\" toggle-repeat-code></ias-date-picker>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var customDialogTemplateUrl = __webpack_require__(20);
	var DialogComponent = (function () {
	    function DialogComponent(IasDialogService) {
	        this.IasDialogService = IasDialogService;
	    }
	    DialogComponent.prototype.openAlertDialog = function () {
	        this.IasDialogService
	            .alert({
	            textContent: 'You opened an alert dialog.',
	            title: 'Alert!'
	        })
	            .then(function () {
	            alert('resolved');
	        }, function () {
	            alert('rejected');
	        });
	    };
	    DialogComponent.prototype.openConfirmationDialog = function () {
	        this.IasDialogService
	            .confirm({
	            textContent: 'Are you sure?',
	            title: 'Confirmation'
	        })
	            .then(function () {
	            alert('confirmed');
	        }, function () {
	            alert('declined');
	        });
	    };
	    DialogComponent.prototype.openCustomDialog = function () {
	        this.IasDialogService
	            .open({
	            controller: ['$scope', 'IasDialogService', function ($scope, IasDialogService) {
	                    $scope.title = 'Custom Template';
	                    $scope.close = function () {
	                        IasDialogService.close();
	                    };
	                }],
	            template: '<div class="ias-dialog">' +
	                '    <div class="ias-dialog-container">' +
	                '        <div class="ias-dialog-content">' +
	                '            <div class="ias-dialog-label">' +
	                '                <div class="ias-title">{{title}}</div>' +
	                '            </div>' +
	                '            <p>Add your content here</p>' +
	                '            <div class="ias-actions">' +
	                '               <ias-button ng-click="close()">Got It!</ias-button>' +
	                '            </div>' +
	                '        </div>' +
	                '    </div>' +
	                '</div>'
	        });
	    };
	    DialogComponent.prototype.openPromptDialog = function () {
	        this.IasDialogService
	            .prompt({
	            cancel: 'Cancel',
	            ok: 'OK',
	            textContent: 'What do you want to say?',
	            title: 'Prompt'
	        })
	            .then(function (result) {
	            alert(result);
	        }, function () {
	            alert('declined');
	        });
	    };
	    DialogComponent.prototype.openTemplateUrlCustomDialog = function () {
	        this.IasDialogService
	            .open({
	            controller: ['$scope', 'IasDialogService', function ($scope, IasDialogService) {
	                    $scope.title = 'Custom Template';
	                    $scope.close = function () {
	                        IasDialogService.close();
	                    };
	                }],
	            templateUrl: customDialogTemplateUrl
	        });
	    };
	    return DialogComponent;
	}());
	DialogComponent.$inject = ['IasDialogService'];
	DialogComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(21)
	    })
	], DialogComponent);
	exports.default = DialogComponent;


/***/ },
/* 20 */
/***/ function(module, exports) {

	var path = 'components/docs/dialog/custom-dialog.template.html';
	var html = "<div class=\"ias-dialog\">\n    <div class=\"ias-dialog-container\">\n        <div class=\"ias-dialog-content\">\n            <div class=\"ias-dialog-label\">\n                <div class=\"ias-title\">{{title}}</div>\n            </div>\n            <p>Add your content here</p>\n            <div class=\"ias-actions\">\n                <ias-button ng-click=\"close()\">Got It!</ias-button>\n            </div>\n        </div>\n    </div>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 21 */
/***/ function(module, exports) {

	var path = 'components/docs/dialog/dialog.component.html';
	var html = "<h1 class=\"ias-page-title\">Dialog</h1>\n<p class=\"ias-page-instructions\">\n    Modal dialogs help to focus a user's attention to a small task or message. The content of the page\n    is darkened to shift focus from the page content to the task.\n</p>\n<p class=\"ias-page-instructions\">\n    There are pre-configured dialogs that can be quickly integrated into an application; they are alert, confirmation,\n    and prompt. For more fine-grained control, use a custom dialog (optionally with a controller).\n</p>\n<p class=\"ias-page-instructions\">\n    Given the asynchronous nature of modal dialogs, Promises are used to determine the result of a modal dialog\n    interaction. The methods for showing a modal dialog through the DialogService return promises, which are resolved\n    on success or positive actions (i.e. click 'Ok', or 'Save') and are rejected on negative actions (i.e. click outside\n    dialog, click 'Cancel' button, etc.).\n</p>\n\n<h3>Examples</h3>\n\n<div class=\"demo-section\">\n    <h4>Alert Dialog</h4>\n    <p>Use alert dialogs to notify users of important information.</p>\n\n    <ias-button ng-click=\"$ctrl.openAlertDialog()\" repeat-as-code prism-insert-id=\"code-01\">View Alert Dialog</ias-button>\n\n\t<toggleable-code id=\"code-01\">\n\t\t<pre><code highlight>\n            openAlertDialog = function () {\n                IasDialogService\n                    .alert({\n                        textContent: 'You opened an alert dialog.',\n                        title: 'Alert!'\n                    })\n                    .then(\n                        function () {\n                            alert('resolved');\n                        },\n                        function () {\n                            alert('rejected');\n                        });\n                };\n        </code></pre>\n\t</toggleable-code>\n</div>\n\n<div class=\"demo-section\">\n    <h4>Confirmation Dialog</h4>\n    <p>Use confirmation dialogs to request confirmation of some action. If user confirms, promise is resolved.\n    If user cancels the dialog or declines the promise is rejected.</p>\n\n    <ias-button ng-click=\"$ctrl.openConfirmationDialog()\" repeat-as-code prism-insert-id=\"code-02\">View Confirmation Dialog</ias-button>\n\n\t<toggleable-code id=\"code-02\">\n        <pre><code highlight>\n            openConfirmationDialog = function () {\n                IasDialogService\n                    .confirm({\n                        textContent: 'Are you sure?',\n                        title: 'Confirmation'\n                    })\n                    .then(\n                        function () {\n                            alert('confirmed');\n                        },\n                        function () {\n                            alert('declined');\n                        });\n            };\n        </code></pre>\n\t</toggleable-code>\n</div>\n\n<div class=\"demo-section\">\n    <h4>Prompt Dialog</h4>\n\n    <ias-button ng-click=\"$ctrl.openPromptDialog()\" repeat-as-code prism-insert-id=\"code-03\">View Prompt Dialog</ias-button>\n\n\t<toggleable-code id=\"code-03\">\n        <pre><code highlight>\n            openPromptDialog = function () {\n                IasDialogService\n                    .prompt({\n                        cancel: 'Cancel',\n                        ok: 'OK',\n                        textContent: 'What do you want to say?',\n                        title: 'Prompt'\n                    })\n                    .then(\n                        function (result) {\n                            alert(result);\n                        },\n                        function () {\n                            alert('declined');\n                        });\n            };\n        </code></pre>\n\t</toggleable-code>\n</div>\n\n<div class=\"demo-section\">\n    <h4>Custom Dialog</h4>\n\n    <ias-button ng-click=\"$ctrl.openCustomDialog()\" repeat-as-code prism-insert-id=\"code-04\">\n        View Custom Dialog\n    </ias-button>\n\n\t<toggleable-code id=\"code-04\">\n        <pre><code highlight>\n            openCustomDialog = function() {\n                IasDialogService\n                    .open({\n                        controller: function ($scope, IasDialogService) {\n                            $scope.title = 'Custom Template';\n                            $scope.close = function() {\n                                IasDialogService.close();\n                            };\n                        },\n                        template:\n                            '&lt;div class=&quot;ias-dialog&quot;&gt;' +\n                            '    &lt;div class=&quot;ias-dialog-container&quot;&gt;' +\n                            '        &lt;div class=&quot;ias-dialog-content&quot;&gt;' +\n                            '            &lt;div class=&quot;ias-dialog-label&quot;&gt;' +\n                            '                &lt;div class=&quot;ias-title&quot;&gt;{{title}}&lt;/div&gt;' +\n                            '            &lt;/div&gt;' +\n                            '            &lt;p&gt;Add your content here&lt;/p&gt;' +\n                            '            &lt;div class=&quot;ias-actions&quot;&gt;' +\n                            '               &lt;ias-button ng-click=&quot;close()&quot;&gt;Got It!&lt;/ias-button&gt;' +\n                            '            &lt;/div&gt;' +\n                            '        &lt;/div&gt;' +\n                            '    &lt;/div&gt;' +\n                            '&lt;/div&gt;'\n                    });\n            };\n        </code></pre>\n\t</toggleable-code>\n\n    <h4>Custom Dialog using Template Url</h4>\n\n    <ias-button ng-click=\"$ctrl.openTemplateUrlCustomDialog()\" repeat-as-code prism-insert-id=\"code-05\">\n        View Template Url Custom Dialog\n    </ias-button>\n\n    <toggleable-code id=\"code-05\">\n        <pre><code highlight>\n            openTemplateUrlCustomDialog = function() {\n                IasDialogService\n                    .open({\n                        controller: function ($scope, IasDialogService) {\n                            $scope.title = 'Custom Template';\n                            $scope.close = function() {\n                                IasDialogService.close();\n                            };\n                        },\n                        templateUrl: './custom-dialog.template.html'\n                    });\n            };\n        </code></pre>\n    </toggleable-code>\n</div>";
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
	var component_decorator_1 = __webpack_require__(5);
	var STATES = [
	    { name: 'Alabama', code: 'AL' },
	    { name: 'Alaska', code: 'AK' },
	    { name: 'Arizona', code: 'AZ' },
	    { name: 'Arkansas', code: 'AR' },
	    { name: 'California', code: 'CA' },
	    { name: 'Colorado', code: 'CO' },
	    { name: 'Connecticut', code: 'CT' },
	    { name: 'Delaware', code: 'DE' },
	    { name: 'District of Columbia', code: 'DC' },
	    { name: 'Florida', code: 'FL' },
	    { name: 'Georgia', code: 'GA' },
	    { name: 'Hawaii', code: 'HI' },
	    { name: 'Idaho', code: 'ID' },
	    { name: 'Illinois', code: 'IL' },
	    { name: 'Indiana', code: 'IN' },
	    { name: 'Iowa', code: 'IA' },
	    { name: 'Kansas', code: 'KS' },
	    { name: 'Kentucky', code: 'KY' },
	    { name: 'Louisiana', code: 'LA' },
	    { name: 'Maine', code: 'ME' },
	    { name: 'Maryland', code: 'MD' },
	    { name: 'Massachusetts', code: 'MA' },
	    { name: 'Michigan', code: 'MI' },
	    { name: 'Minnesota', code: 'MN' },
	    { name: 'Mississippi', code: 'MS' },
	    { name: 'Missouri', code: 'MO' },
	    { name: 'Montana', code: 'MT' },
	    { name: 'Nebraska', code: 'NE' },
	    { name: 'Nevada', code: 'NV' },
	    { name: 'New Hampshire', code: 'NH' },
	    { name: 'New Jersey', code: 'NJ' },
	    { name: 'New Mexico', code: 'NM' },
	    { name: 'New York', code: 'NY' },
	    { name: 'North Carolina', code: 'NC' },
	    { name: 'North Dakota', code: 'ND' },
	    { name: 'Ohio', code: 'OH' },
	    { name: 'Oklahoma', code: 'OK' },
	    { name: 'Oregon', code: 'OR' },
	    { name: 'Pennsylvania', code: 'PA' },
	    { name: 'Rhode Island', code: 'RI' },
	    { name: 'South Carolina', code: 'SC' },
	    { name: 'South Dakota', code: 'SD' },
	    { name: 'Tennessee', code: 'TN' },
	    { name: 'Texas', code: 'TX' },
	    { name: 'Utah', code: 'UT' },
	    { name: 'Vermont', code: 'VT' },
	    { name: 'Virginia', code: 'VA' },
	    { name: 'Washington', code: 'WA' },
	    { name: 'West Virginia', code: 'WV' },
	    { name: 'Wisconsin', code: 'WI' },
	    { name: 'Wyoming', code: 'WY' }
	];
	var FormFieldComponent = (function () {
	    function FormFieldComponent($q) {
	        this.$q = $q;
	    }
	    FormFieldComponent.prototype.search = function (query) {
	        return STATES
	            .map(function (state) { return state.name; })
	            .filter(function (state) { return state.match(new RegExp(query, 'i')); })
	            .slice(0, 10);
	    };
	    FormFieldComponent.prototype.searchAsync = function (query) {
	        return this.$q.resolve(STATES
	            .filter(function (state) { return state.name.match(new RegExp(query, 'i')); })
	            .slice(0, 10));
	    };
	    FormFieldComponent.prototype.onAutocompleteItemSelected = function ($item) {
	        this.searchText = $item;
	    };
	    FormFieldComponent.prototype.onAsyncAutocompleteItemSelected = function ($item) {
	        this.asyncSearchText = $item.name;
	    };
	    return FormFieldComponent;
	}());
	FormFieldComponent.$inject = ['$q'];
	FormFieldComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(23)
	    })
	], FormFieldComponent);
	exports.default = FormFieldComponent;


/***/ },
/* 23 */
/***/ function(module, exports) {

	var path = 'components/docs/form-field/form-field.component.html';
	var html = "<h1 class=\"ias-page-title\">Form Field</h1>\n\n<div class=\"demo-section\">\n    <h4>Search Box</h4>\n\n    <ias-search-box ng-model=\"$ctrl.query\" ng-model-options=\"{debounce: 200}\" toggle-repeat-code></ias-search-box>\n</div>\n\n<div class=\"demo-section\">\n    <h4>Autocomplete (sync)</h4>\n\n    <ias-autocomplete placeholder=\"State\"\n                      ias-items=\"state in $ctrl.search($query)\"\n                      ias-on-item-selected=\"$ctrl.onAutocompleteItemSelected($item)\"\n                      ias-search-text=\"$ctrl.searchText\"\n                      repeat-as-code prism-insert-id=\"code01\">\n    </ias-autocomplete>\n\n    <toggleable-code id=\"code01\">\n        <pre><code highlight>\n        const STATES = [\n            'Alabama',\n            'Alaska',\n            ...\n            'Wisconsin',\n            'Wyoming'\n        ];\n\n        search(query: string): string[] {\n            return STATES\n                .filter((state) => state.match(new RegExp(query, 'i')))\n                .slice(0, 10);\n        }\n\n        onAutocompleteItemSelected($item): void {\n            this.searchText = $item.name;\n        }\n        </code></pre>\n    </toggleable-code>\n</div>\n\n<div class=\"demo-section\">\n    <h4>Autocomplete (async)</h4>\n\n    <ias-autocomplete placeholder=\"State\"\n                      ias-debounce=\"700\"\n                      ias-items=\"state in $ctrl.searchAsync($query)\"\n                      ias-on-item-selected=\"$ctrl.onAsyncAutocompleteItemSelected($item)\"\n                      ias-search-text=\"$ctrl.asyncSearchText\"\n                      repeat-as-code prism-insert-id=\"code02\">\n        <template><span ng-bind=\"state.code + ' - ' + state.name\"></span></template>\n    </ias-autocomplete>\n\n    <toggleable-code id=\"code02\">\n        <pre><code highlight>\n        const STATES = [\n            {name: 'Alabama', code: 'AL'},\n            {name: 'Alaska', code: 'AK'},\n            ...\n            {name: 'Wisconsin', code: 'WI'},\n            {name: 'Wyoming', code: 'WY'}\n        ];\n\n        searchAsync(query: string): Promise&lt;any[]&gt; {\n            return this.$q.resolve(STATES\n                .filter((state) => state.name.match(new RegExp(query, 'i')))\n                .slice(0, 10));\n        }\n\n        onAsyncAutocompleteItemSelected($item): void {\n            this.asyncSearchText = $item.name;\n        }\n        </code></pre>\n    </toggleable-code>\n</div>";
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
	var component_decorator_1 = __webpack_require__(5);
	var FormValidationComponent = (function () {
	    function FormValidationComponent() {
	    }
	    return FormValidationComponent;
	}());
	FormValidationComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(25)
	    })
	], FormValidationComponent);
	exports.default = FormValidationComponent;


/***/ },
/* 25 */
/***/ function(module, exports) {

	var path = 'components/docs/form-validation/form-validation.component.html';
	var html = "<h1 class=\"ias-page-title\">Form Validation</h1>\n\n<form name=\"$ctrl.demoForm\">\n    <div class=\"demo-section\">\n        <h4>Min/Max length</h4>\n        <div toggle-repeat-code=\"inner\">\n            <div class=\"ias-input-container\">\n                <label for=\"min\">Min Length (min 3 characters) <span class=\"ias-required\">*</span></label>\n                <input id=\"min\" name=\"min\" type=\"text\" ng-model=\"$ctrl.min\" ng-minlength=\"3\" required novalidate>\n                <div class=\"ias-input-messages\"\n                     ng-messages=\"$ctrl.demoForm.min.$error\"\n                     ng-show=\"$ctrl.demoForm.min.$touched\">\n                    <div class=\"ias-input-message\" ng-message=\"required\">Field is required</div>\n                    <div class=\"ias-input-message\" ng-message=\"minlength\">Must be at least 3 characters</div>\n                </div>\n            </div>\n            <div class=\"ias-input-container\">\n                <label for=\"max\">Max Length (max 5 characters) <span class=\"ias-required\">*</span></label>\n                <input id=\"max\" name=\"max\" type=\"text\" ng-model=\"$ctrl.max\" ng-maxlength=\"5\" required novalidate>\n                <div class=\"ias-input-messages\"\n                     ng-messages=\"$ctrl.demoForm.max.$error\"\n                     ng-show=\"$ctrl.demoForm.max.$touched\">\n                    <div class=\"ias-input-message\" ng-message=\"required\">Field is required</div>\n                    <div class=\"ias-input-message\" ng-message=\"maxlength\">Must be 5 characters or less</div>\n                </div>\n            </div>\n        </div>\n\n        <h4>Email</h4>\n        <div class=\"ias-input-container\" toggle-repeat-code>\n            <label for=\"email\">Email <span class=\"ias-required\">*</span></label>\n            <input id=\"email\" name=\"email\" type=\"text\" ng-model=\"$ctrl.email\" ias-email required novalidate\n                placeholder=\"yourname@host.com\">\n            <div class=\"ias-input-messages\"\n                 ng-messages=\"$ctrl.demoForm.email.$error\"\n                 ng-show=\"$ctrl.demoForm.email.$touched\">\n                <div class=\"ias-input-message\" ng-message=\"required\">Field is required</div>\n                <div class=\"ias-input-message\" ng-message=\"iasEmail\">Enter a valid email address</div>\n            </div>\n        </div>\n\n        <h4>Password</h4>\n        <div class=\"ias-input-container\" toggle-repeat-code>\n            <label for=\"password\">Password <span class=\"ias-required\">*</span></label>\n            <input id=\"password\" name=\"password\" type=\"password\"\n                   ng-model=\"$ctrl.password\" ng-minlength=\"6\" ng-maxlength=\"12\" ias-password=\"{changeCase: false, number: true, special: '[!%@#]'}\" required novalidate>\n            <div class=\"ias-input-messages\"\n                 ng-messages=\"$ctrl.demoForm.password.$error\"\n                 ng-show=\"$ctrl.demoForm.password.$touched\">\n                <div class=\"ias-input-message\" ng-message=\"required\">Field is required</div>\n                <div class=\"ias-input-message\" ng-message=\"iasPasswordNumber\">Must have a number</div>\n                <div class=\"ias-input-message\" ng-message=\"iasPasswordCase\">Must have upper and lowercase characters</div>\n                <div class=\"ias-input-message\" ng-message=\"iasPasswordSpecial\">Must contain a special character (!%@#)</div>\n                <div class=\"ias-input-message\" ng-message=\"minlength\">Must be at least 6 characters</div>\n                <div class=\"ias-input-message\" ng-message=\"maxlength\">Must be 12 characters or less</div>\n            </div>\n        </div>\n\n        <p>Use a matching validator to validate that a field contains the same value as another field. The most common\n            use case for this validator is a password confirmation field.</p>\n        <div class=\"ias-input-container\" toggle-repeat-code>\n            <label for=\"confirmPassword\">Confirm password <span class=\"ias-required\">*</span></label>\n            <input id=\"confirmPassword\" name=\"confirmPassword\" type=\"password\"\n                   ng-model=\"$ctrl.confirmPassword\" ias-matches=\"$ctrl.password\" required novalidate>\n            <div class=\"ias-input-messages\"\n                 ng-messages=\"$ctrl.demoForm.confirmPassword.$error\"\n                 ng-show=\"$ctrl.demoForm.confirmPassword.$touched\">\n                <div class=\"ias-input-message\" ng-message=\"required\">Field is required</div>\n                <div class=\"ias-input-message\" ng-message=\"iasMatches\">Must match password</div>\n            </div>\n        </div>\n\n        <h4>Asynchronous</h4>\n        <div class=\"ias-input-container\" toggle-repeat-code>\n            <label for=\"asyncField\">\n                Async Field  <span class=\"ias-required\">*</span>\n                <img ng-if=\"$ctrl.demoForm.asyncField.$pending.asyncValidator\" class=\"ias-wait-icon ias-small\" src=\"images/waiting_25.gif\" alt=\"\">\n                <ias-icon ng-if=\"!$ctrl.demoForm.asyncField.$pristine && !$ctrl.demoForm.asyncField.$pending.asyncValidator && !$ctrl.demoForm.asyncField.$valid\" icon=\"message_error_thick\" style=\"color:#e50000\"></ias-icon>\n                <ias-icon ng-if=\"$ctrl.demoForm.asyncField.$valid\" icon=\"status_ok_thin\" style=\"color:#37c26a;\"></ias-icon>\n            </label>\n            <input id=\"asyncField\" name=\"asyncField\" type=\"text\" ng-model=\"$ctrl.asyncField\" required novalidate\n                   ng-disabled=\"$ctrl.demoForm.asyncField.$pending.asyncValidator\"\n                   ng-model-options=\"{ debounce: 250 }\"\n                   asynchronous-validator>\n            <div class=\"ias-input-messages\"\n                 ng-messages=\"$ctrl.demoForm.asyncField.$error\"\n                 ng-show=\"$ctrl.demoForm.asyncField.$touched\">\n                <div class=\"ias-input-message\" ng-message=\"required\">Field is required</div>\n                <div class=\"ias-input-message\" ng-message=\"asyncValidator\">Must be \"valid\"</div>\n            </div>\n        </div>\n\n        <h4>Dates</h4>\n        <div class=\"ias-input-container\" toggle-repeat-code>\n            <label for=\"birthday\">Date of Birth <span class=\"ias-required\">*</span></label>\n            <input id=\"birthday\" name=\"birthday\" type=\"date\" ng-model=\"$ctrl.birthday\" required novalidate>\n            <div class=\"ias-input-messages\"\n                 ng-messages=\"$ctrl.demoForm.birthday.$error\"\n                 ng-show=\"$ctrl.demoForm.birthday.$touched\">\n                <div class=\"ias-input-message\" ng-message=\"required\">Field is required</div>\n                <div class=\"ias-input-message\" ng-message=\"date\">Date is invalid</div>\n            </div>\n        </div>\n\n        <h4>Drop Down</h4>\n        <div class=\"ias-input-container\" toggle-repeat-code>\n            <label for=\"dropDown\">Options <span class=\"ias-required\">*</span></label>\n            <select id=\"dropDown\" name=\"dropDown\" ng-model=\"$ctrl.dropDown\" required novalidate>\n                <option value=\"1\">Option 1</option>\n                <option value=\"2\">Option 2</option>\n                <option value=\"3\">Option 3</option>\n                <option value=\"4\">Option 4</option>\n            </select>\n            <div class=\"ias-input-messages\"\n                 ng-messages=\"$ctrl.demoForm.dropDown.$error\"\n                 ng-show=\"$ctrl.demoForm.dropDown.$touched\">\n                <div class=\"ias-input-message\" ng-message=\"required\">Field is required</div>\n            </div>\n        </div>\n    </div>\n</form>";
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
	var component_decorator_1 = __webpack_require__(5);
	var IconComponent = (function () {
	    function IconComponent() {
	    }
	    return IconComponent;
	}());
	IconComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(27)
	    })
	], IconComponent);
	exports.default = IconComponent;


/***/ },
/* 27 */
/***/ function(module, exports) {

	var path = 'components/docs/icon/icon.component.html';
	var html = "<h1 class=\"ias-page-title\">Icon</h1>\n\n<div class=\"demo-section\">\n    <h4>.ias-icon</h4>\n    <div toggle-repeat-code=\"inner\">\n        <ias-icon icon=\"resource_thick\"></ias-icon>\n        <ias-icon icon=\"location_thick\"></ias-icon>\n        <ias-icon icon=\"chart\"></ias-icon>\n    </div>\n</div>\n\n<div class=\"demo-section\">\n    <h4>w/ .ias-medium</h4>\n    <div toggle-repeat-code=\"inner\">\n        <ias-icon icon=\"resource_thick\" class=\"ias-medium\"></ias-icon>\n        <ias-icon icon=\"location_thick\" class=\"ias-medium\"></ias-icon>\n        <ias-icon icon=\"chart\" class=\"ias-medium\"></ias-icon>\n    </div>\n</div>\n\n<div class=\"demo-section\">\n    <h4>w/ .ias-large</h4>\n    <div toggle-repeat-code=\"inner\">\n        <ias-icon icon=\"resource_thick\" class=\"ias-large\"></ias-icon>\n        <ias-icon icon=\"location_thick\" class=\"ias-large\"></ias-icon>\n        <ias-icon icon=\"chart\" class=\"ias-large\"></ias-icon>\n    </div>\n</div>\n\n";
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
	var component_decorator_1 = __webpack_require__(5);
	var MenuComponent = (function () {
	    function MenuComponent() {
	    }
	    return MenuComponent;
	}());
	MenuComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(29)
	    })
	], MenuComponent);
	exports.default = MenuComponent;


/***/ },
/* 29 */
/***/ function(module, exports) {

	var path = 'components/docs/menu/menu.component.html';
	var html = "<h1 class=\"ias-page-title\">Menu</h1>\n\n<div class=\"demo-section\" toggle-repeat-code=\"inner\">\n    <ias-button ias-toggle=\"menu1\">View regular menu</ias-button>\n    <ias-menu name=\"menu1\">\n        <ias-button ui-sref=\".\">Menu Item 1</ias-button>\n        <ias-button ui-sref=\".\">Menu Item 1</ias-button>\n        <ias-button ui-sref=\".\">Menu Item 2</ias-button>\n        <ias-button ui-sref=\".\">Menu Item 3</ias-button>\n    </ias-menu>\n</div>\n\n<div class=\"demo-section\">\n    <h4>Complex Menu</h4>\n\n    <div toggle-repeat-code=\"inner\">\n        <ias-button ias-toggle=\"complexMenu\">View complex menu</ias-button>\n        <ias-menu name=\"complexMenu\">\n            <div class=\"ias-row ias-border-bottom\">\n                <div class=\"ias-column ias-border-end\">\n                    <div class=\"ias-row ias-border-bottom\">\n                        <div class=\"ias-column\">\n                            <h3 class=\"ias-menu-header\">First Section</h3>\n                            <button type=\"button\" class=\"ias-button\">View My Devices</button>\n                            <button type=\"button\" class=\"ias-button\">Help Me...(end-user)</button>\n                            <button type=\"button\" class=\"ias-button\">Request impersonate session...(HelpDesk)</button>\n                        </div>\n                    </div>\n                    <div class=\"ias-row ias-border-bottom\">\n                        <div class=\"ias-column\">\n                            <h3 class=\"ias-menu-header\">Second Section</h3>\n                            <button type=\"button\" class=\"ias-button\">Button 4</button>\n                            <button type=\"button\" class=\"ias-button\">An Interesting Link</button>\n                            <button type=\"button\" class=\"ias-button\">Button 6</button>\n                            <button type=\"button\" class=\"ias-button\">Button 7</button>\n                            <button type=\"button\" class=\"ias-button\">Request Support</button>\n                            <button type=\"button\" class=\"ias-button\">Button 9</button>\n                        </div>\n                    </div>\n                    <div class=\"ias-row\">\n                        <div class=\"ias-column\">\n                            <button type=\"button\" class=\"ias-button\">Button 10</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ias-column ias-align-end\">\n                    <h3 class=\"ias-menu-header\">User Section</h3>\n                    <button type=\"button\" class=\"ias-button\">Help</button>\n                    <button type=\"button\" class=\"ias-button\">Settings</button>\n                    <button type=\"button\" class=\"ias-button\">Log Out</button>\n                </div>\n            </div>\n            <div class=\"ias-row\">\n                <div class=\"ias-column\">\n                    <h3 class=\"ias-menu-header\">Big Section</h3>\n                    <button type=\"button\" class=\"ias-button\">IDM Prototype</button>\n                    <button type=\"button\" class=\"ias-button\">Add Users</button>\n                    <button type=\"button\" class=\"ias-button\">Button 13</button>\n                    <button type=\"button\" class=\"ias-button\">A Button That Extends Well Beyond the Column Immediately Above It</button>\n                    <button type=\"button\" class=\"ias-button\">Button 15</button>\n                    <button type=\"button\" class=\"ias-button\">Micro Focus Branded Sign</button>\n                </div>\n            </div>\n            <div class=\"ias-row ias-border-top\">\n                <div class=\"ias-column\">\n                    <h3 class=\"ias-menu-footer\">VERSION 2.0</h3>\n                </div>\n                <div class=\"ias-column\">\n                    <h3 class=\"ias-menu-footer\">BUILD 123456</h3>\n                </div>\n            </div>\n        </ias-menu>\n    </div>\n</div>\n\n<div class=\"demo-section\">\n    <h4>w/ ias-list</h4>\n\n    <div toggle-repeat-code=\"inner\">\n        <ias-button ias-toggle=\"listMenu\">View menu with list</ias-button>\n        <ias-menu name=\"listMenu\">\n            <h3 class=\"ias-list-header\">List Header</h3>\n            <ul class=\"ias-list\">\n                <li>\n                    <i class=\"ias-icon ias-icon-check_thick\"></i>\n                    <span>Jonathan Smithsonian</span>\n                </li>\n                <li class=\"ias-offset\">\n                    <span>Camelot Rinkus</span>\n                </li>\n                <li>\n                    <i class=\"ias-icon ias-icon-check_thick\"></i>\n                    <span>Christian Pledger</span>\n                </li>\n                <li>\n                    <i class=\"ias-icon ias-icon-check_thick\"></i>\n                    <span>Becky Babbitt</span>\n                </li>\n            </ul>\n        </ias-menu>\n    </div>\n</div>\n\n<div class=\"demo-section\">\n    <h4>Positioning w/ [ias-align]</h4>\n    <p>The ias-align attribute has the form ias-align=\"[H_ALIGN] [V_ALIGN]?\" where H_ALIGN is one of [start, center, end] and\n        V_ALIGN is one of [top, center, bottom] and V_ALIGN is optional. The default is ias-align=\"start top\". start and end\n        depend on the layout of the containing element. The default and when nested under [dir=\"ltr\"], start is on the left\n        and end is on the right. When nested under [dir=\"rtl\"], start is on the right and end is on the left.</p>\n\n    <div toggle-repeat-code=\"inner\">\n        <ias-button ias-toggle=\"menu2\">View menu positioning</ias-button>\n        <ias-menu name=\"menu2\" ias-align=\"start center\">\n            <ias-button>Menu Item 1</ias-button>\n            <ias-button>Menu Item 2</ias-button>\n            <ias-button>Menu Item 3</ias-button>\n        </ias-menu>\n    </div>\n</div>\n";
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
	var component_decorator_1 = __webpack_require__(5);
	var SideNavComponent = (function () {
	    function SideNavComponent() {
	    }
	    return SideNavComponent;
	}());
	SideNavComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(31)
	    })
	], SideNavComponent);
	exports.default = SideNavComponent;


/***/ },
/* 31 */
/***/ function(module, exports) {

	var path = 'components/docs/side-nav/side-nav.component.html';
	var html = "<h1 class=\"ias-page-title\">Side Nav</h1>\n\n<div class=\"demo-section\">\n    <p>Click the menu icon below to show the navigation. Click the button again or click the darkened background to\n        close the side nav</p>\n    <ias-button class=\"ias-icon-button\" ias-toggle=\"sideNav1\">\n        <ias-icon icon=\"hamburger_menu_thick\"></ias-icon>\n    </ias-button>\n\n    <div class=\"side-nav-demo\" toggle-repeat-code=\"inner\">\n        <ias-side-nav name=\"sideNav1\">\n            <a ui-sref=\".\">Link 1</a>\n            <a ui-sref=\".\">Link 2</a>\n            <a ui-sref=\".\">Link 3</a>\n            <a ui-sref=\".\">Link 4</a>\n        </ias-side-nav>\n\n        <demo-content class=\"side-nav-demo-content ias-content-padding\"></demo-content>\n    </div>\n</div>\n\n<div class=\"demo-section\">\n    <h4>.ias-locked</h4>\n    <p>The CSS class <code>.ias-locked</code> allows a side nav to be locked open. This is the default behavior on wide\n        layouts.</p>\n\n    <div class=\"side-nav-demo\" toggle-repeat-code=\"inner\">\n        <ias-side-nav name=\"sideNav2\" class=\"ias-locked\">\n            <a ui-sref=\".\">Link 1</a>\n            <a ui-sref=\".\">Link 2</a>\n            <a ui-sref=\".\">Link 3</a>\n            <a ui-sref=\".\">Link 4</a>\n        </ias-side-nav>\n\n        <demo-content class=\"side-nav-demo-content ias-content-padding\"></demo-content>\n    </div>\n</div>";
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
	var component_decorator_1 = __webpack_require__(5);
	var TableComponent = (function () {
	    function TableComponent() {
	    }
	    return TableComponent;
	}());
	TableComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(33)
	    })
	], TableComponent);
	exports.default = TableComponent;


/***/ },
/* 33 */
/***/ function(module, exports) {

	var path = 'components/docs/table/table.component.html';
	var html = "<h1 class=\"ias-page-title\">Table</h1>\n\n<div class=\"demo-section\">\n    <table class=\"ias-table\" toggle-repeat-code>\n        <thead>\n            <tr>\n                <th>Name</th>\n                <th>Title</th>\n                <th>Phone</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td><a ui-sref=\".\">Antonio Barboni</a></td>\n                <td>UX Director</td>\n                <td>801-861-7000</td>\n            </tr>\n            <tr>\n                <td><a ui-sref=\".\">Camelot Rinkus</a></td>\n                <td>Assistant to the UX Director</td>\n                <td>801-861-7000</td>\n            </tr>\n            <tr>\n                <td><a ui-sref=\".\">Christian Pledger</a></td>\n                <td>Secret assistant to the UX Director</td>\n                <td>801-861-7000</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<div class=\"demo-section\">\n    <h4>Sorting</h4>\n\n    <p>The ias-sort directive allows the user to specify a property to store the sort expression of the table.</p>\n    <p>The ias-sort-on allows the user to specify a sort expression for individual columns in the table. This\n    expression is stored in the property designated in ias-sort.</p>\n\n    <table class=\"ias-table\" ias-sort=\"$ctrl.sort\" toggle-repeat-code\n           ng-init=\"$ctrl.people=[\n            {name: 'Antonio Barboni', title: 'UX Director'},\n            {name: 'Christian Pledger', title: 'Assistant to the UX Director'},\n            {name: 'Camelot Rinkus', title: 'Secret assistant to the UX Director'}]\">\n        <thead>\n            <tr>\n                <th ias-sort-on=\"'name'\">Name</th>\n                <th ias-sort-on=\"'title'\">Title</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr ng-repeat=\"person in $ctrl.people | orderBy:$ctrl.sort\">\n                <td>\n                    <ias-icon icon=\"favorite_outline_thin\"></ias-icon>\n                    <a ui-sref=\".\" ng-bind=\"person.name\"></a>\n                </td>\n                <td>{{person.title}}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<div class=\"demo-section\">\n    <h4>Inline ias-icon</h4>\n\n    <table class=\"ias-table\" toggle-repeat-code>\n        <thead>\n            <tr>\n                <th>Name</th>\n                <th>Title</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>\n                    <ias-icon icon=\"favorite_outline_thin\"></ias-icon>\n                    <a ui-sref=\".\">Antonio Barboni</a>\n                </td>\n                <td>UX Director</td>\n            </tr>\n            <tr>\n                <td>\n                    <ias-icon icon=\"favorite_outline_thin\"></ias-icon>\n                    <a ui-sref=\".\">Camelot Rinkus</a>\n                </td>\n                <td>Assistant to the UX Director</td>\n            </tr>\n            <tr>\n                <td>\n                    <ias-icon icon=\"favorite_outline_thin\"></ias-icon>\n                    <a ui-sref=\".\">Christian Pledger</a>\n                </td>\n                <td>Secret assistant to the UX Director</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<div class=\"demo-section\">\n    <h4>w/ ias-icon-button</h4>\n\n    <table class=\"ias-table\" toggle-repeat-code>\n        <thead>\n            <tr>\n                <th>Name</th>\n                <th>Action</th>\n                <th>Title</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td><a ui-sref=\".\">Antonio Barboni</a></td>\n                <td>\n                    <ias-button class=\"ias-icon-button\">\n                        <ias-icon icon=\"email_thin\"></ias-icon>\n                    </ias-button>\n                </td>\n                <td>UX Director</td>\n            </tr>\n            <tr>\n                <td><a ui-sref=\".\">Camelot Rinkus</a></td>\n                <td>\n                    <ias-button class=\"ias-icon-button\">\n                        <ias-icon icon=\"email_thin\"></ias-icon>\n                    </ias-button>\n                </td>\n                <td>Assistant to the UX Director</td>\n            </tr>\n            <tr>\n                <td><a ui-sref=\".\">Christian Pledger</a></td>\n                <td>\n                    <ias-button class=\"ias-icon-button\">\n                        <ias-icon icon=\"email_thin\"></ias-icon>\n                    </ias-button>\n                </td>\n                <td>Secret assistant to the UX Director</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n";
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
	var component_decorator_1 = __webpack_require__(5);
	var TabsComponent = (function () {
	    function TabsComponent() {
	    }
	    return TabsComponent;
	}());
	TabsComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(35)
	    })
	], TabsComponent);
	exports.default = TabsComponent;


/***/ },
/* 35 */
/***/ function(module, exports) {

	var path = 'components/docs/tabs/tabs.component.html';
	var html = "<h1 class=\"ias-page-title\">Tabs</h1>\n\n<div class=\"demo-section\">\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-tabset\">\n            <div class=\"ias-tab\" ias-toggle-active=\"ias-active\" ias-toggle=\"tab1\">Tab 1</div>\n            <div class=\"ias-tab\" ias-toggle-active=\"ias-active\" ias-toggle=\"tab2\">Tab 2</div>\n            <div class=\"ias-tab\" ias-toggle-active=\"ias-active\" ias-toggle=\"tab3\">Tab 3</div>\n            <div class=\"ias-tab\" ias-toggle-active=\"ias-active\" ias-toggle=\"tab4\">Tab {{2 + 2}}</div>\n        </div>\n\n        <ias-tab-pane toggle-group=\"tabGroup1\" name=\"tab1\">\n            <h2>Tab 1 content</h2>\n            <p>This is what peak tab content looks like. You may not like it - but this is what it looks like.</p>\n        </ias-tab-pane>\n        <ias-tab-pane toggle-group=\"tabGroup1\" name=\"tab2\">\n            <h2>Tab 2 content</h2>\n            <p>All you tab content are belong to us</p>\n        </ias-tab-pane>\n        <ias-tab-pane toggle-group=\"tabGroup1\" name=\"tab3\">\n            <h2>Tab 3 content</h2>\n            <p>Yo dawg. I like to tab through my tabs when tab my tabs</p>\n        </ias-tab-pane>\n        <ias-tab-pane toggle-group=\"tabGroup1\" name=\"tab4\">\n            <h2>Tab 4 content</h2>\n            <p>One of us! One of us!</p>\n        </ias-tab-pane>\n    </div>\n</div>\n\n<div class=\"demo-section\">\n    <h3>Different start tab</h3>\n    <p class=\"ias-page-instructions\">By default, toggle groups show the first component on start. Use the\n        [toggle-start-open] directive to toggle a specific tab on start. If toggle-start-open is used on multiple\n        tab panes, the last one declared will be used.</p>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-tabset\">\n            <div class=\"ias-tab\" ias-toggle-active=\"ias-active\" ias-toggle=\"tabAlpha\">Alpha</div>\n            <div class=\"ias-tab\" ias-toggle-active=\"ias-active\" ias-toggle=\"tabBeta\">Beta</div>\n            <div class=\"ias-tab\" ias-toggle-active=\"ias-active\" ias-toggle=\"tabCharlie\">Charlie</div>\n            <div class=\"ias-tab\" ias-toggle-active=\"ias-active\" ias-toggle=\"tabDelta\">Delta</div>\n        </div>\n\n        <ias-tab-pane toggle-group=\"tabGroup2\" name=\"tabAlpha\">\n            <h2>Alpha</h2>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur dolorum neque voluptas?\n                Animi dolorem doloribus, harum iste minus molestias natus nemo nobis provident quidem reprehenderit\n                velit veniam veritatis? Porro?</p>\n        </ias-tab-pane>\n        <ias-tab-pane toggle-group=\"tabGroup2\" name=\"tabBeta\">\n            <h2>Beta</h2>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, veniam.</p>\n        </ias-tab-pane>\n        <ias-tab-pane toggle-start-open=\"true\" toggle-group=\"tabGroup2\" name=\"tabCharlie\">\n            <h2>Charlie</h2>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cum illum obcaecati quasi rerum sint.</p>\n        </ias-tab-pane>\n        <ias-tab-pane toggle-group=\"tabGroup2\" name=\"tabDelta\">\n            <h2>Delta</h2>\n            <p>Lorem ipsum dolor sit amet, consectetur.</p>\n        </ias-tab-pane>\n    </div>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	function AsynchronousValidatorDirective($q, $timeout) {
	    return {
	        require: 'ngModel',
	        restrict: 'A',
	        link: function (scope, element, attributes, ngModelController) {
	            ngModelController.$asyncValidators.asyncValidator = function (modelValue) {
	                var deferred = $q.defer();
	                $timeout(function () {
	                    if (modelValue.toLowerCase() === 'valid') {
	                        deferred.resolve();
	                    }
	                    else {
	                        deferred.reject();
	                    }
	                }, 2000);
	                return deferred.promise;
	            };
	        }
	    };
	}
	exports.AsynchronousValidatorDirective = AsynchronousValidatorDirective;
	AsynchronousValidatorDirective.$inject = ['$q', '$timeout'];


/***/ }
/******/ ]);