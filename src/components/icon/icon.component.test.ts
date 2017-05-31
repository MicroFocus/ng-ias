import { IAugmentedJQuery, ICompileService, IRootScopeService, mock } from 'angular';

describe('IconComponent', () => {
    let $compile: ICompileService;
    let $rootScope: IRootScopeService;
    let compiledElement: IAugmentedJQuery;
    let childElement: IAugmentedJQuery;

    const ICON_NAME = 'favorite_outline_thin';
    const SVG_PATH = 'images/account-box.svg';

    beforeEach(mock.module('ng-ias'));

    beforeEach(mock.inject((_$compile_: ICompileService, _$rootScope_: IRootScopeService) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('regular icon loads', () => {
        // Arrange
        compiledElement = $compile(`<ias-icon icon="${ICON_NAME}"></ias-icon>`)($rootScope);
        $rootScope.$digest();

        // Act
        childElement = compiledElement.find('i');

        // Assert
        expect(childElement.hasClass(`ias-icon-${ICON_NAME}`)).toBe(true);
        expect(childElement.hasClass('ias-icon')).toBe(true);
    });

    it('svg-icon loads', () => {
        // Arrange
        compiledElement = $compile(`<ias-icon svg-icon="${SVG_PATH}"></ias-icon>`)($rootScope);
        $rootScope.$digest();

        // Act
        childElement = compiledElement.find('img');

        // Assert
        expect(childElement.hasClass('svg-icon')).toBe(true);
        expect(childElement.attr('src')).toEqual(SVG_PATH);
    });
});
