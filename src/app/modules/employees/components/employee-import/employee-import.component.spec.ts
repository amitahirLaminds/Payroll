import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeImportComponent } from './employee-import.component';

describe('EmployeeImportComponent', () => {
  let component: EmployeeImportComponent;
  let fixture: ComponentFixture<EmployeeImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeImportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
