import * as angular from 'angular';
import { element, IAugmentedJQuery, ICompileService, IComponentControllerService, mock } from 'angular';
import { HorizontalAlignment, MenuComponent, VerticalAlignment } from './menu.component';
import ToggleService from '../toggle/toggle.service';

describe('MenuComponent', () => {
    const COMPONENT_NAME = 'menu1';
    const OPEN_CLASS_NAME = 'ias-open';

    let $compile;
    let $componentController: IComponentControllerService;
    let controller: MenuComponent;
    let menuElement: IAugmentedJQuery;

    beforeEach(mock.module('ng-ias'));
    beforeEach(mock.module(($provide: angular.auto.IProvideService) => { $provide.constant('MENU_MARGIN', 0); }));
    beforeEach(mock.inject((
        _$componentController_: IComponentControllerService,
        _$compile_: ICompileService
    ) => {
        $componentController = _$componentController_;
        $compile = _$compile_;
    }));

    beforeAll(() => {
        menuElement = element(
            `<ias-menu>
                <ias-menu-content style="height:4px;margin:0;padding:0;width:4px;"></ias-menu-content>
            </ias-menu>`);
    });

    describe('.constructor()', () => {
        it('sets correct defaults', () => {
            // Arrange
            controller = <MenuComponent>$componentController(
                'iasMenu', { $element: menuElement }, { name: COMPONENT_NAME });

            // Assert
            expect(controller.name).toBe(COMPONENT_NAME);
            expect(controller.open).toBe(false);
            expect(menuElement.parent()[0]).toBe(document.body);
        });

        it('initializes horizontal and vertical alignment correctly', () => {
            // Arrange
            controller =
                <MenuComponent>$componentController('iasMenu', { $element: menuElement }, { name: COMPONENT_NAME });

            // Assert
            expect(controller.horizontalAlignment).toBe(HorizontalAlignment.start);
            expect(controller.verticalAlignment).toBe(VerticalAlignment.top);
        });
    });

    describe('.$onInit()', () => {
        let toggleService: ToggleService;

        it('registers component with toggle service', () => {
            // Arrange
            toggleService = new ToggleService();
            spyOn(toggleService, 'register');
            controller = <MenuComponent>$componentController(
                'iasMenu',
                {
                    $element: menuElement,
                    IasToggleService: toggleService
                },
                { name: COMPONENT_NAME });

            // Act
            controller.$onInit();

            // Assert
            expect(toggleService.register).toHaveBeenCalledWith(controller);
        });
    });

    describe('.hide()', () => {
        it('sets menu in non-open state', () => {
            // Arrange
            controller = <MenuComponent>$componentController('iasMenu', { $element: menuElement });
            controller.open = true;
            menuElement.addClass(OPEN_CLASS_NAME);

            // Act
            controller.hide();

            // Assert
            expect(controller.open).toBe(false);
            expect(menuElement.hasClass(OPEN_CLASS_NAME)).toBe(false);
        });
    });

    describe('.show()', () => {
        let targetElement: IAugmentedJQuery;

        beforeAll(() => {
            // Using a 2 x 2 menu on a 4 x 4 target to test for correct positioning
            targetElement = element(
                '<div style="height:2px;width:2px;position:fixed;top:4px;left:4px;"></div>');
            document.body.appendChild(targetElement[0]);
        });

        it('sets menu in open state', () => {
            // Arrange
            controller = <MenuComponent>$componentController('iasMenu', { $element: menuElement });
            controller.$onInit();

            // Act
            controller.show(element(document.body));

            // Assert
            expect(controller.open).toBe(true);
            expect(menuElement.hasClass(OPEN_CLASS_NAME)).toBe(true);
        });

        describe('positions menu content correctly', () => {
            // Execute each test under ltr and rtl layout directions
            ['ltr', 'rtl'].forEach((direction) => {
                describe(`in ${direction} layouts`, () => {
                    let isLtr = direction === 'ltr';

                    beforeAll(() => {
                        menuElement.attr('dir', direction);
                    });

                    afterAll(() => {
                        menuElement.attr('dir', null);
                    });

                    [
                        { align: 'start top',     top: null,  left: null,  height: null,  width: null,  expectedTop: 6,
                            expectedLeft: isLtr ? 4 : 2 },
                        { align: 'start center',  top: null,  left: null,  height: null,  width: null,  expectedTop: 3,
                            expectedLeft: isLtr ? 4 : 2 },
                        { align: 'start bottom',  top: null,  left: null,  height: null,  width: null,  expectedTop: 0,
                            expectedLeft: isLtr ? 4 : 2 },
                        { align: 'center top',    top: null,  left: null,  height: null,  width: null,  expectedTop: 6,
                            expectedLeft: 3 },
                        { align: 'center center', top: null,  left: null,  height: null,  width: null,  expectedTop: 3,
                            expectedLeft: 3 },
                        { align: 'center bottom', top: null,  left: null,  height: null,  width: null,  expectedTop: 0,
                            expectedLeft: 3 },
                        { align: 'end top',       top: null,  left: null,  height: null,  width: null,  expectedTop: 6,
                            expectedLeft: isLtr ? 2 : 4 },
                        { align: 'end center',    top: null,  left: null,  height: null,  width: null,  expectedTop: 3,
                            expectedLeft: isLtr ? 2 : 4 },
                        { align: 'end bottom',    top: null,  left: null,  height: null,  width: null,  expectedTop: 0,
                            expectedLeft: isLtr ? 2 : 4 },
                        { align: 'start top',     top: '3px', left: '3px', height: '4px', width: '4px', expectedTop: 3,
                            expectedLeft: 3 },
                        { align: 'start center',  top: '3px', left: '3px', height: '4px', width: '4px', expectedTop: 3,
                            expectedLeft: 3 },
                        { align: 'start bottom',  top: '3px', left: '3px', height: '4px', width: '4px', expectedTop: 3,
                            expectedLeft: 3 },
                        { align: 'center top',    top: '3px', left: '3px', height: '4px', width: '4px', expectedTop: 3,
                            expectedLeft: 3 },
                        { align: 'center center', top: '3px', left: '3px', height: '4px', width: '4px', expectedTop: 3,
                            expectedLeft: 3 },
                        { align: 'center bottom', top: '3px', left: '3px', height: '4px', width: '4px', expectedTop: 3,
                            expectedLeft: 3 },
                        { align: 'end top',       top: '3px', left: '3px', height: '4px', width: '4px', expectedTop: 3,
                            expectedLeft: 3 },
                        { align: 'end center',    top: '3px', left: '3px', height: '4px', width: '4px', expectedTop: 3,
                            expectedLeft: 3 },
                        { align: 'end bottom',    top: '3px', left: '3px', height: '4px', width: '4px', expectedTop: 3,
                            expectedLeft: 3 },
                        { align: 'start top',     top: '3px', left: '3px', height: '5px', width: '5px', expectedTop: 4,
                            expectedLeft: isLtr ? 4 : 3 },
                    ].forEach((test) => {
                        it(`for alignment "${test.align}"`, () => {
                            // Arrange
                            controller = <MenuComponent>$componentController(
                                'iasMenu',
                                {$element: menuElement},
                                {align: test.align, name: COMPONENT_NAME}
                            );
                            controller.$onInit();

                            // Constrain the size of the menu container to test positioning overflow
                            menuElement[0].style.top = test.top;
                            menuElement[0].style.left = test.left;
                            menuElement[0].style.height = test.height;
                            menuElement[0].style.width = test.width;

                            // Act
                            controller.show(targetElement);

                            // Assert
                            let menuContentBoundingBox = menuElement.find('ias-menu-content')[0]
                                .getBoundingClientRect();

                            expect(menuContentBoundingBox.top).toBe(test.expectedTop, 'top');
                            expect(menuContentBoundingBox.left).toBe(test.expectedLeft, 'left');
                        });
                    });
                });
            });
        });
    });

    describe('align binding', () => {
        it('handles malformed input', () => {
            // Arrange
            controller = <MenuComponent>$componentController(
                'iasMenu', { $element: menuElement }, { align: 'endend', name: COMPONENT_NAME });

            // Act
            controller.$onInit();

            // Assert
            expect(controller.horizontalAlignment).toBe(HorizontalAlignment.start);
            expect(controller.verticalAlignment).toBe(VerticalAlignment.top);
        });

        it('handles missing token', () => {
            // Arrange
            controller = <MenuComponent>$componentController(
                'iasMenu', { $element: menuElement }, { align: 'end', name: COMPONENT_NAME });

            // Act
            controller.$onInit();

            // Assert
            expect(controller.horizontalAlignment).toBe(HorizontalAlignment.end);
            expect(controller.verticalAlignment).toBe(VerticalAlignment.top);
        });
    });
});
