import { element, IAugmentedJQuery, ICompileService, IComponentControllerService, mock } from 'angular';
import { MenuAlignment, MenuComponent } from './menu.component';
import ToggleService from '../toggle/toggle.service';

describe('MenuComponent controller', () => {
    const COMPONENT_NAME = 'menu1';
    const OPEN_CLASS_NAME = 'mf-open';

    let $compile;
    let $componentController: IComponentControllerService;
    let controller: MenuComponent;
    let tElement: IAugmentedJQuery;

    beforeEach(mock.module('ng-mfux'));
    beforeEach(mock.inject((
        _$componentController_: IComponentControllerService,
        _$compile_: ICompileService
    ) => {
        $componentController = _$componentController_;
        $compile = _$compile_;
        tElement = element('<mf-menu><mf-menu-content></mf-menu-content></mf-menu>');
    }));

    describe('constructor', () => {
        beforeEach(() => {
            controller = <MenuComponent>$componentController(
                'mfMenu',
                { $element: tElement },
                { name: COMPONENT_NAME }
            );
        });

        it('initializes correctly', () => {
            expect(controller.name).toBe(COMPONENT_NAME);
            expect(controller.open).toBe(false);
            expect(tElement.parent()[0]).toBe(document.body);
        });
    });

    describe('alignment', () => {
        it('default is "start start"', () => {
            controller =
                <MenuComponent>$componentController('mfMenu', { $element: tElement }, { name: COMPONENT_NAME });

            expect(controller.horizontalAlignment).toBe(MenuAlignment.start);
            expect(controller.verticalAlignment).toBe(MenuAlignment.start);
        });

        describe('align attribute', () => {
            it('is honored', () => {
                controller = <MenuComponent>$componentController(
                    'mfMenu',
                    { $element: tElement },
                    {
                        align: 'end center',
                        name: COMPONENT_NAME
                    }
                );

                expect(controller.horizontalAlignment).toBe(MenuAlignment.end);
                expect(controller.verticalAlignment).toBe(MenuAlignment.center);
            });

            it('handles malformed input', () => {
                controller = <MenuComponent>$componentController(
                    'mfMenu',
                    { $element: tElement },
                    {
                        align: 'endend',
                        name: COMPONENT_NAME
                    }
                );

                expect(controller.horizontalAlignment).toBe(MenuAlignment.start);
                expect(controller.verticalAlignment).toBe(MenuAlignment.start);
            });

            it('handles missing token', () => {
                controller = <MenuComponent>$componentController(
                    'mfMenu',
                    { $element: tElement },
                    {
                        align: 'end',
                        name: COMPONENT_NAME
                    }
                );

                expect(controller.horizontalAlignment).toBe(MenuAlignment.end);
                expect(controller.verticalAlignment).toBe(MenuAlignment.start);
            });
        });

        describe('element positioning', () => {
            let targetElement: IAugmentedJQuery;

            beforeEach(() => {
                targetElement = element('<div style="height:3px;width:3px;position:fixed;top:0;left:0;"></div>');
                document.body.appendChild(targetElement[0]);
            });

            it('start start', () => {
                // Arrange
                controller = <MenuComponent>$componentController(
                    'mfMenu',
                    { $element: tElement },
                    {
                        align: 'start start',
                        name: COMPONENT_NAME
                    }
                );

                // Act
                controller.show(targetElement);

                // Assert
                expect(tElement.find('mf-menu-content')[0].style.top).toBe('3px');
                expect(tElement.find('mf-menu-content')[0].style.left).toBe('0px');
            });
        });
    });

    describe('$onInit', () => {
        let toggleService: ToggleService;

        beforeEach(() => {
            toggleService = new ToggleService();
            spyOn(toggleService, 'register');

            controller = <MenuComponent>$componentController(
                'mfMenu',
                {
                    $element: tElement,
                    MfToggleService: toggleService
                },
                { name: COMPONENT_NAME });
        });

        it('registers component with toggle service', () => {
            controller.$onInit();
            expect(toggleService.register).toHaveBeenCalledWith(controller);
        });
    });

    describe('hide', () => {
        beforeEach(() => {
            controller = <MenuComponent>$componentController('mfMenu', { $element: tElement });
            controller.open = true;
            tElement.addClass(OPEN_CLASS_NAME);
        });

        it('sets menu in non-open state', () => {
            controller.hide();

            expect(controller.open).toBe(false);
            expect(tElement.hasClass(OPEN_CLASS_NAME)).toBe(false);
        });
    });

    describe('show', () => {
        beforeEach(() => {
            controller = <MenuComponent>$componentController('mfMenu', { $element: tElement });
        });

        it('sets menu in open state', () => {
            controller.show(element(document.body));

            expect(controller.open).toBe(true);
            expect(tElement.hasClass(OPEN_CLASS_NAME)).toBe(true);
        });

        xit('test positioning');
    });
});
