import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { ActionsButtonsComponent } from './actions-buttons/actions-buttons.component';
import { AgGridModule } from 'ag-grid-angular';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpLoaderComponent } from '../_metronic/common/http-loader/http-loader.component';
import { AgSelectComponent } from './ag-select/ag-select.component';
import { NgxCurrencyDirective } from 'ngx-currency';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPrintModule } from 'ngx-print';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgSelectModule,
    AgGridModule,
    NgbModule,
    AgSelectComponent,
    NgxCurrencyDirective,
    NgbDropdownModule,
    NgxPrintModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgSelectModule,
    AgGridModule,
    ActionsButtonsComponent,
    HttpLoaderComponent,
    NgbModule,
    AgSelectComponent,
    NgxCurrencyDirective,
  ],
  declarations: [
    ActionsButtonsComponent,
    HttpLoaderComponent,
  ],
  providers: [NgbActiveModal]
})
export class SharedModule {}
