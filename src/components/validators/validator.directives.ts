import {isString, IAttributes, IAugmentedJQuery, IDirective, INgModelController, IScope} from 'angular';

const EMAIL_REG_EXP =
    /^(([^<>()\[\].,;:\s@\"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

export function EmailValidatorDirective(): IDirective {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope: IScope, element: IAugmentedJQuery, attributes: IAttributes,
                        ngModelController: INgModelController) {
            ngModelController.$validators.iasEmail = function (modelValue, viewValue) {
                const value = modelValue || viewValue;

                return EMAIL_REG_EXP.test(value);
            };
        }
    };
}

interface IPasswordOptions {
    number?: boolean;
    special?: boolean | string;
    changeCase?: boolean;
}

interface PasswordValidatorScope extends IScope {
    passwordOptions: IPasswordOptions;
}

export function PasswordValidatorDirective(): IDirective {
    return {
        require: 'ngModel',
        restrict: 'A',
        scope: {
            passwordOptions: '<iasPassword'
        },
        link: function (scope: PasswordValidatorScope, element: IAugmentedJQuery, attributes: IAttributes,
                        ngModelController: INgModelController) {
            scope.passwordOptions = scope.passwordOptions || {};
            scope.passwordOptions.changeCase = scope.passwordOptions.changeCase !== false;
            scope.passwordOptions.number = scope.passwordOptions.number !== false;

            if (scope.passwordOptions.changeCase) {
                ngModelController.$validators.iasPasswordCase = function (modelValue, viewValue) {
                    const value = modelValue || viewValue;

                    return /[a-z]/.test(value) && /[A-Z]/.test(value);
                };
            }

            if (scope.passwordOptions.number) {
                ngModelController.$validators.iasPasswordNumber = function (modelValue, viewValue) {
                    const value = modelValue || viewValue;

                    return /[0-9]/.test(value);
                };
            }

            if (scope.passwordOptions.special) {
                ngModelController.$validators.iasPasswordSpecial = function (modelValue, viewValue) {
                    const value = modelValue || viewValue;
                    const pattern =
                        isString(scope.passwordOptions.special) ? scope.passwordOptions.special : '[!%@#]';

                    return new RegExp(pattern).test(value);
                };
            }
        }
    };
}

interface IMatchesValidatorScope extends IScope {
    other: any;
}

export function MatchesValidatorDirective(): IDirective {
    return {
        require: 'ngModel',
        restrict: 'A',
        scope: {
            other: '<iasMatches'
        },
        link: function (scope: IMatchesValidatorScope, element: IAugmentedJQuery, attributes: IAttributes,
                        ngModelController: INgModelController) {
            scope.$watch('other', function () {
                ngModelController.$validate();
            });

            ngModelController.$validators.iasMatches = function (modelValue, viewValue) {
                const value = modelValue || viewValue;

                return value === scope.other;
            };
        }
    };
}
