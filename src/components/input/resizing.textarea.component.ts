import { IAugmentedJQuery, ICompileService, IDirective, IScope, IAttributes } from 'angular';
let templateUrl = require('components/input/resizing.textarea.component.html');

export class ResizingTextareaController {
    static $inject = ['$scope'];

    constructor(private $scope: IScope) {
    }

}

/**
 * This directive supports a text area that will grow and shrink based on the size of the 
 * content in the text area.
 */
export default function ResizingTextareaDirective(): IDirective {
    return {
        controller: ResizingTextareaController,
        restrict: 'E',
        templateUrl: templateUrl,
        transclude: true,
        replace: true,
        scope: {
            model: '=ngModel'
        },
        link: (scope: IScope,
               element: IAugmentedJQuery,
               attributes: IAttributes,
               controller: ResizingTextareaController) => {

                   if (!controller) {
                       return;
                   }

                   if (element.attr('min-rows')) {
                       let minRows = element.attr('min-rows');
                       if (minRows.indexOf(' ') > -1) {
                           /*
                            * This means that they tried to override the minimum number of
                            * rows and the Angular transclude combined the attributes instead
                            * of replacing them.  We need to fix that up.
                            */
                            element.attr('min-rows', minRows.slice(0, minRows.indexOf(' ')));
                       }
                   }

                   /*
                    * We need to start by getting some basic measurements.  We
                    * set the font size because we need to know the correct line
                    * height or we can't resize the box properly.
                    */
                   let tmpVal = element.val();
                   element.val('');
                   let baseScrollHeight = element[0].scrollHeight;
                   element.val(tmpVal);

                   element.css('overflow-y', 'hidden');
                   element.css('font-size', '15px');

                   /**
                    * The resize function handles determining the actual
                    * size of the box. 
                    */
                   let resize = function() {
                       let minRows = 0;
                       if (element.attr('min-rows')) {
                           minRows = Number(element.attr('min-rows'));
                       }

                       element.attr('rows', minRows);
                       let rows = Math.ceil((element[0].scrollHeight - baseScrollHeight) / 18) + minRows;
                       element.attr('rows', rows);
                   };

                   scope.$watch('model', function(newValue: string, oldValue: string) {
                       resize();
                   });

                   element.bind('input', function(event) {
                       resize();
                   });
        }
    };
}

ResizingTextareaController.$inject = ['$compile'];
