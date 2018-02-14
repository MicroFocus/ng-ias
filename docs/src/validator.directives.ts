import {
    IAttributes, IAugmentedJQuery, IDirective, INgModelController, IQService, IScope,
    ITimeoutService
} from 'angular';

export function AsynchronousValidatorDirective($q: IQService, $timeout: ITimeoutService): IDirective {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function(scope: IScope, element: IAugmentedJQuery, attributes: IAttributes,
                       ngModelController: INgModelController) {
            ngModelController.$asyncValidators.asyncValidator = function(modelValue) {
                let deferred = $q.defer();

                $timeout(function() {
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

AsynchronousValidatorDirective.$inject = ['$q', '$timeout'];
