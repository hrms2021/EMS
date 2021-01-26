import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLeaveMgmtComponent } from './employee-leave-mgmt.component';

describe('EmployeeLeaveMgmtComponent', () => {
  let component: EmployeeLeaveMgmtComponent;
  let fixture: ComponentFixture<EmployeeLeaveMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeLeaveMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLeaveMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
