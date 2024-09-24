import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { EmployeeImportComponent } from './components/employee-import/employee-import.component';
import { EmployeeAppraisalComponent } from './components/employee-appraisal/employee-appraisal.component';
import { SalaryCalculatorComponent } from './components/salary-calculator/salary-calculator.component';
import { EmployeesRoutingModule } from './employees.routing.module';
import { KeeniconComponent } from 'src/app/_metronic/shared/keenicon/keenicon.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgGridAngular } from 'ag-grid-angular';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeAppraisalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,    
    EmployeesRoutingModule,
    SharedModule,
    AgGridAngular
  ]
})
export class EmployeesModule { }
