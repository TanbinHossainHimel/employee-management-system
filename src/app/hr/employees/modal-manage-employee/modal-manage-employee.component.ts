import {Component, inject} from '@angular/core';
import {NZ_MODAL_DATA} from "ng-zorro-antd/modal";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzDatePickerComponent} from "ng-zorro-antd/date-picker";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {NzCheckboxComponent} from "ng-zorro-antd/checkbox";
import {NzFormControlComponent} from "ng-zorro-antd/form";

@Component({
  selector: 'app-modal-manage-employee',
  standalone: true,
  imports: [
    NzInputDirective,
    ReactiveFormsModule,
    NzDatePickerComponent,
    NzSelectComponent,
    NzOptionComponent,
    NzCheckboxComponent,
    NzFormControlComponent
  ],
  templateUrl: './modal-manage-employee.component.html',
  styleUrl: './modal-manage-employee.component.scss'
})
export class ModalManageEmployeeComponent {
  formManageEmployee: FormGroup = inject(NZ_MODAL_DATA);
}
