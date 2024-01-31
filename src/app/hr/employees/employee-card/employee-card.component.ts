import {Component, Input} from '@angular/core';
import {NzCardComponent} from "ng-zorro-antd/card";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzRibbonComponent} from "ng-zorro-antd/badge";
import {Employee} from "../../../interfaces/employee";

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [
    NzCardComponent,
    NzIconDirective,
    NzRibbonComponent
  ],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.scss'
})
export class EmployeeCardComponent {
  @Input() employee: Employee = {} as Employee;
}
