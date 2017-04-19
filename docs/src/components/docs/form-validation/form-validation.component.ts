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

    private days: Array<Object> = [];
    private months: Array<Object> = [];
    private years: Array<Object> = [];
    private birthday: Date;

    private bDay: Object;
    private bMonth: Object;
    private bYear: Object;

    private regForm: Object;

    constructor() {
        this.populateDates();
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
        let form = this.regForm;
        let username = this.username;
        this.regForm['username'].$setValidity('inProgress', true);

        setTimeout(function() {
            form['username'].$setValidity('inProgress', false);
            if (username &&
                username !== 'bob') {
                form['username'].$setValidity('valid', true);
            } else {
                form['username'].$setValidity('valid', false);
            }
        }, 5000);
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
        if (this.password.match(/\d+/g) !== null) {
            this.regForm['password'].$setValidity('valid', true);
        } else {
            this.regForm['password'].$setValidity('valid', false);
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
