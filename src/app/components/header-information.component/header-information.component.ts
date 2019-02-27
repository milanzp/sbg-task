import {Component, Input} from "@angular/core";
import {User} from "../../models";

@Component({
    selector: 'app-header-information',
    templateUrl: 'header-information.component.html',
    styleUrls: ['header-information.component.css']
})
export class HeaderInformationComponent {
    @Input() user: User;
}
