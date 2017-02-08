import {Component} from '../../component.decorator';

@Component({
    bindings: {
        'src': '<'
    },
    templateUrl: require('./avatar.component.html')
})
export default class AvatarComponent {
    src: string;
}
