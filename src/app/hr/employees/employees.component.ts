import {Component} from '@angular/core';
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzInputDirective, NzInputGroupComponent, NzInputGroupWhitSuffixOrPrefixDirective} from "ng-zorro-antd/input";
import {EmployeeCardComponent} from "./employee-card/employee-card.component";
import {Employee} from "../../interfaces/employee";
import {NzEmptyComponent} from "ng-zorro-antd/empty";
import {HeaderTitleService} from "../../services/header-title/header-title.service";
import {NzModalService} from "ng-zorro-antd/modal";
import {ModalManageEmployeeComponent} from "./modal-manage-employee/modal-manage-employee.component";

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [
    NzButtonComponent,
    NzIconDirective,
    NzInputGroupWhitSuffixOrPrefixDirective,
    NzInputDirective,
    NzInputGroupComponent,
    EmployeeCardComponent,
    NzEmptyComponent
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {
  formManageEmployee: FormGroup = this.formBuilder.group({
    employeeId: ['', Validators.required],
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    joiningDate: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    department: ['', Validators.required],
    team: ['', Validators.required]
  });

  formFileUpload: FormGroup<any> = this.formBuilder.group({
    file: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private headerTitleService: HeaderTitleService,
              private modal: NzModalService) {
    this.headerTitleService.setHeaderTitle('Employees');
    this.formFileUpload.valueChanges.subscribe(value => console.log(value));
    this.formManageEmployee.valueChanges.subscribe(value => console.log(value));
  }

  onChangeFileUpload($event: any) {
    console.log($event.target.files[0]);
    this.formFileUpload.get('file')?.patchValue($event.target.files[0]);

    $event.target.value = null;
  }

  get file() {
    return this.formFileUpload.get('file')?.value;
  }

  onClickDelete() {
    this.formFileUpload.get('file')?.patchValue('');
    this.formFileUpload.get('file')?.markAsDirty();
  }

  employees: Employee[] =
    [
      {
        id: 0,
        name: 'Md Tanbin Hossain Himel',
        employee_id: 'TLM0329',
        phone_number: '01534334914',
        department: 'Tech',
        designation: 'Junior Software Engineer'
      },
      {
        id: 0,
        name: 'Md Tanbin Hossain Himel',
        employee_id: 'TLM0329',
        phone_number: '01534334914',
        department: 'Tech',
        designation: 'Junior Software Engineer'
      },
      {
        id: 0,
        name: 'Md Tanbin Hossain Himel',
        employee_id: 'TLM0329',
        phone_number: '01534334914',
        department: 'Tech',
        designation: 'Junior Software Engineer'
      },
    ]

  onClickAddEmployee() {
    const modal = this.modal.create({
      nzTitle: 'Add Employee',
      nzContent: ModalManageEmployeeComponent,
      nzOkText: 'Add',
      nzOnOk: () => console.log('okay'),
      nzOkDisabled: this.formManageEmployee.invalid,
      nzData: this.formManageEmployee
      // nzOkLoading: true
    });
    // modal.
  }
}
