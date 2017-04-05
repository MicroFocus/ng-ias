import { Component } from '../../../component.decorator';

@Component({
    templateUrl: require('./input.component.html')
})
export default class InputComponent {
    private selectListOptions = [];
    private selectListModel1: Object;
    private selectListModel2: Object;

    constructor() {
        this.selectListOptions.push({
            name: 'Option One',
            id: 'opt1'
        });

        this.selectListOptions.push({
            name: 'Option Two',
            id: 'opt2'
        });

        this.selectListOptions.push({
            name: 'Option Three',
            id: 'opt3'
        });

        this.selectListOptions.push({
            name: 'Option Four',
            id: 'opt4'
        });

        this.selectListModel1 = this.selectListOptions[0];
        this.selectListModel2 = this.selectListOptions[0];
    }
}
