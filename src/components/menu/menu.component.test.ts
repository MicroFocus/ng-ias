import { element, IAugmentedJQuery, ICompileService, IComponentControllerService, mock } from 'angular';
import { HorizontalAlignment, MenuComponent, VerticalAlignment } from './menu.component';
import ToggleService from '../toggle/toggle.service';

describe('MenuComponent', () => {
    const COMPONENT_NAME = 'menu1';
    const OPEN_CLASS_NAME = 'mf-open';

    let $compile;
    let $componentController: IComponentControllerService;
    let controller: MenuComponent;
    let menuElement: IAugmentedJQuery;

    beforeEach(mock.module('ng-mfux'));
    beforeEach(mock.inject((
        _$componentController_: IComponentControllerService,
        _$compile_: ICompileService
    ) => {
        $componentController = _$componentController_;
        $compile = _$compile_;
    }));

    beforeAll(() => {
        menuElement = element(
            `<mf-menu>
                <mf-menu-content style="height:4px;margin:0;padding:0;width:4px;"></mf-menu-content>
            </mf-menu>`);
    });

    describe('.constructor()', () => {
        it('sets correct defaults', () => {
            // Arrange
            controller = <MenuComponent>$componentController(
                'mfMenu', { $element: menuElement }, { name: COMPONENT_NAME });

            // Assert
            expect(controller.name).toBe(COMPONENT_NAME);
            expect(controller.open).toBe(false);
            expect(menuElement.parent()[0]).toBe(document.body);
        });

        it('initializes horizontal and vertical alignment correctly', () => {
            // Arrange
            controller =
                <MenuComponent>$componentController('mfMenu', { $element: menuElement }, { name: COMPONENT_NAME });

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
                'mfMenu',
                {
                    $element: menuElement,
                    MfToggleService: toggleService
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
            controller = <MenuComponent>$componentController('mfMenu', { $element: menuElement });
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
            controller = <MenuComponent>$componentController('mfMenu', { $element: menuElement });
            controller.$onInit();

            // Act
            controller.show(element(document.body));

            // Assert
            expect(controller.open).toBe(true);
            expect(menuElement.hasClass(OPEN_CLASS_NAME)).toBe(true);
        });

        describe('positions menu content correctly', () => {
            // Execute each test under ltr and rtl layout directions
            ['ltr', 'ltr'].forEach((direction) => {
                describe(`in ${direction} layouts`, () => {
                    let isLtr = direction === 'ltr';

                    beforeAll(() => {
                        menuElement.attr('dir', direction);
                    });

                    afterAll(() => {
                        menuElement.attr('dir', null);
                    });

                    [
                        {align: 'start top', top: 6, left: isLtr ? 4 : 2, constrain: false},
                        {align: 'start center', top: 3, left: isLtr ? 4 : 2, constrain: false},
                        {align: 'start bottom', top: 0, left: isLtr ? 4 : 2, constrain: false},
                        {align: 'center top', top: 6, left: 3, constrain: false},
                        {align: 'center center', top: 3, left: 3, constrain: false},
                        {align: 'center bottom', top: 0, left: 3, constrain: false},
                        {align: 'end top', top: 6, left: isLtr ? 2 : 4, constrain: false},
                        {align: 'end center', top: 3, left: isLtr ? 2 : 4, constrain: false},
                        {align: 'end bottom', top: 0, left: isLtr ? 2 : 4, constrain: false},
                        {align: 'start top', top: 3, left: 3, constrain: true},
                        {align: 'start center', top: 3, left: 3, constrain: true},
                        {align: 'start bottom', top: 3, left: 3, constrain: true},
                        {align: 'center top', top: 3, left: 3, constrain: true},
                        {align: 'center center', top: 3, left: 3, constrain: true},
                        {align: 'center bottom', top: 3, left: 3, constrain: true},
                        {align: 'end top', top: 3, left: 3, constrain: true},
                        {align: 'end center', top: 3, left: 3, constrain: true},
                        {align: 'end bottom', top: 3, left: 3, constrain: true},
                    ].forEach((test) => {
                        it(`for alignment "${test.align}"`, () => {
                            // Arrange
                            controller = <MenuComponent>$componentController(
                                'mfMenu',
                                {$element: menuElement},
                                {align: test.align, name: COMPONENT_NAME}
                            );
                            controller.$onInit();

                            // Constrain the size of the menu container to test positioning overflow
                            menuElement[0].style.height = test.constrain ? '4px' : null;
                            menuElement[0].style.width = test.constrain ? '4px' : null;
                            menuElement[0].style.left = test.constrain ? '3px' : null;
                            menuElement[0].style.top = test.constrain ? '3px' : null;

                            // Act
                            controller.show(targetElement);

                            // Assert
                            let menuBoundingBox = menuElement.find('mf-menu-content')[0].getBoundingClientRect();

                            expect(menuBoundingBox.top).toBe(test.top, 'top');
                            expect(menuBoundingBox.left).toBe(test.left, 'left');
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
                'mfMenu', { $element: menuElement }, { align: 'endend', name: COMPONENT_NAME });

            // Act
            controller.$onInit();

            // Assert
            expect(controller.horizontalAlignment).toBe(HorizontalAlignment.start);
            expect(controller.verticalAlignment).toBe(VerticalAlignment.top);
        });

        it('handles missing token', () => {
            // Arrange
            controller = <MenuComponent>$componentController(
                'mfMenu', { $element: menuElement }, { align: 'end', name: COMPONENT_NAME });

            // Act
            controller.$onInit();

            // Assert
            expect(controller.horizontalAlignment).toBe(HorizontalAlignment.end);
            expect(controller.verticalAlignment).toBe(VerticalAlignment.top);
        });
    });
});
