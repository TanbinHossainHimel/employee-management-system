import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalManageEmployeeComponent } from './modal-manage-employee.component';

describe('ModalManageEmployeeComponent', () => {
  let component: ModalManageEmployeeComponent;
  let fixture: ComponentFixture<ModalManageEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalManageEmployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalManageEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
