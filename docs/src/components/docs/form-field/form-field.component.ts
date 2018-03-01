import { Component } from '../../../component.decorator';
import {IQService} from 'angular';

const STATES = [
    {name: 'Alabama', code: 'AL'},
    {name: 'Alaska', code: 'AK'},
    {name: 'Arizona', code: 'AZ'},
    {name: 'Arkansas', code: 'AR'},
    {name: 'California', code: 'CA'},
    {name: 'Colorado', code: 'CO'},
    {name: 'Connecticut', code: 'CT'},
    {name: 'Delaware', code: 'DE'},
    {name: 'District of Columbia', code: 'DC'},
    {name: 'Florida', code: 'FL'},
    {name: 'Georgia', code: 'GA'},
    {name: 'Hawaii', code: 'HI'},
    {name: 'Idaho', code: 'ID'},
    {name: 'Illinois', code: 'IL'},
    {name: 'Indiana', code: 'IN'},
    {name: 'Iowa', code: 'IA'},
    {name: 'Kansas', code: 'KS'},
    {name: 'Kentucky', code: 'KY'},
    {name: 'Louisiana', code: 'LA'},
    {name: 'Maine', code: 'ME'},
    {name: 'Maryland', code: 'MD'},
    {name: 'Massachusetts', code: 'MA'},
    {name: 'Michigan', code: 'MI'},
    {name: 'Minnesota', code: 'MN'},
    {name: 'Mississippi', code: 'MS'},
    {name: 'Missouri', code: 'MO'},
    {name: 'Montana', code: 'MT'},
    {name: 'Nebraska', code: 'NE'},
    {name: 'Nevada', code: 'NV'},
    {name: 'New Hampshire', code: 'NH'},
    {name: 'New Jersey', code: 'NJ'},
    {name: 'New Mexico', code: 'NM'},
    {name: 'New York', code: 'NY'},
    {name: 'North Carolina', code: 'NC'},
    {name: 'North Dakota', code: 'ND'},
    {name: 'Ohio', code: 'OH'},
    {name: 'Oklahoma', code: 'OK'},
    {name: 'Oregon', code: 'OR'},
    {name: 'Pennsylvania', code: 'PA'},
    {name: 'Rhode Island', code: 'RI'},
    {name: 'South Carolina', code: 'SC'},
    {name: 'South Dakota', code: 'SD'},
    {name: 'Tennessee', code: 'TN'},
    {name: 'Texas', code: 'TX'},
    {name: 'Utah', code: 'UT'},
    {name: 'Vermont', code: 'VT'},
    {name: 'Virginia', code: 'VA'},
    {name: 'Washington', code: 'WA'},
    {name: 'West Virginia', code: 'WV'},
    {name: 'Wisconsin', code: 'WI'},
    {name: 'Wyoming', code: 'WY'}
];

@Component({
    templateUrl: require('./form-field.component.html')
})
export default class FormFieldComponent {
    asyncSearchText: string;
    searchText: string;

    static $inject = ['$q'];
    constructor(private $q: IQService) {}

    search(query: string): string[] {
        return STATES
            .map((state) => state.name)
            .filter((state) => state.match(new RegExp(query, 'i')))
            .slice(0, 10);
    }

    searchAsync(query: string): Promise<any[]> {
        return this.$q.resolve(STATES
            .filter((state) => state.name.match(new RegExp(query, 'i')))
            .slice(0, 10));
    }

    onAutocompleteItemSelected($item): void {
        this.searchText = $item;
    }

    onAsyncAutocompleteItemSelected($item): void {
        this.asyncSearchText = $item.name;
    }
}
