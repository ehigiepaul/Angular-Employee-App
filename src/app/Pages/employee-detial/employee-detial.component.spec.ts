import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetialComponent } from './employee-detial.component';

describe('EmployeeDetialComponent', () => {
  let component: EmployeeDetialComponent;
  let fixture: ComponentFixture<EmployeeDetialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDetialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
