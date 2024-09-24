import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { EmployeeImportComponent } from './components/employee-import/employee-import.component';
import { EmployeeAppraisalComponent } from './components/employee-appraisal/employee-appraisal.component';
import { SalaryCalculatorComponent } from './components/salary-calculator/salary-calculator.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
    children: [
        {
            path: 'import-employee',
            component: EmployeeImportComponent,
          },
          {
            path: 'employee-appraisal',
            component: EmployeeAppraisalComponent,
          },
          {
            path: 'employee-salary',
            component: SalaryCalculatorComponent,
          },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
