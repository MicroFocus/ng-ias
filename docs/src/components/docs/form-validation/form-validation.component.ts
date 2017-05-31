import { Component } from '../../../component.decorator';

@Component({
    templateUrl: require('./form-validation.component.html')
})
export default class FormValidationComponent {

    private name: String;
    private email: String;
    private emailError: String;
    private username: String;
    private password: String;
    private repeat: String;
    private repeatError: String;

    private days: Array<Object> = [];
    private months: Array<Object> = [];
    private years: Array<Object> = [];
    private birthday: Date;

    private bDay: Object;
    private bMonth: Object;
    private bYear: Object;

    private regForm: Object;
    private timeout: ng.ITimeoutService;
    private scope: ng.IScope;

    private objForm: Object;
    private objName: String;
    private objCont: String;
    private objType: Object;
    private objTypes: Array<Object> = [];

    private readPerm: Object;
    private writePerm: Object;
    private perms: Array<Object> = [];

    constructor(private $timeout: ng.ITimeoutService, private $scope: ng.IScope, private IasDialogService: any) {
        this.timeout = $timeout;
        this.scope = $scope;
        this.populateDates();

        this.objTypes.push({
            name: 'Role',
            id: 'role'
        });

        this.objTypes.push({
            name: 'Resource',
            id: 'resource'
        });

        this.objTypes.push({
            name: 'Entitlement',
            id: 'entitlement'
        });

        this.objType = this.objTypes[0];

        this.perms.push({
            name: 'Nobody',
            id: 'none'
        });

        this.perms.push({
            name: 'Everyone',
            id: 'all'
        });

        this.readPerm = this.perms[0];
        this.writePerm = this.perms[0];
    }

    submitForm(): void {
        this.IasDialogService
            .alert({
                textContent: 'You submitted your form',
                title: 'All done'
            });
    }

    validateEmail(): void {
        if (this.email &&
            this.email.indexOf('@') > 0 &&
            this.email.indexOf('@') < this.email.indexOf('.') &&
            this.email.indexOf('@') === this.email.lastIndexOf('@') &&
            this.email.indexOf('.') === this.email.lastIndexOf('.') &&
            this.email.indexOf('.') < this.email.length - 1) {
            this.regForm['email'].$setValidity('valid', true);
            delete this.emailError;
        } else {
            this.regForm['email'].$setValidity('valid', false);
            this.emailError = '\'' + this.email + '\' is not a valid email address.';
        }
    }

    validateUsername(): void {
        let obj = this;
        let form = this.regForm;
        let username = this.username;
        this.regForm['username'].$setValidity('valid', false);
        this.regForm['username'].inProgress = true;
        delete this.regForm['username'].usernameError;
        let scope = this.scope;

        this.timeout(function() {
            delete form['username'].inProgress;
            if (username &&
                username.toLowerCase().charAt(0) !== 'b') {
                form['username'].$setValidity('valid', true);
            } else {
                form['username'].$setValidity('valid', false);
                form['username'].usernameError = 'The username \'' + username + '\' is already taken.';
            }

            scope.$applyAsync();
        }, 3000);
    }

    validateDate(): void {
        delete this.birthday;
        if (this.bDay['id'] > -1 &&
            this.bYear['id'] > -1 &&
            this.bMonth['id'] > -1) {
            this.regForm['birthday'].$setValidity('valid', true);
            this.birthday = new Date(Number(this.bYear['id']), Number(this.bMonth['id']) - 1, Number(this.bDay['id']));
        } else {
            this.regForm['birthday'].$setValidity('valid', false);
        }
    }

    validatePassword(): void {
        if (this.password && this.password.match(/\d+/g) !== null &&
            this.password.length > 5 && this.password.match('.*[A-Z].*') !== null &&
            this.password.match('.*[a-z].*') !== null) {
            this.regForm['password'].$setValidity('valid', true);
        } else {
            this.regForm['password'].$setValidity('valid', false);
        }
    }

    validateRepeat(): void {
        delete this.repeatError;
        if (this.password && this.password === this.repeat) {
            this.regForm['repeat'].$setValidity('valid', true);
            this.repeatError = 'Your passwords do not match.';
        } else {
            this.regForm['repeat'].$setValidity('valid', false);
        }
    }

    private populateDates(): void {
        this.days.push({
            name: 'Day',
            id: -1
        });

        for (let i = 0; i < 31; i++) {
            this.days.push({
                name: i + 1,
                id: i + 1
            });
        }

        this.bDay = this.days[0];

        this.months.push({
            name: 'Month',
            id: -1
        });

        this.months.push({
            name: 'Jan',
            id: 1
        });

        this.months.push({
            name: 'Feb',
            id: 2
        });

        this.months.push({
            name: 'Mar',
            id: 3
        });

        this.months.push({
            name: 'Apr',
            id: 4
        });

        this.months.push({
            name: 'May',
            id: 5
        });

        this.months.push({
            name: 'Jun',
            id: 6
        });

        this.months.push({
            name: 'Jul',
            id: 7
        });

        this.months.push({
            name: 'Aug',
            id: 8
        });

        this.months.push({
            name: 'Sep',
            id: 9
        });

        this.months.push({
            name: 'Oct',
            id: 10
        });

        this.months.push({
            name: 'Nov',
            id: 11
        });

        this.months.push({
            name: 'Dec',
            id: 12
        });

        this.bMonth = this.months[0];

        this.years.push({
            name: 'Year',
            id: -1
        });

        for (let i = 2017; i > 1905; i--) {
            this.years.push({
                name: i,
                id: i
            });
        }
        this.bYear = this.years[0];
    }
}
