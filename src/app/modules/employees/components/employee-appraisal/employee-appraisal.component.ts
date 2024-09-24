import { Component, computed, inject, signal } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColDef, GridApi, GridReadyEvent, SelectionChangedEvent } from 'ag-grid-enterprise';
import { ERecordState } from 'src/app/core/constants';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { SharedModule } from "../../../../shared/shared.module";

interface Login {
  success: boolean;
  token: string;
  message: string;
  statusCode: number;
  userId: number;
  email: string;
  fullName: any;
  isSuperAdmin: any;
  roleName: string;
  firstName: any;
  lastName: any;
  userName: string;
  deviceId: any;
  tokenExpiryDate: string;
  companyId: number;
}

interface Response<T> {
  message: string;
  statusCode: number;
  status: boolean;
  data: T[];
}

interface Ledger {
  ledgerID: number;
  ledgerName: string;
  termLoanAmount: number;
  ledgerGroupName: string;
  address: string;
  cityName: string;
  countryName: string;
  phoneNo: string;
  mobileNo: string;
  postCode: string;
  emailID: string;
  place: any;
  pinno: string;
  inventoryApplicable: boolean;
  costCenterApplicable: boolean;
  fixedAssetApplicable: boolean;
  billByBillApplicable: boolean;
  currencyName: string;
  obAmountBaseCurrency: any;
  obExchangeRate: any;
  obAmountForeignCurrency: any;
  isVATApplicable: boolean;
  isVATWithHoldApplicable: boolean;
  hsCode: any;
  crdr: number;
  isBudgetApplicable: boolean;
  budgetAmount: any;
  isCarryForwardReserves: boolean;
  gstin: any;
  stateCode: string;
  indiaStateCode: any;
  recordState: number;
  fileExist: any;
  createdDateTime: string;
  createdUserID: number;
  createdUserName: any;
  editedDateTime: string;
  editedUserID: number;
  editedUserName: string;
}

interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

type ITable = Partial<Ledger>;
@Component({
  selector: 'app-employee-appraisal',
  templateUrl: './employee-appraisal.component.html',
})
export class EmployeeAppraisalComponent {
// [x: string]: any;
  
  // modalService = inject(NgbModal);
  // httpClient = inject(HttpClient);

  // gridApi!: GridApi<ITable>;
  // defaultColDef?: ColDef;
  // columnDefs?: ColDef<ITable>[];

  // selectedRows = signal<ITable[]>([]);
  // selectedRow = computed(() => this.selectedRows()[0]);
  // selectedCount = computed(() => this.selectedRows().length);

  // showFilter = computed(() => this.selectedCount() > 0);
  // canActivate = computed(() => this.selectedRows().every((x) => x.recordState === ERecordState.Active));
  // canAuthorize = computed(() => this.selectedRows().every((x) => x.recordState === ERecordState.Checked));

  // loading = signal(false);
  // rowData = toSignal(
  //   this.httpClient
  //     .post<Login>('http://103.195.246.246:4619/api/authenticate', {
  //       UserName: 'Super Admin',
  //       Password: 'IMAdmin',
  //     })
  //     .pipe(
  //       mergeMap((x) =>
  //         this.httpClient.get<Response<Ledger>>('http://103.195.246.246:4619/api/getallledgers/55', {
  //           headers: {
  //             Authorization: `Bearer ${x.token}`,
  //           },
  //         }),
  //       ),
  //       map((x) => x.data),
  //     ),
  // );
  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }
  ];

  // defaultGridRow: ITable = {};

  // onGridReady(e: GridReadyEvent<ITable>) {
  //   this.gridApi = e.api;

  //   this.defaultColDef = {
  //     filter: true,
  //     // floatingFilter: true,
  //     suppressFloatingFilterButton: true,
  //     suppressAutoSize: true,
  //     suppressHeaderMenuButton: true,
  //     width: 140,
  //     minWidth: 140,
  //   };

  //   this.columnDefs = [
  //     {
  //       field: 'ledgerName',
  //       headerName: 'Ledger Name',
  //       flex: 1,
  //     },
  //     {
  //       field: 'ledgerGroupName',
  //       headerName: 'Group',
  //     },
  //     {
  //       field: 'recordState',
  //       headerName: 'Status',
  //     },
  //     {
  //       field: 'currencyName',
  //       headerName: 'Currency',
  //     },
  //     {
  //       field: 'pinno',
  //       headerName: 'PIN NO',
  //     },
  //     {
  //       field: 'hsCode',
  //       headerName: 'HS Code',
  //     },
  //     {
  //       field: 'budgetAmount',
  //       headerName: 'Amount Type',
  //     },
  //   ];

  //   // add rows
  //   this.gridApi.applyTransactionAsync({
  //     add: [this.defaultGridRow],
  //   });
  // // }

  // onSelectionChanged(e: SelectionChangedEvent<ITable>) {
  //   this.selectedRows.set(this.gridApi?.getSelectedRows());
  // }

  // onCreate() {
  //   const ref = this.modalService.open(SaveLedgerComponent, {
  //     windowClass: 'modal-wide',
  //   });
  // }

}
