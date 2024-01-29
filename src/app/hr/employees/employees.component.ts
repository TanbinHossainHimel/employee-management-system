import {Component} from '@angular/core';
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzTagComponent} from "ng-zorro-antd/tag";

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [
    NzButtonComponent,
    NzIconDirective,
    NzTagComponent
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {

  formFileUpload: FormGroup<any> = this.formBuilder.group({
    file: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder) {
    this.formFileUpload.valueChanges.subscribe(value => console.log(value));
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
}
