import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAuthWrapperComponent } from './google-auth-wrapper.component';

describe('GoogleAuthWrapperComponent', () => {
  let component: GoogleAuthWrapperComponent;
  let fixture: ComponentFixture<GoogleAuthWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleAuthWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoogleAuthWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
