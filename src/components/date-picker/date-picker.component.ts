import {isString, IDirective, IAugmentedJQuery, IAttributes, INgModelController, IScope} from 'angular';
let templateUrl = require('components/date-picker/date-picker.component.html');


class DatePickerController {
    currentWeeks: Date[][];
    currentYear: number;
    monthMode: boolean = true;
    selectDate: (date: Date) => void;
    selectedDate: Date;
    startDate: Date;
    today: Date;
    visibleDate: Date;

    $onInit() {
        this.visibleDate = isString(this.startDate) ? new Date(this.startDate) : new Date();
        this.currentYear = this.visibleDate.getFullYear();
        this.currentWeeks = this.getMonth(this.visibleDate);
        this.today = new Date();
    }

    getClass(date: Date): any {
        return {
            'ias-soften': date.getMonth() !== this.visibleDate.getMonth(),
            'ias-today': this.isToday(date),
            'ias-selected': this.isSelected(date)
        };
    }

    getMonth(date: Date): Date[][] {
        const firstOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        const lastOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

        let current = new Date(firstOfMonth);
        current.setDate(firstOfMonth.getDate() - firstOfMonth.getDay());

        let weeks = [];
        let week = [];
        while (current <= lastOfMonth || week.length > 0) {
            // Add current date to week
            week.push(current);

            // When the week is complete
            if (current.getDay() === 6) {
                // add it to the weeks collection
                weeks.push(week);
                // and start a new week
                week = [];
            }

            // Advance current date
            current = new Date(current);
            current.setDate(current.getDate() + 1);
        }

        return weeks;
    }

    /**
     * Enter month mode using the current year and specified month index (0-11)
     *
     * @param monthIndex An integer 0-11 representing the target month
     */
    goToMonth(monthIndex: number) {
        this.visibleDate = new Date(this.currentYear, monthIndex, 1);
        this.currentWeeks = this.getMonth(this.visibleDate);
        this.monthMode = true;
    }

    isSameDay(date1: Date, date2: Date) {
        return date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate();
    }

    isSelected(date: Date) {
        if (!this.selectedDate) {
            return false;
        }

        return this.isSameDay(date, this.selectedDate);
    }

    isToday(date: Date) {
        return this.isSameDay(date, this.today);
    }

    next() {
        if (this.monthMode) {
            this.visibleDate.setMonth(this.visibleDate.getMonth() + 1);
            this.currentYear = this.visibleDate.getFullYear();
            this.currentWeeks = this.getMonth(this.visibleDate);
        }
        else {
            this.currentYear++;
        }
    }

    prev() {
        if (this.monthMode) {
            this.visibleDate.setMonth(this.visibleDate.getMonth() - 1);
            this.currentYear = this.visibleDate.getFullYear();
            this.currentWeeks = this.getMonth(this.visibleDate);
        }
        else {
            this.currentYear--;
        }
    }

    showSelectedDate() {
        this.visibleDate = this.selectedDate;
        this.currentYear = this.selectedDate.getFullYear();
        this.currentWeeks = this.getMonth(this.visibleDate);

        this.monthMode = true;
    }

    /**
     * Month mode shows the days of a specific month. The other mode is year mode. It shows the months of a specific
     * year.
     */
    toggleMonthMode() {
        this.monthMode = !this.monthMode;
    }
}

interface IDatePickerScope extends IScope {
    $ctrl: DatePickerController;
}

export default function DatePickerDirective(): IDirective {
    return {
        bindToController: true,
        controller: DatePickerController,
        controllerAs: '$ctrl',
        link: function(scope: IDatePickerScope, element: IAugmentedJQuery, attributes: IAttributes,
                       ngModelController: INgModelController) {
            ngModelController.$render = function() {
                const date = Date.parse(ngModelController.$viewValue);

                if (isNaN(date)) {
                    scope.$ctrl.selectedDate = null;
                }
                else {
                    scope.$ctrl.selectedDate = new Date(date);
                    scope.$ctrl.showSelectedDate();
                }
            };

            scope.$ctrl.selectDate = function(date: Date): void
            {
                scope.$ctrl.selectedDate = date;
                ngModelController.$setDirty();
                ngModelController.$setTouched();
                ngModelController.$setViewValue(date);
            };
        },
        replace: true,
        require: 'ngModel',
        restrict: 'E',
        templateUrl: templateUrl
    };
}
